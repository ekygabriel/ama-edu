import { redhat, kumbh } from "../font";

import Footer from "@/components/layout/Footer";
import AppHeader from "@/components/layout/nav";

import "../globals.css";

const OthersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${redhat} ${kumbh} OthersLayout flex flex-col min-h-[100vh]`}
    >
      <AppHeader />
      <div className="grow pt-[70px]">{children}</div>
      <Footer />
    </div>
  );
};

export default OthersLayout;
