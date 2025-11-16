import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import DashboardPage from '../pages/DashboardPage';
import ContactsListPage from '../pages/ContactsListPage';
import PublicLayout from '../components/PublicLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import Layout from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { index: true, element: <LandingPage /> },
          { path: 'login', element: <LoginPage /> },
          { path: 'signup', element: <SignupPage /> },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Layout />,
            children: [
              {
                path: 'dashboard',
                element: <DashboardPage />,
              },
              {
                path: 'contacts',
                element: <ContactsListPage />,
              },
            ]
          },
        ],
      },
    ],
  },
]);