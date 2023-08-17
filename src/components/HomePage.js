import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import Dashboard from "./Dashboard";

export default function HomePage() {
  return (
    <div className="flex flex-row h-screen">
      <SideNav />
      <div className="flex flex-col flex-grow">
        <TopNav />
        <Dashboard />
      </div>
    </div>
  );
}
