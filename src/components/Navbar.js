import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Health Dashboard</h1>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
