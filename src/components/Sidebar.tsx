import React from 'react';
import { motion } from 'motion/react';

export const Sidebar = () => {
  return (
    <aside className="bg-navy text-white/80 p-8 space-y-16 lg:w-80 flex-shrink-0 relative overflow-hidden">
      {/* Subtle decorative element for sidebar */}
      <div className="absolute -left-10 top-1/4 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute -right-10 bottom-1/4 w-24 h-24 bg-rose-gold/5 rounded-full blur-3xl opacity-50" />
      
      <SidebarSection title="GoHighLevel Specialization" variant="rose">
        <div className="grid grid-cols-1 gap-y-3">
          <SkillPill text="GoHighLevel CRM" highlight variant="rose" />
          <SkillPill text="Funnel Setup" highlight variant="gold" />
          <SkillPill text="Automation Workflows" highlight variant="rose" />
          <SkillPill text="Client Onboarding" highlight variant="gold" />
          <SkillPill text="Pipeline Management" highlight variant="rose" />
          <SkillPill text="Contact Management" highlight variant="gold" />
          <SkillPill text="Email/SMS Campaigns" highlight variant="rose" />
        </div>
      </SidebarSection>

      <SidebarSection title="AI & Automation Tools">
        <div className="grid grid-cols-2 gap-3">
          <SkillPill text="ChatGPT & GPTs" />
          <SkillPill text="Claude AI" />
          <SkillPill text="Gemini AI Studio" />
          <SkillPill text="Microsoft Copilot" />
        </div>
      </SidebarSection>

      <SidebarSection title="Digital Marketing">
        <div className="grid grid-cols-2 gap-3">
          <SkillPill text="Meta / FB Ads" />
          <SkillPill text="SMM Strategy" />
          <SkillPill text="Instagram / TikTok" />
          <SkillPill text="Ad Performance" />
          <SkillPill text="Lead Gen" />
          <SkillPill text="Content Creation" />
          <SkillPill text="Video Production" />
          <SkillPill text="WordPress" />
        </div>
      </SidebarSection>

      <SidebarSection title="CRM & Support">
        <div className="grid grid-cols-2 gap-3">
          <SkillPill text="Zendesk" />
          <SkillPill text="Gorgias" />
          <SkillPill text="Shopify" />
          <SkillPill text="Salesforce" />
          <SkillPill text="Abacus" />
        </div>
      </SidebarSection>

      <SidebarSection title="Tools & Creative">
        <div className="grid grid-cols-2 gap-3">
          <SkillPill text="Google Workspace" />
          <SkillPill text="Canva" />
          <SkillPill text="CapCut" />
          <SkillPill text="Gamma" />
          <SkillPill text="GoDaddy" />
          <SkillPill text="MS Office" />
        </div>
      </SidebarSection>

      <SidebarSection title="Experience & Training" variant="rose">
        <div className="space-y-8">
          <CertItem 
            title="GHL System Builder — Premium Role" 
            issuer="Go High Level Champs Program" 
            date="2026" 
            desc="Ongoing training and expert certifications"
            variant="rose"
          />
          <CertItem 
            title="Real Estate Virtual Assistant" 
            issuer="Freelance Academy" 
            date="2026" 
            desc="Admin tasks, SMM, Listing Management, CRM applications"
            variant="gold"
          />
          <CertItem 
            title="VA Social Media Marketing" 
            issuer="Freelance Academy" 
            date="2026" 
            desc="Algorithms, Content, Lead Gen, SEO, WordPress, Video Editing"
            variant="rose"
          />
          <CertItem 
            title="Live GoHighLevel Workshop" 
            issuer="Excelerate Digital" 
            date="2026" 
            desc="CRM marketing automation, platform engagement, funnels"
          />
          <CertItem 
            title="Live Facebook Ads Workshop" 
            issuer="Excelerate Digital" 
            date="2026" 
            desc="Campaign structures, audience targeting, strategies"
          />
          <CertItem 
            title="Fragrance Formulation" 
            issuer="Joy Aromas (TESDA)" 
            date="2026" 
            desc="Scent profiling, safety, Eau de Parfum creation"
          />
          <CertItem 
            title="Highlights & Hair Color" 
            issuer="CON | BEAUTY STUDIO" 
            date="2025" 
            desc="Professional hair highlighting and color application"
          />
          <CertItem 
            title="Advance Hair Color & Bleaching" 
            issuer="CON | BEAUTY STUDIO" 
            date="2025" 
            desc="Bleaching techniques and complex color transitions"
          />
          <CertItem 
            title="Rebonding Training" 
            issuer="CON | BEAUTY STUDIO" 
            date="2025" 
            desc="Structural hair smoothing and rebonding application"
          />
          <CertItem 
            title="SMM Collaboration" 
            issuer="Quezon City University" 
            date="2025" 
            desc="Industry Partner: 'Building Brands, Breaking Limits'"
          />
          <CertItem 
            title="Abacus Reservation 1 (96%)" 
            issuer="Abacus Dist. Systems" 
            date="2002" 
            desc="Travel reservations and ticketing specialist"
          />
          <CertItem 
            title="E-Commerce Leadership" 
            issuer="Rise Program" 
            date="1999" 
            desc="Digital entrepreneurship and business scalability"
          />
        </div>
      </SidebarSection>

      <div className="pt-12 border-t border-gold/20">
        <h3 className="text-gold text-[9px] uppercase font-bold tracking-[4px] mb-8 pb-1.5 border-b border-gold/20 flex items-center justify-between">
          References
        </h3>
        <div className="space-y-8">
          <ReferenceItem name="Paolo Angelo Florenda" role="CEO, VelocityAI & G! Salon" contact="09175260494" />
          <ReferenceItem name="RV Fortu" role="Team Leader, Concentrix CVG" contact="09209477064" />
          <ReferenceItem name="Irah Cruz" role="Team Leader, Concentrix CVG" contact="09275826002" />
        </div>
      </div>
    </aside>
  );
};

const SidebarSection = ({ title, children, variant = 'gold' }: { title: string; children: React.ReactNode; variant?: 'gold' | 'rose' }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative z-10"
  >
    <h3 className={`text-[9px] uppercase font-bold tracking-[4px] mb-5 pb-1.5 border-b flex items-center justify-between ${
      variant === 'rose' ? 'text-rose-gold border-rose-gold/20' : 'text-gold border-gold/20'
    }`}>
      {title}
    </h3>
    {children}
  </motion.div>
);

const SkillPill = ({ text, highlight, variant = 'gold' }: { text: string; highlight?: boolean; variant?: 'gold' | 'rose' }) => (
  <motion.span 
    whileHover={{ scale: 1.05, y: -1 }}
    className={`text-[10px] px-3 py-2 rounded-sm transition-all duration-300 tracking-wide flex items-center justify-center text-center h-full min-h-[32px] cursor-default ${
    highlight 
    ? (variant === 'rose' 
        ? 'bg-rose-gold/15 text-rose-gold-light border border-rose-gold/30 font-bold shadow-sm shadow-rose-gold/5' 
        : 'bg-gold/15 text-gold-light border border-gold/30 font-bold shadow-sm shadow-gold/5')
    : 'bg-white/[0.04] text-white/70 border border-white/10 hover:border-gold/30 hover:bg-white/[0.08]'
  }`}>
    {text}
  </motion.span>
);

const CertItem = ({ title, issuer, date, desc, variant = 'gold' }: { title: string; issuer: string; date: string; desc?: string; variant?: 'gold' | 'rose' }) => (
  <motion.div 
    whileHover={{ x: 4 }}
    className="group cursor-default"
  >
    <div className={`text-[11px] font-semibold text-white/90 leading-tight transition-colors ${
      variant === 'rose' ? 'group-hover:text-rose-gold' : 'group-hover:text-gold'
    }`}>{title}</div>
    <div className={`text-[10px] mt-1 font-medium ${
      variant === 'rose' ? 'text-rose-gold/80' : 'text-gold-light'
    }`}>{issuer} • {date}</div>
    {desc && <div className="text-[9px] text-white/40 mt-0.5 leading-snug italic">{desc}</div>}
  </motion.div>
);

const ReferenceItem = ({ name, role, contact }: { name: string; role: string; contact: string }) => (
  <motion.div 
    whileHover={{ x: 4 }}
    className="cursor-default group"
  >
    <div className="text-xs font-semibold text-white/90 group-hover:text-gold transition-colors">{name}</div>
    <div className="text-[10px] text-white/40">{role}</div>
    <div className="text-[10px] text-gold mt-1 font-medium">{contact}</div>
  </motion.div>
);
