import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import OTPPage from './pages/auth/OTPPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import TenantDashboard from './pages/tenant/TenantDashboard';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import StaffPanel from './pages/staff/StaffPanel';
import AdminDashboard from './pages/admin/AdminDashboard';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/otp-verification" element={<OTPPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Protected Routes (Role based mocking) */}
          <Route path="/tenant/*" element={<DashboardLayout role="tenant"><TenantDashboard /></DashboardLayout>} />
          <Route path="/owner/*" element={<DashboardLayout role="owner"><OwnerDashboard /></DashboardLayout>} />
          <Route path="/staff/*" element={<DashboardLayout role="staff"><StaffPanel /></DashboardLayout>} />
          <Route path="/admin/*" element={<DashboardLayout role="admin"><AdminDashboard /></DashboardLayout>} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
