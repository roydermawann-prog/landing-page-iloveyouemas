import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { advantages } from '../data/brandData';

const Advantages = () => {
  const getIcon = (iconName) => Icons[iconName] || Icons.CheckCircle;

  return (
    <section id="advantages" className="section-padding bg-white">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-4">
            Mengapa Memilih <span className="gradient-gold">I Love Emas</span>?
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-600 max-w-3xl mx-auto">
            Kami memberikan nilai terbaik dengan teknologi, transparansi, dan pelayanan yang tak tertandingi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => {
            const IconComponent = getIcon(adv.icon);
            return (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-premium p-6 sm:p-8 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gold-100 to-beige-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-3 group-hover:text-primary transition-colors">
                  {adv.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
