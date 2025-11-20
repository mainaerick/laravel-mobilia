import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { D as Dimensions, C as Colors } from "../app.js";
import { Divider, Row, Col, Flex, Typography, Input, Button } from "antd";
import { Link } from "react-alice-carousel";
function Footer({}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Divider, { style: { marginTop: "0" } }),
    /* @__PURE__ */ jsx("div", { className: Dimensions.pagePaddingClass, children: /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          height: "auto",
          paddingBottom: "37px"
        },
        children: /* @__PURE__ */ jsxs(
          Row,
          {
            align: "top",
            children: [
              /* @__PURE__ */ jsx(
                Col,
                {
                  xs: { span: 24 },
                  sm: { span: 24 },
                  md: { span: 6 },
                  lg: { span: 6 },
                  xl: { span: 6 },
                  children: /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsxs(Col, { span: 12, children: [
                    /* @__PURE__ */ jsxs(Flex, { gap: 20, vertical: true, children: [
                      /* @__PURE__ */ jsx(Typography.Title, { level: 5, children: "Mobilia" }),
                      /* @__PURE__ */ jsx(
                        Typography.Paragraph,
                        {
                          style: {
                            color: Colors.textGrayColor
                          },
                          children: "400 University Drive Suite 200 Dandora PH2, Nairobi"
                        }
                      )
                    ] }),
                    " "
                  ] }) })
                }
              ),
              /* @__PURE__ */ jsx(
                Col,
                {
                  xs: { span: 24 },
                  sm: { span: 24 },
                  md: { span: 18 },
                  lg: { span: 18 },
                  xl: { span: 18 },
                  children: /* @__PURE__ */ jsxs(Row, { children: [
                    /* @__PURE__ */ jsx(Col, { span: 8, style: { marginBottom: "50px" }, children: /* @__PURE__ */ jsxs(Flex, { vertical: true, gap: 20, children: [
                      /* @__PURE__ */ jsx(
                        Typography.Text,
                        {
                          style: {
                            color: Colors.textGrayColor
                          },
                          children: "Links"
                        }
                      ),
                      /* @__PURE__ */ jsx(Link, { href: "home", children: /* @__PURE__ */ jsx(Typography.Text, { strong: true, children: "Home" }) }),
                      /* @__PURE__ */ jsx(Link, { href: "shop", children: /* @__PURE__ */ jsx(Typography.Text, { strong: true, children: "Shop" }) }),
                      /* @__PURE__ */ jsx(Link, { href: "about", children: /* @__PURE__ */ jsx(Typography.Text, { strong: true, children: "About" }) }),
                      /* @__PURE__ */ jsx(Link, { href: "contact", children: /* @__PURE__ */ jsx(Typography.Text, { strong: true, children: "Contact" }) })
                    ] }) }),
                    /* @__PURE__ */ jsx(Col, { span: 8, children: /* @__PURE__ */ jsxs(Flex, { vertical: true, gap: 20, children: [
                      /* @__PURE__ */ jsx(
                        Typography.Text,
                        {
                          style: {
                            color: Colors.textGrayColor
                          },
                          children: "Help"
                        }
                      ),
                      /* @__PURE__ */ jsx(Link, { href: "", children: /* @__PURE__ */ jsx(Typography.Text, { strong: true, children: "Payment Options" }) }),
                      /* @__PURE__ */ jsx(Link, { href: "", children: /* @__PURE__ */ jsx(Typography.Text, { strong: true, children: "Returns" }) }),
                      /* @__PURE__ */ jsx(Link, { href: "", children: /* @__PURE__ */ jsx(Typography.Text, { strong: true, children: "Privacy Policies" }) })
                    ] }) }),
                    /* @__PURE__ */ jsx(
                      Col,
                      {
                        xs: { span: 24 },
                        sm: { span: 24 },
                        md: { span: 8 },
                        lg: { span: 8 },
                        xl: { span: 8 },
                        children: /* @__PURE__ */ jsxs(Flex, { vertical: true, gap: 20, children: [
                          /* @__PURE__ */ jsx(
                            Typography.Text,
                            {
                              style: {
                                color: Colors.textGrayColor
                              },
                              children: "NewsLetter"
                            }
                          ),
                          /* @__PURE__ */ jsxs(Row, { align: "middle", justify: "start", children: [
                            /* @__PURE__ */ jsx(
                              Col,
                              {
                                sm: { span: 24 },
                                md: { span: 12 },
                                lg: { span: 12 },
                                xl: { span: 12 },
                                children: /* @__PURE__ */ jsx(Input, { placeholder: "Enter our email address" })
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              Col,
                              {
                                sm: { span: 24 },
                                md: { span: 12 },
                                lg: { span: 12 },
                                xl: { span: 12 },
                                children: /* @__PURE__ */ jsx(Button, { type: "text", children: /* @__PURE__ */ jsx(Typography.Text, { strong: true, children: "Subscribe" }) })
                              }
                            )
                          ] })
                        ] })
                      }
                    )
                  ] })
                }
              )
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(Divider, {})
  ] });
}
export {
  Footer as F
};
