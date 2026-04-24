import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Rocket } from 'lucide-react';

export const MainContent = () => {
  return (
    <div className="flex-grow p-10 md:p-16 space-y-20 bg-cream">
      {/* Profile */}
      <section>
        <SectionTitle icon={<Award size={18} />} title="Professional Profile" />
        <p className="text-charcoal/80 leading-relaxed text-sm md:text-[15px] font-medium max-w-4xl">
          Versatile professional with 15+ years of BPO excellence, digital marketing execution, and an active entrepreneurial background as co-founder of an AI automation agency. Currently deepening expertise in GoHighLevel CRM — building hands-on skills in funnel setup, automation workflows, and client onboarding systems through active training. Brings a grounded, solutions-first mindset shaped by years of client-facing work, multi-business management, and a genuine passion for using technology to drive business growth. 
        </p>
      </section>

      {/* Business Ownership */}
      <section>
        <SectionTitle icon={<Rocket size={18} />} title="Business Ownership & Leadership" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BizCard 
            role="Co-Founder & Head of Digital Strategy & Growth"
            company="Velocity AI"
            period="Feb 2026 – Present"
            description="Co-founded a PH-based AI automation agency. Leads client relations, meta ads, and GHL system builds for diverse client accounts."
            isActive
          />
          <BizCard 
            role="Owner & Fragrance Creator"
            company="Joy Aromas"
            period="Mar 2024 – Present"
            description="TESDA-certified fragrance brand. Oversees formulation, branding, and DTC sales with a luxury-accessible market strategy."
            isActive
          />
          <BizCard 
            role="Owner & Brand Manager"
            company="Box of Joy Cheesecakes"
            period="Present"
            description="Artisan cheesecake brand. Manages product development, fulfillment, Messenger automation, and Meta Ads across multiple locations."
            isActive
          />
          <BizCard 
            role="Co-Owner & Operations Lead"
            company="G! Salon Nails & Barbers"
            period="Jun 2025 – Feb 2026"
            description="Full operations oversight: HR management, inventory control, and salon marketing strategy."
          />
        </div>
      </section>

      {/* Employment */}
      <section>
        <SectionTitle icon={<Briefcase size={18} />} title="Professional Employment" />
        <div className="space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gold/20 pl-8">
          <JobItem 
            title="Virtual Assistant / TSR"
            company="TalentPop (Agency) for SUPER73"
            period="Jul 2024 – Present"
            description="Technical support for luxury electric bike brand. Expert management of Zendesk, Gorgias, and Shopify ticketing systems."
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

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="bg-navy text-gold p-2 rounded-lg">{icon}</span>
    <h2 className="text-xs uppercase font-bold tracking-[4px] text-navy flex items-center gap-4 flex-grow">
      {title}
      <span className="flex-grow h-px bg-gradient-to-r from-gold to-white" />
    </h2>
  </div>
);

const BizCard = ({ role, company, period, description, isActive }: { role: string; company: string; period: string; description: string; isActive?: boolean }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="bg-white border border-gold/10 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative group"
  >
    {isActive && (
      <span className="absolute top-4 right-4 bg-accent-teal text-white text-[8px] px-2 py-1 uppercase font-bold rounded-full tracking-wider">
        Active
      </span>
    )}
    <h4 className="font-bold text-navy text-base group-hover:text-gold transition-colors">{role}</h4>
    <div className="text-[10px] text-gold uppercase font-bold tracking-widest mt-1 mb-3">{company} • {period}</div>
    <p className="text-xs leading-relaxed text-charcoal/70">{description}</p>
  </motion.div>
);

const JobItem = ({ title, company, period, description }: { title: string; company: string; period: string; description: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className="relative flex flex-col gap-1"
  >
    <div className="absolute -left-[36.5px] top-1.5 w-4 h-4 rounded-full border-2 border-gold bg-cream" />
    <div className="flex justify-between items-start">
      <h4 className="font-bold text-navy text-sm md:text-base">{title}</h4>
      <span className="text-[10px] font-semibold text-warm-gray bg-cream-deep px-2 py-1 rounded">{period}</span>
    </div>
    <div className="text-xs text-gold uppercase font-bold tracking-widest">{company}</div>
    <p className="text-xs text-charcoal/70 leading-relaxed mt-2">{description}</p>
  </motion.div>
);
