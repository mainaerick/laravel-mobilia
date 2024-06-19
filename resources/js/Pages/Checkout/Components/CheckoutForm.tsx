import {
    Form,
    Row,
    Col,
    Table,
    Typography,
    Flex,
    Radio,
    Button,
    TableProps,
    message,
} from "antd";
import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { CartItem, Order } from "@/Core/_Models";
import { router } from "@inertiajs/react";
import { DeleteFilled } from "@ant-design/icons";
import TableComponent from "@/Components/TableComponent";

type Props = {
    form: any;
    orderDetails: Order;
    items: CartItem[];
    errors: any;
    deleteOrderItems: (item: CartItem) => void;
};
const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};
function CheckoutForm({
    form,
    orderDetails,
    items,
    errors,
    deleteOrderItems,
}: Props) {
    console.log(orderDetails);
    const [subTotal, setSubTotal] = useState<string>("0");
    const [loading, setLoading] = useState<boolean>(false);

    const onFinish = (values: Order) => {
        console.log(values);

        values.total_amount = Number.parseFloat(subTotal);
        values.shipping_address = values.delivery_det;
        setLoading(true);
        values.items = [];
        items.map((item: CartItem) => {
            values.items?.push({
                productId: item.product_id,
                name: item.product.name,
                quantity: item.quantity,
                price: item.product.price,
            });
        });
        const newOrder = { ...orderDetails, ...values };
        const newOrderWithJSONItems = {
            ...newOrder,
            items: newOrder.items,
        };

        if (orderDetails.id) {
            router.put(route("order.update", newOrderWithJSONItems));
        } else {
            router.post(route("orders.store", newOrderWithJSONItems));
        }
        setLoading(false);
    };
    const onReset = () => {
        form.resetFields();
    };

    useEffect(() => {
        if (items) {
            let total = 0;
            items.map((item: CartItem) => {
                total += item.product.price * item.quantity;
            });

            setSubTotal(Number.parseFloat(total.toString()).toFixed(2));
        }
    }, [items]);
    useEffect(() => {
        if (errors) {
            const errorValues: [] =
                errors &&
                Object.keys(errors).map(function (key) {
                    return errors[key];
                });
            console.log(errorValues);
            errorValues.map((errorValue) => {
                message.error(errorValue, 5);
            });
        } else if (errors) {
        }
    }, [errors]);
    const columns: TableProps<CartItem>["columns"] = [
        {
            title: "Product",
            dataIndex: "product",
            key: "id",
            render: (_, record) => {
                console.log(record);
                return (
                    <Typography.Text>{`${record?.product?.name} x ${record?.quantity}`}</Typography.Text>
                );
            },
        },
        {
            title: <Flex justify={"end"}>Subtotal</Flex>,
            // dataIndex: "product",
            key: "id",
            render: (_, record: any) => {
                let subtotal =
                    record.quantity * parseFloat(record.product.price);

                return (
                    <Flex justify={"end"}>
                        <Typography.Text>{`${Number.parseFloat(subtotal.toString()).toFixed(2)}`}</Typography.Text>
                    </Flex>
                );
            },
        },
        {
            title: <Flex justify={"end"}>Action</Flex>,
            // dataIndex: "product",
            key: "id",
            render: (_, record: any) => {
                return (
                    <Flex justify={"end"}>
                        <Button onClick={() => deleteOrderItems(record)}>
                            {" "}
                            Delete
                        </Button>
                    </Flex>
                );
            },
        },
    ];

    return (
        <Form
            {...layout}
            form={form}
            initialValues={orderDetails}
            name="control-hooks"
            onFinish={onFinish}
            // style={{ maxWidth: 600 }}
        >
            <Row gutter={12}>
                <Col
                    // span={12}
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            {" "}
                            <FormInput
                                name={"firstname"}
                                label={"First Name"}
                                required={true}
                            />
                        </Col>
                        <Col span={12}>
                            <FormInput
                                name={"lastname"}
                                label={"Last Name"}
                                required={true}
                            />
                        </Col>
                    </Row>

                    <FormInput
                        name={"email"}
                        label={"Email Address"}
                        type="email"
                        required={true}
                    />

                    <FormInput
                        name={"phone"}
                        label={"Phone"}
                        type="phone"
                        required={true}
                    />

                    <FormInput
                        name={"town"}
                        label={"Town/City"}
                        required={true}
                    />

                    <FormInput
                        name={"address"}
                        label={"Address"}
                        required={true}
                    />

                    <FormInput
                        name={"delivery_det"}
                        label={"Delivery Details"}
                        required={true}
                    />
                </Col>

                <Col
                    // span={12}
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 8 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                    style={{ width: "100%" }}
                >
                    <TableComponent
                        items={items}
                        pagination={undefined}
                        columns={columns}
                        footer={() => {
                            return (
                                <Row justify={"space-between"}>
                                    <Col span={12}>
                                        <Typography.Title level={4}>
                                            Total
                                        </Typography.Title>
                                    </Col>
                                    <Col span={12}>
                                        <Flex align="end" justify={"end"}>
                                            <Typography.Title level={4}>
                                                {subTotal}
                                            </Typography.Title>
                                        </Flex>
                                    </Col>
                                </Row>
                            );
                        }}
                    />
                    {/* <Table
                        columns={columns}
                        dataSource={items}
                        pagination={false}
                        footer={() => {
                            return (
                                <Row justify={"space-between"}>
                                    <Col span={12}>
                                        <Typography.Title level={4}>
                                            Total
                                        </Typography.Title>
                                    </Col>
                                    <Col span={12}>
                                        <Flex align="end" justify={"end"}>
                                            <Typography.Title level={4}>
                                                {subTotal}
                                            </Typography.Title>
                                        </Flex>
                                    </Col>
                                </Row>
                            );
                        }}
                    /> */}

                    <Typography.Title level={4} style={{ marginTop: "17px" }}>
                        Payment Method
                    </Typography.Title>

                    <Form.Item name={"payment_method"}>
                        <Radio.Group>
                            <Radio defaultChecked value="mpesa">
                                {" "}
                                Mpesa{" "}
                            </Radio>
                            <Radio value="payondelivery">
                                Pay On Delivery{" "}
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Flex justify="center" style={{ marginTop: "13px" }}>
                        <Button
                            htmlType="submit"
                            block
                            loading={loading}
                            style={{
                                marginLeft: "30%",
                                marginRight: "30%",
                                borderRadius: "15px",
                            }}
                            size="large"
                        >
                            Place Order
                        </Button>
                    </Flex>
                </Col>
            </Row>
        </Form>
    );
}

export default CheckoutForm;
