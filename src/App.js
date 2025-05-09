import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LocalServicesPage from './pages/LocalServicesPage';
import GlobalServicesPage from './pages/GlobalServicesPage';
import ClientsPage from './pages/ClientsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="local-services" element={<LocalServicesPage />} />
          <Route path="global-services" element={<GlobalServicesPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;