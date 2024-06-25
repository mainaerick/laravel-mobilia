import { Category, Product } from "@/Core/_Models";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import {
    Button,
    ConfigProvider,
    Input,
    InputRef,
    Space,
    Table,
    TableColumnType,
    TableColumnsType,
    Typography,
    message,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-alice-carousel";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { FilterDropdownProps } from "antd/es/table/interface";
import { router, usePage } from "@inertiajs/react";
import { Colors } from "@/utils/Config";
import TableComponent from "@/Components/TableComponent";
import TableAction from "@/Components/TableAction";

type Props = { auth: any; categories: any; flash: { message: string | null } };
type DataIndex = keyof Category;

function Index({ auth, categories, flash }: Props) {
    console.log(categories);
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
            responsive: ["md"],

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
            responsive: ["md"],

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
            responsive: ["md"],

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
            responsive: ["md"],

        },
        {
            title: "Action",
            width: "15%",
            fixed: "right",
            render: (item: any) => {
                return (
                    <Space>
                        <TableAction
                            deleteFunc={() => {
                                router.delete(
                                    route("admin.category.destroy", item.id),
                                );
                            }}
                            editFunc={() => {
                                router.get(
                                    route("admin.category.edit", item.id),
                                );
                            }}
                        />
                    </Space>
                );
            },
        },
    ];

    useEffect(() => {
        if (flash.message) {
            messageApi.open({
                type: "info",
                content: "Category deleted",
            });
        }
    }, [flash.message]);

    return (
        <AuthenticatedAdmin
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Category Listing
                </h2>
            }
        >
            {contextHolder}

            <div style={{ width: "100%" }}>
                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                headerBg: Colors.secondary,
                            },
                        },
                    }}
                >
                    <TableComponent
                        items={categories}
                        pagination={undefined}
                        columns={columns}
                    />
                </ConfigProvider>
            </div>
        </AuthenticatedAdmin>
    );
}

export default Index;
