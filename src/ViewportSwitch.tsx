import React from "react";
import { useIsMobile } from "./hooks/useIsMobile";
import { DesktopApp } from "./pages/Desktop/DesktopApp";
import { MobileApp } from "./pages/Mobile/MobileApp";

export const ViewportSwitch = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileApp /> : <DesktopApp />;
};
