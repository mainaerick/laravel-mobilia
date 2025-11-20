import { jsx, jsxs } from "react/jsx-runtime";
import { A as AuthenticatedAdmin } from "./AdminLayout-BT-KCncJ.js";
import { Row, Col, Input, Space, Button } from "antd";
import { useState, useRef } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { T as TableComponent } from "./TableComponent-DTwfws4x.js";
import ExcelExport from "./ExportButton-CG6-8mGH.js";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@inertiajs/react";
import "@headlessui/react";
import "../app.js";
import "axios";
import "react-dom/client";
import "file-saver";
import "xlsx";
import "./PrimaryButton-C5ts3FGL.js";
function SalesReport({ auth, sales }) {
  console.log(sales);
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
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "15%",
      ...getColumnSearchProps("date"),
      sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      sortDirections: ["descend", "ascend"]
    },
    {
      title: "No of Orders",
      dataIndex: "no_orders",
      key: "no_orders",
      width: "25%",
      ...getColumnSearchProps("no_orders"),
      sorter: (a, b) => a.no_orders - b.no_orders,
      sortDirections: ["descend", "ascend"]
      // responsive: ["md"],
    },
    {
      title: "Tax",
      dataIndex: "tax",
      key: "tax",
      width: "25%",
      ...getColumnSearchProps("tax"),
      sortDirections: ["descend", "ascend"],
      responsive: ["md"]
    },
    {
      title: "Total Amount",
      dataIndex: "total_amount",
      key: "total_amount",
      width: "25%",
      ...getColumnSearchProps("total_amount"),
      sortDirections: ["descend", "ascend"]
      // responsive: ["md"],
    }
  ];
  return /* @__PURE__ */ jsx(
    AuthenticatedAdmin,
    {
      user: auth,
      header: /* @__PURE__ */ jsxs(Row, { justify: "space-between", children: [
        /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Sales Report" }) }),
        /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ExcelExport,
          {
            data: sales,
            fileName: "Sales Report"
          }
        ) }) })
      ] }),
      children: /* @__PURE__ */ jsx(
        TableComponent,
        {
          items: sales,
          pagination: void 0,
          columns
        }
      )
    }
  );
}
export {
  SalesReport as default
};
