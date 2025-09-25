import React, { useState } from 'react';
import { 
  Users, 
  Building2, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  XCircle,
  TrendingUp,
  Calendar
} from 'lucide-react';

export const MasterAdminDashboard = () => {
  const [companies, setCompanies] = useState([
    {
      id: '1',
      name: 'TextileX Manufacturing',
      owner: 'John Smith',
      email: 'company@textilex.com',
      status: 'approved',
      signupDate: '2025-01-15',
      lastLogin: '2025-01-16'
    },
    {
      id: '2',
      name: 'Global Fabrics Ltd',
      owner: 'Maria Garcia',
      email: 'admin@globalfabrics.com',
      status: 'pending',
      signupDate: '2025-01-16',
      lastLogin: null
    },
    {
      id: '3',
      name: 'Cotton Mills Inc',
      owner: 'David Chen',
      email: 'owner@cottonmills.com',
      status: 'suspended',
      signupDate: '2025-01-10',
      lastLogin: '2025-01-14'
    }
  ]);

  const [recentLogins] = useState([
    { user: 'John Smith', company: 'TextileX Manufacturing', time: '2 hours ago' },
    { user: 'Sarah Johnson', company: 'TextileX Manufacturing', time: '4 hours ago' },
    { user: 'Maria Garcia', company: 'Global Fabrics Ltd', time: '1 day ago' }
  ]);

  const updateCompanyStatus = (id, newStatus) => {
    setCompanies(companies.map(company => 
      company.id === id ? { ...company, status: newStatus } : company
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'suspended': return <XCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const stats = [
    {
      name: 'Total Companies',
      value: companies.length,
      icon: Building2,
      color: 'text-blue-600'
    },
    {
      name: 'Pending Approvals',
      value: companies.filter(c => c.status === 'pending').length,
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      name: 'Active Companies',
      value: companies.filter(c => c.status === 'approved').length,
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      name: 'Platform Growth',
      value: '+12%',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Master Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">Monitor and manage company registrations and platform activity</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <Icon className={`h-8 w-8 ${stat.color}`} />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Company Signups */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Company Registrations</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {companies.map((company) => (
                <div key={company.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Building2 className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {company.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">{company.email}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-xs text-gray-500">
                            Signed up: {new Date(company.signupDate).toLocaleDateString()}
                          </span>
                          {company.lastLogin && (
                            <span className="text-xs text-gray-500">
                              Last login: {new Date(company.lastLogin).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(company.status)}`}>
                      {getStatusIcon(company.status)}
                      <span className="capitalize">{company.status}</span>
                    </span>
                    
                    {company.status === 'pending' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => updateCompanyStatus(company.id, 'approved')}
                          className="text-green-600 hover:text-green-700 text-sm font-medium"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateCompanyStatus(company.id, 'suspended')}
                          className="text-red-600 hover:text-red-700 text-sm font-medium"
                        >
                          Suspend
                        </button>
                      </div>
                    )}
                    
                    {company.status === 'approved' && (
                      <button
                        onClick={() => updateCompanyStatus(company.id, 'suspended')}
                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Suspend
                      </button>
                    )}
                    
                    {company.status === 'suspended' && (
                      <button
                        onClick={() => updateCompanyStatus(company.id, 'approved')}
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Restore
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Login Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentLogins.map((login, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-gray-400" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{login.user}</p>
                    <p className="text-sm text-gray-500">{login.company}</p>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {login.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};