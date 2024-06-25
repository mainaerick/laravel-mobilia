import { Sale } from "@/Core/_Models";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import {
    InputRef,
    TableColumnType,
    Input,
    Space,
    Button,
    TableColumnsType,
    Flex,
    Rate,
} from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import TableComponent from "@/Components/TableComponent";

type Props = { auth: any; sales: any };
type DataIndex = keyof Sale;

function SalesReport({ auth, sales }: Props) {
    console.log(sales);
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
    ): TableColumnType<Sale> => ({
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
    const columns: TableColumnsType<Sale> = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            width: "15%",
            ...getColumnSearchProps("date"),
            sorter: (a, b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime(),
            sortDirections: ["descend", "ascend"],
        },

        {
            title: "No of Orders",
            dataIndex: "no_orders",
            key: "no_orders",
            width: "25%",
            ...getColumnSearchProps("no_orders"),
            sorter: (a, b) => a.no_orders - b.no_orders,
            sortDirections: ["descend", "ascend"],
            // responsive: ["md"],
        },
        {
            title: "Tax",
            dataIndex: "tax",
            key: "tax",
            width: "25%",
            ...getColumnSearchProps("tax"),
            sortDirections: ["descend", "ascend"],
            responsive: ["md"],
        },
        {
            title: "Total Amount",
            dataIndex: "total_amount",
            key: "total_amount",
            width: "25%",
            ...getColumnSearchProps("total_amount"),
            sortDirections: ["descend", "ascend"],
            // responsive: ["md"],
        },
    ];
    return (
        <AuthenticatedAdmin
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Sales Report
                </h2>
            }
        >
            <TableComponent
                items={sales}
                pagination={undefined}
                columns={columns}
            />
        </AuthenticatedAdmin>
    );
}

export default SalesReport;
