import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WhatsAppButton from "./Components/WhatsAppButton";
import Amanath from "./Common/Components/Portfolio/ProjectDetails/Amanath";
import Castle from "./Common/Components/Portfolio/ProjectDetails/Castle";
import Himadri from "./Common/Components/Portfolio/ProjectDetails/Himadri";
import Kottagiri from "./Common/Components/Portfolio/ProjectDetails/Kottagiri";
import Krishna from "./Common/Components/Portfolio/ProjectDetails/Krishna";
import NobleResidence from "./Common/Components/Portfolio/ProjectDetails/NobleResidence";
import SunnyResidence from "./Common/Components/Portfolio/ProjectDetails/SunnyResidence";
import NajeebResidence from "./Common/Components/Portfolio/ProjectDetails/NajeebResidence";
import Rejeendran from "./Common/Components/Portfolio/ProjectDetails/Rejeendran";
import VipinThomas from "./Common/Components/Portfolio/ProjectDetails/VipinThomas";
import Amancay from "./Common/Components/Commercial/Amancay";
import Church from "./Common/Components/Religious/Church";
import EvaraWaters from "./Common/Components/Commercial/EvaraWaters";
import WaterLilly from "./Common/Components/Commercial/WaterLilly";
import Raffles from "./Common/Components/Commercial/Raffles";
import Arancia from "./Common/Components/Hospitality/Arancia";
import Bhadram from "./Common/Components/Hospitality/Bhadram";
import Hammock from "./Common/Components/Hospitality/Hammock";


/* ================== LAZY IMPORTS ================== */
const Signature = lazy(() => import("./Common/Components/Animations/Signature"));
const Logo = lazy(() => import("./Common/Components/Animations/Logo"));
const Layout = lazy(() => import("./Common/Components/layouts/Layout"));
const LandingPage = lazy(() => import("./Common/Components/Home/LandingPage"));
const Aboutd2 = lazy(() => import("./Common/Components/AboutD2/Aboutd2"));

/* SERVICES */
const Service1 = lazy(() => import("./Common/Components/CommonLayouts/Services/Service1"));
const Service2 = lazy(() => import("./Common/Components/CommonLayouts/Services/Service2"));
const Service3 = lazy(() => import("./Common/Components/CommonLayouts/Services/Service3"));
const Service4 = lazy(() => import("./Common/Components/CommonLayouts/Services/Service4"));

/* SERVICE DETAILS */
const S1Details = lazy(() => import("./Common/Components/ServiceDetails/S1Details"));
const S2Details = lazy(() => import("./Common/Components/ServiceDetails/S2Details"));
const S3Details = lazy(() => import("./Common/Components/ServiceDetails/S3Details"));
const S4Details = lazy(() => import("./Common/Components/ServiceDetails/S4Details"));

/* EVENTS */
const Event = lazy(() => import("./Common/Components/Events/Event"));
const EventOnam = lazy(() => import("./Common/Components/Events/EventOnam"));
const WomenEmpowerment = lazy(() => import("./Common/Components/Events/WomenEmpowerment"));
const Diwali = lazy(() => import("./Common/Components/Events/Diwali"));
const Samisra = lazy(() => import("./Common/Components/Events/Samisra"));

/* PORTFOLIO */
const Portfolio = lazy(() => import("./Common/Components/Portfolio/Portfolio"));
const AlliResidential = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/AlliResidential"));
const Ema = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Ema"));
const FaizalResidence = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/FaizalResidence"));
const Guruvayur = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Guruvayur"));
const Inea = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Inea"));
const Sirena = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Sirena"));
const Yaraa = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Yaraa"));
const ShekharResidence = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/ShekharResidence"));
const Mano = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Mano"));
const Pinkpurple = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Pinkpurple"));

/* TEAM & OTHERS */
const TeamD2 = lazy(() => import("./Common/Components/Team/TeamD2"));
const Testimonial = lazy(() => import("./Common/Testimonial/Testimonial"));

/* ================== LOADER ================== */
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-screen text-white">
    Loading...
  </div>
);

const App = () => {
  return (
    <Router>

      <Routes>

        {/* SPLASH */}
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <Signature />
            </Suspense>
          }
        />

        <Route
          path="/logo"
          element={
            <Suspense fallback={<PageLoader />}>
              <Logo />
            </Suspense>
          }
        />

        {/* MAIN LAYOUT (NO LOADER RELOAD) */}
        <Route
          path="/main"
          element={
            <Suspense fallback={<PageLoader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route index element={
            <Suspense fallback={<PageLoader />}>
              <LandingPage />
            </Suspense>
          } />

          <Route path="aboutd2" element={<Suspense fallback={<PageLoader />}><Aboutd2 /></Suspense>} />

          {/* SERVICES */}
          <Route path="Service1" element={<Suspense fallback={<PageLoader />}><Service1 /></Suspense>} />
          <Route path="Service2" element={<Suspense fallback={<PageLoader />}><Service2 /></Suspense>} />
          <Route path="Service3" element={<Suspense fallback={<PageLoader />}><Service3 /></Suspense>} />
          <Route path="Service4" element={<Suspense fallback={<PageLoader />}><Service4 /></Suspense>} />

          {/* SERVICE DETAILS */}
          <Route path="S1Details" element={<Suspense fallback={<PageLoader />}><S1Details /></Suspense>} />
          <Route path="S2Details" element={<Suspense fallback={<PageLoader />}><S2Details /></Suspense>} />
          <Route path="S3Details" element={<Suspense fallback={<PageLoader />}><S3Details /></Suspense>} />
          <Route path="S4Details" element={<Suspense fallback={<PageLoader />}><S4Details /></Suspense>} />

          {/* EVENTS */}
          <Route path="Event" element={<Suspense fallback={<PageLoader />}><Event /></Suspense>} />
          <Route path="EventOnam" element={<Suspense fallback={<PageLoader />}><EventOnam /></Suspense>} />
          <Route path="WomenEmpowerment" element={<Suspense fallback={<PageLoader />}><WomenEmpowerment /></Suspense>} />
          <Route path="EventDiwali" element={<Suspense fallback={<PageLoader />}><Diwali /></Suspense>} />
          <Route path="EventSamishra" element={<Suspense fallback={<PageLoader />}><Samisra /></Suspense>} />

          {/* PORTFOLIO */}
          <Route path="Portfolio" element={<Suspense fallback={<PageLoader />}><Portfolio /></Suspense>} />
          <Route path="AlliResidential" element={<Suspense fallback={<PageLoader />}><AlliResidential /></Suspense>} />
          <Route path="Ema" element={<Suspense fallback={<PageLoader />}><Ema /></Suspense>} />
          <Route path="FaizalResidence" element={<Suspense fallback={<PageLoader />}><FaizalResidence /></Suspense>} />
          <Route path="Guruvayur" element={<Suspense fallback={<PageLoader />}><Guruvayur /></Suspense>} />
          <Route path="Inea" element={<Suspense fallback={<PageLoader />}><Inea /></Suspense>} />
          <Route path="Sirena" element={<Suspense fallback={<PageLoader />}><Sirena /></Suspense>} />
          <Route path="Yaraa" element={<Suspense fallback={<PageLoader />}><Yaraa /></Suspense>} />
          <Route path="ShekharResidence" element={<Suspense fallback={<PageLoader />}><ShekharResidence /></Suspense>} />
          <Route path="Mano" element={<Suspense fallback={<PageLoader />}><Mano /></Suspense>} />
          <Route path="Pinkpurple" element={<Suspense fallback={<PageLoader />}><Pinkpurple /></Suspense>} />
          <Route path="Amanath" element={<Suspense fallback={<PageLoader />}><Amanath /></Suspense>} />
          <Route path="Castle" element={<Suspense fallback={<PageLoader />}><Castle /></Suspense>} />
          <Route path="Himadri" element={<Suspense fallback={<PageLoader />}><Himadri /></Suspense>} />
          <Route path="Kottagiri" element={<Suspense fallback={<PageLoader />}><Kottagiri /></Suspense>} />
          <Route path="Krishna" element={<Suspense fallback={<PageLoader />}><Krishna /></Suspense>} />
          <Route path="NobleResidence" element={<Suspense fallback={<PageLoader />}><NobleResidence /></Suspense>} />
          <Route path="SunnyResidence" element={<Suspense fallback={<PageLoader />}><SunnyResidence /></Suspense>} />
          <Route path="NajeebResidence" element={<Suspense fallback={<PageLoader />}><NajeebResidence /></Suspense>} />
          <Route path="Rejeendran" element={<Suspense fallback={<PageLoader />}><Rejeendran /></Suspense>} />
          <Route path="VipinThomas" element={<Suspense fallback={<PageLoader />}><VipinThomas /></Suspense>} />
          <Route path="Amancay" element={<Suspense fallback={<PageLoader />}><Amancay /></Suspense>} />
          <Route path="Church" element={<Suspense fallback={<PageLoader />}><Church /></Suspense>} />
          <Route path="EvaraWaters" element={<Suspense fallback={<PageLoader />}><EvaraWaters /></Suspense>} />
          <Route path="WaterLilly" element={<Suspense fallback={<PageLoader />}><WaterLilly /></Suspense>} />
          <Route path="Raffles" element={<Suspense fallback={<PageLoader />}><Raffles /></Suspense>} />
          <Route path="Arancia" element={<Suspense fallback={<PageLoader />}><Arancia /></Suspense>} />
          <Route path="Bhadram" element={<Suspense fallback={<PageLoader />}><Bhadram /></Suspense>} />
          <Route path="Hammock" element={<Suspense fallback={<PageLoader />}><Hammock /></Suspense>} />

          {/* TEAM & TESTIMONIAL */}
          <Route path="TeamD2" element={<Suspense fallback={<PageLoader />}><TeamD2 /></Suspense>} />
          <Route path="Testimonial" element={<Suspense fallback={<PageLoader />}><Testimonial /></Suspense>} />
        </Route>
      </Routes>
      <WhatsAppButton />
    </Router>
  );
};

export default App;
