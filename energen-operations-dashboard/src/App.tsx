import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OperationsDashboard from './pages/OperationsDashboard';
import TechnicianManagement from './pages/TechnicianManagement';
import EquipmentTracking from './pages/EquipmentTracking';
import Analytics from './pages/Analytics';
import './index.css'; // Ensure Tailwind styles are imported

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="bg-energen-blue text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold font-heading">Energen Operations</Link>
            <ul className="flex space-x-4 font-sans">
              <li><Link to="/" className="hover:text-energen-orange">Dashboard</Link></li>
              <li><Link to="/technicians" className="hover:text-energen-orange">Technicians</Link></li>
              <li><Link to="/equipment" className="hover:text-energen-orange">Equipment</Link></li>
              <li><Link to="/analytics" className="hover:text-energen-orange">Analytics</Link></li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<OperationsDashboard />} />
            <Route path="/technicians" element={<TechnicianManagement />} />
            <Route path="/equipment" element={<EquipmentTracking />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <p>&copy; 2025 Energen Corp. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
