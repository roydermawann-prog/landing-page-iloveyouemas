import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Clock, RefreshCw } from 'lucide-react';
import { priceData } from '../data/brandData';

const Pricing = () => {
  const [tab, setTab] = useState('buy'); // 'buy' or 'sell'
  const [category, setCategory] = useState('all');

  const data = tab === 'buy' ? priceData.buy : priceData.sell;

  const filtered = category === 'all'
    ? data
    : data.filter(item => item.category === category || (category === 'batangan' && item.type.includes('24K')));

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="pricing" className="section-padding bg-beige-50">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal-900 mb-4">
            Daftar Harga <span className="gradient-gold">Hari Ini</span>
          </h2>
          <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
            Harga real-time berdasarkan pasar internasional. Update setiap 5 menit.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 text-sm text-charcoal-500">
            <Clock className="w-4 h-4" />
            <span>Last update: {priceData.lastUpdate}</span>
            <RefreshCw className="w-4 h-4 ml-2" />
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setTab('buy')}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${
              tab === 'buy'
                ? 'bg-primary text-white shadow-gold'
                : 'bg-white text-charcoal-700 border border-gray-300 hover:border-primary'
            }`}
          >
            Kami Beli
          </button>
          <button
            onClick={() => setTab('sell')}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${
              tab === 'sell'
                ? 'bg-primary text-white shadow-gold'
                : 'bg-white text-charcoal-700 border border-gray-300 hover:border-primary'
            }`}
          >
            Kami Jual
          </button>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-3 mb-8"
        >
          {['all', 'batangan', 'perhiasan', 'industrial'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-beige-200 text-charcoal-900'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              {cat === 'all' ? 'Semua' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
        >
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 bg-charcoal-900 text-white p-6 font-semibold">
            <div className="col-span-4">Jenis Logam</div>
            <div className="col-span-2 text-center">Kategori</div>
            <div className="col-span-3 text-right">Harga / Gram</div>
            <div className="col-span-2 text-center">Trend</div>
            <div className="col-span-1 text-center">Unit</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {filtered.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 hover:bg-beige-50 transition-colors items-center"
              >
                {/* Type */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">{item.type.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal-900">{item.type}</p>
                      <p className="text-sm text-charcoal-500">{item.category}</p>
                    </div>
                  </div>
                </div>

                {/* Category (mobile visible) */}
                <div className="md:col-span-2 text-center">
                  <span className="text-sm text-charcoal-600">{item.category}</span>
                </div>

                {/* Price */}
                <div className="md:col-span-3 text-right">
                  <p className="text-xl font-bold text-primary">
                    {formatPrice(item.price)}
                  </p>
                </div>

                {/* Trend */}
                <div className="md:col-span-2 flex items-center justify-center gap-2">
                  {item.trend === 'up' ? (
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.change}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-red-600">
                      <TrendingDown className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.change}</span>
                    </div>
                  )}
                </div>

                {/* Unit */}
                <div className="md:col-span-1 text-center">
                  <span className="text-sm text-charcoal-600">{item.unit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-sm text-charcoal-500 mt-6">
          * Harga bersifat informasi dan dapat berubah sewaktu-waktu sesuai kondisi pasar. Segera cek harga langsung via kalkulator untuk estimasi akurat.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
