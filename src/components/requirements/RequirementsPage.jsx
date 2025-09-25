import React, { useState } from 'react';
import { 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  Plus,
  Calendar,
  User,
  Package
} from 'lucide-react';

export const RequirementsPage = () => {
  const [requirements, setRequirements] = useState([
    {
      id: 'REQ-001',
      title: 'Premium Cotton Fabric',
      description: 'High-quality cotton blend for export orders',
      quantity: '500 meters',
      priority: 'High',
      status: 'pending',
      assignee: 'John Smith',
      deadline: '2025-01-20',
      createdBy: 'Sarah Johnson'
    },
    {
      id: 'REQ-002',
      title: 'Silk Fabric Import',
      description: 'Pure silk material from international supplier',
      quantity: '200 meters',
      priority: 'Medium',
      status: 'in-progress',
      assignee: 'Mike Wilson',
      deadline: '2025-01-25',
      createdBy: 'David Chen'
    },
    {
      id: 'REQ-003',
      title: 'Wool Blend Material',
      description: 'Winter collection wool fabric',
      quantity: '300 meters',
      priority: 'Low',
      status: 'fulfilled',
      assignee: 'Lisa Parker',
      deadline: '2025-01-30',
      createdBy: 'Sarah Johnson'
    }
  ]);

  const columns = [
    { id: 'pending', title: 'Pending', color: 'bg-red-50 border-red-200' },
    { id: 'in-progress', title: 'In Progress', color: 'bg-yellow-50 border-yellow-200' },
    { id: 'fulfilled', title: 'Fulfilled', color: 'bg-green-50 border-green-200' }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4 text-red-500" />;
      case 'in-progress': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'fulfilled': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const moveRequirement = (id, newStatus) => {
    setRequirements(requirements.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    ));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Requirements Desk</h1>
            <p className="mt-2 text-gray-600">Track urgent requests and material requirements</p>
          </div>
          <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-4 w-4" />
            <span>New Requirement</span>
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid lg:grid-cols-3 gap-6">
        {columns.map((column) => (
          <div key={column.id} className={`rounded-lg border ${column.color} min-h-96`}>
            <div className="px-4 py-3 border-b border-current/20">
              <div className="flex items-center space-x-2">
                {getStatusIcon(column.id)}
                <h3 className="font-semibold text-gray-900">{column.title}</h3>
                <span className="text-sm text-gray-500">
                  ({requirements.filter(req => req.status === column.id).length})
                </span>
              </div>
            </div>
            
            <div className="p-4 space-y-4">
              {requirements
                .filter(req => req.status === column.id)
                .map((requirement) => (
                  <div key={requirement.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium text-gray-900 text-sm">{requirement.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(requirement.priority)}`}>
                        {requirement.priority}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-3">{requirement.description}</p>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <Package className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-600">{requirement.quantity}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{requirement.assignee}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(requirement.deadline).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 text-xs text-gray-500">
                      Created by: {requirement.createdBy}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-3 flex space-x-2">
                      {requirement.status === 'pending' && (
                        <button
                          onClick={() => moveRequirement(requirement.id, 'in-progress')}
                          className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition-colors"
                        >
                          Start Work
                        </button>
                      )}
                      {requirement.status === 'in-progress' && (
                        <button
                          onClick={() => moveRequirement(requirement.id, 'fulfilled')}
                          className="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 transition-colors"
                        >
                          Complete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};