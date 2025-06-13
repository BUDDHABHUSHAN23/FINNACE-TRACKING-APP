import React from 'react';
import { Navigate, Route, Routes, Outlet } from 'react-router-dom';
import SignIn from './Pages/auth/sign-in';
import SignUp from './Pages/auth/sign-up';
import Dashboard from './Pages/dashboard';
import Setting from './Pages/setting';
import AccountPage from './Pages/account-page';
import Transaction from './Pages/transaction';

const RootLayout = () => {
  const user = null; // Replace with real auth check
  return !user ? <Navigate to="/sign-in" replace={true} /> : <Outlet />;
};

function App() {
  return (
    <main>
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Private Routes */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<Navigate to="/overview" />} />
            <Route path="/overview" element={<Dashboard />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/transaction" element={<Transaction />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
