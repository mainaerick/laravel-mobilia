import { jsx, jsxs } from "react/jsx-runtime";
import { T as TableComponent } from "./TableComponent-DTwfws4x.js";
import { A as AuthenticatedAdmin } from "./AdminLayout-BT-KCncJ.js";
import { Row, Col, Flex, Rate, Input, Space, Button } from "antd";
import { useState, useRef } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import ExcelExport from "./ExportButton-CG6-8mGH.js";
import "../app.js";
import "axios";
import "react-dom/client";
import "@inertiajs/react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@headlessui/react";
import "file-saver";
import "xlsx";
import "./PrimaryButton-C5ts3FGL.js";
function ProductReport({ auth, products }) {
  const producs_data = products.data;
  console.log(producs_data);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close
    }) => /* @__PURE__ */ jsxs("div", { style: { padding: 8 }, onKeyDown: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          ref: searchInput,
          placeholder: `Search ${dataIndex}`,
          value: selectedKeys[0],
          onChange: (e) => setSelectedKeys(e.target.value ? [e.target.value] : []),
          onPressEnter: () => handleSearch(
            selectedKeys,
            confirm,
            dataIndex
          ),
          style: { marginBottom: 8, display: "block" }
        }
      ),
      /* @__PURE__ */ jsxs(Space, { children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "primary",
            onClick: () => handleSearch(
              selectedKeys,
              confirm,
              dataIndex
            ),
            icon: /* @__PURE__ */ jsx(SearchOutlined, {}),
            size: "small",
            style: { width: 90 },
            children: "Search"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => clearFilters && handleReset(clearFilters),
            size: "small",
            style: { width: 90 },
            children: "Reset"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "link",
            size: "small",
            onClick: () => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            },
            children: "Filter"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "link",
            size: "small",
            onClick: () => {
              close();
            },
            children: "close"
          }
        )
      ] })
    ] }),
    filterIcon: (filtered) => /* @__PURE__ */ jsx(
      SearchOutlined,
      {
        style: { color: filtered ? "#1677ff" : void 0 }
      }
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          var _a;
          return (_a = searchInput.current) == null ? void 0 : _a.select();
        }, 100);
      }
    },
    render: (text) => searchedColumn === dataIndex ? /* @__PURE__ */ jsx(
      Highlighter,
      {
        highlightStyle: { backgroundColor: "#ffc069", padding: 0 },
        searchWords: [searchText],
        autoEscape: true,
        textToHighlight: text ? text.toString() : ""
      }
    ) : text
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "15%",
      ...getColumnSearchProps("name")
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "25%",
      ...getColumnSearchProps("id"),
      responsive: ["md"]
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      // width: "125px ",
      render: (item) => /* @__PURE__ */ jsx(Flex, { children: /* @__PURE__ */ jsx(Rate, { disabled: true, defaultValue: item }) }),
      responsive: ["md"]
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "10%",
      ...getColumnSearchProps("price"),
      sorter: (a, b) => a.quantity - b.quantity,
      sortDirections: ["descend", "ascend"],
      responsive: ["md"]
    },
    {
      title: "Viewed",
      dataIndex: "viewed",
      key: "viewed",
      width: "10%",
      ...getColumnSearchProps("category"),
      responsive: ["md"]
    }
  ];
  return /* @__PURE__ */ jsx(
    AuthenticatedAdmin,
    {
      user: auth,
      header: /* @__PURE__ */ jsxs(Row, { justify: "space-between", children: [
        /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Product Report" }) }),
        /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ExcelExport,
          {
            data: producs_data,
            fileName: "Product Report"
          }
        ) }) })
      ] }),
      children: /* @__PURE__ */ jsx(
        TableComponent,
        {
          items: producs_data,
          pagination: void 0,
          columns
        }
      )
    }
  );
}
export {
  ProductReport as default
};
