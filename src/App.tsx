import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Home page components
import Hero from './components/sections/Hero';
import ValueProposition from './components/sections/ValueProposition';
import CompanyValues from './components/sections/CompanyValues';
import CTASection from './components/sections/CTASection';

// Service pages
import Engineering from './components/pages/services/Engineering';
import CNCMachining from './components/pages/services/CNCMachining';
import EDM from './components/pages/services/EDM';
import Finishing from './components/pages/services/Finishing';
import InspectionsTesting from './components/pages/services/InspectionsTesting';

// Industry pages
import Aerospace from './components/pages/industries/Aerospace';
import Nuclear from './components/pages/industries/Nuclear';
import Robotics from './components/pages/industries/Robotics';
import Defense from './components/pages/industries/Defense';

// About pages
import CompanyProfile from './components/pages/about/CompanyProfile';
import Join from './components/pages/about/Join';

// Other pages
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Industries from './components/pages/Industries';
import Services from './components/pages/Services';

import './App.css';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <ValueProposition />
    <CompanyValues />
    <CTASection />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />

            {/* Service Routes */}
            <Route path="/services/engineering" element={<Engineering />} />
            <Route path="/services/cnc-machining" element={<CNCMachining />} />
            <Route path="/services/edm" element={<EDM />} />
            <Route path="/services/finishing" element={<Finishing />} />
            <Route path="/services/inspections-testing" element={<InspectionsTesting />} />

            {/* Industry Routes */}
            <Route path="/industries/aerospace" element={<Aerospace />} />
            <Route path="/industries/nuclear" element={<Nuclear />} />
            <Route path="/industries/robotics" element={<Robotics />} />
            <Route path="/industries/defense" element={<Defense />} />

            {/* About Routes */}
            <Route path="/about/company-profile" element={<CompanyProfile />} />
            <Route path="/about/join" element={<Join />} />

            {/* Other Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;