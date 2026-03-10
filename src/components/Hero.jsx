import { motion } from 'framer-motion';
import { ArrowRight, Calculator, MessageCircle, ShieldCheck } from 'lucide-react';
import { brandInfo } from '../data/brandData';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-[#fdfcf8] to-beige-100 pt-24 overflow-hidden"
    >
      {/* Background decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[400px] -right-[300px] w-[800px] h-[800px] bg-gold-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-[200px] w-[600px] h-[600px] bg-beige-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gold-200 px-3 sm:px-4 py-2 sm:py-3 rounded-full mb-6 shadow-sm"
            >
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-charcoal-700">
                Terpercaya oleh 50.000+ Customer since 2009
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-charcoal-900 mb-6"
            >
              Jual Emas Lebih{' '}
              <span className="gradient-gold">Aman</span>,
              <br />
              Lebih{' '}
              <span className="gradient-gold">Transparan</span>,
              <br />
              Harga{' '}
              <span className="gradient-gold">Lebih Tinggi</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {brandInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#calculator"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(214, 184, 106, 0.35)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-gold-gradient text-white px-8 py-4 rounded-xl font-bold shadow-gold-lg"
              >
                <Calculator className="w-5 h-5" />
                Cek Harga Hari Ini
              </motion.a>

              <motion.a
                href="#calculator"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-white border-2 border-charcoal-700 text-charcoal-700 hover:bg-charcoal-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Hitung Estimasi Emasmu
              </motion.a>

              <motion.a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi via WhatsApp
              </motion.a>
            </motion.div>

            {/* Trust Badges Below CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-charcoal-600"
            >
              {brandInfo.trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1610375461230-e8e0a0570c4b?w=800&h=600&fit=crop"
                alt="Emas & Logam Mulia Premium"
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px] sm:h-[500px] lg:h-[600px]"
              />
              {/* Floating Price Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-[280px] sm:max-w-xs border-2 border-gold-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">Au</span>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">Harga Emas 24K</p>
                    <p className="text-2xl font-bold text-primary">Rp 950.000</p>
                    <p className="text-xs text-green-600">▲ 0.5% hari ini</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold-300/40 rounded-full blur-2xl" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-beige-200/40 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
