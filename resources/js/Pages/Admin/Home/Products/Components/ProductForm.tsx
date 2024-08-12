import { Product } from "@/Core/_Models";
import {
    Form,
    Row,
    Col,
    Input,
    InputNumber,
    Upload,
    Button,
    Select,
    UploadFile,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";

type Props = {
    data: Product;
    onFinish: (values: any) => void;
    setData: any;
    fileList: any;
    loading: boolean;
    handleFileChange: (values: any) => void;
};

function ProductForm({
    data,
    onFinish,
    setData,
    fileList,
    loading,
    handleFileChange,
}: Props) {
    const handleDimensionChange = (field: string, value: any) => {
        setData("dimensions", {
            ...data.dimensions,
            [field]: value,
        });
    };

    return (
        <Form
            layout="vertical"
            initialValues={data}
            name="product-form"
            onFinish={onFinish}
        >
            <Row gutter={16}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        name="name"
                        label="Product Name"
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
                        name="description"
                        label="Description"
                        rules={[
                            {
                                required: true,
                                message:
                                    "Please input the product description!",
                            },
                        ]}
                    >
                        <TextArea
                            rows={4}
                            onChange={(e) => {
                                setData("description", e.target.value);
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[
                            {
                                required: true,
                                message: "Please input the price!",
                            },
                        ]}
                    >
                        <InputNumber
                            onChange={(e) => {
                                e && setData("price", e.toString());
                            }}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="quantity"
                        label="Quantity"
                        rules={[
                            {
                                required: true,
                                message: "Please input the quantity!",
                            },
                        ]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            onChange={(e) => {
                                e &&
                                    setData(
                                        "quantity",
                                        Number.parseInt(e.toString()),
                                    );
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="category"
                        label="Category"
                        rules={[
                            {
                                required: true,
                                message: "Please input the category!",
                            },
                        ]}
                    >
                        <Input
                            onChange={(e) => {
                                setData("category", e.target.value);
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="brand"
                        label="Brand"
                        rules={[
                            {
                                required: true,
                                message: "Please input the brand!",
                            },
                        ]}
                    >
                        <Input
                            onChange={(e) => {
                                setData("brand", e.target.value);
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="material"
                        label="Material"
                        rules={[
                            {
                                required: true,
                                message: "Please input the material!",
                            },
                        ]}
                    >
                        <Input
                            onChange={(e) => {
                                setData("material", e.target.value);
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="color"
                        label="Color"
                        rules={[
                            {
                                required: true,
                                message: "Please input the color!",
                            },
                        ]}
                    >
                        <Input
                            onChange={(e) => {
                                setData("color", e.target.value);
                            }}
                        />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        name={["dimensions", "depth"]}
                        label="Depth"
                        rules={[
                            {
                                required: true,
                                message: "Please input the depth!",
                            },
                        ]}
                    >
                        <InputNumber
                            onChange={(e) => {
                                handleDimensionChange("depth", e);
                            }}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>

                    <Form.Item
                        name={["dimensions", "width"]}
                        label="Width"
                        rules={[
                            {
                                required: true,
                                message: "Please input the width!",
                            },
                        ]}
                    >
                        <InputNumber
                            onChange={(e) => {
                                handleDimensionChange("width", e);
                            }}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>

                    <Form.Item
                        name={["dimensions", "height"]}
                        label="Height"
                        rules={[
                            {
                                required: true,
                                message: "Please input the height!",
                            },
                        ]}
                    >
                        <InputNumber
                            onChange={(e) => {
                                handleDimensionChange("height", e);
                            }}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="weight"
                        label="Weight"
                        rules={[
                            {
                                required: true,
                                message: "Please input the weight!",
                            },
                        ]}
                    >
                        <Input
                            onChange={(e) => {
                                setData("weight", e.target.value);
                            }}
                        />
                    </Form.Item>

                    {
                        <Form.Item
                            name="images"
                            label="Images"
                            style={{ maxHeight: 300, overflow: "auto" }}
                            rules={[
                                {
                                    required: true,
                                    message: "Please upload the images!",
                                },
                            ]}
                        >
                            <Upload
                                listType="picture"
                                beforeUpload={() => false} // Prevent automatic upload
                                multiple
                                defaultFileList={fileList}
                                onChange={handleFileChange}
                            >
                                <Button icon={<UploadOutlined />}>
                                    Upload Images
                                </Button>
                            </Upload>
                        </Form.Item>
                    }

                    <Form.Item
                        name="rating"
                        label="Rating"
                        rules={[
                            {
                                required: true,
                                message: "Please input the rating!",
                            },
                        ]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            min={0}
                            max={5}
                            step={0.01}
                            onChange={(e) => {
                                e && setData("rating", e.toString());
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="reviews"
                        label="Reviews"
                        rules={[
                            {
                                required: true,
                                message: "Please input the reviews!",
                            },
                        ]}
                    >
                        <Select
                            mode="tags"
                            style={{ width: "100%" }}
                            placeholder="Add reviews"
                            onChange={(e) => {
                                e && setData("reviews", e);
                            }}
                        ></Select>
                    </Form.Item>

                    <Form.Item
                        name="sizes"
                        label="Sizes"
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

                    <Form.Item
                        name="colors"
                        label="Colors"
                        rules={[
                            {
                                required: true,
                                message: "Please input the available colors!",
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

                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={loading}
                        style={{ borderRadius: "15px" }}
                        size="large"
                    >
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default ProductForm;
