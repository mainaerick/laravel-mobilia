import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space, Button } from "antd";
import Highlighter from "react-highlight-words";
import { A as AuthenticatedAdmin } from "./AdminLayout-BTxGKBRd.js";
import { T as TableComponent } from "./TableComponent-DTwfws4x.js";
import { T as TableAction } from "./TableAction-84W3ZDIe.js";
import { router } from "@inertiajs/react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-CMrbbniR.js";
import "@headlessui/react";
import "../app.js";
import "axios";
import "react-dom/client";
function Index({ auth, products }) {
  const data = products.data;
  console.log(data);
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
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "25%",
      responsive: ["md"],
      ...getColumnSearchProps("description")
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "10%",
      ...getColumnSearchProps("price"),
      sorter: (a, b) => parseFloat(a.price) - parseFloat(b.price),
      sortDirections: ["descend", "ascend"],
      responsive: ["md"]
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "10%",
      ...getColumnSearchProps("quantity"),
      sorter: (a, b) => a.quantity - b.quantity,
      sortDirections: ["descend", "ascend"],
      responsive: ["md"]
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "10%",
      ...getColumnSearchProps("category"),
      responsive: ["md"]
    },
    {
      title: "Room",
      dataIndex: "room",
      key: "room",
      width: "10%",
      ...getColumnSearchProps("room"),
      responsive: ["md"]
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      width: "10%",
      ...getColumnSearchProps("brand"),
      responsive: ["md"]
    },
    // {
    //     title: "Material",
    //     dataIndex: "material",
    //     key: "material",
    //     width: "10%",
    //     ...getColumnSearchProps("material"),
    // },
    // {
    //     title: "Color",
    //     dataIndex: "color",
    //     key: "color",
    //     width: "10%",
    //     ...getColumnSearchProps("color"),
    // },
    // {
    //     title: "Dimensions (Depth x Width x Height)",
    //     key: "dimensions",
    //     width: "15%",
    //     render: (_, record) =>
    //         `${record.dimensions.depth} x ${record.dimensions.width} x ${record.dimensions.height}`,
    //     sorter: (a, b) => a.dimensions.depth - b.dimensions.depth,
    //     sortDirections: ["descend", "ascend"],
    // },
    // {
    //     title: "Weight",
    //     dataIndex: "weight",
    //     key: "weight",
    //     width: "10%",
    //     ...getColumnSearchProps("weight"),
    //     sorter: (a, b) => parseFloat(a.weight) - parseFloat(b.weight),
    //     sortDirections: ["descend", "ascend"],
    // },
    // {
    //     title: "Rating",
    //     dataIndex: "rating",
    //     key: "rating",
    //     width: "10%",
    //     ...getColumnSearchProps("rating"),
    //     sorter: (a, b) => parseFloat(a.rating) - parseFloat(b.rating),
    //     sortDirections: ["descend", "ascend"],
    // },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      width: "15%",
      ...getColumnSearchProps("created_at"),
      sorter: (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
      sortDirections: ["descend", "ascend"],
      responsive: ["md"]
    },
    {
      title: "Updated At",
      dataIndex: "updated_at",
      key: "updated_at",
      width: "15%",
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
        return /* @__PURE__ */ jsx(
          TableAction,
          {
            deleteFunc: () => {
            },
            editFunc: () => {
              router.get(route("admin.product.edit", item.id));
            }
          }
        );
      }
    }
  ];
  return /* @__PURE__ */ jsx(
    AuthenticatedAdmin,
    {
      user: auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Products Listing" }),
      children: /* @__PURE__ */ jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ jsx(
        TableComponent,
        {
          items: data,
          pagination: void 0,
          columns
        }
      ) })
    }
  );
}
export {
  Index as default
};
