import { jsxs, jsx } from "react/jsx-runtime";
import { H as Hero } from "./Hero-lCtrtUiE.js";
import { A as Authenticated } from "./AuthenticatedLayout-D4ZzMmwX.js";
import { D as Dimensions } from "../app.js";
import { message, Row, Col } from "antd";
import { S as ShopInfo } from "./ShopInfo-AaDODIbQ.js";
import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { F as Footer } from "./Footer-owlJr_0r.js";
import OrdersTable from "./OrdersTable-BiB2QPiq.js";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-CMrbbniR.js";
import "@headlessui/react";
import "@ant-design/icons";
import "axios";
import "react-dom/client";
import "react-alice-carousel";
import "./TableComponent-DTwfws4x.js";
import "./TableAction-84W3ZDIe.js";
import "react-highlight-words";
function Index({ auth, orders, success, settings }) {
  const { props } = usePage();
  orders = orders.data;
  const items = orders;
  const [subTotal, setSubTotal] = useState("0");
  useEffect(() => {
    if (success) {
      message.success("Order created", 2.5);
    }
  }, [success]);
  return /* @__PURE__ */ jsxs(Authenticated, { user: auth.user, children: [
    /* @__PURE__ */ jsx(Hero, { whichRoute: "Shop>Orders", title: "Orders", settings }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: Dimensions.pagePaddingClass,
        style: { marginTop: "48px", marginBottom: "48px" },
        children: /* @__PURE__ */ jsx(Row, { gutter: 16, children: /* @__PURE__ */ jsx(Col, { span: 24, children: /* @__PURE__ */ jsx(OrdersTable, { auth, items, pagination: false, setClickedOrder: null }) }) })
      }
    ),
    /* @__PURE__ */ jsx(ShopInfo, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as default
};
