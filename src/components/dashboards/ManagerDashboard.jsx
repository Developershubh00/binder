import React from 'react';
import { 
  Package, 
  ClipboardList, 
  Users, 
  AlertTriangle,
  Eye,
  Search
} from 'lucide-react';

export const ManagerDashboard = () => {
  const limitedStats = [
    {
      title: 'Assigned Inventory',
      value: '847',
      unit: 'SKUs',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      title: 'My Requirements',
      value: '5',
      unit: 'Active',
      icon: ClipboardList,
      color: 'text-green-600'
    },
    {
      title: 'Available Vendors',
      value: '12',
      unit: 'Contacts',
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  const myRequirements = [
    {
      id: 'REQ-001',
      item: 'Premium Cotton Fabric',
      quantity: '500 meters',
      priority: 'High',
      status: 'Pending',
      deadline: '2025-01-20'
    },
    {
      id: 'REQ-002', 
      item: 'Silk Blend Material',
      quantity: '200 meters',
      priority: 'Medium',
      status: 'In Progress',
      deadline: '2025-01-25'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Manager Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage your assigned inventory and requirements</p>
      </div>

      {/* Limited Access Notice */}
      <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
        <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
        <div>
          <h3 className="text-sm font-medium text-blue-900">Limited Access</h3>
          <p className="text-sm text-blue-700 mt-1">
            You have manager-level access. Contact your Company Admin for additional permissions.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {limitedStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <Icon className={`h-8 w-8 ${stat.color}`} />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.unit}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* My Requirements */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">My Requirements</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {myRequirements.map((req) => (
                <div key={req.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{req.item}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      req.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {req.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{req.quantity}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className={`px-2 py-1 rounded-full ${
                      req.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {req.status}
                    </span>
                    <span className="text-gray-500">Due: {req.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Available Actions</h3>
          </div>
          <div className="p-6 space-y-4">
            <button className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Search className="h-6 w-6 text-blue-600" />
                <div>
                  <h4 className="font-medium text-gray-900">View Inventory</h4>
                  <p className="text-sm text-gray-600">Browse assigned products</p>
                </div>
              </div>
            </button>
            
            <button className="w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <ClipboardList className="h-6 w-6 text-green-600" />
                <div>
                  <h4 className="font-medium text-gray-900">Submit Requirement</h4>
                  <p className="text-sm text-gray-600">Request new materials</p>
                </div>
              </div>
            </button>
            
            <button className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-purple-600" />
                <div>
                  <h4 className="font-medium text-gray-900">Contact Vendors</h4>
                  <p className="text-sm text-gray-600">View supplier directory</p>
                </div>
              </div>
            </button>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 text-gray-500 mt-0.5" />
                <div className="text-xs text-gray-600">
                  <p className="font-medium">Note:</p>
                  <p>Some features require Company Admin approval.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};