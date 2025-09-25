import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ArrowRight, Package, Users, BarChart3 } from 'lucide-react';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-700" />
              <span className="text-xl font-bold text-gray-900">Binder</span>
            </div>
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Binder – Textile Industry's
              <span className="block text-blue-700">Inventory & Vendor OS</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your textile operations with our comprehensive platform for inventory management, 
              vendor relationships, and supply chain optimization.
            </p>
            <div className="mt-10">
              <Link
                to="/signup"
                className="inline-flex items-center space-x-2 bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything you need to manage your textile business
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Package className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Inventory Management
              </h3>
              <p className="text-gray-600">
                Track SKUs, fabric types, stock quantities, and import/export status with ease.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Vendor Network
              </h3>
              <p className="text-gray-600">
                Manage your supplier relationships and buyer connections in one centralized platform.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <BarChart3 className="h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Requirements Tracking
              </h3>
              <p className="text-gray-600">
                Streamline urgent requests with Kanban-style boards for better workflow management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Credentials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Try the Demo</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Master Admin</h4>
              <p className="text-sm text-gray-600 mb-3">Full system access</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>admin@binder.com</div>
                <div>admin123</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Company Admin</h4>
              <p className="text-sm text-gray-600 mb-3">Company management</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>company@textilex.com</div>
                <div>company123</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Manager</h4>
              <p className="text-sm text-gray-600 mb-3">Limited access</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>manager@textilex.com</div>
                <div>manager123</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="h-6 w-6" />
            <span className="text-lg font-bold">Binder</span>
          </div>
          <p className="text-gray-400">
            © 2025 Binder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};