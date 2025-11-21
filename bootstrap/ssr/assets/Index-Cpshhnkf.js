import { jsx, jsxs } from "react/jsx-runtime";
import { T as TableComponent } from "./TableComponent-DTwfws4x.js";
import { A as AuthenticatedAdmin } from "./AdminLayout-BTxGKBRd.js";
import { Badge, Input, Space, Button } from "antd";
import { useState, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { T as TableAction } from "./TableAction-84W3ZDIe.js";
import { router } from "@inertiajs/react";
import "../app.js";
import "axios";
import "react-dom/client";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-CMrbbniR.js";
import "@headlessui/react";
function Index({ auth, users }) {
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
      ...getColumnSearchProps("name"),
      responsive: ["md"]
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "15%",
      ...getColumnSearchProps("email")
    },
    {
      title: "Verification",
      dataIndex: "email_verified_at",
      key: "email_verified_at",
      width: "15%",
      render: (item) => /* @__PURE__ */ jsx(
        Badge,
        {
          className: "site-badge-count-109",
          count: item ? "Verified" : "Unverified",
          style: { backgroundColor: item ? "#52c41a" : "#f5222d" }
        }
      ),
      responsive: ["md"]
    },
    {
      title: "Created Date",
      dataIndex: "created_at",
      key: "created_at",
      width: "15%",
      ...getColumnSearchProps("created_at"),
      responsive: ["md"]
    },
    {
      title: "Action",
      width: "5%",
      fixed: "right",
      render: (item) => {
        return /* @__PURE__ */ jsx(
          TableAction,
          {
            deleteFunc: () => {
              router.delete(route("admin.user.destroy", item.id));
            },
            editFunc: () => {
              router.get(route("admin.user.edit", item.id));
            }
          }
        );
      }
    }
  ];
  console.log(users);
  return /* @__PURE__ */ jsx(
    AuthenticatedAdmin,
    {
      user: auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Users" }),
      children: /* @__PURE__ */ jsx(
        TableComponent,
        {
          items: users,
          pagination: void 0,
          columns
        }
      )
    }
  );
}
export {
  Index as default
};
