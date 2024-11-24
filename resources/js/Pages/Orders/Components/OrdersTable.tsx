import {PageProps} from "@/types";
import {Colors, Dimensions} from "@/utils/Config";
import {
    Button,
    Col,
    ConfigProvider,
    Flex,
    Row,
    Space,
    Table,
    TableProps,
    Typography,
    message,
    Image, InputRef, TableColumnType, Input,
} from "antd";
import {router} from "@inertiajs/react";
import {Order} from "@/Core/_Models";
import TableComponent from "@/Components/TableComponent";
import TableAction from "@/Components/TableAction";
import {useRef, useState} from "react";
import {FilterDropdownProps} from "antd/es/table/interface";
import {
    SearchOutlined,
    DeleteOutlined,
    EditOutlined,
} from "@ant-design/icons";
import Highlighter from "react-highlight-words";
type DataIndex = keyof Order;
export default function OrdersTable({items,pagination,setClickedOrder }: PageProps<{ items: any, pagination?: boolean,setClickedOrder:(id:number)=>void|null }>) {

    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef<InputRef|any>(null);

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
    const columns: TableProps<Order>["columns"] = [
        {
            title: "Total Amount",
            dataIndex: "total_amount",
            key: "total_amount",
            width: "15%",
            render: (total_amount: string) => (
                <Typography.Text>{total_amount}</Typography.Text>
            ),
        },
        {
            title: "Date Added",
            dataIndex: "created_at",
            key: "created_at",
            width: "15%",
            render: (created_at: string) => (
                <Typography.Text>
                    {new Date(created_at).toLocaleDateString()}
                </Typography.Text>
            ),
        },

        {
            title: "Firstname",
            dataIndex: "firstname",
            key: "firstname",
            responsive: ["md"],
            // width: "15%",
            ...getColumnSearchProps("firstname"),
        },
        {
            title: "Lastname",
            dataIndex: "lastname",
            key: "lastname",
            responsive: ["md"],
            // width: "15%",
            ...getColumnSearchProps("lastname"),
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            responsive: ["md"],
            // width: "15%",
            ...getColumnSearchProps("email"),
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            responsive: ["md"],
            // width: "15%",
            ...getColumnSearchProps("phone"),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            responsive: ["md"],
            render: (status: string) => (
                <Typography.Text>{status}</Typography.Text>
            ),
        },

        {
            title: "Payment Status",
            dataIndex: "payment_status",
            key: "payment_status",
            responsive: ["md"],
            render: (payment_status: string) => (
                <Typography.Text>{payment_status}</Typography.Text>
            ),
        },
        {
            title: "Action",
            width: "15%",
            fixed: "right",
            render: (item: any) => {
                return (
                    <TableAction
                        deleteFunc={() => {
                            router.delete(route("order.destroy", item.id));
                        }}
                        editFunc={() => {
                            setClickedOrder? setClickedOrder(item.id):router.get(route("order.edit", item.id))
                            // router.get(route("order.edit", item.id));
                        }}
                    />
                );
            },
        },
    ];

    return (
        <div style={{width: "100%"}}>
            <TableComponent
                items={items}
                pagination={undefined}
                columns={columns}
            />
            {/* <Table columns={columns} dataSource={ordersData} /> */}
        </div>
    )

}
