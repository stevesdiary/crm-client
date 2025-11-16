
import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
  DashboardOutlined,
  ContactsOutlined,
  TeamOutlined,
  DollarCircleOutlined,
  CheckCircleOutlined,
  CustomerServiceOutlined,
  PhoneOutlined,
  BellOutlined,
  SettingOutlined,
  SecurityScanOutlined,
  FileTextOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: <DashboardOutlined /> },
  { name: 'Contacts', href: '/contacts', icon: <ContactsOutlined /> },
  { name: 'Leads', href: '/leads', icon: <TeamOutlined /> },
  { name: 'Opportunities', href: '/opportunities', icon: <DollarCircleOutlined /> },
  { name: 'Tasks', href: '/tasks', icon: <CheckCircleOutlined /> },
  { name: 'Tickets', href: '/tickets', icon: <CustomerServiceOutlined /> },
  { name: 'Communications', href: '/communications', icon: <PhoneOutlined /> },
  { name: 'Workflows', href: '/workflows', icon: <SettingOutlined /> },
  { name: 'Reports', href: '/reports', icon: <BellOutlined /> },
  { name: 'Users', href: '/users', icon: <UserOutlined /> },
  { name: 'Security', href: '/security', icon: <SecurityScanOutlined /> },
  { name: 'Audit Logs', href: '/audit', icon: <FileTextOutlined /> },
  { name: 'GDPR', href: '/gdpr', icon: <SafetyCertificateOutlined /> },
];

const Layout: React.FC = () => {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const isActive = (href: string) => location.pathname.startsWith(href);

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div
        className={`bg-white text-gray-800 flex flex-col transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          {!sidebarCollapsed && <h1 className="text-xl font-bold text-gray-900">CRM</h1>}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-gray-500 hover:text-gray-900 focus:outline-none"
          >
            {sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
        </div>
        <nav className="flex-1 mt-6 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
            >
              <div className="text-lg">{item.icon}</div>
              {!sidebarCollapsed && <span className="ml-4">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
          <div className="flex items-center">
            {/* Search bar can go here */}
          </div>
          <div className="flex items-center space-x-4">
            <BellOutlined className="text-gray-500" />
            <UserOutlined className="text-gray-500" />
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;