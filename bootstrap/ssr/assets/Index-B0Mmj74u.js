import { jsxs, jsx } from "react/jsx-runtime";
import { H as Hero } from "./Hero-BzYIx0wQ.js";
import { A as Authenticated } from "./AuthenticatedLayout-mRr1fAgD.js";
import { D as Dimensions, C as Colors } from "../app.js";
import { usePage, router } from "@inertiajs/react";
import { Breadcrumb, Row, Col, ConfigProvider, Table, Flex, Typography, Button, Image, Space } from "antd";
import { useState, useEffect } from "react";
import { DeleteFilled } from "@ant-design/icons";
import { S as ShopInfo } from "./ShopInfo-AaDODIbQ.js";
import { F as Footer } from "./Footer-C2GwH6yE.js";
import Link from "antd/es/typography/Link.js";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@headlessui/react";
import "axios";
import "react-dom/client";
import "react-alice-carousel";
function Index({ auth }) {
  const { props } = usePage();
  const items = props == null ? void 0 : props.cartItems;
  const [subTotal, setSubTotal] = useState("0");
  const handleRemoveItem = (id) => {
    router.delete(route("cart.removeItem", id), {
      onSuccess: () => {
        console.log("Item removed successfully");
      }
    });
  };
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "id",
      render: (product) => /* @__PURE__ */ jsxs(Flex, { gap: 23, align: "center", children: [
        /* @__PURE__ */ jsx(
          Image,
          {
            preview: false,
            src: product.images[0],
            width: 108
          }
        ),
        /* @__PURE__ */ jsx(Typography.Text, { children: product.name })
      ] })
    },
    {
      title: "Price",
      dataIndex: "product",
      key: "product.price",
      render: (text) => /* @__PURE__ */ jsx("a", { children: text.price })
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity"
    },
    {
      title: "Subtotal",
      key: "subtotal",
      render: (_, record) => /* @__PURE__ */ jsx(Space, { size: "middle", children: /* @__PURE__ */ jsx(Typography.Text, { children: record.quantity * parseFloat(record.product.price.toString()) }) })
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        // <Link>
        /* @__PURE__ */ jsx(
          DeleteFilled,
          {
            onClick: () => handleRemoveItem(record.id),
            style: { fontSize: "23px", color: Colors.primary }
          }
        )
      )
    }
  ];
  useEffect(() => {
    if (items) {
      let total = 0;
      items.map((item) => {
        total = parseFloat(item.product.price.toString()) * item.quantity;
      });
      setSubTotal(Number.parseFloat(total.toString()).toFixed(2));
    }
  }, [items]);
  return /* @__PURE__ */ jsxs(Authenticated, { user: auth.user, children: [
    /* @__PURE__ */ jsx(
      Hero,
      {
        whichRoute: /* @__PURE__ */ jsxs(Breadcrumb, { style: { margin: "16px 0" }, children: [
          /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Shop" }),
          /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Cart" })
        ] }),
        title: "Cart"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: Dimensions.pagePaddingClass,
        style: { marginTop: "48px", marginBottom: "48px" },
        children: /* @__PURE__ */ jsxs(Row, { gutter: 16, children: [
          /* @__PURE__ */ jsx(
            Col,
            {
              xs: { span: 24 },
              sm: { span: 24 },
              md: { span: 12 },
              lg: { span: 12 },
              xl: { span: 12 },
              children: /* @__PURE__ */ jsx(
                ConfigProvider,
                {
                  theme: {
                    components: {
                      Table: {
                        headerBg: Colors.secondary
                      }
                    }
                  },
                  children: /* @__PURE__ */ jsx(
                    Table,
                    {
                      columns,
                      dataSource: items,
                      pagination: false
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Col,
            {
              xs: { span: 24 },
              sm: { span: 24 },
              md: { span: 12 },
              lg: { span: 12 },
              xl: { span: 12 },
              style: {},
              children: /* @__PURE__ */ jsxs(
                Flex,
                {
                  vertical: true,
                  align: "center",
                  gap: "large",
                  style: {
                    background: Colors.secondary,
                    height: 390,
                    padding: " 23px 77px"
                  },
                  children: [
                    /* @__PURE__ */ jsx(Typography.Title, { level: 3, children: "Cart Totals" }),
                    /* @__PURE__ */ jsxs(
                      Row,
                      {
                        justify: "space-between",
                        align: "middle",
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ jsxs(Col, { children: [
                            " ",
                            /* @__PURE__ */ jsx(Typography.Text, { strong: true, children: "Sub-Total" })
                          ] }),
                          /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(
                            Typography.Title,
                            {
                              level: 4,
                              children: `Ksh ${subTotal}`
                            }
                          ) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(Link, { href: "checkout", children: /* @__PURE__ */ jsx(
                      Button,
                      {
                        block: true,
                        size: "large",
                        style: { borderRadius: "5px" },
                        children: "Checkout"
                      }
                    ) })
                  ]
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(ShopInfo, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as default
};
