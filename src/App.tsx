import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { motion } from 'motion/react';
import React, { useRef } from 'react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-cream selection:bg-gold/30">
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

