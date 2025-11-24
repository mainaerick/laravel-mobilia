import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Card, Flex, Typography, Button, Row, Col, Image } from "antd";
import { Link, router } from "@inertiajs/react";
import { C as Colors, D as Dimensions } from "../app.js";
import { F as Footer } from "./Footer-owlJr_0r.js";
import { P as ProductCard } from "./ProductCard-CZ7Z_8xO.js";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "axios";
import "react-dom/client";
import "react-alice-carousel";
import "antd/es/card/Meta.js";
import "@ant-design/icons";
function RoomInspirationHero({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const goToPrevious = () => {
    setActiveIndex((prev) => prev === 0 ? slides.length - 1 : prev - 1);
  };
  const goToNext = () => {
    setActiveIndex((prev) => prev === slides.length - 1 ? 0 : prev + 1);
  };
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  const nextSlide = slides[(activeIndex + 1) % slides.length];
  return /* @__PURE__ */ jsxs("div", { className: "flex items-stretch", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden lg:flex w-full items-center justify-center relative", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -100 },
            transition: { duration: 0.5, ease: "easeInOut" },
            className: "relative rounded-2xl overflow-hidden shadow-lg",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: slides[activeIndex] || "/placeholder.svg",
                  className: "w-full aspect-square object-cover",
                  alt: ""
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 50 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.1, duration: 0.5 },
                  className: "absolute top-6 right-0 w-32 h-40 rounded-xl overflow-hidden shadow-md transform translate-x-16",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: nextSlide || "/placeholder.svg",
                      alt: "Next slide preview",
                      className: "w-full h-full object-cover"
                    }
                  )
                }
              )
            ]
          },
          activeIndex
        ) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: goToPrevious,
            className: "absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors z-10",
            "aria-label": "Previous slide",
            children: /* @__PURE__ */ jsx(ChevronLeft, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: goToNext,
            className: "absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors z-10",
            "aria-label": "Next slide",
            children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-8", children: slides.map((_, index) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => goToSlide(index),
          className: `transition-all duration-300 rounded-full ${index === activeIndex ? "bg-[#C8A045] w-8 h-2" : "bg-slate-300 w-2 h-2 hover:bg-slate-400"}`,
          "aria-label": `Go to slide ${index + 1}`
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "lg:hidden w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: { duration: 0.3 },
            className: "relative w-full rounded-2xl overflow-hidden shadow-lg",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: slides[activeIndex] || "/placeholder.svg",
                className: "w-full aspect-video object-cover",
                alt: ""
              }
            )
          },
          activeIndex
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 pointer-events-none", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: goToPrevious,
              className: "w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 pointer-events-auto hover:bg-slate-50",
              children: /* @__PURE__ */ jsx(ChevronLeft, { size: 20 })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: goToNext,
              className: "w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 pointer-events-auto hover:bg-slate-50",
              children: /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-6 px-4", children: slides.map((_, index) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => goToSlide(index),
          className: `transition-all duration-300 rounded-full ${index === activeIndex ? "bg-[#C8A045] w-8 h-2" : "bg-slate-300 w-2 h-2 hover:bg-slate-400"}`,
          "aria-label": `Go to slide ${index + 1}`
        },
        index
      )) })
    ] })
  ] });
}
const HomeDetails = ({ products, settings }) => {
  const [inspirationImages, setInspirationImages] = useState([]);
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
                    let queryParams;
                    const room = "dining";
                    queryParams.room = [room];
                    router.get(route("shop.index"), queryParams);
                  },
                  children: /* @__PURE__ */ jsx(
                    Card,
                    {
                      style: { marginBottom: 10 },
                      hoverable: true,
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
                    let queryParams;
                    const room = "living";
                    queryParams.room = [room];
                    router.get(route("shop.index"), queryParams);
                  },
                  children: /* @__PURE__ */ jsx(
                    Card,
                    {
                      hoverable: true,
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
                    let queryParams;
                    const room = "bedroom";
                    queryParams.room = [room];
                    router.get(route("shop.index"), queryParams);
                  },
                  children: /* @__PURE__ */ jsx(
                    Card,
                    {
                      hoverable: true,
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
          paddingTop: "37px",
          marginTop: "37px",
          marginBottom: "37px"
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: Dimensions.pagePaddingClass,
            style: {
              border: 0,
              background: Colors.secondaryLightColor,
              paddingBottom: "37px"
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
                      children: /* @__PURE__ */ jsx(Flex, { vertical: true, children: /* @__PURE__ */ jsx("div", { className: "w-full flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-sm", children: [
                        /* @__PURE__ */ jsx("h1", { className: "text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight", children: "50+ Beautiful rooms inspiration" }),
                        /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-700 mb-8 leading-relaxed", children: "Discover stunning interior designs and get inspired to transform your living spaces into beautiful sanctuaries." }),
                        /* @__PURE__ */ jsxs("div", { style: { textAlign: "start", marginBottom: "37px" }, children: [
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
                      ] }) }) })
                    }
                  ),
                  /* @__PURE__ */ jsx(Col, { span: 18, style: { height: "100%", overflow: "hidden" }, children: /* @__PURE__ */ jsx(RoomInspirationHero, { slides: settings.inspiration_images ? JSON.parse(settings.inspiration_images) : [] }) })
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
