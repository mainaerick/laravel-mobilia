import { jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CnDTPPpR.js";
import HomeDetails from "./HomeDetails-D37G4Cbf.js";
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
import "react-alice-carousel";
import "./Footer-owlJr_0r.js";
import "./ProductCard-DeUpRL9U.js";
import "antd/es/card/Meta.js";
const Index = ({ auth, products, settings }) => {
  return /* @__PURE__ */ jsx(Authenticated, { user: auth.user, children: /* @__PURE__ */ jsx(HomeDetails, { products, settings }) });
};
export {
  Index as default
};
