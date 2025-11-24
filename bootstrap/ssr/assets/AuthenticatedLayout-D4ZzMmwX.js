import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { A as ApplicationLogo } from "./ApplicationLogo-DwGw9LaR.js";
import { N as NavLink, D as Dropdown, R as ResponsiveNavLink } from "./ResponsiveNavLink-CMrbbniR.js";
import { Link, router, usePage } from "@inertiajs/react";
import { CloseCircleFilled, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { C as Colors, D as Dimensions } from "../app.js";
import { notification, Drawer, Row, Col, List, Flex, Typography, Divider, Button, Input, message, ConfigProvider, Badge } from "antd";
function CartItems({ cartItems, open, onClose }) {
  const [subTotal, setSubTotal] = useState(0);
  const [api, contextHolder] = notification.useNotification();
  const handleRemoveItem = (id) => {
    router.delete(route("cart.removeItem", id), {
      onSuccess: () => {
        api.open({
          message: "Cart Item Removed",
          description: "Item removed successfully",
          duration: 0
        });
      }
    });
  };
  useEffect(() => {
    if (cartItems) {
      let total = 0;
      cartItems.map((item) => {
        total = parseFloat(item.product.price.toString()) * item.quantity;
      });
      setSubTotal(total);
    }
  }, [cartItems]);
  return /* @__PURE__ */ jsx(
    Drawer,
    {
      title: "Shopping Cart",
      closable: false,
      onClose,
      open,
      children: /* @__PURE__ */ jsxs(Row, { style: { height: "100%" }, justify: "space-between", children: [
        /* @__PURE__ */ jsx(Col, { span: 24, children: /* @__PURE__ */ jsx(
          List,
          {
            dataSource: cartItems,
            renderItem: (item) => /* @__PURE__ */ jsx(Link, { href: route("shop.show", item.product.id), children: /* @__PURE__ */ jsxs(List.Item, { children: [
              /* @__PURE__ */ jsx(
                List.Item.Meta,
                {
                  title: (
                    // <Link href={route("shop.show", item.product.id)}>
                    /* @__PURE__ */ jsx("span", { children: item.product.name })
                  ),
                  description: `${item.quantity} x ${item.product.price}`
                }
              ),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                CloseCircleFilled,
                {
                  onClick: () => handleRemoveItem(item.id)
                }
              ) })
            ] }, item.cart_id) })
          }
        ) }),
        /* @__PURE__ */ jsx(Col, { span: 24, children: /* @__PURE__ */ jsxs(
          Flex,
          {
            justify: "flex-end",
            vertical: true,
            style: { height: "100%" },
            children: [
              /* @__PURE__ */ jsxs(
                Row,
                {
                  style: { width: "100%" },
                  justify: "space-between",
                  children: [
                    /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(Typography.Title, { level: 5, children: "Subtotal" }) }),
                    /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(Typography.Text, { children: `KSH ${subTotal}` }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(Divider, {}),
              /* @__PURE__ */ jsxs(Row, { justify: "space-between", children: [
                /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsxs(Link, { href: "/cart", children: [
                  " ",
                  /* @__PURE__ */ jsx(Button, { shape: "round", children: "Cart" })
                ] }) }),
                /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(Link, { href: "/checkout", children: /* @__PURE__ */ jsx(Button, { shape: "round", children: "Checkout" }) }) }),
                /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(Link, { href: "", children: /* @__PURE__ */ jsx(Button, { shape: "round", children: "Comparison" }) }) })
              ] })
            ]
          }
        ) })
      ] })
    }
  );
}
const { Search } = Input;
const SearchBar = () => {
  const { searchresults = [], query = "" } = usePage().props;
  const [searchQuery, setSearchQuery] = useState(query);
  const onSearch = (value) => {
    router.get("/shop", { query: value }, { preserveState: true });
  };
  return /* @__PURE__ */ jsx("div", { style: { margin: "20px" }, children: /* @__PURE__ */ jsx(
    Input.Search,
    {
      placeholder: "Search",
      size: "small",
      enterButton: false,
      value: searchQuery,
      onChange: (e) => setSearchQuery(e.target.value),
      onSearch,
      allowClear: true,
      style: { maxWidth: "400px" }
    }
  ) });
};
function Authenticated({
  user,
  header,
  children
}) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { props } = usePage();
  const onClose = () => {
    setOpen(false);
  };
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
        /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white dark:bg-gray-900", children: [
          /* @__PURE__ */ jsxs("nav", { className: "bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700", children: [
            /* @__PURE__ */ jsx("div", { className: Dimensions.pagePaddingClass, children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
                  ApplicationLogo,
                  {
                    className: "block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"
                  }
                ) }) }),
                /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    href: route("home.index"),
                    active: route().current("home"),
                    children: "Mobilia"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    href: route("home.index"),
                    active: route().current("home.index"),
                    children: "Home"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    href: route("shop.index"),
                    active: route().current("shop.index"),
                    children: "Shop"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex justify-between",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx(SearchBar, {}),
                      /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center space-x-8 sm:-my-px sm:ms-10", children: /* @__PURE__ */ jsx("div", { className: "ms-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
                        /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx(
                          UserOutlined,
                          {
                            style: {
                              fontSize: "17px"
                            }
                          }
                        ) }),
                        user ? /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
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
                        ] }) : /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
                          /* @__PURE__ */ jsx(
                            Dropdown.Link,
                            {
                              href: route("login"),
                              children: "Login"
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            Dropdown.Link,
                            {
                              href: route("register"),
                              children: "Signup"
                            }
                          )
                        ] })
                      ] }) }) }),
                      /* @__PURE__ */ jsx(Link, { href: route("cart.index"), children: /* @__PURE__ */ jsx(
                        Flex,
                        {
                          vertical: true,
                          align: "center",
                          justify: "center",
                          style: {
                            height: "100%"
                          },
                          className: "me-3",
                          children: /* @__PURE__ */ jsxs(
                            Badge,
                            {
                              size: "small",
                              count: props.cartQuantity ? props.cartQuantity : 0,
                              children: [
                                /* @__PURE__ */ jsx(
                                  ShoppingCartOutlined,
                                  {
                                    style: { fontSize: "17px" },
                                    className: "space-x-8 sm:-my-px sm:ms-10 sm:flex"
                                  }
                                ),
                                " "
                              ]
                            }
                          )
                        }
                      ) })
                    ] }),
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
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "pt-2 pb-3 space-y-1", children: [
                    /* @__PURE__ */ jsx(
                      ResponsiveNavLink,
                      {
                        href: route("dashboard"),
                        active: route().current("dashboard"),
                        children: "Dashboard"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ResponsiveNavLink,
                      {
                        href: route("home.index"),
                        active: route().current("home.index"),
                        children: "Home"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ResponsiveNavLink,
                      {
                        href: route("shop.index"),
                        active: route().current("shop.index"),
                        children: "Shop"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ResponsiveNavLink,
                      {
                        href: route("about.index"),
                        active: route().current("about"),
                        children: "About"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ResponsiveNavLink,
                      {
                        href: route("contact.index"),
                        active: route().current("contact"),
                        children: "Contact"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "pt-4 pb-1 border-t border-gray-200 dark:border-gray-600", children: user ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800 dark:text-gray-200", children: user.name }),
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: user.email })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
                      /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
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
                  ] }) : /* @__PURE__ */ jsx(Fragment, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              CartItems,
              {
                cartItems: props.cartItems,
                open,
                onClose
              }
            )
          ] }),
          header && /* @__PURE__ */ jsx("header", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
          /* @__PURE__ */ jsx("main", { children })
        ] })
      ]
    }
  );
}
export {
  Authenticated as A
};
