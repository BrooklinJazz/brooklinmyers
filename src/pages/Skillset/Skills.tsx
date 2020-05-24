import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { DesktopSkills } from "./DesktopSkills";
import { MobileSkills } from "./MobileSkills";

const SkillMobileSwitch = () => {
  const width = useWindowWidth()
  if (width > 800) {
    return <DesktopSkills/>
  } else {
    return <MobileSkills/>
  }
}

export const Skills = () => {
  return <SkillMobileSwitch/>
};

