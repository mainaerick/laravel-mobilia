import { jsxs, jsx } from "react/jsx-runtime";
import { H as Hero } from "./Hero-BzYIx0wQ.js";
import { A as Authenticated } from "./AuthenticatedLayout-mRr1fAgD.js";
import { D as Dimensions } from "../app.js";
import { Form, Breadcrumb, Flex, Typography } from "antd";
import { usePage } from "@inertiajs/react";
import { I as InitialOrder } from "./_Models-D7LNJOvB.js";
import CheckoutForm from "./CheckoutForm-6zdFu4M1.js";
import "react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@headlessui/react";
import "@ant-design/icons";
import "axios";
import "react-dom/client";
import "./FormInput-tIVQ5YWv.js";
import "./TableComponent-DTwfws4x.js";
function Index({ auth, errors }) {
  const [form] = Form.useForm();
  const { props } = usePage();
  const items = props == null ? void 0 : props.cartItems;
  return /* @__PURE__ */ jsxs(Authenticated, { user: auth, children: [
    /* @__PURE__ */ jsx(
      Hero,
      {
        whichRoute: /* @__PURE__ */ jsxs(Breadcrumb, { style: { margin: "16px 0" }, children: [
          /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Shop" }),
          /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Checkout" })
        ] }),
        title: "Checkout"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: Dimensions.pagePaddingClass,
        style: { marginTop: "48px", marginBottom: "48px" },
        children: /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
          /* @__PURE__ */ jsx(Typography.Title, { level: 3, children: "Billing details" }),
          /* @__PURE__ */ jsx(
            CheckoutForm,
            {
              form,
              items,
              errors,
              orderDetails: InitialOrder,
              deleteOrderItems: function(item) {
                throw new Error("Function not implemented.");
              }
            }
          )
        ] })
      }
    )
  ] });
}
export {
  Index as default
};
