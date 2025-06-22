'use client';

import { useRef, useEffect, useState } from 'react';

// MermaidDiagram bileşen tipleri
type MermaidDiagramProps = {
  definition: string;
  className?: string;
};

export default function MermaidDiagram({ definition, className = '' }: MermaidDiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);
  // Mermaid yüklendi mi kontrolü için state
  const [mermaidLoaded, setMermaidLoaded] = useState(false);
  // Diyagram render durumu
  const [isRendering, setIsRendering] = useState(true);
  // Hata durumu
  const [renderError, setRenderError] = useState<string | null>(null);
  // Her render için benzersiz bir ID oluştur
  const diagramId = useRef(`mermaid-diagram-${Math.random().toString(36).substring(2, 11)}`).current;
  
  // İlk yükleme için mermaid modülünü import et
  useEffect(() => {
    let isMounted = true;
    
    if (typeof window !== 'undefined' && !mermaidLoaded) {
      // Mermaid'i dinamik olarak import et
      import('mermaid')
        .then((mermaidModule) => {
          if (!isMounted) return;
          
          const mermaid = mermaidModule.default;
          
          // Mermaid konfigürasyonunu yap
          mermaid.initialize({
            startOnLoad: false, // Otomatik render etmeyi kapat, kendimiz kontrol edeceğiz
            theme: 'dark',
            securityLevel: 'loose',
            themeVariables: {
              primaryColor: '#6236ff',
              primaryTextColor: '#ffffff',
              primaryBorderColor: '#8b67ff',
              lineColor: '#6236ff',
              secondaryColor: '#39ff14',
              tertiaryColor: '#0a0f1c'
            },
            flowchart: {
              htmlLabels: true,
              curve: 'basis'
            },
            fontFamily: 'Space Grotesk, sans-serif'
          });
          
          setMermaidLoaded(true);
        })
        .catch((error) => {
          if (!isMounted) return;
          console.error('Mermaid modülü yüklenirken hata oluştu:', error);
          setRenderError('Mermaid modülü yüklenirken hata oluştu.');
          setIsRendering(false);
        });
    }
    
    return () => {
      isMounted = false;
    };
  }, [mermaidLoaded]);
  
  // Mermaid yüklendikten sonra diyagramı render et
  useEffect(() => {
    if (!mermaidLoaded || !diagramRef.current) return;
    
    let isMounted = true;
    setIsRendering(true);
    setRenderError(null);
    
    const renderDiagram = async () => {
      try {
        // Mermaid modülünü tekrar import et (bu sefer zaten cache'de olacak)
        const mermaidModule = await import('mermaid');
        const mermaid = mermaidModule.default;
        
        // Render etmeden önce içeriği temizle
        if (diagramRef.current && isMounted) {
          diagramRef.current.innerHTML = '';
          
          // Kısa bir gecikme ekleyerek render işleminin stabil olmasını sağla
          setTimeout(async () => {
            if (!diagramRef.current || !isMounted) return;
            
            try {
              // Diyagramı render et
              const { svg } = await mermaid.render(diagramId, definition);
              
              if (diagramRef.current && isMounted) {
                diagramRef.current.innerHTML = svg;
                setIsRendering(false);
              }
            } catch (innerError) {
              if (!isMounted) return;
              console.error('Diyagram render edilirken hata oluştu:', innerError);
              setRenderError(innerError instanceof Error ? innerError.message : String(innerError));
              setIsRendering(false);
            }
          }, 100);
        }
      } catch (error) {
        if (!isMounted) return;
        console.error('Diyagram render edilirken hata oluştu:', error);
        setRenderError(error instanceof Error ? error.message : String(error));
        setIsRendering(false);
      }
    };
    
    // Diyagramı render et
    renderDiagram();
    
    return () => {
      isMounted = false;
    };
  }, [definition, diagramId, mermaidLoaded]);

  return (
    <div 
      className={`mermaid-diagram overflow-auto ${className}`}
      data-testid="mermaid-diagram"
    >
      {/* Diyagram içeriği buraya gelecek */}
      <div ref={diagramRef} className="w-full min-h-[300px]">
        {/* İçerik dinamik olarak doldurulacak */}
      </div>
      
      {/* Yükleniyor göstergesi */}
      {isRendering && (
        <div className="flex justify-center items-center py-10 absolute inset-0">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-electric-blue"></div>
        </div>
      )}
      
      {/* Hata mesajı */}
      {renderError && (
        <div className="p-4 bg-obsidian-800 border border-red-500 rounded text-red-400">
          <p>Diyagram yüklenirken bir hata oluştu.</p>
          <pre className="mt-2 p-2 bg-obsidian-900 rounded">{renderError}</pre>
        </div>
      )}
    </div>
  );
}
