import { Routes as DomRoutes, Route } from "react-router-dom";

import {
  HomePage,
  PrincipalsPage,
  ContactsPage,
  NotFoundPage,
} from "@pages/index";

export const Routes = () => (
  <DomRoutes>
    <Route path="/principals" element={<PrincipalsPage />} />
    <Route path="/contacts" element={<ContactsPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </DomRoutes>
);
