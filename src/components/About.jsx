import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Award, MapPin, Clock } from 'lucide-react';
import { brandInfo } from '../data/brandData';

const AnimatedCounter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section className="section-padding bg-beige-50">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-6">
              {brandInfo.name}: <span className="gradient-gold">Kepercayaan yang Terbukti</span>
            </h2>
            <p className="text-lg text-charcoal-700 mb-8 leading-relaxed">
              {brandInfo.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">Visi</h3>
                <p className="text-charcoal-700 leading-relaxed">{brandInfo.vision}</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">Misi</h3>
                <ul className="space-y-3">
                  {brandInfo.values.map((value, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-charcoal-700">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {brandInfo.stats.map((stat, index) => {
              const icons = [Users, Award, MapPin, Clock];
              const IconComponent = icons[index];
              return (
                <div
                  key={index}
                  className="card-premium p-6 text-center bg-white"
                >
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-charcoal-900 mb-2">
                    <AnimatedCounter end={parseInt(stat.number.replace(/\D/g, ''))} suffix={stat.number.replace(/[0-9,]/g, '')} />
                  </div>
                  <p className="text-charcoal-600 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
