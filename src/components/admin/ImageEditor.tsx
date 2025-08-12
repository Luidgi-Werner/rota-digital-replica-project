import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Upload, Image as ImageIcon, Check, X, Edit3 } from 'lucide-react';
import { toast } from 'sonner';

interface ImageEditorProps {
  currentImage: string;
  onImageChange: (newImageUrl: string) => void;
  productName: string;
}

const ImageEditor: React.FC<ImageEditorProps> = ({ currentImage, onImageChange, productName }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Por favor, selecione apenas arquivos de imagem');
      return;
    }

    setUploading(true);
    try {
      // Create a URL for the uploaded file (in a real implementation, you'd upload to a server)
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewUrl(result);
        toast.success('Imagem carregada com sucesso!');
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error('Erro ao carregar a imagem');
    } finally {
      setUploading(false);
    }
  };

  const handleUrlSubmit = () => {
    if (!urlInput.trim()) {
      toast.error('Por favor, insira uma URL válida');
      return;
    }
    
    // Basic URL validation
    try {
      new URL(urlInput);
      setPreviewUrl(urlInput);
      toast.success('URL da imagem adicionada!');
    } catch {
      toast.error('URL inválida. Por favor, insira uma URL válida');
    }
  };

  const handleConfirmChange = () => {
    if (previewUrl) {
      onImageChange(previewUrl);
      setIsDialogOpen(false);
      setPreviewUrl('');
      setUrlInput('');
      toast.success(`Imagem do produto ${productName} atualizada!`);
    }
  };

  const handleCancel = () => {
    setPreviewUrl('');
    setUrlInput('');
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm hover:bg-white border-gray-200 shadow-sm"
        >
          <Edit3 className="w-4 h-4 mr-1" />
          Alterar Foto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5" />
            Alterar Imagem - {productName}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Current Image Preview */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Imagem Atual
            </Label>
            <div className="w-full h-32 border border-gray-200 rounded-lg overflow-hidden">
              <img 
                src={currentImage} 
                alt="Imagem atual" 
                className="w-full h-full object-contain bg-gray-50"
              />
            </div>
          </div>

          {/* Upload File */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Fazer Upload de Nova Imagem
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileUpload(file);
                }}
                className="hidden"
              />
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-full"
              >
                <Upload className="w-4 h-4 mr-2" />
                {uploading ? 'Carregando...' : 'Selecionar Arquivo'}
              </Button>
              <p className="text-xs text-gray-500 mt-2">
                PNG, JPG, JPEG até 10MB
              </p>
            </div>
          </div>

          {/* URL Input */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Ou Inserir URL da Imagem
            </Label>
            <div className="flex gap-2">
              <Input
                placeholder="https://exemplo.com/imagem.jpg"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleUrlSubmit} variant="outline">
                Adicionar
              </Button>
            </div>
          </div>

          {/* Preview New Image */}
          {previewUrl && (
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Nova Imagem (Preview)
              </Label>
              <div className="w-full h-32 border border-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={previewUrl} 
                  alt="Preview da nova imagem" 
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button 
              onClick={handleConfirmChange} 
              disabled={!previewUrl}
              className="flex-1 bg-[#003250] hover:bg-[#003250]/90"
            >
              <Check className="w-4 h-4 mr-2" />
              Confirmar Alteração
            </Button>
            <Button 
              onClick={handleCancel} 
              variant="outline" 
              className="flex-1"
            >
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageEditor;