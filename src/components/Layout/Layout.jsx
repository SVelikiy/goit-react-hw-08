import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";


export const Layout = ({ children }) => {
  return (
    <div style={{minWidth:960, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
