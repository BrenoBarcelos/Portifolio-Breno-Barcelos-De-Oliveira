import React from "react";
import { ActionButton } from "../atomos/ActionButton";

export interface HeaderProps{
  onScrollAboutMe: () => void;
  onScrollPortfolio: () => void;
  onScrollSkills: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onScrollAboutMe, onScrollPortfolio, onScrollSkills}) => {
  return (
    <header className="flex justify-center place-content-center content-center h-fit">
      <nav className="fixed flex justify-center items-center bg-black rounded-full text-white h-10 lg-mobile:h-12 xl-desktop:h-20 space-x-4 mt-5 px-5">
        <ActionButton name="About Me" className="lg-mobile:p-2 lx-laptop:p-4" onClick={onScrollAboutMe} />
        <ActionButton name="Portfolio" className="lg-mobile:p-2 lx-laptop:p-4" onClick={onScrollPortfolio} />
        <ActionButton name="Skills" className="lg-mobile:p-2 lx-laptop:p-4" onClick={onScrollSkills} />
      </nav>
    </header>
  );
}