import { Routes as DomRoutes, Route } from "react-router-dom";

import {
  HomePage,
  DoctrinePage,
  VideosPage,
  ContactsPage,
  NotFoundPage,
} from "@pages/index";

export const Routes = () => (
  <DomRoutes>
    <Route path="/doctrine" element={<DoctrinePage />} />
    <Route path="/videos" element={<VideosPage />} />
    <Route path="/contacts" element={<ContactsPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </DomRoutes>
);
