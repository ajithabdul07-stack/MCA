import React, { useState } from 'react';
import {
  Menu, X, BarChart3, MapPin, Bell, Trash2, Users, Settings,
  TrendingUp, AlertCircle, CheckCircle, Clock, Phone, MoreVertical,
  Home, LogOut, Plus, Edit2, Trash, Eye, Filter, Download
} from 'lucide-react';

export default function GarbageManagementSystem() {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userRole, setUserRole] = useState('admin');

  const mockData = {
    smartBins: [
      { id: 1, location: 'Main Street', capacity: 85, status: 'full', gps: { lat: 40.7128, lng: -74.0060 } },
      { id: 2, location: 'Park Avenue', capacity: 45, status: 'partial', gps: { lat: 40.7259, lng: -74.0055 } },
      { id: 3, location: 'Downtown Center', capacity: 95, status: 'full', gps: { lat: 40.7489, lng: -73.9680 } },
      { id: 4, location: 'South District', capacity: 30, status: 'empty', gps: { lat: 40.7614, lng: -73.9776 } },
    ],
    collectors: [
      { id: 1, name: 'John Doe', status: 'active', assignedBins: 3, phone: '555-0101' },
      { id: 2, name: 'Jane Smith', status: 'on-route', assignedBins: 4, phone: '555-0102' },
      { id: 3, name: 'Mike Johnson', status: 'inactive', assignedBins: 0, phone: '555-0103' },
    ],
    complaints: [
      { id: 1, type: 'Overflowing Bin', location: 'Main Street', status: 'open', date: '2025-12-06', priority: 'high' },
      { id: 2, type: 'Missed Collection', location: 'Park Avenue', status: 'resolved', date: '2025-12-05', priority: 'medium' },
      { id: 3, type: 'Damaged Bin', location: 'Downtown', status: 'in-progress', date: '2025-12-06', priority: 'low' },
    ],
    analytics: {
      totalBins: 47,
      collectionRate: 94,
      avgCapacity: 58,
      efficiency: 87,
      complaints: 12,
      resolved: 10
    },
    notifications: [
      { id: 1, message: 'Bin #3 is full at Downtown Center', time: '5 mins ago', type: 'warning' },
      { id: 2, message: 'Collection completed at Main Street', time: '15 mins ago', type: 'success' },
      { id: 3, message: 'Collector Jane Smith is offline', time: '1 hour ago', type: 'info' },
    ]
  };

  // Dashboard Component
  const Dashboard = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Trash2} label="Total Bins" value={mockData.analytics.totalBins} color="bg-blue-500" />
        <StatCard icon={TrendingUp} label="Collection Rate" value={`${mockData.analytics.collectionRate}%`} color="bg-green-500" />
        <StatCard icon={AlertCircle} label="Complaints" value={mockData.analytics.complaints} color="bg-red-500" />
        <StatCard icon={CheckCircle} label="Resolved" value={mockData.analytics.resolved} color="bg-purple-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Bin Capacity Status</h2>
          <div className="space-y-3">
            {mockData.smartBins.map(bin => (
              <div key={bin.id} className="flex items-center justify-between">
                <span className="text-sm font-medium">{bin.location}</span>
                <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${bin.capacity > 80 ? 'bg-red-500' : bin.capacity > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
                    style={{ width: `${bin.capacity}%` }}
                  />
                </div>
                <span className="text-sm font-semibold">{bin.capacity}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Notifications</h2>
          <div className="space-y-3">
            {mockData.notifications.map(notif => (
              <div key={notif.id} className={`p-3 rounded border-l-4 ${
                notif.type === 'warning' ? 'border-yellow-400 bg-yellow-50' :
                notif.type === 'success' ? 'border-green-400 bg-green-50' :
                'border-blue-400 bg-blue-50'
              }`}>
                <p className="text-sm font-medium">{notif.message}</p>
                <p className="text-xs text-gray-500">{notif.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Admin Module
  const AdminModule = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus size={20} /> New Bin
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Manage Smart Bins</h2>
          <button className="text-gray-500 hover:text-gray-700"><Filter size={20} /></button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Location</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Capacity</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">GPS</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {mockData.smartBins.map(bin => (
                <tr key={bin.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{bin.location}</td>
                  <td className="px-6 py-4 text-sm font-semibold">{bin.capacity}%</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      bin.status === 'full' ? 'bg-red-100 text-red-800' :
                      bin.status === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>{bin.status}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">{bin.gps.lat.toFixed(3)}, {bin.gps.lng.toFixed(3)}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800"><Edit2 size={18} /></button>
                    <button className="text-red-600 hover:text-red-800"><Trash size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Collector Module
  const CollectorModule = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Garbage Collectors</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockData.collectors.map(collector => (
          <div key={collector.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <Users size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{collector.name}</h3>
                  <p className="text-sm text-gray-500">{collector.phone}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                collector.status === 'active' ? 'bg-green-100 text-green-800' :
                collector.status === 'on-route' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>{collector.status}</span>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">Assigned Bins: <span className="font-semibold">{collector.assignedBins}</span></p>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">View Route</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Smart Bin Module
  const SmartBinModule = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Smart Bins</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockData.smartBins.map(bin => (
          <div key={bin.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{bin.location}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin size={14} /> {bin.gps.lat.toFixed(4)}, {bin.gps.lng.toFixed(4)}
                </p>
              </div>
              <Trash2 size={24} className="text-gray-400" />
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Capacity</span>
                <span className="text-sm font-semibold">{bin.capacity}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${bin.capacity > 80 ? 'bg-red-500' : bin.capacity > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
                  style={{ width: `${bin.capacity}%` }}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-blue-100 text-blue-600 py-2 rounded hover:bg-blue-200">Details</button>
              <button className="flex-1 bg-red-100 text-red-600 py-2 rounded hover:bg-red-200">Alert</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // GPS & Mapping Module
  const MappingModule = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">GPS & Mapping</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg h-96 flex items-center justify-center mb-6 border-2 border-blue-200">
          <div className="text-center">
            <MapPin size={48} className="text-blue-600 mx-auto mb-2" />
            <p className="text-gray-600 font-medium">Map View - Real-time Location Tracking</p>
            <p className="text-sm text-gray-500 mt-1">Integrated mapping coming soon</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-4">Active Locations</h2>
        <div className="space-y-3">
          {mockData.smartBins.map(bin => (
            <div key={bin.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-600" />
                <div>
                  <p className="font-medium text-sm">{bin.location}</p>
                  <p className="text-xs text-gray-500">Capacity: {bin.capacity}%</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800"><Eye size={18} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Notification Module
  const NotificationModule = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <button className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded hover:bg-blue-200">
            Mark all as read
          </button>
        </div>
        <div className="divide-y">
          {mockData.notifications.map(notif => (
            <div key={notif.id} className="p-6 hover:bg-gray-50 cursor-pointer border-l-4" style={{
              borderColor: notif.type === 'warning' ? '#FBBF24' : notif.type === 'success' ? '#34D399' : '#60A5FA'
            }}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{notif.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{notif.time}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Complaint Management Module
  const ComplaintModule = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Complaints & Requests</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus size={20} /> New Complaint
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Location</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Priority</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {mockData.complaints.map(complaint => (
                <tr key={complaint.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium">{complaint.type}</td>
                  <td className="px-6 py-4 text-sm">{complaint.location}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      complaint.status === 'open' ? 'bg-red-100 text-red-800' :
                      complaint.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>{complaint.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded text-xs font-semibold ${
                      complaint.priority === 'high' ? 'bg-red-100 text-red-800' :
                      complaint.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>{complaint.priority}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">{complaint.date}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800"><Eye size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Analytics & Reporting Module
  const AnalyticsModule = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Analytics & Reports</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Download size={20} /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalyticsCard label="Total Bins" value={mockData.analytics.totalBins} trend="+5%" color="bg-blue-500" />
        <AnalyticsCard label="Collection Rate" value={`${mockData.analytics.collectionRate}%`} trend="+8%" color="bg-green-500" />
        <AnalyticsCard label="Avg Capacity" value={`${mockData.analytics.avgCapacity}%`} trend="-3%" color="bg-yellow-500" />
        <AnalyticsCard label="System Efficiency" value={`${mockData.analytics.efficiency}%`} trend="+12%" color="bg-purple-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Collection Trend</h2>
          <div className="h-40 bg-gradient-to-t from-blue-100 to-transparent rounded flex items-end justify-center gap-2 p-4">
            <div className="h-20 w-8 bg-blue-500 rounded" />
            <div className="h-28 w-8 bg-blue-500 rounded" />
            <div className="h-32 w-8 bg-blue-500 rounded" />
            <div className="h-24 w-8 bg-blue-500 rounded" />
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">Collection Performance Over 4 Weeks</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Complaint Distribution</h2>
          <div className="space-y-4">
            {[
              { label: 'Overflowing', value: 45, percent: 45 },
              { label: 'Missed Collection', value: 30, percent: 30 },
              { label: 'Damaged', value: 15, percent: 15 },
              { label: 'Other', value: 10, percent: 10 }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-sm font-semibold">{item.value}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${item.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
        </div>
        <div className={`${color} p-3 rounded-lg`}>
          <Icon size={28} className="text-white" />
        </div>
      </div>
    </div>
  );

  const AnalyticsCard = ({ label, value, trend, color }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600 text-sm">{label}</p>
      <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
      <p className="text-sm text-green-600 mt-2">{trend} vs last month</p>
    </div>
  );

  const moduleContent = {
    dashboard: <Dashboard />,
    admin: <AdminModule />,
    collector: <CollectorModule />,
    bins: <SmartBinModule />,
    mapping: <MappingModule />,
    notifications: <NotificationModule />,
    complaints: <ComplaintModule />,
    analytics: <AnalyticsModule />
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'admin', label: 'Admin', icon: Settings },
    { id: 'collector', label: 'Collectors', icon: Users },
    { id: 'bins', label: 'Smart Bins', icon: Trash2 },
    { id: 'mapping', label: 'GPS & Mapping', icon: MapPin },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'complaints', label: 'Complaints', icon: AlertCircle },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between">
          <div className={`flex items-center gap-2 ${!sidebarOpen && 'justify-center'}`}>
            <Trash2 size={28} className="text-green-400" />
            {sidebarOpen && <span className="text-lg font-bold">GarbageWise</span>}
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hover:bg-gray-800 p-1 rounded">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveModule(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition mb-2 ${
                  activeModule === item.id
                    ? 'bg-green-600 text-white'
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && <span className="text-sm">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 text-gray-300 text-sm">
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm text-gray-600">Welcome back!</h2>
              <p className="text-lg font-semibold text-gray-800">Smart City Garbage Management System</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative">
                <Bell size={24} className="text-gray-600 hover:text-gray-900" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="w-10 h-10 bg-blue-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {moduleContent[activeModule]}
          </div>
        </div>
      </div>
    </div>
  );
}