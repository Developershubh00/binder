// import React, { useState } from 'react';
// import { 
//   Package, 
//   Plus, 
//   Search, 
//   Filter,
//   Download,
//   Upload,
//   Edit,
//   Trash2,
//   X
// } from 'lucide-react';

// export const InventoryPage = () => {
//   const [products, setProducts] = useState([
//     {
//       id: '1',
//       sku: 'CTN-001',
//       fabricType: 'Cotton Blend',
//       stockQty: 1250,
//       unit: 'meters',
//       status: 'export',
//       lastUpdated: '2025-01-16',
//       price: 12.50
//     },
//     {
//       id: '2',
//       sku: 'SLK-002',
//       fabricType: 'Pure Silk',
//       stockQty: 340,
//       unit: 'meters',
//       status: 'import',
//       lastUpdated: '2025-01-15',
//       price: 45.00
//     },
//     {
//       id: '3',
//       sku: 'WOL-003',
//       fabricType: 'Merino Wool',
//       stockQty: 580,
//       unit: 'meters',
//       status: 'domestic',
//       lastUpdated: '2025-01-16',
//       price: 28.75
//     },
//     {
//       id: '4',
//       sku: 'LIN-004',
//       fabricType: 'Linen Blend',
//       stockQty: 890,
//       unit: 'meters',
//       status: 'export',
//       lastUpdated: '2025-01-14',
//       price: 22.30
//     }
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedStatus, setSelectedStatus] = useState('all');
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [newProduct, setNewProduct] = useState({
//     sku: '',
//     fabricType: '',
//     stockQty: '',
//     unit: 'meters',
//     status: 'domestic',
//     price: ''
//   });

//   const filteredProducts = products.filter(product => {
//     const matchesSearch = product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          product.fabricType.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = selectedStatus === 'all' || product.status === selectedStatus;
//     return matchesSearch && matchesStatus;
//   });

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'export': return 'bg-blue-100 text-blue-800';
//       case 'import': return 'bg-green-100 text-green-800';
//       case 'domestic': return 'bg-gray-100 text-gray-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     const product = {
//       id: Date.now().toString(),
//       ...newProduct,
//       stockQty: parseInt(newProduct.stockQty),
//       price: parseFloat(newProduct.price),
//       lastUpdated: new Date().toISOString().split('T')[0]
//     };
//     setProducts([...products, product]);
//     setNewProduct({
//       sku: '',
//       fabricType: '',
//       stockQty: '',
//       unit: 'meters',
//       status: 'domestic',
//       price: ''
//     });
//     setShowAddModal(false);
//   };

//   return (
//     <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
//       <div className="mb-8">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
//           <div>
//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Inventory Management</h1>
//             <p className="mt-2 text-gray-600">Manage your fabric inventory and stock levels</p>
//           </div>
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             <Plus className="h-4 w-4" />
//             <span>Add Product</span>
//           </button>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
//         <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//           <div className="flex-1 relative">
//             <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <input
//               type="text"
//               placeholder="Search by SKU or fabric type..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
          
//           <div className="flex items-center space-x-2">
//             <Filter className="h-4 w-4 text-gray-400" />
//             <select
//               value={selectedStatus}
//               onChange={(e) => setSelectedStatus(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="all">All Status</option>
//               <option value="export">Export</option>
//               <option value="import">Import</option>
//               <option value="domestic">Domestic</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Product Table */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   SKU
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Fabric Type
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Stock Quantity
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Price/Unit
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Last Updated
//                 </th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredProducts.map((product) => (
//                 <tr key={product.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {product.sku}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.fabricType}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.stockQty.toLocaleString()} {product.unit}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(product.status)}`}>
//                       {product.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     ${product.price.toFixed(2)}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {new Date(product.lastUpdated).toLocaleDateString()}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <div className="flex justify-end space-x-2">
//                       <button className="text-blue-600 hover:text-blue-900">
//                         <Edit className="h-4 w-4" />
//                       </button>
//                       <button className="text-red-600 hover:text-red-900">
//                         <Trash2 className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Add Product Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-md w-full max-h-screen overflow-y-auto">
//             <div className="flex justify-between items-center p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900">Add New Product</h3>
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
            
//             <form onSubmit={handleAddProduct} className="p-6 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">SKU *</label>
//                 <input
//                   type="text"
//                   required
//                   value={newProduct.sku}
//                   onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="e.g., CTN-001"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Fabric Type *</label>
//                 <input
//                   type="text"
//                   required
//                   value={newProduct.fabricType}
//                   onChange={(e) => setNewProduct({ ...newProduct, fabricType: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="e.g., Cotton Blend"
//                 />
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Quantity *</label>
//                   <input
//                     type="number"
//                     required
//                     value={newProduct.stockQty}
//                     onChange={(e) => setNewProduct({ ...newProduct, stockQty: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="0"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
//                   <select
//                     value={newProduct.unit}
//                     onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="meters">Meters</option>
//                     <option value="yards">Yards</option>
//                     <option value="pieces">Pieces</option>
//                     <option value="kg">Kilograms</option>
//                   </select>
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Price per Unit *</label>
//                 <input
//                   type="number"
//                   step="0.01"
//                   required
//                   value={newProduct.price}
//                   onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="0.00"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//                 <select
//                   value={newProduct.status}
//                   onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="domestic">Domestic</option>
//                   <option value="import">Import</option>
//                   <option value="export">Export</option>
//                 </select>
//               </div>
              
//               <div className="flex space-x-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowAddModal(false)}
//                   className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Add Product
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// import React, { useState } from 'react';
// import { Package, Plus, Search, Filter, CreditCard as Edit, Trash2, X, Zap, CheckCircle, BarChart3, AlertTriangle, PackageX, TrendingDown, Users, ShoppingCart, Move } from 'lucide-react';

// export const InventoryPage = () => {
//   const [products, setProducts] = useState([
//     {
//       id: '1',
//       sku: 'CTN-001',
//       fabricType: 'Cotton Blend',
//       stockQty: 1250,
//       unit: 'meters',
//       status: 'export',
//       lastUpdated: '2025-01-16',
//       price: 12.50
//     },
//     {
//       id: '2',
//       sku: 'SLK-002',
//       fabricType: 'Pure Silk',
//       stockQty: 340,
//       unit: 'meters',
//       status: 'import',
//       lastUpdated: '2025-01-15',
//       price: 45.00
//     },
//     {
//       id: '3',
//       sku: 'WOL-003',
//       fabricType: 'Merino Wool',
//       stockQty: 580,
//       unit: 'meters',
//       status: 'domestic',
//       lastUpdated: '2025-01-16',
//       price: 28.75
//     },
//     {
//       id: '4',
//       sku: 'LIN-004',
//       fabricType: 'Linen Blend',
//       stockQty: 890,
//       unit: 'meters',
//       status: 'export',
//       lastUpdated: '2025-01-14',
//       price: 22.30
//     }
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedStatus, setSelectedStatus] = useState('all');
//   const [showQuickActions, setShowQuickActions] = useState(false);
//   const [newProduct, setNewProduct] = useState({
//     sku: '',
//     fabricType: '',
//     stockQty: '',
//     unit: 'meters',
//     status: 'domestic',
//     price: ''
//   });

//   const quickActions = [
//     {
//       id: 'add-product',
//       title: 'Add Product',
//       icon: Plus,
//       color: 'bg-orange-500 hover:bg-orange-600',
//       description: 'Add new inventory item'
//     },
//     {
//       id: 'check-status',
//       title: 'Check Status',
//       icon: CheckCircle,
//       color: 'bg-blue-500 hover:bg-blue-600',
//       description: 'View product status'
//     },
//     {
//       id: 'inventory-check',
//       title: 'Inventory Check',
//       icon: BarChart3,
//       color: 'bg-cyan-500 hover:bg-cyan-600',
//       description: 'Full inventory audit'
//     },
//     {
//       id: 'delete-product',
//       title: 'Delete Product',
//       icon: Trash2,
//       color: 'bg-red-500 hover:bg-red-600',
//       description: 'Remove inventory item'
//     },
//     {
//       id: 'out-of-stock',
//       title: 'Out of Stock',
//       icon: PackageX,
//       color: 'bg-orange-600 hover:bg-orange-700',
//       description: 'Mark as out of stock'
//     },
//     {
//       id: 'low-stock',
//       title: 'Low Stock',
//       icon: TrendingDown,
//       color: 'bg-yellow-500 hover:bg-yellow-600',
//       description: 'Low stock alerts'
//     },
//     {
//       id: 'vendor-assignment',
//       title: 'Upcoming Vendor Assignment',
//       icon: Users,
//       color: 'bg-purple-500 hover:bg-purple-600',
//       description: 'Assign to vendor'
//     },
//     {
//       id: 'buyer-assignment',
//       title: 'Upcoming Buyer Assignment',
//       icon: ShoppingCart,
//       color: 'bg-indigo-500 hover:bg-indigo-600',
//       description: 'Assign to buyer'
//     }
//   ];

//   const filteredProducts = products.filter(product => {
//     const matchesSearch = product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          product.fabricType.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = selectedStatus === 'all' || product.status === selectedStatus;
//     return matchesSearch && matchesStatus;
//   });

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'export': return 'bg-blue-100 text-blue-800';
//       case 'import': return 'bg-green-100 text-green-800';
//       case 'domestic': return 'bg-gray-100 text-gray-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const handleQuickAction = (actionId) => {
//     // All actions require Master Admin approval
//     alert(`${actionId} request sent to Master Admin for approval. You will be notified once approved.`);
//     setShowQuickActions(false);
//   };

//   return (
//     <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
//       <div className="mb-8">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
//           <div>
//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Inventory Management</h1>
//             <p className="mt-2 text-gray-600">Manage your fabric inventory and stock levels</p>
//           </div>
//           <button
//             onClick={() => setShowQuickActions(true)}
//             className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             <Zap className="h-4 w-4" />
//             <span>Quick Actions</span>
//           </button>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
//         <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//           <div className="flex-1 relative">
//             <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <input
//               type="text"
//               placeholder="Search by SKU or fabric type..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
          
//           <div className="flex items-center space-x-2">
//             <Filter className="h-4 w-4 text-gray-400" />
//             <select
//               value={selectedStatus}
//               onChange={(e) => setSelectedStatus(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="all">All Status</option>
//               <option value="export">Export</option>
//               <option value="import">Import</option>
//               <option value="domestic">Domestic</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Product Table */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   SKU
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Fabric Type
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Stock Quantity
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Price/Unit
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Last Updated
//                 </th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredProducts.map((product) => (
//                 <tr key={product.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {product.sku}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.fabricType}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.stockQty.toLocaleString()} {product.unit}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(product.status)}`}>
//                       {product.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     ${product.price.toFixed(2)}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {new Date(product.lastUpdated).toLocaleDateString()}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <div className="flex justify-end space-x-2">
//                       <button className="text-blue-600 hover:text-blue-900">
//                         <Edit className="h-4 w-4" />
//                       </button>
//                       <button className="text-red-600 hover:text-red-900">
//                         <Trash2 className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Quick Actions Popup */}
//       {showQuickActions && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto shadow-2xl">
//             <div className="flex justify-between items-center p-6 border-b border-gray-200">
//               <div className="flex items-center space-x-3">
//                 <Zap className="h-6 w-6 text-blue-600" />
//                 <h3 className="text-xl font-semibold text-gray-900">IMS Quick Actions</h3>
//               </div>
//               <button
//                 onClick={() => setShowQuickActions(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
            
//             <div className="p-8">
//               <div className="mb-6">
//                 <p className="text-gray-600">Select an action to perform. All changes require Master Admin approval.</p>
//               </div>
              
//               {/* 4x2 Grid of Actions */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 {quickActions.map((action) => {
//                   const Icon = action.icon;
//                   return (
//                     <button
//                       key={action.id}
//                       onClick={() => handleQuickAction(action.title)}
//                       className={`group relative p-6 rounded-xl text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${action.color}`}
//                     >
//                       <div className="flex flex-col items-center text-center space-y-3">
//                         <div className="p-3 bg-white bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all">
//                           <Icon className="h-8 w-8" />
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-sm mb-1">{action.title}</h4>
//                           <p className="text-xs opacity-90">{action.description}</p>
//                         </div>
//                       </div>
                      
//                       {/* Drag handle */}
//                       <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                         <Move className="h-4 w-4" />
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
              
//               <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//                 <div className="flex items-start space-x-3">
//                   <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
//                   <div>
//                     <h4 className="text-sm font-medium text-yellow-800">Approval Required</h4>
//                     <p className="text-sm text-yellow-700 mt-1">
//                       All inventory changes require Master Admin approval. You will receive a notification once your request is processed.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState } from 'react';
import { Package, Plus, Search, Filter, Edit, Trash2, X, Zap, CheckCircle, BarChart3, AlertTriangle, PackageX, TrendingDown, Users, ShoppingCart, Move, Truck, Globe, Calculator, FileText, Tag, Scissors, Palette, RefreshCw, Target, Clock, DollarSign, Archive, Shield } from 'lucide-react';

export default function InventoryPage() {
  const [products, setProducts] = useState([
    {
      id: '1',
      sku: 'CTN-001',
      fabricType: 'Cotton Blend',
      stockQty: 1250,
      unit: 'meters',
      status: 'export',
      lastUpdated: '2025-01-16',
      price: 12.50,
      vendor: 'ABC Textiles',
      buyer: 'Fashion Corp',
      quality: 'A-Grade',
      color: 'White',
      weight: '180 GSM'
    },
    {
      id: '2',
      sku: 'SLK-002',
      fabricType: 'Pure Silk',
      stockQty: 340,
      unit: 'meters',
      status: 'import',
      lastUpdated: '2025-01-15',
      price: 45.00,
      vendor: 'Silk Masters Ltd',
      buyer: 'Luxury Brands Inc',
      quality: 'Premium',
      color: 'Ivory',
      weight: '120 GSM'
    },
    {
      id: '3',
      sku: 'WOL-003',
      fabricType: 'Merino Wool',
      stockQty: 580,
      unit: 'meters',
      status: 'domestic',
      lastUpdated: '2025-01-16',
      price: 28.75,
      vendor: 'Wool Works',
      buyer: 'Winter Wear Co',
      quality: 'A-Grade',
      color: 'Gray',
      weight: '250 GSM'
    },
    {
      id: '4',
      sku: 'LIN-004',
      fabricType: 'Linen Blend',
      stockQty: 890,
      unit: 'meters',
      status: 'export',
      lastUpdated: '2025-01-14',
      price: 22.30,
      vendor: 'Natural Fibers',
      buyer: 'Summer Collections',
      quality: 'B-Grade',
      color: 'Beige',
      weight: '200 GSM'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [activeAction, setActiveAction] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({});

  const quickActions = [
    {
      id: 'add-product',
      title: 'Add Product',
      icon: Plus,
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Add new inventory item',
      category: 'basic'
    },
    {
      id: 'edit-product',
      title: 'Edit Product',
      icon: Edit,
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Modify product details',
      category: 'basic'
    },
    {
      id: 'delete-product',
      title: 'Delete Product',
      icon: Trash2,
      color: 'bg-red-500 hover:bg-red-600',
      description: 'Remove inventory item',
      category: 'basic'
    },
    {
      id: 'check-status',
      title: 'Check Status',
      icon: CheckCircle,
      color: 'bg-cyan-500 hover:bg-cyan-600',
      description: 'View product status',
      category: 'monitoring'
    },
    {
      id: 'inventory-audit',
      title: 'Inventory Audit',
      icon: BarChart3,
      color: 'bg-indigo-500 hover:bg-indigo-600',
      description: 'Full inventory audit',
      category: 'monitoring'
    },
    {
      id: 'stock-adjustment',
      title: 'Stock Adjustment',
      icon: RefreshCw,
      color: 'bg-purple-500 hover:bg-purple-600',
      description: 'Adjust stock levels',
      category: 'monitoring'
    },
    {
      id: 'vendor-assignment',
      title: 'Vendor Assignment',
      icon: Users,
      color: 'bg-orange-500 hover:bg-orange-600',
      description: 'Assign/change vendor',
      category: 'vendor'
    },
    {
      id: 'buyer-assignment',
      title: 'Buyer Assignment',
      icon: ShoppingCart,
      color: 'bg-pink-500 hover:bg-pink-600',
      description: 'Assign/change buyer',
      category: 'buyer'
    },
    {
      id: 'export-management',
      title: 'Export Management',
      icon: Globe,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Manage export orders',
      category: 'trade'
    },
    {
      id: 'import-management',
      title: 'Import Management',
      icon: Truck,
      color: 'bg-green-600 hover:bg-green-700',
      description: 'Manage import orders',
      category: 'trade'
    },
    {
      id: 'quality-control',
      title: 'Quality Control',
      icon: Shield,
      color: 'bg-yellow-500 hover:bg-yellow-600',
      description: 'Update quality status',
      category: 'quality'
    },
    {
      id: 'price-update',
      title: 'Price Update',
      icon: DollarSign,
      color: 'bg-emerald-500 hover:bg-emerald-600',
      description: 'Update product pricing',
      category: 'pricing'
    },
    {
      id: 'fabric-cutting',
      title: 'Fabric Cutting',
      icon: Scissors,
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Record fabric cutting',
      category: 'production'
    },
    {
      id: 'color-matching',
      title: 'Color Matching',
      icon: Palette,
      color: 'bg-violet-500 hover:bg-violet-600',
      description: 'Color batch matching',
      category: 'production'
    },
    {
      id: 'batch-tracking',
      title: 'Batch Tracking',
      icon: Tag,
      color: 'bg-teal-500 hover:bg-teal-600',
      description: 'Track fabric batches',
      category: 'production'
    },
    {
      id: 'reorder-point',
      title: 'Reorder Point',
      icon: Target,
      color: 'bg-amber-500 hover:bg-amber-600',
      description: 'Set reorder levels',
      category: 'planning'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.fabricType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || product.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'export': return 'bg-blue-100 text-blue-800';
      case 'import': return 'bg-green-100 text-green-800';
      case 'domestic': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleQuickAction = (action) => {
    setActiveAction(action);
    setFormData({});
    if (action.id === 'edit-product' || action.id === 'delete-product') {
      // For edit/delete, we'll show product selection first
      return;
    }
    setShowQuickActions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate approval process
    alert(`${activeAction.title} request submitted successfully!\n\nRequest Details:\n${JSON.stringify(formData, null, 2)}\n\nStatus: Pending Approval\nYour request has been sent to Organization Management for review. You will receive a notification once approved.`);
    
    setActiveAction(null);
    setSelectedProduct(null);
    setFormData({});
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    if (activeAction.id === 'edit-product') {
      setFormData({ ...product });
    } else if (activeAction.id === 'delete-product') {
      setFormData({ productId: product.id, sku: product.sku, fabricType: product.fabricType });
    }
  };

  const renderActionForm = () => {
    if (!activeAction) return null;

    const commonInputClass = "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
    const labelClass = "block text-sm font-medium text-gray-700 mb-1";

    switch (activeAction.id) {
      case 'add-product':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>SKU *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., CTN-005"
                  className={commonInputClass}
                  value={formData.sku || ''}
                  onChange={(e) => setFormData({...formData, sku: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClass}>Fabric Type *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Cotton Blend"
                  className={commonInputClass}
                  value={formData.fabricType || ''}
                  onChange={(e) => setFormData({...formData, fabricType: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClass}>Stock Quantity *</label>
                <input
                  type="number"
                  required
                  placeholder="1000"
                  className={commonInputClass}
                  value={formData.stockQty || ''}
                  onChange={(e) => setFormData({...formData, stockQty: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClass}>Unit</label>
                <select
                  className={commonInputClass}
                  value={formData.unit || 'meters'}
                  onChange={(e) => setFormData({...formData, unit: e.target.value})}
                >
                  <option value="meters">Meters</option>
                  <option value="yards">Yards</option>
                  <option value="rolls">Rolls</option>
                  <option value="pieces">Pieces</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Status</label>
                <select
                  className={commonInputClass}
                  value={formData.status || 'domestic'}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  <option value="domestic">Domestic</option>
                  <option value="export">Export</option>
                  <option value="import">Import</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Price per Unit *</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  placeholder="12.50"
                  className={commonInputClass}
                  value={formData.price || ''}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClass}>Vendor</label>
                <input
                  type="text"
                  placeholder="Vendor Name"
                  className={commonInputClass}
                  value={formData.vendor || ''}
                  onChange={(e) => setFormData({...formData, vendor: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClass}>Buyer</label>
                <input
                  type="text"
                  placeholder="Buyer Name"
                  className={commonInputClass}
                  value={formData.buyer || ''}
                  onChange={(e) => setFormData({...formData, buyer: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClass}>Quality Grade</label>
                <select
                  className={commonInputClass}
                  value={formData.quality || 'A-Grade'}
                  onChange={(e) => setFormData({...formData, quality: e.target.value})}
                >
                  <option value="Premium">Premium</option>
                  <option value="A-Grade">A-Grade</option>
                  <option value="B-Grade">B-Grade</option>
                  <option value="C-Grade">C-Grade</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Color</label>
                <input
                  type="text"
                  placeholder="e.g., White, Blue"
                  className={commonInputClass}
                  value={formData.color || ''}
                  onChange={(e) => setFormData({...formData, color: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClass}>Weight (GSM)</label>
                <input
                  type="number"
                  placeholder="180"
                  className={commonInputClass}
                  value={formData.weight || ''}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setActiveAction(null)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit for Approval
              </button>
            </div>
          </form>
        );

      case 'edit-product':
        if (!selectedProduct) {
          return (
            <div>
              <h4 className="text-lg font-medium mb-4">Select Product to Edit</h4>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {products.map(product => (
                  <div
                    key={product.id}
                    onClick={() => handleProductSelect(product)}
                    className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="font-medium">{product.sku} - {product.fabricType}</div>
                    <div className="text-sm text-gray-600">Stock: {product.stockQty} {product.unit}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-blue-50 p-3 rounded-lg mb-4">
              <h4 className="font-medium text-blue-900">Editing: {selectedProduct.sku}</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>SKU</label>
                <input
                  type="text"
                  className={commonInputClass}
                  value={formData.sku || ''}
                  onChange={(e) => setFormData({...formData, sku: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClass}>Fabric Type</label>
                <input
                  type="text"
                  className={commonInputClass}
                  value={formData.fabricType || ''}
                  onChange={(e) => setFormData({...formData, fabricType: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClass}>Stock Quantity</label>
                <input
                  type="number"
                  className={commonInputClass}
                  value={formData.stockQty || ''}
                  onChange={(e) => setFormData({...formData, stockQty: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClass}>Price per Unit</label>
                <input
                  type="number"
                  step="0.01"
                  className={commonInputClass}
                  value={formData.price || ''}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => {setActiveAction(null); setSelectedProduct(null);}}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit Changes for Approval
              </button>
            </div>
          </form>
        );

      case 'vendor-assignment':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={labelClass}>Select Product</label>
              <select
                required
                className={commonInputClass}
                value={formData.productId || ''}
                onChange={(e) => setFormData({...formData, productId: e.target.value})}
              >
                <option value="">Select Product</option>
                {products.map(product => (
                  <option key={product.id} value={product.id}>
                    {product.sku} - {product.fabricType}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>New Vendor *</label>
              <input
                type="text"
                required
                placeholder="Enter vendor name"
                className={commonInputClass}
                value={formData.vendor || ''}
                onChange={(e) => setFormData({...formData, vendor: e.target.value})}
              />
            </div>
            <div>
              <label className={labelClass}>Reason for Change</label>
              <textarea
                className={commonInputClass}
                rows="3"
                placeholder="Explain reason for vendor change"
                value={formData.reason || ''}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setActiveAction(null)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit for Approval
              </button>
            </div>
          </form>
        );

      case 'fabric-cutting':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={labelClass}>Select Product</label>
              <select
                required
                className={commonInputClass}
                value={formData.productId || ''}
                onChange={(e) => setFormData({...formData, productId: e.target.value})}
              >
                <option value="">Select Product</option>
                {products.map(product => (
                  <option key={product.id} value={product.id}>
                    {product.sku} - {product.fabricType} (Available: {product.stockQty} {product.unit})
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Cut Quantity *</label>
                <input
                  type="number"
                  required
                  placeholder="100"
                  className={commonInputClass}
                  value={formData.cutQuantity || ''}
                  onChange={(e) => setFormData({...formData, cutQuantity: e.target.value})}
                />
              </div>
              <div>
                <label className={labelClass}>Cut Purpose</label>
                <select
                  className={commonInputClass}
                  value={formData.purpose || 'order'}
                  onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                >
                  <option value="order">Customer Order</option>
                  <option value="sample">Sample Making</option>
                  <option value="testing">Quality Testing</option>
                  <option value="damage">Damage/Wastage</option>
                </select>
              </div>
            </div>
            <div>
              <label className={labelClass}>Order/Reference Number</label>
              <input
                type="text"
                placeholder="ORD-2025-001"
                className={commonInputClass}
                value={formData.orderRef || ''}
                onChange={(e) => setFormData({...formData, orderRef: e.target.value})}
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setActiveAction(null)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit for Approval
              </button>
            </div>
          </form>
        );

      default:
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={labelClass}>Details</label>
              <textarea
                className={commonInputClass}
                rows="4"
                placeholder="Enter details for this action..."
                value={formData.details || ''}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setActiveAction(null)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit for Approval
              </button>
            </div>
          </form>
        );
    }
  };

  const groupedActions = quickActions.reduce((acc, action) => {
    if (!acc[action.category]) acc[action.category] = [];
    acc[action.category].push(action);
    return acc;
  }, {});

  const categoryTitles = {
    basic: 'Basic Operations',
    monitoring: 'Monitoring & Audit',
    vendor: 'Vendor Management',
    buyer: 'Buyer Management',
    trade: 'Import/Export',
    quality: 'Quality Control',
    pricing: 'Pricing Management',
    production: 'Production Operations',
    planning: 'Planning & Forecasting'
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Textile Inventory Management System</h1>
            <p className="mt-2 text-gray-600">Comprehensive fabric inventory management for import/export operations</p>
          </div>
          <button
            onClick={() => setShowQuickActions(true)}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Zap className="h-5 w-5" />
            <span>IMS Quick Actions</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by SKU, fabric type, vendor, or buyer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="export">Export</option>
              <option value="import">Import</option>
              <option value="domestic">Domestic</option>
            </select>
          </div>
        </div>
      </div>

      {/* Enhanced Product Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fabric Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quality</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{product.sku}</div>
                    <div className="text-sm text-gray-500">Updated: {new Date(product.lastUpdated).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{product.fabricType}</div>
                    <div className="text-sm text-gray-500">{product.color} • {product.weight}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{product.stockQty.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">{product.unit}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">${product.price.toFixed(2)}</div>
                    <div className="text-sm text-gray-500">per {product.unit.slice(0, -1)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.vendor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.buyer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.quality === 'Premium' ? 'bg-purple-100 text-purple-800' :
                      product.quality === 'A-Grade' ? 'bg-green-100 text-green-800' :
                      product.quality === 'B-Grade' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {product.quality}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button 
                        onClick={() => {
                          setActiveAction({id: 'edit-product', title: 'Edit Product', icon: Edit});
                          handleProductSelect(product);
                        }}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => {
                          setActiveAction({id: 'delete-product', title: 'Delete Product', icon: Trash2});
                          handleProductSelect(product);
                        }}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions Modal */}
      {showQuickActions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-screen overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Textile IMS Quick Actions</h3>
              </div>
              <button
                onClick={() => setShowQuickActions(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <p className="text-gray-600">Select an action to perform. All changes require Organization Management approval.</p>
              </div>
              
              {/* Categorized Actions */}
              {Object.entries(groupedActions).map(([category, actions]) => (
                <div key={category} className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                    {categoryTitles[category]}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {actions.map((action) => {
                      const Icon = action.icon;
                      return (
                        <button
                          key={action.id}
                          onClick={() => handleQuickAction(action)}
                          className={`group relative p-4 rounded-xl text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${action.color}`}
                        >
                          <div className="flex flex-col items-center text-center space-y-2">
                            <div className="p-2 bg-white bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all">
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-xs mb-1">{action.title}</h5>
                              <p className="text-xs opacity-90">{action.description}</p>
                            </div>
                          </div>
                          
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Move className="h-3 w-3" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-yellow-800">Organization Management Approval Required</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      All inventory operations require approval from Organization Management. You will receive email and system notifications once your request is processed. Typical approval time: 2-4 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Form Modal */}
      {activeAction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <activeAction.icon className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">{activeAction.title}</h3>
              </div>
              <button
                onClick={() => {setActiveAction(null); setSelectedProduct(null);}}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6">
              {renderActionForm()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}