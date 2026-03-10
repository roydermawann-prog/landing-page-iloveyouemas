import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Info } from 'lucide-react';
import { priceData } from '../data/brandData';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [karat, setKarat] = useState('24');
  const [category, setCategory] = useState('batangan');
  const [result, setResult] = useState(null);

  const karats = [
    { value: '24', label: '24K (99.9%)', purity: 0.999 },
    { value: '22', label: '22K (91.6%)', purity: 0.916 },
    { value: '18', label: '18K (75%)', purity: 0.75 },
    { value: '14', label: '14K (58.5%)', purity: 0.585 },
  ];

  const categories = [
    { value: 'batangan', label: 'Batangan Emas' },
    { value: 'perhiasan', label: 'Perhiasan Emas' },
  ];

  const calculate = () => {
    if (!weight || isNaN(parseFloat(weight))) {
      setResult(null);
      return;
    }

    const weightNum = parseFloat(weight);
    const selectedKarat = karats.find(k => k.value === karat);
    const priceEntry = priceData.buy.find(p =>
      p.type.includes(`${karat}K`) && p.category === category
    );

    if (!priceEntry) {
      setResult(null);
      return;
    }

    const pureWeight = weightNum * selectedKarat.purity;
    const estimatedPrice = pureWeight * priceEntry.price;

    setResult({
      pureWeight: pureWeight.toFixed(2),
      pricePerGram: priceEntry.price,
      estimatedPrice,
    });
  };

  useEffect(() => {
    const timeout = setTimeout(calculate, 300);
    return () => clearTimeout(timeout);
  }, [weight, karat, category]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="calculator" className="section-padding bg-white">
      <div className="container-premium max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <CalcIcon className="w-10 h-10 text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal-900">
              Kalkulator <span className="gradient-gold">Estimasi Emas</span>
            </h2>
          </div>
          <p className="text-lg text-charcoal-600">
            Masukkan detail emas Anda untuk mendapatkan estimasi harga berdasarkan harga pasar real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-dark p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-beige-200 mb-2">
                  Berat Emas (gram)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Contoh: 10.5"
                  className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-xl text-white placeholder:text-charcoal-400 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-beige-200 mb-2">
                  Kadar Emas (Karat)
                </label>
                <select
                  value={karat}
                  onChange={(e) => setKarat(e.target.value)}
                  className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-xl text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                >
                  {karats.map((k) => (
                    <option key={k.value} value={k.value}>{k.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-beige-200 mb-2">
                  Jenis Barang
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-xl text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result */}
            <div className="bg-charcoal-800/50 rounded-xl p-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-beige-200 mb-6">Estimasi Harga</h3>

              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-charcoal-700 pb-3">
                    <span className="text-charcoal-300">Berat Pokemon (after purity)</span>
                    <span className="text-white font-semibold">{result.pureWeight} gram</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-charcoal-700 pb-3">
                    <span className="text-charcoal-300">Harga per Gram</span>
                    <span className="text-white font-semibold">{formatPrice(result.pricePerGram)}</span>
                  </div>
                  <div className="pt-2">
                    <div className="text-charcoal-300 text-sm mb-1">Total Estimasi</div>
                    <div className="text-3xl font-bold gradient-gold">
                      {formatPrice(result.estimatedPrice)}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-charcoal-400">Masukkan berat emas untuk melihat estimasi</p>
                </div>
              )}

              <div className="mt-6 flex items-start gap-2 text-xs text-charcoal-400">
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>Estimasi ini berdasarkan harga pasar saat ini. Harga final dapat berbeda setelah pengecekan langsung.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-sm text-charcoal-500 mt-6">
          Untuk estimasi yang lebih akurat, silakan datang ke cabang terdekat untuk pengecekan langsung dengan teknologi XRF analyzer.
        </p>
      </div>
    </section>
  );
};

export default Calculator;
