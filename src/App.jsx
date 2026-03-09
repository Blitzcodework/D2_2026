
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WhatsAppButton from "./Components/WhatsAppButton";
import ScrollToTop from "./Common/Components/ScrollToTop/ScrollToTop";


/* ================== LAZY IMPORTS ================== */

/* SPLASH */
const Signature = lazy(() => import("./Common/Components/Animations/Signature"));
const Logo = lazy(() => import("./Common/Components/Animations/Logo"));

/* LAYOUT */
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

const Amanath = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Amanath"));
const Castle = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Castle"));
const Himadri = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Himadri"));
const Kottagiri = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Kottagiri"));
const Krishna = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Krishna"));
const NobleResidence = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/NobleResidence"));
const SunnyResidence = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/SunnyResidence"));
const NajeebResidence = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/NajeebResidence"));
const Rejeendran = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/Rejeendran"));
const VipinThomas = lazy(() => import("./Common/Components/Portfolio/ProjectDetails/VipinThomas"));

/* COMMERCIAL */
const Amancay = lazy(() => import("./Common/Components/Commercial/Amancay"));
const EvaraWaters = lazy(() => import("./Common/Components/Commercial/EvaraWaters"));
const WaterLilly = lazy(() => import("./Common/Components/Commercial/WaterLilly"));
const Raffles = lazy(() => import("./Common/Components/Commercial/Raffles"));
const Apex = lazy(() => import("./Common/Components/Commercial/Apex"));
const GalsGallary = lazy(() => import("./Common/Components/Commercial/GalsGallary"));
const MarattTechpark = lazy(() => import("./Common/Components/Commercial/MarattTechpark"));
const RayoMartin = lazy(() => import("./Common/Components/Commercial/RayoMartin"));
const Beautyparlour = lazy(() => import("./Common/Components/Commercial/Beautyparlour"));
const UrbanChic = lazy(() => import("./Common/Components/Commercial/UrbanChic"));
const XYBERA = lazy(() => import("./Common/Components/Commercial/XYBERA"));

/* RELIGIOUS */
const Church = lazy(() => import("./Common/Components/Religious/Church"));


const BusTerminal = lazy(() => import("./Common/Components/PublicProjects/BusTerminal"));
const EnteVeedu = lazy(() => import("./Common/Components/PublicProjects/EnteVeedu"));
const Thanalidam = lazy(() => import("./Common/Components/PublicProjects/Thanalidam"));

/* HOSPITALITY */
const Arancia = lazy(() => import("./Common/Components/Hospitality/Arancia"));
const Bhadram = lazy(() => import("./Common/Components/Hospitality/Bhadram"));
const Hammock = lazy(() => import("./Common/Components/Hospitality/Hammock"));
const Edelweiss = lazy(() => import("./Common/Components/Hospitality/Edelweiss"));
const Elaris = lazy(() => import("./Common/Components/Hospitality/Elaris"));
const Prithvi = lazy(() => import("./Common/Components/Hospitality/Prithvi"));

/* TEAM */
const TeamD2 = lazy(() => import("./Common/Components/Team/TeamD2"));
const Testimonial = lazy(() => import("./Common/Testimonial/Testimonial"));

/* ================== LOADER ================== */

const PageLoader = () => (
  <div className="flex justify-center items-center min-h-screen text-white">
    Loading...
  </div>
);

const Load = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Routes>

        {/* SPLASH */}
        <Route path="/" element={Load(Signature)} />
        <Route path="/logo" element={Load(Logo)} />

        {/* MAIN */}
        <Route path="/main" element={Load(Layout)}>

          <Route index element={Load(LandingPage)} />
          <Route path="aboutd2" element={Load(Aboutd2)} />

          {/* SERVICES */}
          <Route path="Service1" element={Load(Service1)} />
          <Route path="Service2" element={Load(Service2)} />
          <Route path="Service3" element={Load(Service3)} />
          <Route path="Service4" element={Load(Service4)} />

          {/* SERVICE DETAILS */}
          <Route path="S1Details" element={Load(S1Details)} />
          <Route path="S2Details" element={Load(S2Details)} />
          <Route path="S3Details" element={Load(S3Details)} />
          <Route path="S4Details" element={Load(S4Details)} />

          {/* EVENTS */}
          <Route path="Event" element={Load(Event)} />
          <Route path="EventOnam" element={Load(EventOnam)} />
          <Route path="WomenEmpowerment" element={Load(WomenEmpowerment)} />
          <Route path="EventDiwali" element={Load(Diwali)} />
          <Route path="EventSamishra" element={Load(Samisra)} />

          {/* PORTFOLIO */}
          <Route path="Portfolio" element={Load(Portfolio)} />
          <Route path="AlliResidential" element={Load(AlliResidential)} />
          <Route path="Ema" element={Load(Ema)} />
          <Route path="FaizalResidence" element={Load(FaizalResidence)} />
          <Route path="Guruvayur" element={Load(Guruvayur)} />
          <Route path="Inea" element={Load(Inea)} />
          <Route path="Sirena" element={Load(Sirena)} />
          <Route path="Yaraa" element={Load(Yaraa)} />
          <Route path="ShekharResidence" element={Load(ShekharResidence)} />
          <Route path="Mano" element={Load(Mano)} />
          <Route path="Pinkpurple" element={Load(Pinkpurple)} />

          <Route path="Amanath" element={Load(Amanath)} />
          <Route path="Castle" element={Load(Castle)} />
          <Route path="Himadri" element={Load(Himadri)} />
          <Route path="Kottagiri" element={Load(Kottagiri)} />
          <Route path="Krishna" element={Load(Krishna)} />
          <Route path="NobleResidence" element={Load(NobleResidence)} />
          <Route path="SunnyResidence" element={Load(SunnyResidence)} />
          <Route path="NajeebResidence" element={Load(NajeebResidence)} />
          <Route path="Rejeendran" element={Load(Rejeendran)} />
          <Route path="VipinThomas" element={Load(VipinThomas)} />

          {/* COMMERCIAL */}
          <Route path="Amancay" element={Load(Amancay)} />
          <Route path="EvaraWaters" element={Load(EvaraWaters)} />
          <Route path="WaterLilly" element={Load(WaterLilly)} />
          <Route path="Raffles" element={Load(Raffles)} />
          <Route path="Apex" element={Load(Apex)} />
          <Route path="GalsGallary" element={Load(GalsGallary)} />
          <Route path="MarattTechpark" element={Load(MarattTechpark)} />
          <Route path="RayoMartin" element={Load(RayoMartin)} />
          <Route path="Beautyparlour" element={Load(Beautyparlour)} />
          <Route path="UrbanChic" element={Load(UrbanChic)} />
          <Route path="XYBERA" element={Load(XYBERA)} />

          {/* RELIGIOUS */}
          <Route path="Church" element={Load(Church)} />

          {/* HOSPITALITY */}
          <Route path="Arancia" element={Load(Arancia)} />
          <Route path="Bhadram" element={Load(Bhadram)} />
          <Route path="Hammock" element={Load(Hammock)} />



          <Route path="BusTerminal" element={Load(BusTerminal)} />
          <Route path="EnteVeedu" element={Load(EnteVeedu)} />
          <Route path="Thanalidam" element={Load(Thanalidam)} />


          <Route path="Edelweiss" element={Load(Edelweiss)} />
          <Route path="Elaris" element={Load(Elaris)} />
          <Route path="Prithvi" element={Load(Prithvi)} />


          {/* TEAM */}
          <Route path="TeamD2" element={Load(TeamD2)} />
          <Route path="Testimonial" element={Load(Testimonial)} />

        </Route>
      </Routes>

      <WhatsAppButton />
    </Router>
  );
};

export default App;

