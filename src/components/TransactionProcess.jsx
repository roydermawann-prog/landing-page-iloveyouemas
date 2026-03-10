import { motion } from 'framer-motion';
import { MessageCircle, Scan, ClipboardList, Wallet, CheckCircle } from 'lucide-react';
import { transactionSteps } from '../data/brandData';

const getIcon = (iconName) => {
  const icons = {
    MessageCircle,
    Scan,
    ClipboardList,
    Wallet,
    CheckCircle,
  };
  return icons[iconName] || CheckCircle;
};

const TransactionProcess = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-dark-bg">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Alur <span className="text-gold-400">Transaksi</span>
          </h2>
          <p className="text-lg text-beige-200 max-w-3xl mx-auto">
            Proses sederhana, cepat, dan transparan. Dari konsultasi hingga pembayaran hanya butuh 15-30 menit.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gold-600/30 transform -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {transactionSteps.map((step, index) => {
              const IconComponent = getIcon(step.icon);
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Number Connector */}
                  <div className="hidden lg:flex absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-charcoal-900 border-4 border-gold-600 rounded-full items-center justify-center font-bold text-gold-400">
                    {step.step}
                  </div>

                  <div className="card-dark p-6 sm:p-8 text-center mt-8 lg:mt-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-beige-200 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionProcess;
