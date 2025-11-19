import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.74.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz-g30slkZ_gGH3uOMDD7eBhNuniMIsGEIhwKkIy53Aev7sKC94QDvDSKuUhDSLtMt_fA/exec";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Criar cliente Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('Buscando leads existentes no banco de dados...');

    // Buscar todos os leads do banco
    const { data: leads, error } = await supabase
      .from('lead_submissions')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      throw new Error(`Erro ao buscar leads: ${error.message}`);
    }

    console.log(`Encontrados ${leads?.length || 0} leads para sincronizar`);

    let successCount = 0;
    let errorCount = 0;
    const errors: string[] = [];

    // Enviar cada lead para o Google Sheets
    for (const lead of leads || []) {
      try {
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            specialty: lead.specialty || ''
          }),
        });

        const result = await response.json();
        
        if (result.success) {
          successCount++;
          console.log(`✓ Lead ${lead.name} sincronizado`);
        } else {
          errorCount++;
          errors.push(`Lead ${lead.name}: ${result.error}`);
          console.error(`✗ Erro ao sincronizar lead ${lead.name}:`, result.error);
        }
      } catch (error: any) {
        errorCount++;
        errors.push(`Lead ${lead.name}: ${error.message}`);
        console.error(`✗ Erro ao sincronizar lead ${lead.name}:`, error);
      }

      // Pequeno delay entre requisições para não sobrecarregar
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    console.log(`Sincronização concluída: ${successCount} sucessos, ${errorCount} erros`);

    return new Response(
      JSON.stringify({ 
        success: true,
        total: leads?.length || 0,
        successCount,
        errorCount,
        errors: errorCount > 0 ? errors : undefined
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Erro na sincronização:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
