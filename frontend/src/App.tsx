import { NavigationBar } from "./NavigationBar";
import React from "react";
import { Outlet } from "react-router-dom";

export function App(_props: any): JSX.Element {
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
