import { router } from "@inertiajs/react";
import { Flex, Typography } from "antd";
import React from "react";
import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
} from "@ant-design/icons";
type Props = {
    deleteFunc: () => void;
    editFunc: () => void;
};

function TableAction({ deleteFunc, editFunc }: Props) {
    return (
        <Flex gap={17}>
            <Typography.Link>
                {/* <Link href={route("admin.category.edit", item.id)}>
                                Edit
                            </Link> */}
                <EditOutlined
                    style={{ fontSize: 18 }}
                    onClick={editFunc}
                />
            </Typography.Link>
            <Typography.Link>
                <DeleteOutlined
                    style={{ color: "red", fontSize: 18 }}
                    onClick={deleteFunc}
                />
            </Typography.Link>
        </Flex>
    );
}

export default TableAction;
