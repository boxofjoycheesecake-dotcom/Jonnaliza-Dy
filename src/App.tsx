import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { motion, AnimatePresence } from 'motion/react';
import { Printer, Download, FileImage, FileType, FileText, ChevronUp } from 'lucide-react';
import { toPng, toJpeg } from 'html-to-image';
import React, { useState, useRef } from 'react';

export default function App() {
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
    setIsExportMenuOpen(false);
  };

  const exportAsImage = async (format: 'png' | 'jpeg') => {
    const element = containerRef.current;
    if (!element) return;
    
    setIsExporting(true);
    setIsExportMenuOpen(false);
    
    try {
      // Delay to ensure any dynamic content is settled
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const filter = (node: HTMLElement) => {
        return !node.classList?.contains('print:hidden');
      };

      const width = element.offsetWidth;
      const height = element.scrollHeight;

      const options = {
        backgroundColor: '#f8f5f2',
        filter: filter,
        pixelRatio: 2, 
        width: width,
        height: height,
        style: {
          margin: '0',
          padding: '0',
          left: '0',
          top: '0',
          width: `${width}px`,
          height: `${height}px`,
          transform: 'none'
        }
      };

      let dataUrl;
      const isPng = format === 'png';
      
      if (isPng) {
        dataUrl = await toPng(element, options);
      } else {
        dataUrl = await toJpeg(element, { ...options, quality: 0.95 });
      }

      const link = document.createElement('a');
      link.download = `Jonnaliza_Dy_Resume.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Export failed', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream selection:bg-gold/30">
      {/* Floating Export Menu - Hidden on print */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden flex flex-col items-end gap-3">
        <AnimatePresence>
          {isExportMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-navy p-2 rounded-2xl shadow-2xl flex flex-col gap-1 border border-gold/20"
            >
              <ExportButton 
                icon={<FileImage size={18} />} 
                label="Save as PNG" 
                onClick={() => exportAsImage('png')} 
              />
              <ExportButton 
                icon={<FileType size={18} />} 
                label="Save as JPEG" 
                onClick={() => exportAsImage('jpeg')} 
              />
              <ExportButton 
                icon={<FileText size={18} />} 
                label="Download US Legal PDF" 
                onClick={handlePrint} 
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsExportMenuOpen(!isExportMenuOpen)}
          disabled={isExporting}
          className={`flex items-center gap-2 bg-navy text-gold px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-gold/30 ${isExporting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isExporting ? (
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
             >
               <Download size={20} />
             </motion.div>
          ) : (
            <>
              <Download size={20} />
              <span className="font-bold uppercase text-[10px] tracking-widest hidden md:inline">Export Resume</span>
              <motion.div
                animate={{ rotate: isExportMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronUp size={16} />
              </motion.div>
            </>
          )}
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto shadow-2xl print:shadow-none print:max-w-none print:w-full relative">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="bg-cream w-full"
        >
          <Header />
          
          <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <MainContent />
          </div>
        </motion.div>
      </div>

      {/* Page numbers and footer for print */}
      <footer className="hidden print:block text-center py-8 text-[10px] text-warm-gray border-t border-gold/10 bg-cream">
        <p>Jonnaliza R. Dy • Portfolio • Page 1</p>
      </footer>
    </div>
  );
}

const ExportButton = ({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 rounded-xl transition-all duration-200 text-left w-full group"
  >
    <span className="text-gold group-hover:scale-110 transition-transform">{icon}</span>
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);
