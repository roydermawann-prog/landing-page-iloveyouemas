import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { materials } from '../data/brandData';

const Services = () => {
  const getIcon = (iconName) => Icons[iconName] || Icons.Hash;

  const categories = ['all', 'batangan', 'perhiasan', 'industrial', 'gemstones'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? materials
    : materials.filter(m => m.category === activeCategory);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-4">
            Layanan <span className="gradient-gold">Kami</span>
          </h2>
          <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
            Kami menerima berbagai jenis logam mulia dan perhiasan dengan harga kompetitif dan proses transparan.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-gold'
                  : 'bg-beige-100 text-charcoal-700 hover:bg-beige-200'
              }`}
            >
              {cat === 'all' ? 'Semua' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Materials Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filtered.map((material, index) => {
            const IconComponent = getIcon(material.icon);
            return (
              <motion.div
                key={material.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="card-premium p-6 text-center group"
              >
                <div className={`w-14 h-14 ${material.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal-900 mb-1">
                  {material.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-2">{material.symbol} • {material.purity}</p>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {material.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-charcoal-700">
                    Diterima & Dicek
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
