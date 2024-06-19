import { Order } from "@/Core/_Models";
import { Colors } from "@/utils/Config";
import {
    Button,
    ConfigProvider,
    Flex,
    Input,
    InputRef,
    Space,
    Table,
    TableColumnType,
    TableProps,
    Typography,
} from "antd";
import React, { useRef, useState } from "react";
import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { router } from "@inertiajs/react";
import {
    FilterDropdownProps,
    TablePaginationConfig,
} from "antd/es/table/interface";
import Highlighter from "react-highlight-words";

type Props = {
    items: any[];
    pagination: false | TablePaginationConfig | undefined;
    columns: any;
    footer?: any;
};
type DataIndex = keyof Order;

function TableComponent({
    items,
    pagination,
    columns,
    footer,
}: Props) {
   
    return (
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        headerBg: Colors.secondary,
                    },
                },
            }}
        >
            <Table
                columns={columns}
                dataSource={items}
                pagination={pagination}
                footer={footer}
            />
        </ConfigProvider>
    );
}

export default TableComponent;
