import { Routes as DomRoutes, Route } from "react-router-dom";

import {
  // Principals,
  HomePage,
  // NotFoundPage,
} from "@pages/index";

export const Routes = () => (
  <DomRoutes>
    {/* <Route path="/principals" element={<DashboardPage />} /> */}
    <Route path="/" element={<HomePage />} />
    {/* <Route path="*" element={<NotFoundPage />} /> */}
  </DomRoutes>
);
