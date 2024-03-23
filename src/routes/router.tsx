import { PrivateRoutes } from "@/guard/private-routes";
import { Auth } from "@/pages/auth";
import { HitTheSpot } from "@/pages/hit-the-spot";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import { PointMirror } from "@/pages/point-mirror";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/espelho-de-ponto" element={<PointMirror />} />
          <Route path="/incluir-batida" element={<HitTheSpot />} />
        </Route>

        <Route path="/" element={<Auth />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
