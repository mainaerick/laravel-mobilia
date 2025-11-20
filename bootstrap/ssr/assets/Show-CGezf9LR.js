import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-mRr1fAgD.js";
import { C as Colors, D as Dimensions } from "../app.js";
import { Row, Col, Flex, Breadcrumb, Image, Typography, Rate, Divider, Radio, Badge, Button, Form, InputNumber, Tabs } from "antd";
import { CheckCircleOutlined, PlusOutlined, MinusOutlined, FacebookOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { useState } from "react";
import Description from "./Description-6rG0plfA.js";
import Reviews from "./Reviews-B2FQPtf2.js";
import { F as Footer } from "./Footer-C2GwH6yE.js";
import { P as ProductCard } from "./ProductCard-CAEvKeUY.js";
import { usePage, Link, router } from "@inertiajs/react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@headlessui/react";
import "axios";
import "react-dom/client";
import "react-alice-carousel";
import "antd/es/card/Meta.js";
function Show({ auth, product, relatedProducts, productCartItems }) {
  var _a;
  const productData = product.data;
  const relatedData = relatedProducts.data;
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const { flash } = usePage().props;
  const items = [
    {
      key: "1",
      label: "Description",
      children: /* @__PURE__ */ jsx(Description, { description: productData.description })
    },
    // { key: "2", label: "Additional Information", children: <AdditionalInfo additionalInfo={""} /> },
    {
      key: "3",
      label: "Reviews",
      children: /* @__PURE__ */ jsx(Reviews, { reviews: productData.reviews })
    }
  ];
  const colorSelected = (color) => {
    setSelectedColor(color);
  };
  const showMoreRelated = (productId) => {
    const queryParams = {};
    queryParams.category = productData.category;
    router.get(route("shop.index"), queryParams);
  };
  const addToCart = (values) => {
    if (values.quantity == void 0) {
      values.quantity = 1;
    }
    router.post(route("cart.add"), {
      product_id: productData.id,
      quantity: values.quantity
    });
  };
  return /* @__PURE__ */ jsxs(Authenticated, { user: auth, children: [
    /* @__PURE__ */ jsx("div", { style: { background: Colors.secondary, height: "100px " }, children: /* @__PURE__ */ jsxs(
      Row,
      {
        style: { height: "100%" },
        justify: "space-between",
        align: "middle",
        className: Dimensions.pagePaddingClass,
        children: [
          /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(Flex, { align: "center", style: { height: "30px" }, children: /* @__PURE__ */ jsxs(Breadcrumb, { style: { margin: "16px 0" }, children: [
            /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Home" }),
            /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Shop" }),
            /* @__PURE__ */ jsx(Breadcrumb.Item, { children: productData.name })
          ] }) }) }),
          /* @__PURE__ */ jsx(Col, { span: 12, style: { width: "100%" }, children: /* @__PURE__ */ jsx(Row, { justify: "end" }) })
        ]
      }
    ) }),
    productData && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: Dimensions.pagePaddingClass,
          style: { marginTop: "18px" },
          children: /* @__PURE__ */ jsxs(Row, { children: [
            /* @__PURE__ */ jsxs(
              Col,
              {
                sm: { span: 24 },
                md: { span: 12 },
                lg: { span: 12 },
                xl: { span: 12 },
                style: { width: "100%" },
                children: [
                  /* @__PURE__ */ jsxs(Flex, { gap: 27, children: [
                    /* @__PURE__ */ jsx(
                      Flex,
                      {
                        gap: 13,
                        vertical: true,
                        style: {
                          height: 400,
                          overflow: "auto"
                        },
                        children: productData == null ? void 0 : productData.images.map((i) => "/" + i).map((item, key) => {
                          return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                            Image,
                            {
                              height: 100,
                              width: 100,
                              preview: false,
                              src: item,
                              alt: ""
                            }
                          ) }, key);
                        })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Image.PreviewGroup,
                      {
                        items: productData == null ? void 0 : productData.images.map(
                          (i) => "/" + i
                        ),
                        children: /* @__PURE__ */ jsx(
                          Image,
                          {
                            width: "100%",
                            height: 400,
                            src: `/${productData == null ? void 0 : productData.images[0]}`
                          }
                        )
                      }
                    )
                  ] }),
                  " "
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Col,
              {
                xs: { span: 24 },
                sm: { span: 24 },
                md: { span: 11, offset: 1 },
                lg: { span: 11, offset: 1 },
                xl: { span: 11, offset: 1 },
                style: { width: "100%" },
                children: [
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Flex, { gap: 19, vertical: true, children: [
                    /* @__PURE__ */ jsx(
                      Typography.Title,
                      {
                        level: 1,
                        style: {
                          fontWeight: "normal",
                          margin: 0
                        },
                        children: productData.name
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Typography.Title,
                      {
                        level: 5,
                        style: {
                          color: Colors.textGrayColor,
                          margin: 0
                        },
                        children: `Ksh ${productData.price}`
                      }
                    ),
                    /* @__PURE__ */ jsxs(Flex, { gap: 20, children: [
                      /* @__PURE__ */ jsxs(Col, { children: [
                        " ",
                        /* @__PURE__ */ jsx(
                          Rate,
                          {
                            disabled: true,
                            allowHalf: true,
                            defaultValue: parseFloat(
                              productData.rating.toString()
                            )
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(
                        Divider,
                        {
                          type: "vertical",
                          style: {
                            background: "black",
                            height: "100%"
                          }
                        }
                      ) }),
                      /* @__PURE__ */ jsx(Col, { children: `${productData.reviews.length} Customer Review(s)` })
                    ] }),
                    /* @__PURE__ */ jsx(Typography.Paragraph, { children: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound." }),
                    (productData == null ? void 0 : productData.sizes) && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(
                        Typography.Text,
                        {
                          style: {
                            color: Colors.textGrayColor
                          },
                          children: "Size"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Radio.Group,
                        {
                          defaultValue: "a",
                          buttonStyle: "solid",
                          style: { gap: "13px" },
                          children: /* @__PURE__ */ jsx(Flex, { gap: 13, children: (_a = productData == null ? void 0 : productData.sizes) == null ? void 0 : _a.map(
                            (size, key) => {
                              return /* @__PURE__ */ jsx(
                                Radio.Button,
                                {
                                  value: size,
                                  children: size
                                },
                                key
                              );
                            }
                          ) })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      Typography.Text,
                      {
                        style: {
                          color: Colors.textGrayColor
                        },
                        children: "Color"
                      }
                    ),
                    /* @__PURE__ */ jsx(Flex, { gap: 13, children: productData.colors.map(
                      (color, key) => {
                        return /* @__PURE__ */ jsx(
                          Badge,
                          {
                            count: selectedColor === color ? /* @__PURE__ */ jsx(
                              CheckCircleOutlined,
                              {
                                style: {
                                  color: Colors.primary
                                }
                              }
                            ) : 0,
                            showZero: false,
                            children: /* @__PURE__ */ jsx(
                              Button,
                              {
                                shape: "circle",
                                onClick: () => colorSelected(
                                  color
                                ),
                                style: {
                                  backgroundColor: color,
                                  borderColor: Colors.primary
                                }
                              }
                            )
                          },
                          key
                        );
                      }
                    ) }),
                    /* @__PURE__ */ jsx(
                      Form,
                      {
                        name: "addtocart",
                        labelCol: { span: 8 },
                        wrapperCol: { span: 16 },
                        initialValues: {
                          quantity: productCartItems ? productCartItems.quantity : 1
                        },
                        onFinish: addToCart,
                        autoComplete: "off",
                        children: /* @__PURE__ */ jsxs(
                          Flex,
                          {
                            gap: 6,
                            style: { marginTop: "13px" },
                            children: [
                              /* @__PURE__ */ jsx(
                                Form.Item,
                                {
                                  name: "quantity",
                                  rules: [
                                    {
                                      required: false,
                                      message: "Please input your username!"
                                    }
                                  ],
                                  children: /* @__PURE__ */ jsx(
                                    InputNumber,
                                    {
                                      size: "middle",
                                      min: 1,
                                      max: productData.quantity,
                                      keyboard: true,
                                      controls: {
                                        upIcon: /* @__PURE__ */ jsx(PlusOutlined, {}),
                                        downIcon: /* @__PURE__ */ jsx(MinusOutlined, {})
                                      }
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Button,
                                {
                                  htmlType: "submit",
                                  shape: "round",
                                  size: "middle",
                                  icon: (flash == null ? void 0 : flash.success) && /* @__PURE__ */ jsx(CheckCircleOutlined, {}),
                                  children: "Add To Cart"
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Button,
                                {
                                  shape: "round",
                                  size: "middle",
                                  icon: /* @__PURE__ */ jsx(PlusOutlined, {}),
                                  children: "Compare"
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Divider,
                      {
                        style: {
                          background: Colors.secondary,
                          height: "0.1px"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxs(Flex, { gap: 9, children: [
                      /* @__PURE__ */ jsx(Col, { children: "SKU" }),
                      /* @__PURE__ */ jsx(Col, { children: ":" }),
                      /* @__PURE__ */ jsx(Col, { children: "23323" })
                    ] }),
                    /* @__PURE__ */ jsxs(Flex, { gap: 9, children: [
                      /* @__PURE__ */ jsx(Col, { children: "Category" }),
                      /* @__PURE__ */ jsx(Col, { children: ":" }),
                      /* @__PURE__ */ jsx(Col, { children: productData.category })
                    ] }),
                    /* @__PURE__ */ jsxs(Flex, { gap: 9, children: [
                      /* @__PURE__ */ jsx(Col, { children: "Tags" }),
                      /* @__PURE__ */ jsx(Col, { children: ":" }),
                      /* @__PURE__ */ jsx(Col, { children: "Sofa,Chair,Home,Shop" })
                    ] }),
                    /* @__PURE__ */ jsxs(Flex, { gap: 9, align: "middle", children: [
                      /* @__PURE__ */ jsx(Col, { children: "Share" }),
                      /* @__PURE__ */ jsx(Col, { children: ":" }),
                      /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsxs(Flex, { gap: 7, children: [
                        /* @__PURE__ */ jsx(
                          FacebookOutlined,
                          {
                            style: {
                              fontSize: "23px"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          LinkedinOutlined,
                          {
                            style: {
                              fontSize: "23px"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          TwitterOutlined,
                          {
                            style: {
                              fontSize: "23px"
                            }
                          }
                        )
                      ] }) })
                    ] })
                  ] }) }),
                  " "
                ]
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: Dimensions.pagePaddingClass,
          style: { marginBottom: 18 },
          children: /* @__PURE__ */ jsx(Tabs, { defaultActiveKey: "1", centered: true, items })
        }
      ),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: Dimensions.pagePaddingClass,
          style: { marginBottom: 38 },
          children: [
            /* @__PURE__ */ jsx(
              Flex,
              {
                align: "center",
                justify: "center",
                vertical: true,
                style: { marginBottom: 18 },
                children: /* @__PURE__ */ jsx(Typography.Title, { level: 3, children: "Related Products" })
              }
            ),
            /* @__PURE__ */ jsx(Row, { gutter: { xs: 8, sm: 16, md: 24, lg: 32 }, children: relatedData.map((relatedProd, key) => {
              return /* @__PURE__ */ jsx(
                Col,
                {
                  xs: { span: 12 },
                  sm: { span: 12 },
                  md: { span: 8 },
                  lg: { span: 6 },
                  xl: { span: 6 },
                  style: { marginBottom: "17px" },
                  children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: route(
                        "shop.show",
                        relatedProd.id
                      ),
                      children: /* @__PURE__ */ jsx(
                        ProductCard,
                        {
                          product: relatedProd
                        }
                      )
                    }
                  )
                },
                key
              );
            }) }),
            /* @__PURE__ */ jsx(
              Flex,
              {
                justify: "center",
                style: { marginBottom: 38, marginTop: 28 },
                children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    style: {
                      borderRadius: 0,
                      borderColor: Colors.primary,
                      color: Colors.textButtonColor,
                      fontWeight: "bold"
                    },
                    className: "ps-12 pe-12",
                    onClick: () => showMoreRelated(productData.id),
                    children: "Show More"
                  }
                )
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Show as default
};
