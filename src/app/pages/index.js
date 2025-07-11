("use client");
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>MCP API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
// For Next.js App Router
