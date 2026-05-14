import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Globe, MapPin, Facebook } from 'lucide-react';
import { db } from '../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

export const Header = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Listen to Firestore for global profile image
  useEffect(() => {
    let unsub = () => {};
    try {
      unsub = onSnapshot(doc(db, 'siteConfigs', 'global'), (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.profileImage) {
            setProfileImage(data.profileImage);
            console.log("Profile image synced from cloud");
          }
        } else {
          console.log("No remote profile image found, checking local storage...");
          const savedImage = localStorage.getItem('user_profile_image');
          if (savedImage) {
            setProfileImage(savedImage);
          }
        }
      }, (error) => {
        console.warn("Firestore listener error (possibly offline):", error);
        // Fallback to local storage on error
        const savedImage = localStorage.getItem('user_profile_image');
        if (savedImage) {
          setProfileImage(savedImage);
        }
      });
    } catch (error) {
      console.error("Failed to setup Firestore listener:", error);
    }

    return () => unsub();
  }, []);

  return (
    <header className="relative bg-gradient-to-br from-navy via-navy-light to-[#1e3a5f] text-white min-h-[260px] flex items-center overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -right-10 -top-10 w-64 h-64 border border-gold/20 rounded-full pointer-events-none" />
      <div className="absolute -right-2 -top-2 w-44 h-44 border border-gold/10 rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-10 py-12 md:flex items-center gap-14 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-shrink-0 mb-8 md:mb-0 relative"
        >
          <div 
            className="w-40 h-40 rounded-full border-4 border-gold p-1 bg-navy shadow-2xl relative overflow-hidden"
          >
            <img 
              src={profileImage || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"} 
              alt="Jonnaliza R. Dy"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-full object-cover object-top export-image"
            />
          </div>
        </motion.div>

        <div className="flex-grow">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight pb-2"
          >
            Jonnaliza <span className="text-gold">R. Dy</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2.5 mb-8"
          >
            <span className="bg-gold text-navy px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded-sm">Digital Marketing Strategist</span>
            <span className="border border-gold/50 text-gold px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded-sm">Workflow Automation Specialist</span>
            <span className="border border-gold/50 text-gold px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded-sm">Entrepreneur</span>
            <a 
              href="https://www.facebook.com/JoyLaneCollective/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-navy border border-gold/50 text-gold px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded-sm flex items-center gap-2 hover:bg-gold hover:text-navy transition-all duration-300 print:hidden"
            >
              <Facebook size={12} />
              JoyLaneCollective
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-x-8 gap-y-3 mt-6"
          >
            <ContactItem icon={<Phone size={14} />} text="09186496828" />
            <ContactItem icon={<Phone size={14} />} text="0288514825" />
            <ContactItem icon={<Mail size={14} />} text="jonnady9898@gmail.com" />
            <ContactItem icon={<Mail size={14} />} text="jonnalizady@velocityai.com.ph" />
            <ContactItem icon={<Globe size={14} />} text="velocityai.com.ph" />
            <ContactItem icon={<MapPin size={14} />} text="Quezon City / Bulacan, PH" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

const ContactItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center gap-2 text-white/70 text-xs font-medium hover:text-gold transition-colors duration-300">
    <span className="text-gold">{icon}</span>
    {text}
  </div>
);
