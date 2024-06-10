import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table, Typography } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import { Pagination, Product } from "@/Core/_Models";
import { Link } from "react-alice-carousel";

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

type DataIndex = keyof Product;

// const data: DataType[] = [
//     {
//         key: "1",
//         name: "John Brown",
//         age: 32,
//         address: "New York No. 1 Lake Park",
//     },
//     {
//         key: "2",
//         name: "Joe Black",
//         age: 42,
//         address: "London No. 1 Lake Park",
//     },
//     {
//         key: "3",
//         name: "Jim Green",
//         age: 32,
//         address: "Sydney No. 1 Lake Park",
//     },
//     {
//         key: "4",
//         name: "Jim Red",
//         age: 32,
//         address: "London No. 2 Lake Park",
//     },
// ];

interface Props {
    auth: any;
    products: Pagination;
}
function Index({ auth, products }: Props) {
    const data = products.data as Product[];
    console.log(data);
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
    ): TableColumnType<Product> => ({
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
        onFilter: (value, record) =>
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

    // const columns: TableColumnsType<DataType> = [
    //     {
    //         title: "Name",
    //         dataIndex: "name",
    //         key: "name",
    //         width: "30%",
    //         ...getColumnSearchProps("name"),
    //     },
    //     {
    //         title: "Age",
    //         dataIndex: "age",
    //         key: "age",
    //         width: "20%",
    //         ...getColumnSearchProps("age"),
    //     },
    //     {
    //         title: "Address",
    //         dataIndex: "address",
    //         key: "address",
    //         ...getColumnSearchProps("address"),
    //         sorter: (a, b) => a.address.length - b.address.length,
    //         sortDirections: ["descend", "ascend"],
    //     },
    // ];

    const columns: TableColumnsType<Product> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: "15%",
            ...getColumnSearchProps("name"),
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            width: "25%",
            ...getColumnSearchProps("description"),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            width: "10%",
            ...getColumnSearchProps("price"),
            sorter: (a, b) => parseFloat(a.price) - parseFloat(b.price),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            width: "10%",
            ...getColumnSearchProps("quantity"),
            sorter: (a, b) => a.quantity - b.quantity,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            width: "10%",
            ...getColumnSearchProps("category"),
        },
        {
            title: "Room",
            dataIndex: "room",
            key: "room",
            width: "10%",
            ...getColumnSearchProps("room"),
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
            width: "10%",
            ...getColumnSearchProps("brand"),
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
            sorter: (a, b) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime(),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Updated At",
            dataIndex: "updated_at",
            key: "updated_at",
            width: "15%",
            ...getColumnSearchProps("updated_at"),
            sorter: (a, b) =>
                new Date(a.updated_at).getTime() -
                new Date(b.updated_at).getTime(),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Action",
            width: 150,
            fixed: "right",
            render: (item) => {
                return (
                    <Space>
                        <Typography.Link>
                            <Link href={route("admin.product.edit", item.id)}>
                                Edit
                            </Link>
                        </Typography.Link>
                        <Typography.Link>
                            <Link href="">Delete</Link>
                        </Typography.Link>
                    </Space>
                );
            },
        },
    ];

    return (
        <AuthenticatedAdmin user={auth}>
            <div style={{ width: "100%" }}>
                <Table columns={columns} dataSource={data} />
            </div>
        </AuthenticatedAdmin>
    );
}

export default Index;
