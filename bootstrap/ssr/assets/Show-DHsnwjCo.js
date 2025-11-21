import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedAdmin } from "./AdminLayout-BTxGKBRd.js";
import CheckoutForm from "./CheckoutForm-6zdFu4M1.js";
import { Form } from "antd";
import { useState, useEffect } from "react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-CMrbbniR.js";
import "@inertiajs/react";
import "@headlessui/react";
import "@ant-design/icons";
import "../app.js";
import "axios";
import "react-dom/client";
import "./FormInput-tIVQ5YWv.js";
import "./TableComponent-DTwfws4x.js";
function Show({ auth, order, items, errors }) {
  const [form] = Form.useForm();
  const [cartItems, setCartItems] = useState();
  order = order.data;
  useEffect(() => {
    let cartItems_ = [];
    order.items.map((item, key) => {
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
  }, [order.items]);
  const deleteOrderItem = (item) => {
    const newCartItems = cartItems.filter(
      (item_) => item_ !== item
    );
    setCartItems(newCartItems);
  };
  return /* @__PURE__ */ jsxs(
    AuthenticatedAdmin,
    {
      user: auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Order" }),
      children: [
        " ",
        cartItems && /* @__PURE__ */ jsx(
          CheckoutForm,
          {
            form,
            items: cartItems,
            errors,
            orderDetails: order,
            deleteOrderItems: deleteOrderItem
          }
        )
      ]
    }
  );
}
export {
  Show as default
};
