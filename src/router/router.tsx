import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import LandingPage from '../pages/LandingPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import DashboardPage from '../pages/DashboardPage'
import ContactsListPage from '../pages/ContactsListPage'
import LeadsListPage from '../pages/LeadsListPage'
import OpportunitiesListPage from '../pages/OpportunitiesListPage'
import TasksListPage from '../pages/TasksListPage'
import TicketsListPage from '../pages/TicketsListPage'
import ProductsListPage from '../pages/ProductsListPage'
import AccountsListPage from '../pages/AccountsListPage'
import AnalyticsPage from '../pages/AnalyticsPage'
import NotificationsPage from '../pages/NotificationsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'contacts',
        element: <ContactsListPage />,
      },
      {
        path: 'leads',
        element: <LeadsListPage />,
      },
      {
        path: 'opportunities',
        element: <OpportunitiesListPage />,
      },
      {
        path: 'tasks',
        element: <TasksListPage />,
      },
      {
        path: 'tickets',
        element: <TicketsListPage />,
      },
      {
        path: 'products',
        element: <ProductsListPage />,
      },
      {
        path: 'accounts',
        element: <AccountsListPage />,
      },
      {
        path: 'analytics',
        element: <AnalyticsPage />,
      },
      {
        path: 'notifications',
        element: <NotificationsPage />,
      },
    ],
  },
])