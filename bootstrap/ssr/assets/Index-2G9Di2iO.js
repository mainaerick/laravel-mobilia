import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedAdmin } from "./AdminLayout-BT-KCncJ.js";
import { message, ConfigProvider, Space, Input, Button } from "antd";
import { useState, useRef, useEffect } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { router } from "@inertiajs/react";
import { C as Colors } from "../app.js";
import { T as TableComponent } from "./TableComponent-DTwfws4x.js";
import { T as TableAction } from "./TableAction-84W3ZDIe.js";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@headlessui/react";
import "axios";
import "react-dom/client";
function Index({ auth, categories, flash }) {
  console.log(categories);
  const [messageApi, contextHolder] = message.useMessage();
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
      // width: "15%",
      ...getColumnSearchProps("name")
    },
    {
      title: "Colors",
      dataIndex: "colors",
      key: "colors",
      render: (colors) => {
        return colors.map((color, key) => {
          return /* @__PURE__ */ jsx("span", { children: `${color}  ${key !== colors.length - 1 ? "," : ""}` }, key);
        });
      },
      responsive: ["md"]
      // width: "15%",
      // ...getColumnSearchProps("colors"),
    },
    {
      title: "Materials",
      dataIndex: "materials",
      key: "materials",
      render: (materials) => {
        return materials.map((material, key) => {
          return /* @__PURE__ */ jsx("span", { children: `${material}  ${key !== materials.length - 1 ? "," : ""}` }, key);
        });
      },
      responsive: ["md"]
      // width: "15%",
      // ...getColumnSearchProps("colors"),
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      // width: "15%",
      ...getColumnSearchProps("created_at"),
      sorter: (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
      sortDirections: ["descend", "ascend"],
      responsive: ["md"]
    },
    {
      title: "Updated At",
      dataIndex: "updated_at",
      key: "updated_at",
      // width: "15%",
      ...getColumnSearchProps("updated_at"),
      sorter: (a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime(),
      sortDirections: ["descend", "ascend"],
      responsive: ["md"]
    },
    {
      title: "Action",
      width: "15%",
      fixed: "right",
      render: (item) => {
        return /* @__PURE__ */ jsx(Space, { children: /* @__PURE__ */ jsx(
          TableAction,
          {
            deleteFunc: () => {
              router.delete(
                route("admin.category.destroy", item.id)
              );
            },
            editFunc: () => {
              router.get(
                route("admin.category.edit", item.id)
              );
            }
          }
        ) });
      }
    }
  ];
  useEffect(() => {
    if (flash.message) {
      messageApi.open({
        type: "info",
        content: "Category deleted"
      });
    }
  }, [flash.message]);
  return /* @__PURE__ */ jsxs(
    AuthenticatedAdmin,
    {
      user: auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Category Listing" }),
      children: [
        contextHolder,
        /* @__PURE__ */ jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ jsx(
          ConfigProvider,
          {
            theme: {
              components: {
                Table: {
                  headerBg: Colors.secondary
                }
              }
            },
            children: /* @__PURE__ */ jsx(
              TableComponent,
              {
                items: categories,
                pagination: void 0,
                columns
              }
            )
          }
        ) })
      ]
    }
  );
}
export {
  Index as default
};
