import React from 'react';

export default function DashboardPage() {
  // Simplified version for testing
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Contacts</h3>
          <p className="text-2xl font-bold text-gray-900">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Leads</h3>
          <p className="text-2xl font-bold text-gray-900">567</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Opportunities</h3>
          <p className="text-2xl font-bold text-gray-900">89</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Tasks</h3>
          <p className="text-2xl font-bold text-gray-900">23</p>
        </div>
      </div>
    </div>
  );
}
