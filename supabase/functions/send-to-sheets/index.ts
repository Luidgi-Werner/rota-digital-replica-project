import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbz-g30slkZ_gGH3uOMDD7eBhNuniMIsGEIhwKkIy53Aev7sKC94QDvDSKuUhDSLtMt_fA/exec";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  specialty?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const leadData: LeadData = await req.json();

    console.log('Enviando lead para Google Sheets:', leadData);

    // Enviar dados para o webhook do Google Sheets
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    const result = await response.json();
    console.log('Resposta do Google Sheets:', result);

    if (!result.success) {
      throw new Error(result.error || 'Erro ao adicionar lead na planilha');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Lead adicionado na planilha com sucesso!' 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Erro ao enviar lead para Google Sheets:', error);
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
