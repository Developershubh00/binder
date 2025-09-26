import React, { useState } from 'react';
import { 
  Users, 
  Building2, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  XCircle,
  TrendingUp,
  Calendar,
  Search,
  Brain,
  Settings,
  Bell,
  Package,
  FileText,
  Shield,
  BarChart3
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

  const [pendingApprovals, setPendingApprovals] = useState([
    {
      id: '1',
      type: 'inventory',
      action: 'Add Product',
      user: 'John Smith',
      company: 'TextileX Manufacturing',
      details: 'Cotton Blend - 500 meters',
      timestamp: '2025-01-16 10:30 AM',
      priority: 'medium'
    },
    {
      id: '2',
      type: 'user',
      action: 'Manager Access Request',
      user: 'Sarah Johnson',
      company: 'TextileX Manufacturing',
      details: 'Requesting inventory management access',
      timestamp: '2025-01-16 09:15 AM',
      priority: 'high'
    },
    {
      id: '3',
      type: 'inventory',
      action: 'Delete Product',
      user: 'Mike Wilson',
      company: 'Global Fabrics Ltd',
      details: 'SKU: SLK-002 - Pure Silk',
      timestamp: '2025-01-16 08:45 AM',
      priority: 'low'
    }
  ]);

  const [aiSearchQuery, setAiSearchQuery] = useState('');
  const [showAiSearch, setShowAiSearch] = useState(false);

  const updateCompanyStatus = (id, newStatus) => {
    setCompanies(companies.map(company => 
      company.id === id ? { ...company, status: newStatus } : company
    ));
  };

  const handleApproval = (id, action) => {
    const approval = pendingApprovals.find(a => a.id === id);
    if (action === 'approve') {
      alert(`Approved: ${approval.action} for ${approval.user}`);
    } else {
      alert(`Rejected: ${approval.action} for ${approval.user}`);
    }
    setPendingApprovals(pendingApprovals.filter(a => a.id !== id));
  };

  const handleAiSearch = () => {
    if (aiSearchQuery.trim()) {
      alert(`AI Search: "${aiSearchQuery}" - Results would appear here with intelligent insights and recommendations.`);
      setAiSearchQuery('');
    }
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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
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
    },
    {
      name: 'Pending Approvals',
      value: pendingApprovals.length,
      icon: Bell,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Master Admin Dashboard</h1>
            <p className="mt-2 text-gray-600">Monitor and manage company registrations and platform activity</p>
          </div>
          
          {/* AI Intelligence Search */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowAiSearch(!showAiSearch)}
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Brain className="h-4 w-4" />
              <span>AI Intelligence</span>
            </button>
          </div>
        </div>
        
        {/* AI Search Bar */}
        {showAiSearch && (
          <div className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
            <div className="flex items-center space-x-3 mb-3">
              <Brain className="h-6 w-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">AI Intelligence Search Engine</h3>
            </div>
            <div className="flex space-x-3">
              <div className="flex-1 relative">
                <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Ask AI about inventory trends, company performance, or get intelligent insights..."
                  value={aiSearchQuery}
                  onChange={(e) => setAiSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAiSearch()}
                  className="pl-10 w-full px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white"
                />
              </div>
              <button
                onClick={handleAiSearch}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Search
              </button>
            </div>
            <div className="mt-3 text-sm text-gray-600">
              <p>Try: "Show me low stock alerts", "Which companies need attention?", "Inventory trends this month"</p>
            </div>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
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

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Pending Approvals */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-2">
            <Shield className="h-5 w-5 text-orange-600" />
            <h2 className="text-lg font-semibold text-gray-900">Pending Approvals</h2>
            <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
              {pendingApprovals.length}
            </span>
          </div>
          <div className="p-6 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              {pendingApprovals.map((approval) => (
                <div key={approval.id} className={`p-4 rounded-lg border-l-4 ${getPriorityColor(approval.priority)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm">{approval.action}</h4>
                      <p className="text-sm text-gray-600">{approval.user} - {approval.company}</p>
                      <p className="text-xs text-gray-500 mt-1">{approval.details}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getPriorityColor(approval.priority)}`}>
                      {approval.priority}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-gray-500">{approval.timestamp}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleApproval(approval.id, 'approve')}
                        className="text-green-600 hover:text-green-700 text-xs font-medium px-2 py-1 bg-green-50 rounded hover:bg-green-100 transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleApproval(approval.id, 'reject')}
                        className="text-red-600 hover:text-red-700 text-xs font-medium px-2 py-1 bg-red-50 rounded hover:bg-red-100 transition-colors"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
      
      {/* System Controls */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center space-x-3 mb-4">
          <Settings className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">System Controls</h3>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <button className="flex items-center space-x-2 bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-900">Analytics Dashboard</span>
          </button>
          <button className="flex items-center space-x-2 bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
            <Package className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-gray-900">Global Inventory</span>
          </button>
          <button className="flex items-center space-x-2 bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
            <FileText className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-900">System Reports</span>
          </button>
          <button className="flex items-center space-x-2 bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
            <Shield className="h-5 w-5 text-red-600" />
            <span className="text-sm font-medium text-gray-900">Security Center</span>
          </button>
        </div>
      </div>
    </div>
  );
};