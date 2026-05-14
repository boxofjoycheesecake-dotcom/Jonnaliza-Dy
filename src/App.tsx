import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { motion, AnimatePresence } from 'motion/react';
import { Printer, Download, FileText, ChevronUp, FileImage } from 'lucide-react';
import { toJpeg } from 'html-to-image';
import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';

export default function App() {
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
    setIsExportMenuOpen(false);
  };

  const exportAsPdf = async () => {
    const element = containerRef.current;
    if (!element) return;
    
    setIsExporting(true);
    setIsExportMenuOpen(false);
    
    try {
      // Small delay to ensure UI is stable
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const filter = (node: HTMLElement) => {
        return !node.classList?.contains('print:hidden');
      };

      const originalWidth = element.offsetWidth;
      const elementHeight = element.scrollHeight;

      // Use toJpeg with 0.8 quality and scale down slightly for size optimization
      // 2MB is quite generous for a single page resume, but jspdf + image can bloat if not careful.
      const dataUrl = await toJpeg(element, {
        backgroundColor: '#f8f5f2',
        filter: filter,
        quality: 0.8,
        pixelRatio: 1.5, // Reduced from 3 to save space while keeping it sharp
        width: originalWidth,
        height: elementHeight,
      });

      const pdfWidth = 595.28; // A4 width in points
      const imgProps = new jsPDF().getImageProperties(dataUrl);
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'pt',
        format: [pdfWidth, pdfHeight]
      });

      // Use JPEG compression in the PDF itself
      pdf.addImage(dataUrl, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'MEDIUM');
      pdf.save('Jonnaliza_Dy_Resume.pdf');
    } catch (error) {
      console.error('Export failed', error);
      alert('There was an issue saving your resume. You can also use "Print" -> "Save as PDF" for a smaller file.');
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
              className="bg-navy p-2 rounded-2xl shadow-2xl flex flex-col gap-1 border border-gold/20 mb-2"
            >
              <ExportButton 
                icon={<FileText size={18} />} 
                label="Download Compact PDF (<2MB)" 
                onClick={exportAsPdf} 
              />
              <ExportButton 
                icon={<Printer size={18} />} 
                label="Print / Save via Browser" 
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
              <span className="font-bold uppercase text-[10px] tracking-widest hidden md:inline">Save Resume</span>
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
          className={`bg-cream w-full ${isExporting ? 'exporting-capture' : ''}`}
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
    className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 rounded-xl transition-all duration-200 text-left w-full group min-w-[220px]"
  >
    <span className="text-gold group-hover:scale-110 transition-transform">{icon}</span>
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);

