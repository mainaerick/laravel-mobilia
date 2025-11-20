import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { A as ApplicationLogo } from "./ApplicationLogo-DwGw9LaR.js";
import { N as NavLink, D as Dropdown, R as ResponsiveNavLink } from "./ResponsiveNavLink-BF_L6EzO.js";
import { usePage, Link } from "@inertiajs/react";
import { UserOutlined, DesktopOutlined, FileOutlined, PieChartOutlined } from "@ant-design/icons";
import { C as Colors, D as Dimensions } from "../app.js";
import { message, theme, ConfigProvider, Layout, Flex, Menu } from "antd";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}
const sideBarNode = (link, label, icon, children) => {
  return getItem(
    /* @__PURE__ */ jsx(Link, { href: link === "#" ? "#" : route(link), children: label }),
    label,
    icon,
    children
  );
};
const items = [
  sideBarNode("#", "Dashboard", /* @__PURE__ */ jsx(PieChartOutlined, {})),
  sideBarNode("#", "Catalog", /* @__PURE__ */ jsx(UserOutlined, {}), [
    sideBarNode("admin.products", "Products"),
    sideBarNode("admin.products.create", "Add Product"),
    sideBarNode("admin.categories", "Categories"),
    sideBarNode("admin.categories.create", "Add Category")
  ]),
  sideBarNode("#", "Sales", /* @__PURE__ */ jsx(DesktopOutlined, {}), [
    sideBarNode("admin.orders", "Order Listing"),
    sideBarNode("admin.orders.create", "Add Order")
  ]),
  sideBarNode("#", "Customers", /* @__PURE__ */ jsx(UserOutlined, {}), [
    sideBarNode("admin.users.customers", "User Listing"),
    sideBarNode("admin.users.create", "Create User")
  ]),
  sideBarNode("#", "Reports", /* @__PURE__ */ jsx(FileOutlined, {}), [
    sideBarNode("admin.products.report", "Product Viewed"),
    sideBarNode("admin.sales.report", "Sales"),
    sideBarNode("#", "Returns"),
    sideBarNode("#", "Customer Orders"),
    sideBarNode("#", "Shipping")
  ]),
  sideBarNode("#", "Settings", /* @__PURE__ */ jsx(FileOutlined, {}), [
    sideBarNode("#", "Homepage")
  ])
];
const { Header, Content, Footer, Sider } = Layout;
function AuthenticatedAdmin({
  user,
  header,
  children
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { props } = usePage();
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  useEffect(() => {
    const flash = props == null ? void 0 : props.flash;
    if (flash.message) {
      message.success(flash == null ? void 0 : flash.message, 2.5);
    }
  }, [props == null ? void 0 : props.flash]);
  return /* @__PURE__ */ jsxs(
    ConfigProvider,
    {
      theme: {
        token: {
          // Seed Token
          colorPrimary: Colors.primary,
          borderRadius: 2,
          // Alias Token
          colorBgContainer: Colors.textWhiteColor
        }
      },
      children: [
        contextHolder,
        /* @__PURE__ */ jsxs(Layout, { children: [
          /* @__PURE__ */ jsxs(
            Sider,
            {
              theme: "light",
              breakpoint: "lg",
              collapsedWidth: "0",
              onBreakpoint: (broken) => {
              },
              collapsed,
              onCollapse: (value) => setCollapsed(value),
              children: [
                /* @__PURE__ */ jsxs(
                  Flex,
                  {
                    className: Dimensions.pagePaddingClass,
                    align: "center",
                    justify: "start",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "h-16", children: [
                        " ",
                        /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" })
                      ] }),
                      /* @__PURE__ */ jsx(
                        NavLink,
                        {
                          href: route("dashboard"),
                          active: route().current("dashboard"),
                          children: "Mobilia"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  Menu,
                  {
                    theme: "light",
                    mode: "inline",
                    defaultSelectedKeys: ["4"],
                    items
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Layout,
            {
              children: [
                /* @__PURE__ */ jsxs("nav", { className: "bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700", children: [
                  /* @__PURE__ */ jsx("div", { className: Dimensions.pagePaddingClass, children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex items-center " }),
                    /* @__PURE__ */ jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center space-x-8 sm:-my-px sm:ms-10", children: /* @__PURE__ */ jsx("div", { className: "ms-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
                      /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx(
                        UserOutlined,
                        {
                          style: {
                            fontSize: "17px"
                          }
                        }
                      ) }),
                      /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
                        /* @__PURE__ */ jsx(
                          Dropdown.Link,
                          {
                            href: route(
                              "profile.edit"
                            ),
                            children: "Profile"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Dropdown.Link,
                          {
                            href: route("logout"),
                            method: "post",
                            as: "button",
                            children: "Log Out"
                          }
                        )
                      ] })
                    ] }) }) }) }),
                    /* @__PURE__ */ jsx("div", { className: "-me-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => setShowingNavigationDropdown(
                          (previousState) => !previousState
                        ),
                        className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",
                        children: /* @__PURE__ */ jsxs(
                          "svg",
                          {
                            className: "h-6 w-6",
                            stroke: "currentColor",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: [
                              /* @__PURE__ */ jsx(
                                "path",
                                {
                                  className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  d: "M4 6h16M4 12h16M4 18h16"
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                "path",
                                {
                                  className: showingNavigationDropdown ? "inline-flex" : "hidden",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                }
                              )
                            ]
                          }
                        )
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden",
                      children: /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200 dark:border-gray-600", children: [
                        /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
                          /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800 dark:text-gray-200", children: user.name }),
                          /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: user.email })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
                          /* @__PURE__ */ jsx(
                            ResponsiveNavLink,
                            {
                              href: route("profile.edit"),
                              children: "Profile"
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            ResponsiveNavLink,
                            {
                              method: "post",
                              href: route("logout"),
                              as: "button",
                              children: "Log Out"
                            }
                          )
                        ] })
                      ] })
                    }
                  )
                ] }),
                header && /* @__PURE__ */ jsx("header", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
                /* @__PURE__ */ jsx(Content, { style: { height: "auto", margin: "24px 16px 0" }, children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "",
                    style: {
                      padding: 24,
                      minHeight: "800px",
                      background: colorBgContainer,
                      borderRadius: borderRadiusLG
                    },
                    children: /* @__PURE__ */ jsx("main", { children })
                  }
                ) }),
                /* @__PURE__ */ jsxs(Footer, { style: { textAlign: "center" }, children: [
                  "Mobilia ©",
                  (/* @__PURE__ */ new Date()).getFullYear()
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  AuthenticatedAdmin as A
};
