import Hero from "@/Components/Hero";
import { CartItem, Product } from "@/Core/_Models";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Colors, Dimensions } from "@/utils/Config";
import { router, usePage } from "@inertiajs/react";
import {
    TableProps,
    Tag,
    Space,
    Table,
    Typography,
    Flex,
    Image,
    Row,
    Col,
    ConfigProvider,
    Button,
    Breadcrumb,
} from "antd";
import React, { useEffect, useState } from "react";

import { DeleteFilled } from "@ant-design/icons";
import ShopInfo from "@/Components/ShopInfo";
import Footer from "@/Components/Footer";
import Link from "antd/es/typography/Link";
type Props = { auth: any };

function Index({ auth }: Props) {
    const { props } = usePage();
    const items = props?.cartItems as CartItem[];
    const [subTotal, setSubTotal] = useState<string>("0");
    const handleRemoveItem = (id: number) => {
        router.delete(route("cart.removeItem", id), {
            onSuccess: () => {
                // Optionally, you can handle success actions like showing a notification
                console.log("Item removed successfully");
            },
        });
    };
    const columns: TableProps<CartItem>["columns"] = [
        {
            title: "Product",
            dataIndex: "product",
            key: "id",
            render: (product: Product) => (
                <Flex gap={23} align={"center"}>
                    <Image
                        preview={false}
                        src={product.images[0]}
                        width={108}
                    />
                    <Typography.Text>{product.name}</Typography.Text>
                </Flex>
            ),
        },
        {
            title: "Price",
            dataIndex: "product",
            key: "product.price",
            render: (text: Product) => <a>{text.price}</a>,
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Subtotal",
            key: "subtotal",
            render: (_, record) => (
                <Space size="middle">
                    <Typography.Text>
                        {record.quantity * parseFloat(record.product.price)}
                    </Typography.Text>
                </Space>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                // <Link>
                <DeleteFilled
                    onClick={() => handleRemoveItem(record.id)}
                    style={{ fontSize: "23px", color: Colors.primary }}
                />
                // </Link>
            ),
        },
    ];

    useEffect(() => {
        if (items) {
            let total = 0;
            items.map((item) => {
                total = parseFloat(item.product.price) * item.quantity;
            });

            setSubTotal(Number.parseFloat(total.toString()).toFixed(2));
        }
    }, [items]);
    return (
        <Authenticated user={auth.user}>
            <Hero
                whichRoute={
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Shop</Breadcrumb.Item>
                        <Breadcrumb.Item>Cart</Breadcrumb.Item>
                    </Breadcrumb>
                }
                title={"Cart"}
            />

            <div
                className={Dimensions.pagePaddingClass}
                style={{ marginTop: "48px", marginBottom: "48px" }}
            >
                <Row gutter={16}>
                    <Col
                        //  span={16}
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 12 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                    >
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
                                pagination={false}
                            />
                        </ConfigProvider>
                    </Col>
                    <Col
                        //  span={8}
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 12 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                        style={{}}
                    >
                        <Flex
                            vertical
                            align={"center"}
                            gap={"large"}
                            style={{
                                background: Colors.secondary,
                                height: 390,
                                padding: " 23px 77px",
                            }}
                        >
                            <Typography.Title level={3}>
                                Cart Totals
                            </Typography.Title>
                            <Row
                                justify={"space-between"}
                                align={"middle"}
                                style={{ width: "100%" }}
                            >
                                <Col>
                                    {" "}
                                    <Typography.Text strong>
                                        Sub-Total
                                    </Typography.Text>
                                </Col>
                                <Col>
                                    <Typography.Title
                                        level={4}
                                    >{`Ksh ${subTotal}`}</Typography.Title>
                                </Col>
                            </Row>

                            <Link href="checkout">
                                <Button
                                    block
                                    size="large"
                                    style={{ borderRadius: "5px" }}
                                >
                                    Checkout
                                </Button>
                            </Link>
                        </Flex>
                    </Col>
                </Row>
            </div>

            <ShopInfo />
            <Footer />
        </Authenticated>
    );
}

export default Index;
