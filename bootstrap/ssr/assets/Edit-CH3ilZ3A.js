import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-mRr1fAgD.js";
import DeleteUserForm from "./DeleteUserForm-DFfeZau2.js";
import UpdatePasswordForm from "./UpdatePasswordForm-6CF9D2IB.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-BLc6rV1x.js";
import { Head } from "@inertiajs/react";
import { Form, Menu, Row, Col } from "antd";
import { UserOutlined, InboxOutlined } from "@ant-design/icons";
import { useState } from "react";
import { D as Dimensions } from "../app.js";
import OrdersTable from "./OrdersTable-Cu3IlSBT.js";
import CheckoutForm from "./CheckoutForm-6zdFu4M1.js";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@headlessui/react";
import "./SecondaryButton-DFfgLaPF.js";
import "./TextInput-DQL-42yE.js";
import "./InputLabel-CaoVq05r.js";
import "./PrimaryButton-C5ts3FGL.js";
import "axios";
import "react-dom/client";
import "./TableComponent-DTwfws4x.js";
import "./TableAction-84W3ZDIe.js";
import "react-highlight-words";
import "./FormInput-tIVQ5YWv.js";
const navitems = [
  {
    label: "Account",
    key: "account",
    icon: /* @__PURE__ */ jsx(UserOutlined, {})
  },
  {
    label: "Orders",
    key: "orders",
    icon: /* @__PURE__ */ jsx(InboxOutlined, {})
  }
];
function Edit({ auth, mustVerifyEmail, orders, status }) {
  const [current, setCurrent] = useState("account");
  const [currentOrder, setCurrentOrder] = useState();
  const [cartItems, setCartItems] = useState();
  const [form] = Form.useForm();
  orders = orders.data;
  const items = orders;
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const setClickedOrder = (orderId) => {
    let cartItems_ = [];
    const order = items.find((item) => item.id === orderId);
    order == null ? void 0 : order.items.map((item, key) => {
      const cartItem = {
        id: key,
        cart_id: auth.user.cart.id,
        product_id: item.productId,
        quantity: item.quantity,
        product: {
          name: item.name,
          description: "",
          price: item.price,
          quantity: 0,
          category: "",
          room: "",
          brand: "",
          material: "",
          color: "",
          dimensions: { depth: 0, width: 0, height: 0 },
          weight: "",
          images: [],
          rating: 0,
          reviews: [],
          colors: [],
          sizes: []
        },
        created_at: "",
        updated_at: ""
      };
      cartItems_.push(cartItem);
    });
    setCartItems(cartItems_);
    setCurrentOrder(order);
  };
  const deleteOrderItem = (item) => {
    const newCartItems = cartItems.filter(
      (item_) => item_ !== item
    );
    setCartItems(newCartItems);
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Account" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx(Menu, { onClick, style: { width: "100%" }, selectedKeys: [current], mode: "horizontal", items: navitems }),
          current === "orders" ? /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: Dimensions.pagePaddingClass,
              style: { marginTop: "48px", marginBottom: "48px" },
              children: /* @__PURE__ */ jsx(Row, { gutter: 16, children: /* @__PURE__ */ jsxs(Col, { span: 24, children: [
                /* @__PURE__ */ jsx(OrdersTable, { auth, items, pagination: false, setClickedOrder }),
                currentOrder && /* @__PURE__ */ jsx(CheckoutForm, { form, orderDetails: currentOrder, items: cartItems, errors: {}, deleteOrderItems: deleteOrderItem })
              ] }) })
            }
          ) }) : /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
              UpdateProfileInformation,
              {
                mustVerifyEmail,
                status,
                className: "max-w-xl"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
            /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
          ] })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
