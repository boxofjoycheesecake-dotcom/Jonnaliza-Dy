import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Globe, MapPin, Facebook, Linkedin, Instagram, Music, AtSign } from 'lucide-react';
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
    <header className="relative bg-navy text-white min-h-[320px] flex items-center overflow-hidden border-b border-gold/20">
      {/* Decorative celestial background elements matching the moon/star logo vibe */}
      <div className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-[300px] h-[300px] bg-rose-gold/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute right-10 top-10 w-px h-px bg-white shadow-[0_0_15px_2px_rgba(255,255,255,0.8)] rounded-full animate-pulse" /> {/* Subtle star */}
      
      <div className="container mx-auto px-10 py-16 md:flex items-center gap-14 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-shrink-0 mb-8 md:mb-0 relative"
        >
          <div 
            className="w-44 h-44 rounded-full border-2 border-gold p-1 bg-navy shadow-[0_0_30px_rgba(197,160,89,0.2)] relative overflow-hidden"
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
          <div className="mb-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2"
            >
              Jonnaliza <span className="text-gold">R. Dy</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-serif italic text-gold-light/80 text-lg md:text-xl tracking-wide border-l-2 border-gold/30 pl-4 py-1"
            >
              Lead with purpose. Grow with meaning. Live with freedom.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2.5 mb-8"
          >
            <span className="bg-gold text-navy px-4 py-2 text-[10px] uppercase font-bold tracking-[2px] rounded-sm shadow-sm transition-all hover:bg-gold-light cursor-default">Digital Marketing Strategist</span>
            <span className="border border-gold/40 text-rose-gold px-4 py-2 text-[10px] uppercase font-bold tracking-[2px] rounded-sm hover:border-gold transition-all cursor-default bg-rose-gold/5">Workflow Automation Specialist</span>
            <span className="border border-rose-gold/40 text-rose-gold-light px-4 py-2 text-[10px] uppercase font-bold tracking-[2px] rounded-sm hover:border-rose-gold transition-all cursor-default">Entrepreneur</span>
            <a 
              href="https://www.facebook.com/JoyLaneCollective/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-navy border border-emerald/50 text-white px-4 py-2 text-[10px] uppercase font-bold tracking-[2px] rounded-sm flex items-center gap-2 hover:bg-emerald transition-all duration-300 print:hidden"
            >
              <Facebook size={12} className="text-rose-gold-light" />
              JoyLaneCollective
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-8 print:hidden"
          >
            <span className="text-[9px] uppercase font-bold tracking-widest text-white/30 border-r border-white/10 pr-3">Social Connect:</span>
            <div className="flex gap-2.5">
              <SocialIcon href="https://www.linkedin.com/in/jonnaliza-dy9898/" icon={<Linkedin size={14} />} label="LinkedIn" variant="gold" />
              <SocialIcon href="https://www.facebook.com/jody9898/" icon={<Facebook size={14} />} label="Personal FB" variant="rose" />
              <SocialIcon href="https://www.tiktok.com/@jonnaliza_dy?_r=1&_t=ZS-96LEduSBLdZ" icon={<Music size={14} />} label="TikTok" variant="gold" />
              <SocialIcon href="https://www.threads.com/@sunsetlover0717" icon={<AtSign size={14} />} label="Threads" variant="rose" />
              <SocialIcon href="https://www.instagram.com/sunsetlover0717" icon={<Instagram size={14} />} label="Instagram" variant="gold" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-x-10 gap-y-3 mt-6 border-t border-white/5 pt-6"
          >
            <ContactItem icon={<Phone size={14} />} text="09186496828" />
            <ContactItem icon={<Phone size={14} />} text="0288514825" />
            <ContactItem icon={<Mail size={14} />} text="jonnady9898@gmail.com" />
            <ContactItem icon={<Mail size={14} />} text="jonnalizady@velocityai.com.ph" />
            <ContactItem icon={<Globe size={14} />} text="velocityai.com.ph" href="https://www.velocityai.com.ph/" />
            <ContactItem icon={<MapPin size={14} />} text="Quezon City / Bulacan, PH" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

const ContactItem = ({ icon, text, href }: { icon: React.ReactNode, text: string, href?: string }) => {
  const content = (
    <>
      <span className="text-white/40 group-hover:text-gold group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
        {icon}
      </span>
      <span className="transition-colors duration-300">{text}</span>
    </>
  );

  const className = "flex items-center gap-2 text-white/60 text-xs font-medium hover:text-gold transition-all duration-300 group cursor-pointer";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <div className={className.replace('cursor-pointer', 'cursor-default')}>
      {content}
    </div>
  );
};

const SocialIcon = ({ href, icon, label, variant = 'gold' }: { href: string; icon: React.ReactNode; label: string; variant?: 'gold' | 'rose' }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-colors duration-300 shadow-sm hover:shadow-lg ${
      variant === 'rose' 
      ? 'hover:bg-rose-gold hover:text-white hover:border-rose-gold hover:shadow-rose-gold/10' 
      : 'hover:bg-gold hover:text-navy hover:border-gold hover:shadow-gold/10'
    }`}
    title={label}
  >
    {icon}
  </motion.a>
);
