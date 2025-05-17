import { PropsWithChildren } from "react";

import { Header, Footer } from "@components/index";

export const Layout = ({ children }: PropsWithChildren) => (
  <div className="min-h-dvh">
    <div className="rounded-t-lg md:rounded-lg bg-gradient-to-b from-[#283583] to-[#0B83CB] relative">
      <Header />
      <div className="w-full md:w-[calc(100dvw_-_280px)] bg-white-100 min-h-dvh md:min-h-0">
        {children}
      </div>
      <Footer />
    </div>
  </div>
);
