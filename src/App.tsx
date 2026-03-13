/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50 font-sans text-gray-900 selection:bg-fuchsia-300 selection:text-fuchsia-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
