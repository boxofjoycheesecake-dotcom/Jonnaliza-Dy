import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Rocket, ExternalLink, FileText, Facebook, Globe, Layout, Zap, Plane, TrendingUp, Heart, Mic2, Bot } from 'lucide-react';
import { db } from '../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

export const MainContent = () => {
  const [certifications, setCertifications] = useState<any[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'siteConfigs', 'global'), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.certifications) {
          setCertifications(data.certifications);
        }
      }
    });
    return () => unsub();
  }, []);

  return (
    <div className="flex-grow p-10 md:p-16 space-y-20 bg-cream">
      {/* Profile */}
      <section>
        <SectionTitle icon={<Award size={18} />} title="Professional Profile" variant="rose" />
        <p className="text-charcoal/80 leading-relaxed text-sm md:text-[15px] font-medium max-w-4xl">
          Versatile professional with 15+ years of BPO excellence, digital marketing execution, and an active entrepreneurial background as co-founder of an AI automation agency. Currently deepening expertise in GoHighLevel CRM — building hands-on skills in funnel setup, automation workflows, and client onboarding systems through active training. Brings a grounded, solutions-first mindset shaped by years of client-facing work, multi-business management, and a genuine passion for using technology to drive business growth. 
        </p>
      </section>

      {/* Business Ownership */}
      <section>
        <SectionTitle icon={<Rocket size={18} />} title="Business Ownership & Leadership" variant="gold" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BizCard 
            role="Co-Founder & Head of Digital Strategy & Growth"
            company="Velocity AI"
            period="Feb 2026 – Present"
            description="Co-founded a premier PH-based AI automation agency, leading end-to-end client relations and strategic business development. Directs the full creative and technical lifecycle of all digital and physical brand assets, overseeing integrated Meta Advertising and CRM system deployments. Orchestrates high-impact digital communications and professional face-to-face presentations to secure and scale strategic client accounts."
            isActive
            facebookUrl="https://www.facebook.com/profile.php?id=61583771470210"
            facebookLabel="Velocity AI"
            variant="gold"
          />
          <BizCard 
            role="Owner & Fragrance Creator"
            company="Joy Aromas"
            period="Mar 2024 – Present"
            description="Directs the strategic development of a TESDA-certified boutique fragrance house, overseeing proprietary scent formulation and luxury-tier brand identity. Spearheads direct-to-consumer (DTC) digital sales channels and market expansion through a premium-accessible positioning strategy, ensuring consistent quality and brand resonance."
            isActive
            variant="rose"
          />
          <BizCard 
            role="Founder & Brand Manager"
            company="Box of Joy Cheesecakes"
            period="Present"
            description="Spearheaded the end-to-end development of an online artisan cheesecake brand, specializing in direct-to-consumer digital sales and community-based BPO bazaars. Orchestrated digital growth through strategic Meta Advertising and Messenger automation, while directly overseeing a high-quality product line supported by a family production team."
            isActive
            facebookUrl="https://www.facebook.com/boxofjoycheesecakesandmore"
            facebookLabel="Box of Joy Cheesecake"
            variant="rose"
          />
          <BizCard 
            role="Co-Owner & Operations Lead"
            company="G! Salon Nails & Barbers"
            period="Jun 2025 – Feb 2026"
            description="Directly managed organizational operations and growth directives, including human resources and inventory logistics. Led integrated marketing initiatives through the design of all brand collateral and visual creatives, while executing strategic Facebook Advertising campaigns to drive client engagement and business growth."
            facebookUrl="https://www.facebook.com/profile.php?id=61564981222711"
            facebookLabel="G! Salon Nails & Barbers"
            variant="gold"
          />
        </div>

        {/* Pending Client Projects Subsection */}
        <div className="mt-12">
          <h3 className="text-[10px] uppercase font-black tracking-[3px] text-gold mb-6 flex items-center gap-3">
            <Zap size={14} className="text-rose-gold text-white" />
            Strategic Project Proposals & Pipeline
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectCard 
              title="WORLD TRAVELER - Probono Account"
              status="Pipeline"
              icon={<Plane size={16} />}
              links={[
                { label: "Live App", url: "https://ais-pre-sf444njoo7x4xfn3j4t6qj-108363223910.asia-east1.run.app", icon: <Globe size={12} /> },
                { label: "AI Proposal", url: "https://gamma.app/docs/WORLD-TRAVELLER-iiu3tz7mlyxh8is", icon: <FileText size={12} /> },
                { label: "Logo Design", url: "https://canva.link/worldtravelerlogodirectivesforapproval", icon: <Layout size={12} /> }
              ]}
              variant="rose"
            />
            <ProjectCard 
              title="Victory Global - Era of Growth"
              status="Proposed"
              icon={<TrendingUp size={16} />}
              links={[
                { label: "VG Briefcase", url: "https://ais-pre-b6u7yc7ke7qvlgu45kxytq-210636523519.asia-southeast1.run.app", icon: <Layout size={12} /> },
                { label: "Main Proposal", url: "https://gamma.app/docs/Powering-Victory-Globals-Next-Era-of-Growth-5fhh5p6ykdd6y6g?mode=doc", icon: <FileText size={12} /> },
                { label: "AI Academy", url: "https://gamma.app/docs/Social-Media-Online-Automation-Introduction-to-AI-The-Briefcase-o19j0nm6f3i3ttn?mode=doc", icon: <GraduationCap size={12} /> }
              ]}
              variant="gold"
            />
            <ProjectCard 
              title="Saint Peter Funeral Service"
              status="Proposed"
              icon={<Heart size={16} />}
              links={[
                { label: "SP Briefcase", url: "https://ais-pre-u5lqgj36v74rx6yxwoq2oo-210636523519.asia-southeast1.run.app", icon: <Layout size={12} /> },
                { label: "Next 50 Years Proposal", url: "https://gamma.app/docs/The-Next-50-Years-of-Malasakit-Engineered-by-AI-it64ty7gddm8k85", icon: <FileText size={12} /> }
              ]}
              variant="rose"
            />
            <ProjectCard 
              title="Velocity AI - Speaking Engagements"
              status="Active"
              icon={<Mic2 size={16} />}
              links={[
                { label: "Infrastructure Presentation", url: "https://gamma.app/docs/AI-Infrastructure-for-Scalable-Business-Growth-ilal5kezglkvvt8?mode=doc", icon: <FileText size={12} /> },
                { label: "Strategic Discovery Deck", url: "https://gamma.app/docs/Heres-What-Youll-Discover-nrg7duphndjuuoy?mode=doc", icon: <Zap size={12} /> },
                { label: "AI Marketing Agents", url: "https://www.facebook.com/permalink.php?story_fbid=pfbid0u9uQFuE6mPorWi36Ts1SK9KWCaVYmaGUhL8Z27JLuCiKGZ1YTFGdxwRFj58Y8D6ml&id=61583771470210", icon: <Bot size={12} /> }
              ]}
              variant="gold"
            />
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      {certifications.length > 0 && (
        <section>
          <SectionTitle icon={<Award size={18} />} title="Certifications & Achievements" variant="rose" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertCard key={index} {...cert} />
            ))}
          </div>
        </section>
      )}

      {/* Employment */}
      <section>
        <SectionTitle icon={<Briefcase size={18} />} title="Professional Employment" variant="gold" />
        <div className="space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gold/20 pl-8">
          <JobItem 
            title="Virtual Assistant / TSR"
            company="TalentPop (Agency) for SUPER73"
            period="Jul 2024 – Present"
            description="Technical support for luxury electric bike brand. Expert management of Zendesk, Gorgias, and Shopify ticketing systems."
            variant="rose"
          />
          <JobItem 
            title="Global Enterprise Advisor"
            company="AFNI Philippines — Verizon Business"
            period="Aug 2023 – Jul 2024"
            description="Verizon Business account management, focusing on high-level enterprise retention and resolution."
          />
          <JobItem 
            title="VIP Account Specialist"
            company="Acute Logistics (Priority One)"
            period="Jul 2023 – Feb 2024"
            description="Coordinated TL/LTL freight forwarding and bookings for VIP logistics operations."
          />
          <JobItem 
            title="Escalation & Fraud Specialist"
            company="Concentrix (Project Diamond)"
            period="Nov 2019 – Aug 2023"
            description="High-level grievance resolution and fraud investigations for major telecommunications clients."
          />
          <JobItem 
            title="Verizon Customer Care"
            company="AFNI Philippines"
            period="Aug 2019 – Oct 2019"
            description="Billing support and account management for residential customers."
          />
          <JobItem 
            title="Associate Expert (T-Mobile)"
            company="Teleperformance"
            period="Dec 2018 – Jun 2019"
            description="Resolved complex technical inquiries and served as subject matter expert for mobile accounts."
          />
          <JobItem 
            title="Multi-skilled CSR"
            company="Teleport Business Tech"
            period="Sep 2016 – Nov 2018"
            description="Provided multi-channel customer service support across inbound and digital platforms."
          />
          <JobItem 
            title="Technical Support Representative"
            company="Telstra (Convergys)"
            period="Feb 2015 – Aug 2018"
            description="Network connectivity and hardware support for residential and business customers."
          />
          <JobItem 
            title="DSL Technical Support & Onboarding"
            company="Teletech"
            period="Jun 2011 – Jan 2015"
            description="Managed customer account setup and DSL technical troubleshooting."
          />
          <JobItem 
            title="Technical Support Representative (GPS)"
            company="Synnex-Concentrix"
            period="May 2010 – Dec 2010"
            description="GPS device and mapping software troubleshooting and support."
          />
          <JobItem 
            title="Inbound Sales Agent"
            company="ICT Group Inc. (Simplexity Wireless)"
            period="Nov 2009 – Jan 2010"
            description="Handled inbound sales for mobile applications and wireless plan inquiries."
          />
          <JobItem 
            title="Live Advisor (CSR)"
            company="ICT Group Inc. (Virgin Mobile USA)"
            period="May 2008 – Nov 2009"
            description="Supported mobile plans and service activation for US-based customers."
          />
          <JobItem 
            title="Payroll Admin Assistant"
            company="A4 Site Builders, Inc. / B&B Specialty Coffee"
            period="2004 – 2008"
            description="Managed employee timesheets, payroll preparation, attendance logs, and administrative support."
          />
          <JobItem 
            title="Travel Specialist"
            company="Green Planet Travel & Tours"
            period="Jun 2002 – Jan 2003"
            description="Crafted travel itineraries and coordinated flight/tour bookings."
          />
        </div>
      </section>

      {/* Education */}
      <section>
        <SectionTitle icon={<GraduationCap size={18} />} title="Education" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-navy text-sm md:text-base">Entrepreneurial Management</h4>
            <p className="text-xs text-warm-gray mt-1">Technological Institute of the Philippines (TIP) • Quezon City</p>
          </div>
          <div>
            <h4 className="font-bold text-navy text-sm md:text-base">Computer Secretarial</h4>
            <p className="text-xs text-warm-gray mt-1">AMA Computer Learning Center</p>
          </div>
        </div>
      </section>
    </div>
  );
};


const ProjectCard = ({ title, status, links, icon, variant = 'gold' }: { title: string; status: string; links: { label: string; url: string; icon: React.ReactNode }[]; icon: React.ReactNode; variant?: 'gold' | 'rose' }) => (
  <motion.div 
    whileHover={{ y: -2 }}
    className={`${variant === 'rose' ? 'bg-rose-gold/5 border-rose-gold/30' : 'bg-gold/5 border-gold/30'} border-l-2 p-5 rounded-r-xl`}
  >
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-2">
        <span className={variant === 'rose' ? 'text-rose-gold' : 'text-gold'}>{icon}</span>
        <h4 className="font-bold text-navy text-[11px] uppercase tracking-tight">{title}</h4>
      </div>
      <span className="text-[9px] bg-emerald/10 text-emerald px-2 py-0.5 rounded font-bold uppercase tracking-widest">{status}</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {links.map((link, idx) => (
        <a 
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 text-[9px] text-charcoal/70 transition-colors font-bold uppercase tracking-wider bg-white px-2.5 py-1.5 rounded shadow-sm border group ${
            variant === 'rose' ? 'hover:text-rose-gold border-rose-gold/10' : 'hover:text-gold border-gold/10'
          }`}
        >
          <span className={`${variant === 'rose' ? 'text-rose-gold' : 'text-gold'} group-hover:scale-110 transition-transform`}>{link.icon}</span>
          {link.label}
        </a>
      ))}
    </div>
  </motion.div>
);

const SectionTitle = ({ icon, title, variant = 'gold' }: { icon: React.ReactNode; title: string; variant?: 'gold' | 'rose' }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className={`bg-navy p-2 rounded-lg ${variant === 'rose' ? 'text-rose-gold' : 'text-gold'}`}>{icon}</span>
    <h2 className="text-xs uppercase font-bold tracking-[4px] text-navy flex items-center gap-4 flex-grow">
      {title}
      <span className={`flex-grow h-px bg-gradient-to-r from-white via-navy/10 to-white ${variant === 'rose' ? 'from-rose-gold' : 'from-gold'}`} />
    </h2>
  </div>
);

const BizCard = ({ role, company, period, description, isActive, facebookUrl, facebookLabel, variant = 'gold' }: { role: string; company: string; period: string; description: string; isActive?: boolean; facebookUrl?: string; facebookLabel?: string; variant?: 'gold' | 'rose' }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className={`bg-white border p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative group ${
      variant === 'rose' ? 'border-rose-gold/10' : 'border-gold/10'
    }`}
  >
    <div className="flex justify-between items-start mb-1">
      <h4 className={`font-bold text-navy text-base transition-colors ${variant === 'rose' ? 'group-hover:text-rose-gold' : 'group-hover:text-gold'}`}>{role}</h4>
      {isActive && (
        <span className="bg-emerald text-white text-[8px] px-2 py-1 uppercase font-bold rounded-full tracking-wider h-fit shadow-sm">
          Active
        </span>
      )}
    </div>
    <div className={`text-[10px] uppercase font-bold tracking-widest mb-2 ${variant === 'rose' ? 'text-rose-gold' : 'text-gold-deep'}`}>{company} • {period}</div>
    
    {facebookUrl && (
      <a 
        href={facebookUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 bg-navy border text-white px-3 py-1.5 text-[9px] uppercase font-bold tracking-widest rounded-sm transition-all duration-300 print:hidden mb-4 ${
          variant === 'rose' ? 'border-rose-gold/30 hover:bg-rose-gold' : 'border-gold/30 hover:bg-gold hover:text-navy'
        }`}
        title={`Visit ${facebookLabel || company} Facebook Page`}
      >
        <Facebook size={12} className={variant === 'rose' ? 'text-rose-gold-light' : 'text-gold-light'} />
        {facebookLabel || company}
      </a>
    )}

    <p className="text-xs leading-relaxed text-charcoal/70">{description}</p>
  </motion.div>
);

const CertCard = ({ title, issuer, date, url, variant = 'gold' }: { title: string; issuer: string; date?: string; url?: string; variant?: 'gold' | 'rose' }) => (
  <motion.div 
    whileHover={{ y: -2 }}
    className={`bg-white border-l-4 p-4 rounded-r-xl shadow-sm hover:shadow-md transition-all relative group ${
      variant === 'rose' ? 'border-rose-gold' : 'border-gold'
    }`}
  >
    <div className="flex justify-between items-start gap-4">
      <div>
        <h4 className="font-bold text-navy text-sm">{title}</h4>
        <p className={`text-[10px] uppercase font-bold tracking-widest mt-0.5 ${variant === 'rose' ? 'text-rose-gold' : 'text-gold'}`}>{issuer}</p>
        {date && <p className="text-[10px] text-warm-gray mt-1">{date}</p>}
      </div>
      <div className="flex gap-1 print:hidden">
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition-colors p-1 ${variant === 'rose' ? 'text-rose-gold hover:text-navy' : 'text-gold hover:text-navy'}`}
          >
            {url.startsWith('data:application/pdf') ? <FileText size={16} /> : <ExternalLink size={16} />}
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const JobItem = ({ title, company, period, description, variant = 'gold' }: { title: string; company: string; period: string; description: string; variant?: 'gold' | 'rose' }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className="relative flex flex-col gap-1"
  >
    <div className={`absolute -left-[36.5px] top-1.5 w-4 h-4 rounded-full border-2 bg-cream ${variant === 'rose' ? 'border-rose-gold' : 'border-gold'}`} />
    <div className="flex justify-between items-start">
      <h4 className="font-bold text-navy text-sm md:text-base">{title}</h4>
      <span className="text-[10px] font-semibold text-warm-gray bg-cream-deep px-2 py-1 rounded">{period}</span>
    </div>
    <div className={`text-xs uppercase font-bold tracking-widest ${variant === 'rose' ? 'text-rose-gold' : 'text-gold-deep'}`}>{company}</div>
    <p className="text-xs text-charcoal/70 leading-relaxed mt-2">{description}</p>
  </motion.div>
);
