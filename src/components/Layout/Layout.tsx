import { PropsWithChildren } from "react";

import { Header, Footer } from "@components/index";

export const Layout = ({ children }: PropsWithChildren) => (
  <div className="min-h-dvh">
    <Header />
    <div className="pt-28 bg-gray-500 min-h-[calc(100dvh_-_140px)] md:min-h-[calc(100dvh_-_80px)]">
      {children}
    </div>
    <Footer />
  </div>
);
