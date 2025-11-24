import { jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-D4ZzMmwX.js";
import HomeDetails from "./HomeDetails-Cd3H58Bm.js";
import "react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-CMrbbniR.js";
import "@inertiajs/react";
import "@headlessui/react";
import "@ant-design/icons";
import "../app.js";
import "axios";
import "react-dom/client";
import "antd";
import "./Footer-owlJr_0r.js";
import "react-alice-carousel";
import "./ProductCard-CZ7Z_8xO.js";
import "antd/es/card/Meta.js";
import "framer-motion";
import "lucide-react";
const Index = ({ auth, products, settings }) => {
  return /* @__PURE__ */ jsx(Authenticated, { user: auth.user, children: /* @__PURE__ */ jsx(HomeDetails, { products, settings }) });
};
export {
  Index as default
};
