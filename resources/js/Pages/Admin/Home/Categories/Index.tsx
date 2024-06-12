import { Category, Product } from "@/Core/_Models";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import {
    Button,
    Input,
    InputRef,
    Space,
    Table,
    TableColumnType,
    TableColumnsType,
    Typography,
} from "antd";
import React, { useRef, useState } from "react";
import { Link } from "react-alice-carousel";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { FilterDropdownProps } from "antd/es/table/interface";

type Props = { auth: any; categories: any };
type DataIndex = keyof Category;

function Index({ auth, categories }: Props) {
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
    ): TableColumnType<Category> => ({
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

    const columns: TableColumnsType<Category> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            // width: "15%",
            ...getColumnSearchProps("name"),
        },
        {
            title: "Colors",
            dataIndex: "colors",
            key: "colors",
            render: (colors: []) => {
                return colors.map((color, key) => {
                    return (
                        <span key={key}>
                            {`${color}  ${key !== colors.length - 1 ? "," : ""}`}
                        </span>
                    );
                });
            },
            // width: "15%",
            // ...getColumnSearchProps("colors"),
        },
        {
            title: "Materials",
            dataIndex: "materials",
            key: "materials",
            render: (materials: []) => {
                return materials.map((material, key) => {
                    return (
                        <span key={key}>
                            {`${material}  ${key !== materials.length - 1 ? "," : ""}`}
                        </span>
                    );
                });
            },
            // width: "15%",
            // ...getColumnSearchProps("colors"),
        },
        {
            title: "Created At",
            dataIndex: "created_at",
            key: "created_at",
            // width: "15%",
            ...getColumnSearchProps("created_at"),
            sorter: (a: any, b: any) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime(),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Updated At",
            dataIndex: "updated_at",
            key: "updated_at",
            // width: "15%",
            ...getColumnSearchProps("updated_at"),
            sorter: (a: any, b: any) =>
                new Date(a.updated_at).getTime() -
                new Date(b.updated_at).getTime(),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Action",
            width: 150,
            fixed: "right",
            render: (item: any) => {
                return (
                    <Space>
                        <Typography.Link>
                            <Link href={route("admin.category.edit", item.id)}>
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
                <Table columns={columns} dataSource={categories} />
            </div>
        </AuthenticatedAdmin>
    );
}

export default Index;
