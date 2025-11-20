import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Card, Flex, Typography, Button, Row, Col, Image } from "antd";
import AliceCarousel from "react-alice-carousel";
import { Link, router } from "@inertiajs/react";
import { C as Colors, D as Dimensions } from "../app.js";
import { F as Footer } from "./Footer-C2GwH6yE.js";
import { P as ProductCard } from "./ProductCard-CAEvKeUY.js";
import "axios";
import "react-dom/client";
import "antd/es/card/Meta.js";
import "@ant-design/icons";
const HomeDetails = ({ products, settings }) => {
  const [inspirationImages, setInspirationImages] = useState([]);
  const handleDragStart = (e) => e.preventDefault();
  const handleCorChanged = (e) => {
  };
  useEffect(() => {
    const inspirationImages2 = settings.inspiration_images ? JSON.parse(settings.inspiration_images) : [];
    const items = inspirationImages2 ? inspirationImages2.map((value, key) => {
      return /* @__PURE__ */ jsx(
        "img",
        {
          className: "pr-2",
          src: value,
          style: {
            maxHeight: "500px",
            width: "auto",
            margin: "auto"
          },
          onDragStart: handleDragStart,
          role: "presentation"
        },
        key
      );
    }) : [];
    setInspirationImages(items);
  }, [settings]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "relative",
          height: "700px",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url("${settings.hero_image}")`,
          marginBottom: ""
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute sm:bottom-0 sm:right-0  lg:top-[30%] lg:left-[50%] lg:right-[5%] ",
            children: /* @__PURE__ */ jsx(
              Card,
              {
                style: {
                  background: Colors.cardInfoBgColor
                },
                children: /* @__PURE__ */ jsxs(
                  Flex,
                  {
                    vertical: true,
                    style: {
                      padding: "37px 13px 13px 13px"
                    },
                    children: [
                      /* @__PURE__ */ jsx(Typography.Text, { strong: true, children: "New Arrival" }),
                      /* @__PURE__ */ jsx(
                        Typography.Title,
                        {
                          style: { color: Colors.primary, width: "80%" },
                          children: "Discover Our New Collection"
                        }
                      ),
                      /* @__PURE__ */ jsx(Typography.Paragraph, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis." }),
                      /* @__PURE__ */ jsx(Link, { href: "shop", children: /* @__PURE__ */ jsx(
                        Button,
                        {
                          style: {
                            borderRadius: 0,
                            background: Colors.primary,
                            color: Colors.textWhiteColor,
                            fontWeight: "bold",
                            fontSize: "16px"
                          },
                          size: "large",
                          shape: "default",
                          children: "BUY NOW"
                        }
                      ) })
                    ]
                  }
                )
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: Dimensions.pagePaddingClass,
        style: { marginTop: "37px", width: "100%" },
        children: [
          /* @__PURE__ */ jsxs(
            Flex,
            {
              align: "center",
              justify: "center",
              vertical: true,
              style: { marginBottom: 23 },
              children: [
                /* @__PURE__ */ jsx(Typography.Title, { level: 3, children: "Browse The Range" }),
                /* @__PURE__ */ jsx(Typography.Text, { type: "secondary", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(Row, { gutter: 16, children: [
            /* @__PURE__ */ jsxs(Col, { span: 8, children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "overflow-hidden  cursor-pointer rounded-xl relative group",
                  onClick: () => {
                    let queryParams = { category: "" };
                    const category = "dining";
                    queryParams.category = category;
                    router.get(route("shop.index"), queryParams);
                  },
                  children: /* @__PURE__ */ jsx(
                    Card,
                    {
                      style: { marginBottom: 10 },
                      styles: { body: { padding: 0 } },
                      cover: (
                        // <img
                        //     src={`/images/dining.jpg`}
                        //     alt={"dining"}
                        // />
                        /* @__PURE__ */ jsx(
                          Image,
                          {
                            alt: "it",
                            preview: false,
                            style: {
                              height: "320px",
                              width: "420px",
                              objectFit: "cover"
                            },
                            placeholder: /* @__PURE__ */ jsx(
                              Image,
                              {
                                preview: false,
                                src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200",
                                width: 320
                              }
                            ),
                            src: `${settings.dining}`
                          }
                        )
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(Row, { align: "middle", justify: "center", children: /* @__PURE__ */ jsx(Typography.Title, { level: 5, children: "Dining" }) })
            ] }),
            /* @__PURE__ */ jsxs(Col, { span: 8, children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "overflow-hidden  cursor-pointer rounded-xl relative group",
                  onClick: () => {
                    let queryParams = { category: "" };
                    const category = "living";
                    queryParams.category = category;
                    router.get(route("shop.index"), queryParams);
                  },
                  children: /* @__PURE__ */ jsx(
                    Card,
                    {
                      style: { marginBottom: 10 },
                      styles: { body: { padding: 0 } },
                      cover: (
                        // <img
                        //     alt="example"
                        //     src={"images/living.jpg"}
                        //     style={{
                        //         height: "320px",
                        //         width: "320px",
                        //     }}
                        // />
                        /* @__PURE__ */ jsx(
                          Image,
                          {
                            alt: "it",
                            preview: false,
                            style: {
                              height: "320px",
                              width: "420px",
                              objectFit: "cover"
                            },
                            placeholder: /* @__PURE__ */ jsx(
                              Image,
                              {
                                preview: false,
                                src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200",
                                width: 320
                              }
                            ),
                            src: `${settings.living}`
                          }
                        )
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(Row, { align: "middle", justify: "center", children: /* @__PURE__ */ jsx(Typography.Title, { level: 5, children: "Living" }) })
            ] }),
            /* @__PURE__ */ jsxs(Col, { span: 8, children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "overflow-hidden  cursor-pointer rounded-xl relative group",
                  onClick: () => {
                    let queryParams = { category: "" };
                    const category = "bedroom";
                    queryParams.category = category;
                    router.get(route("shop.index"), queryParams);
                  },
                  children: /* @__PURE__ */ jsx(
                    Card,
                    {
                      style: { marginBottom: 10 },
                      styles: { body: { padding: 0 } },
                      cover: (
                        // <img
                        //     alt="example"
                        //     src={"images/bedroom.jpg"}
                        //     style={{
                        //         height: "320px",
                        //         width: "320px",
                        //     }}
                        // />
                        /* @__PURE__ */ jsx(
                          Image,
                          {
                            alt: "it",
                            preview: false,
                            style: {
                              height: "320px",
                              width: "420px",
                              objectFit: "cover"
                            },
                            placeholder: /* @__PURE__ */ jsx(
                              Image,
                              {
                                preview: false,
                                src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200",
                                width: 320
                              }
                            ),
                            src: `${settings.bedroom}`
                          }
                        )
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(Row, { align: "middle", justify: "center", children: /* @__PURE__ */ jsx(Typography.Title, { level: 5, children: "Bedroom" }) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: Dimensions.pagePaddingClass,
        style: { border: 0, marginTop: "37px" },
        children: [
          /* @__PURE__ */ jsx(
            Flex,
            {
              align: "center",
              justify: "center",
              vertical: true,
              style: { marginBottom: 18 },
              children: /* @__PURE__ */ jsx(Typography.Title, { level: 3, children: "Our Products" })
            }
          ),
          /* @__PURE__ */ jsxs(Row, { gutter: { xs: 8, sm: 16, md: 24, lg: 32 }, children: [
            products && products.slice(0, 8).map((product, key) => {
              return /* @__PURE__ */ jsx(
                Col,
                {
                  xs: { span: 24 },
                  sm: { span: 12 },
                  md: { span: 8 },
                  lg: { span: 6 },
                  xl: { span: 6 },
                  style: { marginBottom: "23px" },
                  children: /* @__PURE__ */ jsx(ProductCard, { product })
                },
                key
              );
            }),
            /* @__PURE__ */ jsx(
              "div",
              {
                style: { width: "100%", marginTop: "27px" },
                className: "flex justify-center align-middle",
                children: /* @__PURE__ */ jsx(Link, { href: "shop", children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    style: {
                      borderRadius: 0,
                      borderColor: Colors.primary,
                      color: Colors.textButtonColor,
                      fontWeight: "bold"
                    },
                    className: "ps-12 pe-12",
                    children: "Show More"
                  }
                ) })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          background: Colors.secondaryLightColor,
          marginTop: "37px",
          marginBottom: "37px"
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: Dimensions.pagePaddingClass,
            style: {
              border: 0,
              background: Colors.secondaryLightColor
            },
            children: /* @__PURE__ */ jsxs(
              Row,
              {
                style: { height: "100%" },
                justify: "center",
                align: "middle",
                children: [
                  /* @__PURE__ */ jsx(
                    Col,
                    {
                      xs: { span: 22 },
                      sm: { span: 22 },
                      md: { span: 8 },
                      lg: { span: 6 },
                      xl: { span: 6 },
                      children: /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
                        /* @__PURE__ */ jsxs(Typography.Title, { level: 3, style: { textAlign: "center" }, children: [
                          "50+ Beautiful rooms inspiration",
                          " "
                        ] }),
                        /* @__PURE__ */ jsx(
                          Typography.Paragraph,
                          {
                            color: Colors.textSubtitleColor,
                            style: { textAlign: "center" },
                            children: "Our designer already made a lot of beautiful prototype of rooms that inspire you"
                          }
                        ),
                        /* @__PURE__ */ jsxs("div", { style: { textAlign: "center" }, children: [
                          /* @__PURE__ */ jsx(
                            Button,
                            {
                              style: {
                                marginTop: 13,
                                background: Colors.primary,
                                borderRadius: 0,
                                border: 0,
                                color: Colors.textWhiteColor
                              },
                              children: "Explore More"
                            }
                          ),
                          " "
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(Col, { span: 18, style: { height: "100%", overflow: "hidden" }, children: inspirationImages && /* @__PURE__ */ jsx(
                    AliceCarousel,
                    {
                      onSlideChanged: handleCorChanged,
                      disableButtonsControls: true,
                      autoHeight: false,
                      autoWidth: true,
                      mouseTracking: true,
                      items: inspirationImages,
                      responsive: {
                        0: { items: 1 },
                        // Number of items at different breakpoints
                        768: { items: 2 },
                        1024: { items: 3 }
                      }
                    }
                  ) })
                ]
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  HomeDetails as default
};
