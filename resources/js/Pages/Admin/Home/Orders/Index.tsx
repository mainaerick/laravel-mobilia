import { Category, Order } from "@/Core/_Models";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import { router } from "@inertiajs/react";
import {
    message,
    InputRef,
    TableColumnType,
    Input,
    Space,
    Button,
    TableColumnsType,
    Typography,
    Table,
} from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

type Props = { auth: any; orders: any };
type DataIndex = keyof Order;

function Index({ auth, orders }: Props) {
    const ordersData = orders.data as Order[];
    console.log(ordersData);
    const [messageApi, contextHolder] = message.useMessage();

    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps["confirm"],
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText("");
    };
    const getColumnSearchProps = (
        dataIndex: DataIndex,
    ): TableColumnType<Order> => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(
                            selectedKeys as string[],
                            confirm,
                            dataIndex,
                        )
                    }
                    style={{ marginBottom: 8, display: "block" }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(
                                selectedKeys as string[],
                                confirm,
                                dataIndex,
                            )
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined
                style={{ color: filtered ? "#1677ff" : undefined }}
            />
        ),
        onFilter: (value, record: any) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    const columns: TableColumnsType<Order> = [
        {
            title: "Firstname",
            dataIndex: "firstname",
            key: "firstname",
            // width: "15%",
            ...getColumnSearchProps("firstname"),
        },
        {
            title: "Lastname",
            dataIndex: "lastname",
            key: "lastname",
            // width: "15%",
            ...getColumnSearchProps("lastname"),
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            // width: "15%",
            ...getColumnSearchProps("email"),
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            // width: "15%",
            ...getColumnSearchProps("phone"),
        },
        // {
        //     title: "Email",
        //     dataIndex: "town",
        //     key: "town",
        //     // width: "15%",
        //     ...getColumnSearchProps("town"),
        // },
        // {
        //     title: "Email",
        //     dataIndex: "address",
        //     key: "address",
        //     // width: "15%",
        //     ...getColumnSearchProps("address"),
        // },
        // {
        //     title: "Email",
        //     dataIndex: "delivery_det",
        //     key: "delivery_det",
        //     // width: "15%",
        //     ...getColumnSearchProps("delivery_det"),
        // },
        // {
        //     title: "Email",
        //     dataIndex: "total_amount",
        //     key: "total_amount",
        //     // width: "15%",
        //     ...getColumnSearchProps("total_amount"),
        // },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            // width: "15%",
            ...getColumnSearchProps("status"),
        },
        // {
        //     title: "Email",
        //     dataIndex: "shipping_address",
        //     key: "shipping_address",
        //     // width: "15%",
        //     ...getColumnSearchProps("shipping_address"),
        // },
        // {
        //     title: "Email",
        //     dataIndex: "billing_address",
        //     key: "billing_address",
        //     // width: "15%",
        //     ...getColumnSearchProps("billing_address"),
        // },
        // {
        //     title: "Email",
        //     dataIndex: "payment_method",
        //     key: "payment_method",
        //     // width: "15%",
        //     ...getColumnSearchProps("payment_method"),
        // },
        {
            title: "Payment Status",
            dataIndex: "payment_status",
            key: "payment_status",
            // width: "15%",
            ...getColumnSearchProps("payment_status"),
        },
        // {
        //     title: "Email",
        //     dataIndex: "shipping_method",
        //     key: "shipping_method",
        //     // width: "15%",
        //     ...getColumnSearchProps("shipping_method"),
        // },

        // {
        //     title: "Created At",
        //     dataIndex: "created_at",
        //     key: "created_at",
        //     // width: "15%",
        //     ...getColumnSearchProps("created_at"),
        //     sorter: (a: any, b: any) =>
        //         new Date(a.created_at).getTime() -
        //         new Date(b.created_at).getTime(),
        //     sortDirections: ["descend", "ascend"],
        // },
        // {
        //     title: "Updated At",
        //     dataIndex: "updated_at",
        //     key: "updated_at",
        //     // width: "15%",
        //     ...getColumnSearchProps("updated_at"),
        //     sorter: (a: any, b: any) =>
        //         new Date(a.updated_at).getTime() -
        //         new Date(b.updated_at).getTime(),
        //     sortDirections: ["descend", "ascend"],
        // },
        {
            title: "Action",
            width: 150,
            fixed: "right",
            render: (item: any) => {
                return (
                    <Space>
                        <Typography.Link>
                            {/* <Link href={route("admin.category.edit", item.id)}>
                                Edit
                            </Link> */}
                            <Button
                                onClick={() => {
                                    router.get(
                                        route("admin.category.edit", item.id),
                                    );
                                }}
                                // href={}
                            >
                                Edit
                            </Button>
                        </Typography.Link>
                        <Typography.Link>
                            <Button
                                danger
                                onClick={() => {
                                    router.delete(
                                        route(
                                            "admin.category.destroy",
                                            item.id,
                                        ),
                                    );
                                }}
                                // href={}
                            >
                                Delete
                            </Button>
                        </Typography.Link>
                    </Space>
                );
            },
        },
    ];
    return (
        <AuthenticatedAdmin user={auth}>
            <div style={{ width: "100%" }}>
                <Table columns={columns} dataSource={ordersData} />
            </div>
        </AuthenticatedAdmin>
    );
}

export default Index;
