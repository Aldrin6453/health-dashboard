import React from "react";

function Dashboard() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Health Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-bold">Heart Rate</h3>
          <p className="text-gray-600">72 bpm</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-bold">Calories Burned</h3>
          <p className="text-gray-600">650 kcal</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-lg font-bold">Steps Taken</h3>
          <p className="text-gray-600">10,000 steps</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
