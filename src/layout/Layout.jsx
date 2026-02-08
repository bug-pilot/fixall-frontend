import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>FixAll Home Service</h1>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <p>&copy; FixAll Home Service. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
