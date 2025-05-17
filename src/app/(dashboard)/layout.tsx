import { ReactNode } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <nav className="bg-gray-100 p-4">
        <div>Dashboard Navigation (TODO)</div>
      </nav>
      <main className="p-4">
        {children}
      </main>
    </div>
  );
} 