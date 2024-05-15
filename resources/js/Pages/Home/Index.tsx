import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Product } from "@/Core/_Models";
import {
    Card,
    Carousel,
    Col,
    Flex,
    Row,
    Typography,
    Image,
    Button,
    Divider,
    Input,
} from "antd";
import Meta from "antd/es/card/Meta";
import {
    HeartOutlined,
    SwapOutlined,
    ShareAltOutlined,
} from "@ant-design/icons";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "@inertiajs/react";
import { Colors } from "@/utils/Config";
interface Props {
    auth: any;
    products: Product[];
}

const Index: React.FC<Props> = ({ auth, products }) => {
    const pagePadding = "0 48px";
    const limitedProducts = products.slice(0, 8);
    const handleDragStart = (e: any) => e.preventDefault();
    const items: any = [
        <img
            className="pr-2"
            src="images/bedroom.png"
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <img
            className="pr-2 pt-0 pb-0"
            src="images/bedroom.png"
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <img
            className="pr-2"
            src="images/bedroom.png"
            onDragStart={handleDragStart}
            role="presentation"
        />,
    ];

    const handleCorChanged = (e: EventObject) => {
        // setCurrentCarouselItem(e.item);
        console.log(e);
    };
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <Authenticated user={auth.user}>
            {/* Hero */}
            <div
                style={{
                    position: "relative",
                    height: "700px",
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundImage: `url("/images/home_hero.png")`,
                    marginBottom: "",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                        right: "5%",
                        height: "100px",
                    }}
                >
                    <Card
                        style={{
                            background: Colors.cardInfoBgColor,
                        }}
                    >
                        <Flex
                            vertical
                            style={{
                                padding: "37px 13px 13px 13px",
                            }}
                        >
                            <Typography.Text strong>
                                New Arrival
                            </Typography.Text>
                            <Typography.Title
                                style={{ color: Colors.primary, width: "80%" }}
                            >
                                Discover Our New Collection
                            </Typography.Title>

                            <Typography.Paragraph>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Ut elit tellus,
                                luctus nec ullamcorper mattis. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Ut elit
                                tellus, luctus nec ullamcorper mattis.
                            </Typography.Paragraph>
                            <Link href={"shop"}>
                                <Button
                                    style={{
                                        borderRadius: 0,
                                        background: Colors.primary,
                                        color: Colors.textWhiteColor,
                                        fontWeight: "bold",
                                        fontSize: "16px",
                                    }}
                                    size={"large"}
                                    shape="default"
                                >
                                    BUY NOW
                                </Button>
                            </Link>
                        </Flex>
                    </Card>
                </div>
            </div>
            {/* Range */}
            <Card
                bordered={false}
                style={{ padding: pagePadding, marginTop: "37px" }}
            >
                <Flex
                    align={"center"}
                    justify={"center"}
                    vertical={true}
                    style={{ marginBottom: 23 }}
                >
                    <Typography.Title level={3}>
                        Browse The Range
                    </Typography.Title>
                    <Typography.Text type={"secondary"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography.Text>
                </Flex>

                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            style={{ marginBottom: 10 }}
                            styles={{ body: { padding: 0 } }}
                            cover={
                                <img
                                    src={`/images/dining.png`}
                                    alt={"dining"}
                                />
                            }
                        ></Card>

                        <Row align={"middle"} justify={"center"}>
                            <Typography.Title level={5}>
                                Dining
                            </Typography.Title>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{ marginBottom: 10 }}
                            styles={{ body: { padding: 0 } }}
                            cover={
                                <img alt="example" src={"images/living.png"} />
                            }
                        ></Card>
                        <Row align={"middle"} justify={"center"}>
                            <Typography.Title level={5}>
                                Living
                            </Typography.Title>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{ marginBottom: 10 }}
                            styles={{ body: { padding: 0 } }}
                            cover={
                                <img alt="example" src={"images/bedroom.png"} />
                            }
                        ></Card>
                        <Row align={"middle"} justify={"center"}>
                            <Typography.Title level={5}>
                                Bedroom
                            </Typography.Title>
                        </Row>
                    </Col>
                </Row>
            </Card>
            {/* Products */}
            <Card bordered={true} style={{ padding: pagePadding, border: 0 }}>
                <Flex
                    align={"center"}
                    justify={"center"}
                    vertical={true}
                    style={{ marginBottom: 18 }}
                >
                    <Typography.Title level={3}>Our Products</Typography.Title>
                </Flex>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {limitedProducts &&
                        limitedProducts.map((product: Product, key) => {
                            return (
                                <Col
                                    key={key}
                                    span={6}
                                    style={{ marginBottom: "23px" }}
                                >
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
                                                            backgroundColor:
                                                                Colors.buttonBgColor,
                                                            color: Colors.textButtonColor,
                                                        }}
                                                        className="font-bold ps-23 pe-23"
                                                    >
                                                        Add to cart
                                                    </Button>

                                                    <Flex
                                                        gap={"middle"}
                                                        className="text-sm"
                                                    >
                                                        <Flex gap={"small"}>
                                                            <ShareAltOutlined />
                                                            <span>Share</span>
                                                        </Flex>
                                                        <div>
                                                            <Flex gap={"small"}>
                                                                <SwapOutlined />
                                                                <span>
                                                                    Compare
                                                                </span>
                                                            </Flex>
                                                        </div>
                                                        <div>
                                                            <Flex gap={"small"}>
                                                                <HeartOutlined />
                                                                <span>
                                                                    Like
                                                                </span>
                                                            </Flex>
                                                        </div>
                                                    </Flex>
                                                </Flex>
                                            </div>
                                            <Card
                                                style={{
                                                    background:
                                                        Colors.cardDescriptionBgColor,
                                                }}
                                                className="object-cover h-full w-full aspect-square  transition duration-300"
                                                cover={
                                                    <img
                                                        alt="example"
                                                        style={{
                                                            height: "320px",
                                                        }}
                                                        src={
                                                            product?.images &&
                                                            (product
                                                                ?.images[0] as any)
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
                                                                {
                                                                    product.category
                                                                }
                                                            </Typography.Text>
                                                            <Typography.Text
                                                                strong
                                                            >
                                                                Ksh{" "}
                                                                {product.price}
                                                            </Typography.Text>
                                                        </Flex>
                                                    }
                                                />
                                            </Card>
                                            {/*<img src={"/images/dining.png"}/>*/}
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}

                    <div
                        style={{ width: "100%", marginTop: "27px" }}
                        className={"flex justify-center align-middle"}
                    >
                        <Link href={"shop"} ><Button
                            style={{
                                borderRadius: 0,
                                borderColor: Colors.primary,
                                color: Colors.textButtonColor,
                                fontWeight: "bold",
                            }}
                            className={"ps-12 pe-12"}
                        >
                            Show More
                        </Button></Link>
                        
                    </div>
                </Row>
            </Card>
            {/* Inspiration */}
            <Card
                bordered={true}
                style={{
                    border: 0,
                    background: Colors.secondaryLightColor,
                    padding: pagePadding,
                    marginTop: "37px",
                }}
            >
                <Row
                    style={{ height: "600px" }}
                    justify={"center"}
                    align={"middle"}
                >
                    <Col span={6}>
                        <Flex vertical={true}>
                            <Typography.Title level={3}>
                                50+ Beautiful rooms inspiration{" "}
                            </Typography.Title>
                            <Typography.Paragraph
                                color={Colors.textSubtitleColor}
                            >
                                Our designer already made a lot of beautiful
                                prototype of rooms that inspire you
                            </Typography.Paragraph>

                            <div>
                                <Button
                                    style={{
                                        marginTop: 13,
                                        background: Colors.primary,
                                        borderRadius: 0,
                                        border: 0,
                                        color: Colors.textWhiteColor,
                                    }}
                                >
                                    Explore More
                                </Button>{" "}
                            </div>
                        </Flex>
                    </Col>
                    <Col span={18} style={{}}>
                        <AliceCarousel
                            onSlideChanged={handleCorChanged}
                            disableButtonsControls
                            autoHeight
                            autoWidth
                            // infinite
                            mouseTracking
                            items={items}
                        />
                    </Col>
                </Row>
            </Card>

            <Divider />
            {/* footer */}
            <div style={{ padding: pagePadding, height: "auto", paddingBottom:"37px" }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align={"top"}>
                    <Col span={8}>
                        <Row>
                            <Col span={12}>
                                <Flex gap={50} vertical>
                                    <Typography.Title level={5}>
                                        Mobilia
                                    </Typography.Title>
                                    <Typography.Paragraph
                                        style={{ color: Colors.textGrayColor }}
                                    >
                                        400 University Drive Suite 200 Coral
                                        Gables, FL 33134 USA
                                    </Typography.Paragraph>
                                </Flex>{" "}
                            </Col>
                        </Row>
                    </Col>
                    <Col span={16}>
                        <Row>
                            <Col span={8}>
                                <Flex vertical gap={50}>
                                    <Typography.Text
                                        style={{ color: Colors.textGrayColor }}
                                    >
                                        Links
                                    </Typography.Text>

                                    <Link href={"home"}>
                                        <Typography.Text strong>
                                            Home
                                        </Typography.Text>
                                    </Link>
                                    <Link href={"shop"}>
                                        <Typography.Text strong>
                                            Shop
                                        </Typography.Text>
                                    </Link>
                                    <Link href={"about"}>
                                        <Typography.Text strong>
                                            About
                                        </Typography.Text>
                                    </Link>
                                    <Link href={"contact"}>
                                        <Typography.Text strong>
                                            Contact
                                        </Typography.Text>
                                    </Link>
                                </Flex>
                            </Col>

                            <Col span={6}>
                                <Flex vertical gap={50}>
                                    <Typography.Text
                                        style={{ color: Colors.textGrayColor }}
                                    >
                                        Help
                                    </Typography.Text>

                                    <Link href={""}>
                                        <Typography.Text strong>
                                            Payment Options
                                        </Typography.Text>
                                    </Link>
                                    <Link href={""}>
                                        <Typography.Text strong>
                                            Returns
                                        </Typography.Text>
                                    </Link>
                                    <Link href={""}>
                                        <Typography.Text strong>
                                            Privacy Policies
                                        </Typography.Text>
                                    </Link>
                                </Flex>
                            </Col>
                            <Col span={10}>
                                <Flex vertical gap={50}>
                                    <Typography.Text
                                        style={{ color: Colors.textGrayColor }}
                                    >
                                        NewsLetter
                                    </Typography.Text>
                                    <Flex gap={9} align={"flex-end"}>
                                        <Input placeholder="Enter our email address" />
                                        <Button type="text">
                                            <Typography.Text strong>
                                                Subscribe
                                            </Typography.Text>
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Divider/>
        </Authenticated>
    );
};

export default Index;
