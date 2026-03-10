import { motion } from 'framer-motion';
import { Shield, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { brandInfo, contactInfo } from '../data/brandData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-dark-bg text-white">
      {/* Main Footer */}
      <div className="container-premium py-12 sm:py-16 border-b border-charcoal-800">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-700 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">
                  {brandInfo.name}
                </h3>
                <p className="text-xs text-gold-400">Premium Gold Buyer</p>
              </div>
            </motion.div>
            <p className="text-charcoal-300 leading-relaxed mb-6">
              {brandInfo.description}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-charcoal-800 hover:bg-gold-600 rounded-lg flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-6">Layanan</h4>
            <ul className="space-y-3 text-charcoal-300">
              <li><a href="#advantages" className="hover:text-gold-400 transition-colors">Keunggulan</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Jenis Logam</a></li>
              <li><a href="#pricing" className="hover:text-gold-400 transition-colors">Daftar Harga</a></li>
              <li><a href="#calculator" className="hover:text-gold-400 transition-colors">Kalkulator</a></li>
              <li><a href="#process" className="hover:text-gold-400 transition-colors">Proses Transaksi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-6">Kontak</h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-3"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-charcoal-300">{contactInfo.address}</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="flex items-start gap-3"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-charcoal-300">{contactInfo.phone}</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-charcoal-300">{contactInfo.email}</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="flex items-start gap-3"
              >
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-charcoal-300">{contactInfo.operatingHours}</span>
              </motion.li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-6">Hubungi Sekarang</h4>
            <div className="space-y-4">
              <motion.a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                WhatsApp: 0812-3456-7890
              </motion.a>
              <motion.a
                href="tel:02151234567"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-2 w-full bg-charcoal-800 hover:bg-charcoal-700 text-white py-3 rounded-xl font-medium transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Center: 021-5123-4567
              </motion.a>
            </div>

            <div className="mt-8 p-4 bg-charcoal-800 rounded-xl">
              <p className="text-sm text-charcoal-300 mb-2">Butuh Bantuan?</p>
              <p className="text-gold-400 font-semibold">Tim kami siap membantu Anda 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-premium py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-charcoal-400 text-sm">
          © {currentYear} {brandInfo.name}. Hak Cipta Dilindungi.
        </p>
        <div className="flex gap-6 text-sm text-charcoal-400">
          <a href="#" className="hover:text-gold-400 transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-gold-400 transition-colors">Syarat & Ketentuan</a>
          <a href="#" className="hover:text-gold-400 transition-colors">Sitemap</a>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="w-10 h-10 bg-gold-600 hover:bg-gold-700 rounded-full flex items-center justify-center transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
