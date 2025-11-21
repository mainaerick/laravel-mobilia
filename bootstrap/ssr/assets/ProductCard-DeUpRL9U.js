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
        className: "rounded-xl z-50 opacity-0 group-hover:opacity-100  transition duration-300 ease-in-out cursor-pointer absolute bottom-0 left-0 right-0 top-0 from-black/80 to-transparent bg-gradient-to-t inset-x-0 pt-30 text-white flex items-end",
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
        style: {
          background: Colors.cardDescriptionBgColor
        },
        className: "object-cover group-hover:blur-md h-full w-full aspect-square  transition duration-300",
        cover: /* @__PURE__ */ jsx(
          Image,
          {
            alt: "it",
            style: {
              height: "320px",
              width: "320px"
            },
            fallback: "data:image/png;base64,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",
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
