import { jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-mRr1fAgD.js";
import HomeDetails from "./HomeDetails-Cp7Ktq3E.js";
import "react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@inertiajs/react";
import "@headlessui/react";
import "@ant-design/icons";
import "../app.js";
import "axios";
import "react-dom/client";
import "antd";
import "react-alice-carousel";
import "./Footer-C2GwH6yE.js";
import "./ProductCard-CAEvKeUY.js";
import "antd/es/card/Meta.js";
const Index = ({ auth, products, settings }) => {
  return /* @__PURE__ */ jsx(Authenticated, { user: auth.user, children: /* @__PURE__ */ jsx(HomeDetails, { products, settings }) });
};
export {
  Index as default
};
