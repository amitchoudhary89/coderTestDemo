import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateroute";
const Users = React.lazy(() => import("./users"));
const Details = React.lazy(() => import("./details"));
const App = React.lazy(() => import("./App"));

export default function Router() {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<PrivateRoute />}>
          <Route path="/users" element={<Users />} />
          <Route path="/details/:userId" element={<Details />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
