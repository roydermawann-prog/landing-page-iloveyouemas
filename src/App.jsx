import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Advantages from './components/Advantages'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Calculator from './components/Calculator'
import TransactionProcess from './components/TransactionProcess'
import Testimonials from './components/Testimonials'
import Branches from './components/Branches'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Advantages />
        <Services />
        <Pricing />
        <Calculator />
        <TransactionProcess />
        <Testimonials />
        <Branches />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
