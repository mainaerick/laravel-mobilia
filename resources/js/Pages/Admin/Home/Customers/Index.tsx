import TableComponent from "@/Components/TableComponent";
import { User } from "@/Core/_Models";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import {
    Button,
    Input,
    InputRef,
    Space,
    TableColumnType,
    TableColumnsType,
} from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import TableAction from "@/Components/TableAction";
import { router } from "@inertiajs/react";

type Props = {
    auth: any;
    users: any;
};
type DataIndex = keyof User;

function Index({ auth, users }: Props) {
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
    ): TableColumnType<User> => ({
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
    const columns: TableColumnsType<User> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: "15%",
            ...getColumnSearchProps("name"),
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: "15%",
            ...getColumnSearchProps("email"),
        },
        {
            title: "Created Date",
            dataIndex: "created_at",
            key: "created_at",
            width: "15%",
            ...getColumnSearchProps("created_at"),
        },

        {
            title: "Action",
            width: "5%",
            fixed: "right",
            render: (item: any) => {
                return (
                    <TableAction
                        deleteFunc={() => {
                            router.delete(route("admin.user.destroy", item.id));
                        }}
                        editFunc={() => {
                            router.get(route("admin.user.edit", item.id));
                        }}
                    />
                );
            },
        },
    ];
    console.log(users);
    return (
        <AuthenticatedAdmin user={auth}>
            <TableComponent
                items={users}
                pagination={undefined}
                columns={columns}
            />
        </AuthenticatedAdmin>
    );
}

export default Index;
