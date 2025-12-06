import { motion } from 'framer-motion';

// Using high-quality text/SVG representations for a cleaner look if actual SVGs aren't available
// You can replace these with actual <img> tags if you have the files

const companies = [
  { 
    name: 'GlobalLogic', 
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">G</div>
        <span className="text-xl font-bold tracking-tight">GlobalLogic</span>
      </div>
    )
  },
  { 
    name: 'Iris Software', 
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">i</div>
        <span className="text-xl font-bold tracking-tight">iris<span className="font-light">software</span></span>
      </div>
    )
  },
  { 
    name: 'HCLTech', 
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-10 h-6 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-xs">HCL</div>
        <span className="text-xl font-bold tracking-tight">HCLTech</span>
      </div>
    )
  },
  { 
    name: 'Mobiloitte', 
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-600 rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-bold">M</div>
        <span className="text-xl font-bold tracking-tight">Mobiloitte</span>
      </div>
    )
  },
  { 
    name: 'Anaplan', 
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
        <span className="text-xl font-bold tracking-tight">anaplan</span>
      </div>
    )
  }
];

export const TrustedBy = () => {
  return (
    <section className="py-10 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-8 font-mono">Trusted by industry leaders</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              {company.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

