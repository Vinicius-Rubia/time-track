import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes: React.FC = () => {
  const apiSettings = true;

  return apiSettings ? (
    <div className="flex min-h-screen bg-background">
      <Navbar />
      <div className="flex-1 py-7">
        <Header />
        <ScrollArea className="h-[calc(100vh-116px)]">
          <div className="pt-2.5">
            <Outlet />
          </div>
        </ScrollArea>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};
