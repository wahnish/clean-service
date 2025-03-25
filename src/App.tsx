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

// Lazy load service components
const StandardCleaning = lazy(
  () => import("./components/services/StandardCleaning"),
);
const DeepCleaning = lazy(() => import("./components/services/DeepCleaning"));
const MoveInMoveOutCleaning = lazy(
  () => import("./components/services/MoveInMoveOutCleaning"),
);
const RecurringCleaning = lazy(
  () => import("./components/services/RecurringCleaning"),
);
const AirbnbCleaning = lazy(
  () => import("./components/services/AirbnbCleaning"),
);
const OneTimeCleaning = lazy(
  () => import("./components/services/OneTimeCleaning"),
);
const VacationRentalCleaning = lazy(
  () => import("./components/services/VacationRentalCleaning"),
);
const PostConstructionCleaning = lazy(
  () => import("./components/services/PostConstructionCleaning"),
);

// Lazy load additional pages
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const TermsAndConditions = lazy(
  () => import("./components/TermsAndConditions"),
);
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Location Routes */}
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

          {/* Service Routes */}
          <Route path="/services/standard" element={<StandardCleaning />} />
          <Route path="/services/deep" element={<DeepCleaning />} />
          <Route path="/services/move" element={<MoveInMoveOutCleaning />} />
          <Route path="/services/recurring" element={<RecurringCleaning />} />
          <Route path="/services/airbnb" element={<AirbnbCleaning />} />
          <Route path="/services/onetime" element={<OneTimeCleaning />} />
          <Route
            path="/services/vacation"
            element={<VacationRentalCleaning />}
          />
          <Route
            path="/services/construction"
            element={<PostConstructionCleaning />}
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
