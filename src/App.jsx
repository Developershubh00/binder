import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import { Navigation } from './components/Navigation.jsx';
import { LandingPage } from './components/LandingPage.jsx';
import { LoginPage } from './components/auth/LoginPage.jsx';
import { SignupPage } from './components/auth/SignupPage.jsx';
import { MasterAdminDashboard } from './components/dashboards/MasterAdminDashboard.jsx';
import { CompanyDashboard } from './components/dashboards/CompanyDashboard.jsx';
import { ManagerDashboard } from './components/dashboards/ManagerDashboard.jsx';
import { InventoryPage } from './components/inventory/InventoryPage.jsx';
import { RequirementsPage } from './components/requirements/RequirementsPage.jsx';
import { VendorsPage } from './components/vendors/VendorsPage.jsx';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';

const DashboardRouter = () => {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" replace />;
  
  switch (user.role) {
    case 'master_admin':
      return <MasterAdminDashboard />;
    case 'company_admin':
      return <CompanyDashboard />;
    case 'manager':
      return <ManagerDashboard />;
    default:
      return <CompanyDashboard />;
  }
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              
              {/* Protected Routes */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <DashboardRouter />
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute requiredRole="master_admin">
                    <MasterAdminDashboard />
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/inventory" 
                element={
                  <ProtectedRoute>
                    <InventoryPage />
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/requirements" 
                element={
                  <ProtectedRoute>
                    <RequirementsPage />
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/vendors" 
                element={
                  <ProtectedRoute>
                    <VendorsPage />
                  </ProtectedRoute>
                } 
              />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;