import { jsx, jsxs } from "react/jsx-runtime";
import { F as Footer } from "./Footer-owlJr_0r.js";
import { A as Authenticated } from "./AuthenticatedLayout-CnDTPPpR.js";
import { C as Colors, D as Dimensions } from "../app.js";
import { Pagination, Breadcrumb, Row, Col, Flex, Typography, Select, Empty } from "antd";
import { P as ProductCard } from "./ProductCard-DeUpRL9U.js";
import { router } from "@inertiajs/react";
import { H as Hero } from "./Hero-BzYIx0wQ.js";
import { S as ShopInfo } from "./ShopInfo-AaDODIbQ.js";
import "react-alice-carousel";
import "react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-CMrbbniR.js";
import "@headlessui/react";
import "@ant-design/icons";
import "axios";
import "react-dom/client";
import "antd/es/card/Meta.js";
const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return /* @__PURE__ */ jsx("a", { children: "Previous" });
  }
  if (type === "next") {
    return /* @__PURE__ */ jsx("a", { children: "Next" });
  }
  return originalElement;
};
const PaginationDiv = ({ current, handleChange, onShowSizeChange, total, perPage }) => {
  return /* @__PURE__ */ jsx(Pagination, { onShowSizeChange, current, pageSize: perPage, total, itemRender, onChange: handleChange });
};
function Index({ auth, products, queryParams = null }) {
  queryParams = queryParams || {};
  const currentPage = products.current_page;
  const totalNumber = products.total;
  const perPage = products.per_page;
  const productsData = products.data;
  const handleChangeSort = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route("shop.index"), queryParams);
  };
  const handlePageChange = (e) => {
    queryParams.page = e;
    router.get(route("shop.index"), queryParams);
  };
  const onShowSizeChange = (current, size) => {
    console.log(size);
    queryParams.per_page = size;
  };
  return /* @__PURE__ */ jsxs(Authenticated, { user: auth, children: [
    /* @__PURE__ */ jsx(
      Hero,
      {
        whichRoute: /* @__PURE__ */ jsxs(Breadcrumb, { style: { margin: "16px 0" }, children: [
          /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Home" }),
          /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Shop" })
        ] }),
        title: "Shop"
      }
    ),
    /* @__PURE__ */ jsx("div", { style: { background: Colors.secondary, height: "100px " }, children: /* @__PURE__ */ jsxs(
      Row,
      {
        style: { height: "100%" },
        justify: "space-between",
        align: "middle",
        className: Dimensions.pagePaddingClass,
        children: [
          /* @__PURE__ */ jsx(
            Col,
            {
              sm: { span: 24 },
              md: { span: 12 },
              lg: { span: 12 },
              xl: { span: 12 },
              style: { width: "100%" }
            }
          ),
          /* @__PURE__ */ jsx(
            Col,
            {
              sm: { span: 24 },
              md: { span: 12 },
              lg: { span: 12 },
              xl: { span: 12 },
              style: { width: "100%" },
              children: /* @__PURE__ */ jsx(Row, { justify: "end", children: /* @__PURE__ */ jsx(
                Col,
                {
                  xs: { span: 24 },
                  sm: { span: 24 },
                  md: { span: 24 },
                  lg: { span: 12 },
                  xl: { span: 12 },
                  children: /* @__PURE__ */ jsxs(Flex, { gap: 9, justify: "end", align: "center", children: [
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Typography.Text, { children: "Sort By" }) }),
                    /* @__PURE__ */ jsx("div", { style: { width: "200px" }, children: /* @__PURE__ */ jsx(
                      Select,
                      {
                        size: "middle",
                        defaultValue: queryParams.sort_field,
                        style: { width: "200px" },
                        onChange: handleChangeSort,
                        options: [
                          {
                            value: "price_high",
                            label: "Price: High to Low"
                          },
                          {
                            value: "price_low",
                            label: "Price: Low to High"
                          },
                          {
                            value: "rating",
                            label: "Rating"
                          }
                        ]
                      }
                    ) })
                  ] })
                }
              ) })
            }
          )
        ]
      }
    ) }),
    productsData.length > 0 ? /* @__PURE__ */ jsxs(
      "div",
      {
        className: Dimensions.pagePaddingClass,
        style: { marginTop: "37px", marginBottom: "37px" },
        children: [
          /* @__PURE__ */ jsx(Row, { gutter: { xs: 8, sm: 16, md: 24, lg: 32 }, children: productsData && (productsData == null ? void 0 : productsData.map((product, key) => {
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
          })) }),
          /* @__PURE__ */ jsx(Flex, { justify: "center", style: { marginTop: "37px" }, children: /* @__PURE__ */ jsx(
            PaginationDiv,
            {
              handleChange: handlePageChange,
              current: currentPage,
              total: totalNumber,
              perPage,
              onShowSizeChange
            }
          ) })
        ]
      }
    ) : /* @__PURE__ */ jsx(Empty, { description: /* @__PURE__ */ jsx(Typography.Text, { children: "Looks empty in here" }), style: { height: "200px", marginTop: "3rem" } }),
    /* @__PURE__ */ jsx(ShopInfo, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as default
};
