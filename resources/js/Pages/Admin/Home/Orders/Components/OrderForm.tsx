// import { CartItem, Order } from "@/Core/_Models";
// import FormInput from "@/Pages/Checkout/Components/FormInput";
// import { usePage, router } from "@inertiajs/react";
// import {
//     Button,
//     Col,
//     Flex,
//     Form,
//     Input,
//     InputNumber,
//     Radio,
//     Row,
//     Table,
//     TableProps,
//     Typography,
//     message,
// } from "antd";
// import form from "antd/es/form";
// import layout from "antd/es/layout";
// import React, { useEffect, useState } from "react";

// type Props = {
//     data: Order;
//     onFinish: (values: any) => void;
//     setData: any;
//     loading: boolean;
// };

// function OrderForm({ data, onFinish, setData, loading }: Props) {
//     const [form] = Form.useForm();

//     // console.log(errors);

//     const { props } = usePage();
//     const items = props?.cartItems as CartItem[];
//     const [subTotal, setSubTotal] = useState<string>("0");
//     const [setLoading] = useState<boolean>(false);

//     const intialdata = {
//         firstname: "",
//         lastname: "",
//         email: "",
//         phone: "",
//         town: "",
//         address: "",
//         delivery_det: "",
//         total_amount: "",
//         status: "pending",
//         shipping_address: "",
//         billing_address: "",
//         payment_method: "",
//         payment_status: "pending",
//         shipping_method: "",
//         shipping_cost: "20",
//         items: items,
//         notes: "",
//     };

//     const columns: TableProps<CartItem>["columns"] = [
//         {
//             title: "Product",
//             dataIndex: "product",
//             key: "id",
//             render: (_, record) => (
//                 <Typography.Text>{`${record.product.name} x ${record.quantity}`}</Typography.Text>
//             ),
//         },
//         {
//             title: <Flex justify={"end"}>Subtotal</Flex>,
//             // dataIndex: "product",
//             key: "id",
//             render: (_, record) => {
//                 let subtotal =
//                     record.quantity * parseFloat(record.product.price);

//                 return (
//                     <Flex justify={"end"}>
//                         <Typography.Text>{`${Number.parseFloat(subtotal.toString()).toFixed(2)}`}</Typography.Text>
//                     </Flex>
//                 );
//             },
//         },
//     ];

//     useEffect(() => {
//         if (errors) {
//             const errorValues: [] =
//                 errors &&
//                 Object.keys(errors).map(function (key) {
//                     return errors[key];
//                 });
//             console.log(errorValues);
//             errorValues.map((errorValue) => {
//                 message.error(errorValue, 5);
//             });
//         } else if (errors) {
//         }
//     }, [errors]);

//     const onFinish = (values: Order) => {
//         values.total_amount = Number.parseFloat(subTotal);
//         values.shipping_address = values.delivery_det;
//         setLoading(true);
//         values.items = [];
//         items.map((item) => {
//             values.items?.push({
//                 productId: item.product_id,
//                 name: item.product.name,
//                 quantity: item.quantity,
//                 price: Number.parseFloat(item.product.price),
//             });
//         });
//         const newOrder = { ...intialdata, ...values };
//         const newOrderWithJSONItems = {
//             ...newOrder,
//             items: JSON.stringify(newOrder.items),
//         };
//         console.log(newOrderWithJSONItems);
//         router.post(route("orders.store", newOrderWithJSONItems));
//         setLoading(false);
//     };
//     const onReset = () => {
//         form.resetFields();
//     };
//     useEffect(() => {
//         if (items) {
//             let total = 0;
//             items.map((item) => {
//                 total = parseFloat(item.product.price) * item.quantity;
//             });

//             setSubTotal(Number.parseFloat(total.toString()).toFixed(2));
//         }
//     }, [items]);
//     return (
//         <Form
//             {...layout}
//             form={form}
//             initialValues={intialdata}
//             name="control-hooks"
//             onFinish={onFinish}
//             // style={{ maxWidth: 600 }}
//         >
//             <Row gutter={12}>
//                 <Col
//                     // span={12}
//                     xs={{ span: 24 }}
//                     sm={{ span: 24 }}
//                     md={{ span: 12 }}
//                     lg={{ span: 12 }}
//                     xl={{ span: 12 }}
//                 >
//                     <Row gutter={16}>
//                         <Col span={12}>
//                             {" "}
//                             <FormInput
//                                 name={"firstname"}
//                                 label={"First Name"}
//                                 required={true}
//                             />
//                         </Col>
//                         <Col span={12}>
//                             <FormInput
//                                 name={"lastname"}
//                                 label={"Last Name"}
//                                 required={true}
//                             />
//                         </Col>
//                     </Row>

//                     <FormInput
//                         name={"email"}
//                         label={"Email Address"}
//                         type="email"
//                         required={true}
//                     />

//                     <FormInput
//                         name={"phone"}
//                         label={"Phone"}
//                         type="phone"
//                         required={true}
//                     />

//                     <FormInput
//                         name={"town"}
//                         label={"Town/City"}
//                         required={true}
//                     />

//                     <FormInput
//                         name={"address"}
//                         label={"Address"}
//                         required={true}
//                     />

//                     <FormInput
//                         name={"delivery_det"}
//                         label={"Delivery Details"}
//                         required={true}
//                     />
//                 </Col>

//                 <Col
//                     // span={12}
//                     xs={{ span: 24 }}
//                     sm={{ span: 24 }}
//                     md={{ span: 8 }}
//                     lg={{ span: 12 }}
//                     xl={{ span: 12 }}
//                     style={{ width: "100%" }}
//                 >
//                     <Table
//                         columns={columns}
//                         dataSource={items}
//                         pagination={false}
//                         footer={() => {
//                             return (
//                                 <Row justify={"space-between"}>
//                                     <Col span={12}>
//                                         <Typography.Title level={4}>
//                                             Total
//                                         </Typography.Title>
//                                     </Col>
//                                     <Col span={12}>
//                                         <Flex align="end" justify={"end"}>
//                                             <Typography.Title level={4}>
//                                                 {subTotal}
//                                             </Typography.Title>
//                                         </Flex>
//                                     </Col>
//                                 </Row>
//                             );
//                         }}
//                     />

//                     <Typography.Title level={4} style={{ marginTop: "17px" }}>
//                         Payment Method
//                     </Typography.Title>

//                     <Form.Item name={"payment_method"}>
//                         <Radio.Group>
//                             <Radio defaultChecked value="mpesa">
//                                 {" "}
//                                 Mpesa{" "}
//                             </Radio>
//                             <Radio value="payondelivery">
//                                 Pay On Delivery{" "}
//                             </Radio>
//                         </Radio.Group>
//                     </Form.Item>
//                     <Flex justify="center" style={{ marginTop: "13px" }}>
//                         <Button
//                             htmlType="submit"
//                             block
//                             loading={loading}
//                             style={{
//                                 marginLeft: "30%",
//                                 marginRight: "30%",
//                                 borderRadius: "15px",
//                             }}
//                             size="large"
//                         >
//                             Place Order
//                         </Button>
//                     </Flex>
//                 </Col>
//             </Row>
//         </Form>
//     );
// }

// export default OrderForm;
