import { Product } from "@/Core/_Models";
import { Colors } from "@/utils/Config";
import { Flex, Button, Card, Typography, Image } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import {
    HeartOutlined,
    SwapOutlined,
    ShareAltOutlined,
} from "@ant-design/icons";
import { router } from "@inertiajs/react";
type Props = { product: Product };

function ProductCard({ product }: Props) {
    return (
        <div className="flex items-center justify-center ">
            <div className="overflow-hidden  cursor-pointer rounded-xl relative group">
                <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100  transition duration-300 ease-in-out cursor-pointer absolute bottom-0 left-0 right-0 top-0 from-black/80 to-transparent bg-gradient-to-t inset-x-0 pt-30 text-white flex items-end">
                    <Flex
                        style={{
                            height: "100%",
                            width: "100%",
                        }}
                        align={"center"}
                        justify={"center"}
                        vertical={true}
                        className="opacity-60  transform-gpu space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  pb-10  transform transition duration-300 ease-in-out"
                    >
                        <Button
                            style={{
                                backgroundColor: Colors.buttonBgColor,
                                color: Colors.textButtonColor,
                            }}
                            className="font-bold ps-23 pe-23"
                            onClick={() => {
                                console.log(product.id)
                                router.post(route("cart.add"), {
                                    product_id: product.id,
                                    quantity: 1,
                                });
                            }}
                        >
                            Add to cart
                        </Button>

                        <Flex gap={"middle"} className="text-sm">
                            <Flex gap={"small"}>
                                <ShareAltOutlined />
                                <span>Share</span>
                            </Flex>
                            <div>
                                <Flex gap={"small"}>
                                    <SwapOutlined />
                                    <span>Compare</span>
                                </Flex>
                            </div>
                            <div>
                                <Flex gap={"small"}>
                                    <HeartOutlined />
                                    <span>Like</span>
                                </Flex>
                            </div>
                        </Flex>
                    </Flex>
                </div>
                <Card
                    style={{
                        background: Colors.cardDescriptionBgColor,
                    }}
                    className="object-cover h-full w-full aspect-square  transition duration-300"
                    cover={
                        <Image
                            alt="it"
                            style={{
                                height: "320px",
                                width: "320px",
                            }}
                            // src={"images/bedroom/pexels-pixabay-164595.jpg"}
                            placeholder={
                                <Image
                                    preview={false}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                    width={320}
                                />
                            }
                            src={
                                product?.images &&
                                (`/${product?.images[0]}` as any)
                            }
                        />
                    }
                >
                    <Meta
                        title={product.name}
                        description={
                            <Flex vertical gap={13}>
                                <Typography.Text
                                    style={{
                                        color: Colors.textGrayColor,
                                    }}
                                >
                                    {product.category}
                                </Typography.Text>
                                <Typography.Text strong>
                                    Ksh {product.price}
                                </Typography.Text>
                            </Flex>
                        }
                    />
                </Card>
                {/*<img src={"/images/living.jpg"}/>*/}
            </div>
        </div>
    );
}

export default ProductCard;
