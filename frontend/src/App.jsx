import PageLayout from './pages/shared/layout/PageLayout.jsx';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext.jsx';
import { ToastProvider } from './Context/ToastContext.jsx';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <PageLayout>
          <Outlet />
        </PageLayout>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
