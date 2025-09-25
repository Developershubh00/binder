import React from 'react';
import { 
  Package, 
  Users, 
  AlertTriangle, 
  TrendingUp,
  Bell,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export const CompanyDashboard = () => {
  const snapshots = [
    {
      title: 'Total Inventory',
      value: '2,847',
      unit: 'SKUs',
      change: '+12%',
      trend: 'up',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      title: 'Active Vendors',
      value: '34',
      unit: 'Partners',
      change: '+3',
      trend: 'up', 
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Urgent Requirements',
      value: '7',
      unit: 'Pending',
      change: '-2',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      title: 'Monthly Growth',
      value: '18%',
      unit: 'Revenue',
      change: '+5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  const notifications = [
    {
      id: '1',
      type: 'urgent',
      title: 'Low Stock Alert',
      message: 'Cotton fabric #CTN-001 is running low (12 units remaining)',
      time: '10 minutes ago'
    },
    {
      id: '2',
      type: 'info',
      title: 'New Vendor Request',
      message: 'Global Textiles Inc. has requested to join your vendor network',
      time: '2 hours ago'
    },
    {
      id: '3',
      type: 'success',
      title: 'Requirement Fulfilled',
      message: 'Silk fabric requirement #REQ-047 has been completed',
      time: '4 hours ago'
    },
    {
      id: '4',
      type: 'info',
      title: 'Export Shipment',
      message: 'Shipment #SHP-234 to Germany is ready for dispatch',
      time: '6 hours ago'
    }
  ];

  const getNotificationColor = (type) => {
    switch (type) {
      case 'urgent': return 'border-l-red-500 bg-red-50';
      case 'success': return 'border-l-green-500 bg-green-50';
      case 'info': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Company Dashboard</h1>
        <p className="mt-2 text-gray-600">Overview of your textile operations and key metrics</p>
      </div>

      {/* Snapshot Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {snapshots.map((snapshot) => {
          const Icon = snapshot.icon;
          return (
            <div key={snapshot.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Icon className={`h-8 w-8 ${snapshot.color}`} />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  snapshot.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {snapshot.trend === 'up' ? (
                    <ArrowUp className="h-4 w-4" />
                  ) : (
                    <ArrowDown className="h-4 w-4" />
                  )}
                  <span>{snapshot.change}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{snapshot.value}</h3>
                <p className="text-sm text-gray-600">{snapshot.unit}</p>
              </div>
              <h4 className="mt-2 text-sm font-medium text-gray-700">{snapshot.title}</h4>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Notifications Feed */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-2">
              <Bell className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`border-l-4 pl-4 py-3 ${getNotificationColor(notification.type)}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                        <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
                      </div>
                      <span className="text-xs text-gray-500 ml-4 whitespace-nowrap">
                        {notification.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6 space-y-4">
              <button className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Package className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">Add Product</h4>
                    <p className="text-sm text-gray-600">Add new inventory item</p>
                  </div>
                </div>
              </button>
              
              <button className="w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-green-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">New Requirement</h4>
                    <p className="text-sm text-gray-600">Create urgent request</p>
                  </div>
                </div>
              </button>
              
              <button className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-purple-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">Invite Vendor</h4>
                    <p className="text-sm text-gray-600">Add new supplier</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6 space-y-3">
              <div className="text-sm">
                <span className="text-gray-900 font-medium">Sarah Johnson</span>
                <span className="text-gray-600"> added 50 units of Cotton #CTN-002</span>
                <div className="text-xs text-gray-500 mt-1">30 minutes ago</div>
              </div>
              <div className="text-sm">
                <span className="text-gray-900 font-medium">Mike Wilson</span>
                <span className="text-gray-600"> updated requirement #REQ-048</span>
                <div className="text-xs text-gray-500 mt-1">1 hour ago</div>
              </div>
              <div className="text-sm">
                <span className="text-gray-900 font-medium">Global Textiles</span>
                <span className="text-gray-600"> joined vendor network</span>
                <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};