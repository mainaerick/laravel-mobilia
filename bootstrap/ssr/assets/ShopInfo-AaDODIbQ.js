import { jsx, jsxs } from "react/jsx-runtime";
import { C as Colors, D as Dimensions } from "../app.js";
import { Row, Col, Flex, Typography } from "antd";
import { CrownOutlined, CheckCircleOutlined, TruckOutlined, IssuesCloseOutlined } from "@ant-design/icons";
function ShopInfo({}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        height: "370px",
        background: Colors.secondary
      },
      children: /* @__PURE__ */ jsxs(
        Row,
        {
          className: Dimensions.pagePaddingClass,
          style: {
            height: "370px"
          },
          align: "middle",
          justify: "space-between",
          children: [
            /* @__PURE__ */ jsx(
              Col,
              {
                sm: { span: 24 },
                md: { span: 12 },
                lg: { span: 6 },
                xl: { span: 6 },
                children: /* @__PURE__ */ jsxs(Row, { align: "middle", gutter: 12, justify: "start", children: [
                  /* @__PURE__ */ jsx(
                    Col,
                    {
                      sm: { span: 24 },
                      md: { span: 12 },
                      lg: { span: 12 },
                      xl: { span: 12 },
                      children: /* @__PURE__ */ jsx(CrownOutlined, { style: { fontSize: 40 } })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Col,
                    {
                      sm: { span: 24 },
                      md: { span: 12 },
                      lg: { span: 12 },
                      xl: { span: 12 },
                      children: /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
                        /* @__PURE__ */ jsx(Typography.Title, { level: 5, children: "High Quality" }),
                        /* @__PURE__ */ jsx(Typography.Paragraph, { children: "crafted from top materials" })
                      ] })
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              Col,
              {
                sm: { span: 24 },
                md: { span: 12 },
                lg: { span: 6 },
                xl: { span: 6 },
                children: /* @__PURE__ */ jsxs(Row, { align: "middle", gutter: 12, justify: "space-between", children: [
                  /* @__PURE__ */ jsx(
                    Col,
                    {
                      sm: { span: 24 },
                      md: { span: 12 },
                      lg: { span: 12 },
                      xl: { span: 12 },
                      children: /* @__PURE__ */ jsx(CheckCircleOutlined, { style: { fontSize: 40 } })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Col,
                    {
                      sm: { span: 24 },
                      md: { span: 12 },
                      lg: { span: 12 },
                      xl: { span: 12 },
                      children: /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
                        /* @__PURE__ */ jsx(Typography.Title, { level: 5, children: "Warranty Protection" }),
                        /* @__PURE__ */ jsx(Typography.Paragraph, { children: "Over 2 years" })
                      ] })
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              Col,
              {
                sm: { span: 24 },
                md: { span: 12 },
                lg: { span: 6 },
                xl: { span: 6 },
                children: /* @__PURE__ */ jsxs(Row, { align: "middle", gutter: 12, justify: "space-between", children: [
                  /* @__PURE__ */ jsx(
                    Col,
                    {
                      sm: { span: 24 },
                      md: { span: 12 },
                      lg: { span: 12 },
                      xl: { span: 12 },
                      children: /* @__PURE__ */ jsx(TruckOutlined, { style: { fontSize: 40 } })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Col,
                    {
                      sm: { span: 24 },
                      md: { span: 12 },
                      lg: { span: 12 },
                      xl: { span: 12 },
                      children: /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
                        /* @__PURE__ */ jsx(Typography.Title, { level: 5, children: "Free Shipping" }),
                        /* @__PURE__ */ jsx(Typography.Paragraph, { children: "Order over Ksh 15000" })
                      ] })
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              Col,
              {
                sm: { span: 24 },
                md: { span: 12 },
                lg: { span: 6 },
                xl: { span: 6 },
                children: /* @__PURE__ */ jsxs(Row, { align: "middle", gutter: 12, justify: "space-between", children: [
                  /* @__PURE__ */ jsx(
                    Col,
                    {
                      sm: { span: 24 },
                      md: { span: 12 },
                      lg: { span: 12 },
                      xl: { span: 12 },
                      children: /* @__PURE__ */ jsx(IssuesCloseOutlined, { style: { fontSize: 40 } })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Col,
                    {
                      sm: { span: 24 },
                      md: { span: 12 },
                      lg: { span: 12 },
                      xl: { span: 12 },
                      children: /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
                        /* @__PURE__ */ jsx(Typography.Title, { level: 5, children: "24 / 7 Support" }),
                        /* @__PURE__ */ jsx(Typography.Paragraph, { children: "Dedicated support" })
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
  );
}
export {
  ShopInfo as S
};
