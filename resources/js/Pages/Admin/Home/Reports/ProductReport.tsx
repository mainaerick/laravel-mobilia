import TableAction from "@/Components/TableAction";
import TableComponent from "@/Components/TableComponent";
import { Product } from "@/Core/_Models";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import { router } from "@inertiajs/react";
import {
    Button,
    Flex,
    Input,
    InputRef,
    Rate,
    Space,
    TableColumnType,
    TableColumnsType,
} from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

type Props = { auth: any; products: any };
type DataIndex = keyof Product;

function ProductReport({ auth, products }: Props) {
    const producs_data = products.data as Product[];
    console.log(producs_data);
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
    const columns: TableColumnsType<Product> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: "15%",
            ...getColumnSearchProps("name"),
        },
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            width: "25%",
            ...getColumnSearchProps("id"),
            responsive: ["md"],
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            // width: "125px ",
            render: (item) => (
                <Flex>
                    <Rate disabled defaultValue={item} />
                </Flex>
            ),
            responsive: ["md"],
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            width: "10%",
            ...getColumnSearchProps("price"),
            sorter: (a, b) => a.quantity - b.quantity,
            sortDirections: ["descend", "ascend"],
            responsive: ["md"],
        },
        {
            title: "Viewed",
            dataIndex: "viewed",
            key: "viewed",
            width: "10%",
            ...getColumnSearchProps("category"),
            responsive: ["md"],
        },
    ];
    return (
        <AuthenticatedAdmin
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Product Report
                </h2>
            }
        >
            <TableComponent
                items={producs_data}
                pagination={undefined}
                columns={columns}
            />
        </AuthenticatedAdmin>
    );
}

export default ProductReport;
