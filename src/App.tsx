import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import routes from "tempo-routes";

// Lazy load location components
const Waxhaw = lazy(() => import("./components/locations/Waxhaw"));
const WestleyChapel = lazy(
  () => import("./components/locations/WestleyChapel"),
);
const Weddington = lazy(() => import("./components/locations/Weddington"));
const Marvin = lazy(() => import("./components/locations/Marvin"));
const Ballantyne = lazy(() => import("./components/locations/Ballantyne"));
const Monroe = lazy(() => import("./components/locations/Monroe"));
const WhiteOaks = lazy(() => import("./components/locations/WhiteOaks"));
const IndianTrail = lazy(() => import("./components/locations/IndianTrail"));
const Stallings = lazy(() => import("./components/locations/Stallings"));
const Matthews = lazy(() => import("./components/locations/Matthews"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations/waxhaw" element={<Waxhaw />} />
          <Route path="/locations/westley-chapel" element={<WestleyChapel />} />
          <Route path="/locations/weddington" element={<Weddington />} />
          <Route path="/locations/marvin" element={<Marvin />} />
          <Route path="/locations/ballantyne" element={<Ballantyne />} />
          <Route path="/locations/monroe" element={<Monroe />} />
          <Route path="/locations/white-oaks" element={<WhiteOaks />} />
          <Route path="/locations/indian-trail" element={<IndianTrail />} />
          <Route path="/locations/stallings" element={<Stallings />} />
          <Route path="/locations/matthews" element={<Matthews />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
