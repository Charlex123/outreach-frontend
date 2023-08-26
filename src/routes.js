import { Navigate, useRoutes } from 'react-router-dom';
import Social from "./components/Social";
import Dashboard from "./components/Dashboard";
import Login from './components/Login';


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/social', element: <Social /> },
    { path: '/', element: <Login /> },
  ]);
}