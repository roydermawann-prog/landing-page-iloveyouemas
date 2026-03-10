import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import { branches, contactInfo } from '../data/brandData';

const Branches = () => {
  return (
    <section id="branches" className="section-padding bg-beige-50">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-4">
            Cabang & <span className="gradient-gold">Kontak</span>
          </h2>
          <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
            Kunjungi cabang terdekat untuk layanan langsung. Atau hubungi kami via WhatsApp untuk konsultasi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Branches List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-premium p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-charcoal-900 mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-charcoal-600 text-sm mb-3 flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{branch.address}</span>
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-charcoal-700">{branch.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-charcoal-700">{branch.hours}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-charcoal-500">
                        Manager: <span className="font-medium text-charcoal-700">{branch.manager}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Contact Card */}
            <div className="card-dark p-6 sm:p-8 space-y-6">
              <h3 className="font-heading font-bold text-2xl text-white mb-6">Hubungi Kami</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-beige-300 text-sm">Telepon</p>
                    <p className="text-white font-semibold">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-beige-300 text-sm">WhatsApp</p>
                    <p className="text-white font-semibold">{contactInfo.whatsapp}</p>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/^0/, '62')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      Chat Sekarang
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-beige-300 text-sm">Alamat</p>
                    <p className="text-white font-medium">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-beige-300 text-sm">Jam Operasional</p>
                    <p className="text-white font-medium">{contactInfo.operatingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-48 sm:h-64 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop')", opacity: 0.3 }} />
              <div className="relative z-10 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-charcoal-700 font-semibold">Peta Lokasi Cabang Utama</p>
                <p className="text-sm text-charcoal-600">{contactInfo.address}</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Buka di Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
