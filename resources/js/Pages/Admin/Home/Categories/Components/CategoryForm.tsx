import { Category } from "@/Core/_Models";
import { Button, Form, Input, Select } from "antd";
import React from "react";

type Props = {
    data: Category;
    onFinish: (values: any) => void;
    setData: any;
    loading: boolean;
};

function CategoryForm({ data, onFinish, setData, loading }: Props) {
    return (
        <Form
            layout="vertical"
            initialValues={data}
            name="category-form"
            onFinish={onFinish}
        >
            <Form.Item
                name="name"
                label="Category Name"
                rules={[
                    {
                        required: true,
                        message: "Please input the product name!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => {
                        setData("name", e.target.value);
                    }}
                />
            </Form.Item>

            <Form.Item
                name="colors"
                label="Available Colors"
                rules={[
                    {
                        required: true,
                        message: "Please input the colors!",
                    },
                ]}
            >
                <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="Add colors"
                    onChange={(e) => {
                        e && setData("colors", e);
                    }}
                ></Select>
            </Form.Item>
            <Form.Item
                name="materials"
                label="Available Materials"
                rules={[
                    {
                        required: true,
                        message: "Please input the materials!",
                    },
                ]}
            >
                <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="Add materials"
                    onChange={(e) => {
                        e && setData("materials", e);
                    }}
                ></Select>
            </Form.Item>
            <Form.Item
                name="sizes"
                label="Available Sizes"
                rules={[
                    {
                        required: true,
                        message: "Please input the sizes!",
                    },
                ]}
            >
                <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="Add sizes"
                    onChange={(e) => {
                        e && setData("sizes", e);
                    }}
                ></Select>
            </Form.Item>
            <Button
                type="primary"
                htmlType="submit"
                // block
                loading={loading}
                style={{ borderRadius: "15px" }}
                size="large"
            >
                Submit
            </Button>
        </Form>
    );
}

export default CategoryForm;
