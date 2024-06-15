import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './data/Login.jsx';
import Landingpage from './data/Landingpage.jsx';
import Daftar from './data/Daftar.jsx';
import Bipolar from './pages/Bipolar.jsx';
import Depression from './pages/Depression.jsx';
import Anxiety from './pages/Anxiety.jsx';
import LoginTerapis from './data/LoginTerapis.jsx';
import SignUp from './components/SignUp.jsx';
import DaftarTerapis from './data/DaftarTerapis.jsx';
import Pageone from './pages/Tentang Kami/Pageone.jsx';
import Konsultasi from './pages/Konsultasi.jsx';
import Komunitas from './pages/Komunitas.jsx';
import Layout from './components/shared/Layout.jsx';
import Dashboard from './components/shared/Dashboard.jsx';
import Pasien from './components/shared/Pasien.jsx';
import PasienOnline from './components/shared/PasienOnline.jsx';
import PasienOffline from './components/shared/PasienOffline.jsx';
import JanjiTemu from './components/shared/JanjiTemu.jsx';
import JanjiOnline from './components/shared/JanjiOnline.jsx';
import JanjiOffline from './components/shared/JanjiOffline.jsx';
import Pesan from './components/shared/Pesan.jsx';
import Jadwal from './components/shared/Jadwal.jsx';
import TransitionChart from './components/shared/TransactionChart.jsx';
import BuyerProfileChart from './components/shared/BuyerProfileChart.jsx';
import IsiPesan from './components/shared/IsiPesan.jsx';
import LandingpageLogin from './pageslogin/LandingpageLogin.jsx';
import Profile from './pageslogin/Profile.jsx';
import Notifikasi from './data/Notifikasi.jsx';
import ProfileDash from './components/shared/ProfileDash.jsx';
import Notifications from './components/shared/Notifications.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/LandingpageLogin" element={<LandingpageLogin />} />
          <Route path="/Pageone" element={<Pageone />} />
          <Route path='/Konsultasi' element={<Konsultasi />} />
          <Route path='/Komunitas' element={<Komunitas />} />
          <Route path="/Bipolar" element={<Bipolar />} />
          <Route path="/Anxiety" element={<Anxiety />} />
          <Route path="/Depression" element={<Depression />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/LoginTerapis' element={<LoginTerapis />} />
          <Route path='/DaftarTerapis' element={<DaftarTerapis />} />
          <Route path="/Layout" element={<Layout />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Pasien" element={<Pasien />} />
          <Route path="/PasienOnline" element={<PasienOnline />} />
          <Route path="/PasienOffline" element={<PasienOffline />} />
          <Route path="/Pesan" element={<Pesan />} />
          <Route path="/JanjiTemu" element={<JanjiTemu />} />
          <Route path="/JanjiOnline" element={<JanjiOnline />} />
          <Route path="/JanjiOffline" element={<JanjiOffline />} />
          <Route path="/Jadwal" element={<Jadwal />} />
          <Route path="/TransitionChart" element={<TransitionChart />} />
          <Route path="/BuyerProfileChart" element={<BuyerProfileChart />} />
          <Route path="/IsiPesan" element={<IsiPesan />} />
          <Route path="/ProfileDash" element={<ProfileDash />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Notifikasi" element={<Notifikasi />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Page from "./components/Page";
// import Layanan from "./components/Layanan";
// import Rating from "./components/Rating";
// import Keunggulan from "./components/Keunggulan";
// import Faq from "./components/FAQ";
// import Accordion from "./components/Accordion";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="overflow-hidden">
//       <Navbar />
//       <Home />
//       <Page />
//       <Layanan />
//       <Rating />
//       <Keunggulan />
//       <Faq />
//       <Accordion />
//       <Footer />
//     </div>
//   );
// }

// export default App;
