import { jsx, jsxs } from "react/jsx-runtime";
import { C as Colors } from "../app.js";
import { Flex, Button, Card, Typography, Image } from "antd";
import Meta from "antd/es/card/Meta.js";
import { ShareAltOutlined, SwapOutlined, HeartOutlined } from "@ant-design/icons";
import { Link, router } from "@inertiajs/react";
function ProductCard({ product }) {
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden  cursor-pointer rounded-xl relative group", children: /* @__PURE__ */ jsx(Link, { href: route("shop.show", product.id), children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center ", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "rounded-xl z-20 opacity-0 group-hover:opacity-100  transition duration-300 ease-in-out cursor-pointer absolute bottom-0 left-0 right-0 top-0 from-black/80 to-transparent bg-gradient-to-t inset-x-0 pt-30 text-white flex items-end",
        children: /* @__PURE__ */ jsxs(
          Flex,
          {
            style: {
              height: "100%",
              width: "100%"
            },
            align: "center",
            justify: "center",
            vertical: true,
            className: "opacity-60 transform-gpu space-y-3 text-xl group-hover:bg-gradient-100 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  pb-10  transform transition duration-300 ease-in-out",
            children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  style: {
                    backgroundColor: Colors.buttonBgColor,
                    color: Colors.textButtonColor
                  },
                  className: "font-bold ps-23 pe-23",
                  onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    router.post(
                      route("cart.add"),
                      {
                        product_id: product.id,
                        quantity: 1
                      },
                      {
                        preserveScroll: true,
                        preserveState: true
                      }
                    );
                  },
                  children: "Add to cart"
                }
              ),
              /* @__PURE__ */ jsxs(Flex, { gap: "middle", className: "text-sm", children: [
                /* @__PURE__ */ jsxs(Flex, { gap: "small", children: [
                  /* @__PURE__ */ jsx(ShareAltOutlined, {}),
                  /* @__PURE__ */ jsx("span", { children: "Share" })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Flex, { gap: "small", children: [
                  /* @__PURE__ */ jsx(SwapOutlined, {}),
                  /* @__PURE__ */ jsx("span", { children: "Compare" })
                ] }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Flex, { gap: "small", children: [
                  /* @__PURE__ */ jsx(HeartOutlined, {}),
                  /* @__PURE__ */ jsx("span", { children: "Like" })
                ] }) })
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Card,
      {
        style: { background: Colors.cardDescriptionBgColor },
        className: "object-cover group-hover:blur-md w-full aspect-square transition duration-300",
        cover: /* @__PURE__ */ jsx(
          Image,
          {
            alt: "it",
            style: { height: "320px", width: "320px" },
            fallback: "data:image/png;base64,...",
            src: (product == null ? void 0 : product.images) && `/${product == null ? void 0 : product.images[(product == null ? void 0 : product.images.length) - 1]}`
          }
        ),
        children: /* @__PURE__ */ jsx(
          Meta,
          {
            title: product.name,
            description: /* @__PURE__ */ jsxs(Flex, { vertical: true, gap: 13, children: [
              /* @__PURE__ */ jsx(
                Typography.Text,
                {
                  style: {
                    color: Colors.textGrayColor
                  },
                  children: product.category
                }
              ),
              /* @__PURE__ */ jsxs(Typography.Text, { strong: true, children: [
                "Ksh ",
                product.price
              ] })
            ] })
          }
        )
      }
    )
  ] }) }) });
}
export {
  ProductCard as P
};
