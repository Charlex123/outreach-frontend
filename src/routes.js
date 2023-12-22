import { Navigate, useRoutes } from 'react-router-dom';
import Social from "./components/Social";
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import Home from './components/Home';
import Privacy from './components/privacy';
import Terms from './components/terms';
import Support from './components/Support';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/social', element: <Social /> },
    { path: '/privacy-policy', element: <Privacy /> },
    { path: '/terms', element: <Terms /> },
    { path: '/support', element: <Support /> },
    { path: '/', element: <Home /> },
  ]);
}