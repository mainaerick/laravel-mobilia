import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { User } from "@/types";
import {
    DesktopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    PieChartOutlined,
    TeamOutlined,
    FileOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import { Colors, Dimensions } from "@/utils/Config";
import {
    Avatar,
    Badge,
    Button,
    ConfigProvider,
    Flex,
    Layout,
    Menu,
    MenuProps,
    message,
    theme,
} from "antd";
import { relative } from "path";
import CartItems from "@/Components/CartItems";
import { CartItem } from "@/Core/_Models";
// import Sider from "antd/es/layout/Sider";
import React from "react";
// import { Content, Footer } from "antd/es/layout/layout";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const sideBarNode = (
    link: string,
    label: string,
    icon?: any,
    children?: any,
) => {
    return getItem(<Link href={link}>{label}</Link>, link, icon, children);
};
const items: MenuItem[] = [
    sideBarNode("dashboard", "Dashboard", <PieChartOutlined />),
    sideBarNode("catalog", "Catalog", <UserOutlined />, [
        sideBarNode("products", "Products"),
        sideBarNode("categories", "Categories"),
        sideBarNode("add_product", "Add Product"),
        sideBarNode("edit_product", "Edit Product"),
        sideBarNode("add_category", "Add Category"),
        sideBarNode("edit_category", "Edit Category"),
    ]),
    sideBarNode("sales", "Sales", <DesktopOutlined />, [
        sideBarNode("order_listing", "Order Listing"),
        sideBarNode("add_order", "Add Order"),
        sideBarNode("edit_order", "Edit Order"),
    ]),
    sideBarNode("customers", "Customers", <UserOutlined />, [
        sideBarNode("customer_listing", "Customer Listing"),
    ]),
    sideBarNode("reports", "Reports", <FileOutlined />, [
        sideBarNode("product_viewed", "Product Viewed"),
        sideBarNode("sales", "Sales"),
        sideBarNode("returns", "Returns"),
        sideBarNode("orders", "Customer Orders"),
        sideBarNode("shipping", "Shipping"),
    ]),
];
const { Header, Content, Footer, Sider } = Layout;

export default function AuthenticatedAdmin({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [collapsed, setCollapsed] = useState(false);

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [open, setOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const { props } = usePage();
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: Colors.primary,
                    borderRadius: 2,
                    // Alias Token
                    colorBgContainer: Colors.textWhiteColor,
                },
            }}
        >
            {contextHolder}
            <Layout hasSider className="min-h-screen bg-white dark:bg-gray-900">
                <Sider
                    theme={"light"}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    // collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                    // style={{
                    //     overflow: "auto",
                    //     height: "100vh",
                    //     position: "fixed",
                    //     left: 0,
                    //     top: 0,
                    //     bottom: 0,
                    // }}
                >
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                            </Link>
                        </div>
                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Mobilia
                            </NavLink>
                        </div>
                    </div>

                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={["4"]}
                        items={items}
                    />
                </Sider>
                <Layout
                // style={{ marginLeft: 200 }}
                >
                    <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                        <div className={Dimensions.pagePaddingClass}>
                            <div className="flex justify-between h-16">
                                {/*Logo div*/}
                                <div></div>
                                <div className={"flex justify-between"}>
                                    {/*User Div*/}
                                    <div className="hidden sm:flex sm:items-center space-x-8 sm:-my-px sm:ms-10">
                                        <div className="ms-3 relative">
                                            <Dropdown>
                                                <Dropdown.Trigger>
                                                    <UserOutlined
                                                        style={{
                                                            fontSize: "17px",
                                                        }}
                                                    />
                                                </Dropdown.Trigger>

                                                <Dropdown.Content>
                                                    <Dropdown.Link
                                                        href={route(
                                                            "profile.edit",
                                                        )}
                                                    >
                                                        Profile
                                                    </Dropdown.Link>
                                                    <Dropdown.Link
                                                        href={route("logout")}
                                                        method="post"
                                                        as="button"
                                                    >
                                                        Log Out
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    {/* <Flex gap={37}> */}
                                    {/* <SearchOutlined
                                    style={{ fontSize: "17px" }}
                                    className={
                                        "space-x-8 sm:-my-px sm:ms-10 sm:flex"
                                    }
                                />
                                <HeartOutlined
                                    style={{ fontSize: "17px" }}
                                    className={
                                        "space-x-8 sm:-my-px sm:ms-10 sm:flex"
                                    }
                                /> */}
                                    <Flex
                                        vertical
                                        align={"center"}
                                        justify={"center"}
                                        style={{ height: "100%" }}
                                    >
                                        <Badge
                                            size="small"
                                            count={
                                                props.cartQuantity
                                                    ? (props.cartQuantity as any)
                                                    : 0
                                            }
                                        >
                                            <ShoppingCartOutlined
                                                style={{ fontSize: "17px" }}
                                                className={
                                                    "space-x-8 sm:-my-px sm:ms-10 sm:flex"
                                                }
                                                onClick={showDrawer}
                                            />{" "}
                                        </Badge>
                                    </Flex>
                                    {/* </Flex> */}
                                </div>
                                <div className="-me-2 flex items-center sm:hidden">
                                    <button
                                        onClick={() =>
                                            setShowingNavigationDropdown(
                                                (previousState) =>
                                                    !previousState,
                                            )
                                        }
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                className={
                                                    !showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                            <path
                                                className={
                                                    showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            className={
                                (showingNavigationDropdown
                                    ? "block"
                                    : "hidden") + " sm:hidden"
                            }
                        >
                            <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                                <div className="px-4">
                                    <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                                        {user.name}
                                    </div>
                                    <div className="font-medium text-sm text-gray-500">
                                        {user.email}
                                    </div>
                                </div>

                                <div className="mt-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route("profile.edit")}
                                    >
                                        Profile
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        Log Out
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        </div>
                        <CartItems
                            cartItems={props.cartItems as CartItem[]}
                            open={open}
                            onClose={onClose}
                        />
                    </nav>

                    <Content style={{ margin: "24px 16px 0" }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: "600",
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            <main>{children}</main>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©{new Date().getFullYear()} Created by a dev
                    </Footer>
                </Layout>

                {header && (
                    <header className="bg-white dark:bg-gray-800 shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
            </Layout>
        </ConfigProvider>
    );
}
