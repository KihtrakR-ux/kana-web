import React from "react";
const Header = () => (
  <div className="w-full h-16 bg-gray-900 text-white flex items-center p-4">
    <h1 className="text-xl font-bold">Kana Sample Project</h1>
  </div>
);

const Sidebar = () => (
  <div className="w-60 h-screen bg-gray-800 text-white p-4">
    <h2 className="text-lg font-bold mb-4">Navigation</h2>
    <ul>
      <li>
        <a href="http://localhost:3000/">Trade</a>
      </li>
      <li>
        <a href="http://localhost:3001">Swap</a>
      </li>
    </ul>
  </div>
);

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex">
    <Header />
    <div className="flex-1">
      <Sidebar />
      <main className="p-4">{children}</main>
    </div>
  </div>
);

export default Layout;
