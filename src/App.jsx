import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import BillingPortal from "./pages/BillingPortal.jsx";
import Websites from "./pages/Websites.jsx";
import Dashboards from "./pages/Dashboards.jsx";
import WebQrs from "./pages/WebQrs.jsx";
import Logistics from "./pages/Logistics.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="billing-portal" element={<BillingPortal />} />
        <Route path="websites" element={<Websites />} />
        <Route path="dashboards" element={<Dashboards />} />
        <Route path="web-qrs" element={<WebQrs />} />
        <Route path="logistics" element={<Logistics />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
