import { Order } from "@/Core/_Models";
import { Button, Form, Input, InputNumber } from "antd";
import React from "react";

type Props = {
    data: Order;
    onFinish: (values: any) => void;
    setData: any;
    loading: boolean;
};

function OrderForm({ data, onFinish, setData, loading }: Props) {
    return (
        <Form
            layout="vertical"
            initialValues={data}
            name="order-form"
            onFinish={onFinish}
        >
            <Form.Item
                name="firstname"
                label="First Name"
                rules={[
                    {
                        required: true,
                        message: "Please input the first name!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("firstname", e.target.value)}
                    value={data.firstname}
                />
            </Form.Item>

            <Form.Item
                name="lastname"
                label="Last Name"
                rules={[
                    {
                        required: true,
                        message: "Please input the last name!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("lastname", e.target.value)}
                    value={data.lastname}
                />
            </Form.Item>

            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                        message: "Please input the email!",
                        type: "email",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("email", e.target.value)}
                    value={data.email}
                />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone"
                rules={[
                    {
                        required: true,
                        message: "Please input the phone number!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("phone", e.target.value)}
                    value={data.phone}
                />
            </Form.Item>

            <Form.Item
                name="town"
                label="Town"
                rules={[
                    {
                        required: true,
                        message: "Please input the town!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("town", e.target.value)}
                    value={data.town}
                />
            </Form.Item>

            <Form.Item
                name="address"
                label="Address"
                rules={[
                    {
                        required: true,
                        message: "Please input the address!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("address", e.target.value)}
                    value={data.address}
                />
            </Form.Item>

            <Form.Item
                name="delivery_det"
                label="Delivery Details"
                rules={[
                    {
                        required: true,
                        message: "Please input the delivery details!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("delivery_det", e.target.value)}
                    value={data.delivery_det}
                />
            </Form.Item>

            <Form.Item
                name="total_amount"
                label="Total Amount"
                rules={[
                    {
                        required: true,
                        message: "Please input the total amount!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("total_amount", e.target.value)}
                    value={data.total_amount}
                />
            </Form.Item>

            <Form.Item
                name="status"
                label="Status"
                rules={[
                    {
                        required: true,
                        message: "Please input the status!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("status", e.target.value)}
                    value={data.status}
                />
            </Form.Item>

            <Form.Item
                name="shipping_address"
                label="Shipping Address"
                rules={[
                    {
                        required: true,
                        message: "Please input the shipping address!",
                    },
                ]}
            >
                <Input
                    onChange={(e) =>
                        setData("shipping_address", e.target.value)
                    }
                    value={data.shipping_address}
                />
            </Form.Item>

            <Form.Item
                name="billing_address"
                label="Billing Address"
                rules={[
                    {
                        required: true,
                        message: "Please input the billing address!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("billing_address", e.target.value)}
                    value={data.billing_address}
                />
            </Form.Item>

            <Form.Item
                name="payment_method"
                label="Payment Method"
                rules={[
                    {
                        required: true,
                        message: "Please input the payment method!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("payment_method", e.target.value)}
                    value={data.payment_method}
                />
            </Form.Item>

            <Form.Item
                name="payment_status"
                label="Payment Status"
                rules={[
                    {
                        required: true,
                        message: "Please input the payment status!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("payment_status", e.target.value)}
                    value={data.payment_status}
                />
            </Form.Item>

            <Form.Item
                name="shipping_method"
                label="Shipping Method"
                rules={[
                    {
                        required: true,
                        message: "Please input the shipping method!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("shipping_method", e.target.value)}
                    value={data.shipping_method}
                />
            </Form.Item>

            <Form.Item
                name="shipping_cost"
                label="Shipping Cost"
                rules={[
                    {
                        required: true,
                        message: "Please input the shipping cost!",
                    },
                ]}
            >
                <Input
                    onChange={(e) => setData("shipping_cost", e.target.value)}
                    value={data.shipping_cost}
                />
            </Form.Item>

            <Form.List name="items">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <div key={key} style={{ marginBottom: 8 }}>
                                <Form.Item
                                    {...restField}
                                    name={[name, "productId"]}
                                    // fieldKey={[fieldKey, "productId"]}
                                    label="Product ID"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input the product ID!",
                                        },
                                    ]}
                                >
                                    <InputNumber
                                        onChange={(value) =>
                                            setData(
                                                `items[${name}].productId`,
                                                value,
                                            )
                                        }
                                        value={data.items[name]?.productId}
                                    />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "name"]}
                                    // fieldKey={[fieldKey, "name"]}
                                    label="Product Name"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input the product name!",
                                        },
                                    ]}
                                >
                                    <Input
                                        onChange={(e) =>
                                            setData(
                                                `items[${name}].name`,
                                                e.target.value,
                                            )
                                        }
                                        value={data.items[name]?.name}
                                    />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "quantity"]}
                                    // fieldKey={[fieldKey, "quantity"]}
                                    label="Quantity"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input the quantity!",
                                        },
                                    ]}
                                >
                                    <InputNumber
                                        onChange={(value) =>
                                            setData(
                                                `items[${name}].quantity`,
                                                value,
                                            )
                                        }
                                        value={data.items[name]?.quantity}
                                    />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "price"]}
                                    // fieldKey={[fieldKey, "price"]}
                                    label="Price"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input the price!",
                                        },
                                    ]}
                                >
                                    <InputNumber
                                        onChange={(value) =>
                                            setData(
                                                `items[${name}].price`,
                                                value,
                                            )
                                        }
                                        value={data.items[name]?.price}
                                    />
                                </Form.Item>
                                <Button
                                    type="text"
                                    onClick={() => remove(name)}
                                >
                                    Remove Item
                                </Button>
                            </div>
                        ))}
                        <Button
                            type="dashed"
                            // onClick={() => add(initialOrderItem)}
                        >
                            Add Item
                        </Button>
                    </>
                )}
            </Form.List>

            <Form.Item name="notes" label="Notes">
                <Input.TextArea
                    onChange={(e) => setData("notes", e.target.value)}
                    value={data.notes}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default OrderForm;
