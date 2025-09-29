import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ImageZoomDialogProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export const ImageZoomDialog = ({ src, alt, children }: ImageZoomDialogProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + (isMobile ? 0.3 : 0.5), isMobile ? 2.5 : 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - (isMobile ? 0.3 : 0.5), 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoom > 1 && e.touches.length === 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] md:max-w-[90vw] max-h-[95vh] md:max-h-[90vh] p-0 bg-black/95 border-none">
        <div className="relative h-[95vh] md:h-[90vh] flex flex-col">
          {/* Controls */}
          <div className="absolute top-2 md:top-4 right-2 md:right-4 z-10 flex gap-1 md:gap-2">
            <Button
              variant="secondary"
              size={isMobile ? "sm" : "sm"}
              onClick={handleZoomIn}
              className="bg-white/90 hover:bg-white text-black h-8 w-8 md:h-10 md:w-10 p-0"
            >
              <ZoomIn className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              variant="secondary"
              size={isMobile ? "sm" : "sm"}
              onClick={handleZoomOut}
              className="bg-white/90 hover:bg-white text-black h-8 w-8 md:h-10 md:w-10 p-0"
            >
              <ZoomOut className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              variant="secondary"
              size={isMobile ? "sm" : "sm"}
              onClick={handleReset}
              className="bg-white/90 hover:bg-white text-black h-8 w-8 md:h-10 md:w-10 p-0"
            >
              <RotateCcw className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>

          {/* Image Container */}
          <div 
            className="flex-1 overflow-hidden flex items-center justify-center cursor-move touch-pan-x touch-pan-y"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <motion.img
              src={src}
              alt={alt}
              className="max-w-none max-h-none object-contain select-none"
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                maxWidth: isMobile ? '100vw' : 'none',
                maxHeight: isMobile ? '100vh' : 'none',
              }}
              animate={{
                scale: zoom,
                x: position.x / zoom,
                y: position.y / zoom,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              draggable={false}
            />
          </div>

          {/* Zoom Level Indicator */}
          <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-white/90 text-black px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
            {Math.round(zoom * 100)}%
          </div>

          {/* Mobile instructions */}
          {isMobile && zoom === 1 && (
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white/90 text-black px-3 py-2 rounded-full text-xs font-medium text-center">
              Use os botões + e - para ampliar
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};