import { CartItem } from "@/Core/_Models";
import {
    Avatar,
    Button,
    Col,
    Divider,
    Drawer,
    Flex,
    List,
    Row,
    Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Image } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
import { Link, router } from "@inertiajs/react";
type Props = { cartItems: CartItem[]; open: any; onClose: any };

function CartItems({ cartItems, open, onClose }: Props) {
    const [subTotal, setSubTotal] = useState(0);

    const handleRemoveItem = (id: number) => {
        router.delete(route("cart.removeItem", id), {
            onSuccess: () => {
                // Optionally, you can handle success actions like showing a notification
                console.log("Item removed successfully");
            },
        });
    };

    useEffect(() => {
        if (cartItems) {
            let total = 0;
            cartItems.map((item) => {
                total = parseFloat(item.product.price) * item.quantity;
            });
            setSubTotal(total);
        }
    }, [cartItems]);

    return (
        <Drawer
            title="Shoppng Cart"
            closable={false}
            onClose={onClose}
            open={open}
        >
            <Row style={{ height: "100%" }} justify={"space-between"}>
                <Col span={24}>
                    <List
                        dataSource={cartItems}
                        renderItem={(item) => (
                            <List.Item key={item.cart_id}>
                                <List.Item.Meta
                                    avatar={
                                        <Image
                                            preview={false}
                                            src={item.product.images[0]}
                                            width={108}
                                        />
                                    }
                                    title={
                                        <a href="https://ant.design">
                                            {item.product.name}
                                        </a>
                                    }
                                    description={`${item.quantity} x ${item.product.price}`}
                                />
                                <div>
                                    <CloseCircleFilled
                                        onClick={() =>
                                            handleRemoveItem(item.id)
                                        }
                                    />
                                </div>
                            </List.Item>
                        )}
                    />
                </Col>
                {/* subtotoal */}

                <Col span={24}>
                    <Flex
                        justify={"flex-end"}
                        vertical
                        style={{ height: "100%" }}
                    >
                        <Row
                            style={{ width: "100%" }}
                            justify={"space-between"}
                        >
                            <Col>
                                <Typography.Title level={5}>
                                    Subtotal
                                </Typography.Title>
                            </Col>
                            <Col>
                                <Typography.Text>{`KSH ${subTotal}`}</Typography.Text>
                            </Col>
                        </Row>

                        <Divider />
                        <Row justify={"space-between"}>
                            <Col>
                                <Link href={"/cart"}>
                                    {" "}
                                    <Button shape="round">Cart</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link href={"checkout"}>
                                    <Button shape="round">Checkout</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link href={""}>
                                    <Button shape="round">Comparison</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Flex>
                </Col>
            </Row>
        </Drawer>
    );
}

export default CartItems;
