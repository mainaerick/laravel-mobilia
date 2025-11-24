import { jsx, jsxs } from "react/jsx-runtime";
import { F as Footer } from "./Footer-owlJr_0r.js";
import { A as Authenticated } from "./AuthenticatedLayout-D4ZzMmwX.js";
import { D as Dimensions } from "../app.js";
import { Pagination, Breadcrumb, Row, Col, Flex, Empty, Typography } from "antd";
import { P as ProductCard } from "./ProductCard-CZ7Z_8xO.js";
import { router } from "@inertiajs/react";
import { H as Hero } from "./Hero-lCtrtUiE.js";
import { S as ShopInfo } from "./ShopInfo-AaDODIbQ.js";
import { Toolbar } from "./ToolBar-Bh5o78m0.js";
import { useState } from "react";
import "react-alice-carousel";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-CMrbbniR.js";
import "@headlessui/react";
import "@ant-design/icons";
import "axios";
import "react-dom/client";
import "antd/es/card/Meta.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./FilterBlock-CIpEP_uI.js";
import "@radix-ui/react-checkbox";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-select";
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
function Index({ auth, products, settings, queryParams }) {
  const [currentView, setCurrentView] = useState("grid");
  const [pageSize, setPageSize] = useState(products.per_page);
  const [sortValue, setSortValue] = useState(queryParams.sort_field || "default");
  const currentPage = products.current_page;
  const totalNumber = products.total;
  const toPage = products.to;
  const perPage = products.per_page;
  const productsData = products.data;
  const handleChangeSort = (name) => {
    const newQueryParams = { ...queryParams };
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        newQueryParams.sort_direction = "desc";
      } else {
        newQueryParams.sort_direction = "asc";
      }
    } else {
      newQueryParams.sort_field = name;
      newQueryParams.sort_direction = "asc";
    }
    setSortValue(name);
    router.get(route("shop.index"), newQueryParams);
  };
  const handlePageSizeChange = (value) => {
    const newQueryParams = { ...queryParams };
    newQueryParams.per_page = value;
    setPageSize(value);
    router.get(route("shop.index"), newQueryParams);
  };
  const handlePageChange = (e) => {
    queryParams.page = e;
    router.get(route("shop.index"), queryParams);
  };
  const onShowSizeChange = (current, size) => {
    const newQueryParams = { ...queryParams };
    newQueryParams.per_page = size;
    newQueryParams.page = 1;
    setPageSize(size);
    router.get(route("shop.index"), newQueryParams);
  };
  return /* @__PURE__ */ jsxs(Authenticated, { user: auth, children: [
    /* @__PURE__ */ jsx(
      Hero,
      {
        whichRoute: /* @__PURE__ */ jsxs(Breadcrumb, { style: { margin: "16px 0" }, children: [
          /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Home" }),
          /* @__PURE__ */ jsx(Breadcrumb.Item, { children: "Shop" })
        ] }),
        title: "Shop",
        settings
      }
    ),
    /* @__PURE__ */ jsx(
      Toolbar,
      {
        currentView,
        onViewChange: setCurrentView,
        pageSize,
        onPageSizeChange: (value) => handlePageSizeChange(value),
        sortValue,
        onSortChange: (value) => handleChangeSort(value),
        totalResults: totalNumber,
        startIndex: 1,
        endIndex: toPage,
        onFilterClick: () => console.log("Filter clicked"),
        queryParams
      }
    ),
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
