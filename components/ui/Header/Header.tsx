"use client";

import { useRef } from "react";
import AppNav from "../AppNav/AppNav";
import UserMenu from "../Profile/UserMenu";
import Logo from "./Logo";

export default function Header() {
  const targetRef = useRef(null);

  return (
    <>
      <header className="fixed top-0 left-0  w-full  z-40 h-32 bg-header-gradient p-4 px-8 justify-between flex items-end  text-main transition-height transition-width duration-500">
        <Logo />
        <AppNav />
        <UserMenu />
      </header>
      <div
        className=" w-screen top-[65rem] left-0 right-0 h-0 -z-10 absolute"
        ref={targetRef}
      ></div>
    </>
  );
}
