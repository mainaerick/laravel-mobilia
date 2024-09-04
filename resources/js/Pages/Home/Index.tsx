import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Product } from "@/Core/_Models";
import { Card, Carousel, Col, Flex, Row, Typography, Button, Image } from "antd";
import Meta from "antd/es/card/Meta";
import {
    HeartOutlined,
    SwapOutlined,
    ShareAltOutlined,
} from "@ant-design/icons";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link, router } from "@inertiajs/react";
import { Colors, Dimensions } from "@/utils/Config";
import Footer from "@/Components/Footer";
import ProductCard from "@/Components/ProductCard";
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
            src="images/bedroom.jpg"
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <img
            className="pr-2 pt-0 pb-0"
            src="images/bedroom.jpg"
            onDragStart={handleDragStart}
            role="presentation"
        />,
        <img
            className="pr-2"
            src="images/bedroom.jpg"
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
                    className="absolute sm:bottom-0 sm:right-0  lg:top-[30%] lg:left-[50%] lg:right-[5%] "
                // style={{
                //     // position: "absolute",
                //     top: "30%",
                //     left: "50%",
                //     right: "5%",
                //     height: "100px",
                // }}
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
            <div
                className={Dimensions.pagePaddingClass}
                // bordered={false}
                style={{ marginTop: "37px", width: "100%" }}
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
                        <div
                            className="overflow-hidden  cursor-pointer rounded-xl relative group"
                            onClick={() => {
                                let queryParams = { category: "" };
                                const category = "dining";
                                queryParams.category = category;
                                router.get(route("shop.index"), queryParams);
                            }}
                        >
                            <Card
                                style={{ marginBottom: 10 }}
                                styles={{ body: { padding: 0 } }}
                                cover={
                                    // <img
                                    //     src={`/images/dining.jpg`}
                                    //     alt={"dining"}
                                    // />
                                    <Image
                                        alt="it"
                                        style={{
                                            height: "320px",
                                            width: "420px",
                                            objectFit: "cover"

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
                                            `/images/dining.jpg`
                                        }
                                    />
                                }
                            ></Card>
                        </div>
                        <Row align={"middle"} justify={"center"}>
                            <Typography.Title level={5}>
                                Dining
                            </Typography.Title>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <div
                            className="overflow-hidden  cursor-pointer rounded-xl relative group"
                            onClick={() => {
                                let queryParams = { category: "" };
                                const category = "living";
                                queryParams.category = category;
                                router.get(route("shop.index"), queryParams);
                            }}
                        >
                            <Card
                                style={{ marginBottom: 10 }}
                                styles={{ body: { padding: 0 } }}
                                cover={
                                    // <img
                                    //     alt="example"
                                    //     src={"images/living.jpg"}
                                    //     style={{
                                    //         height: "320px",
                                    //         width: "320px",
                                    //     }}
                                    // />
                                    <Image
                                        alt="it"
                                        style={{
                                            height: "320px",
                                            width: "420px",
                                            objectFit: "cover"

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
                                            "images/living.jpg"
                                        }
                                    />
                                }
                            ></Card>
                        </div>
                        <Row align={"middle"} justify={"center"}>
                            <Typography.Title level={5}>
                                Living
                            </Typography.Title>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <div
                            className="overflow-hidden  cursor-pointer rounded-xl relative group"
                            onClick={() => {
                                let queryParams = { category: "" };
                                const category = "bedroom";
                                queryParams.category = category;
                                router.get(route("shop.index"), queryParams);
                            }}
                        >
                            <Card
                                style={{ marginBottom: 10 }}
                                styles={{ body: { padding: 0 } }}
                                cover={

                                    // <img
                                    //     alt="example"
                                    //     src={"images/bedroom.jpg"}
                                    //     style={{
                                    //         height: "320px",
                                    //         width: "320px",
                                    //     }}
                                    // />
                                    <Image
                                        alt="it"
                                        style={{
                                            height: "320px",
                                            width: "420px",
                                            objectFit: "cover"

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
                                            "images/bedroom.jpg"
                                        }
                                    />
                                }
                            ></Card>
                        </div>
                        <Row align={"middle"} justify={"center"}>
                            <Typography.Title level={5}>
                                Bedroom
                            </Typography.Title>
                        </Row>
                    </Col>
                </Row>
            </div>
            {/* Products */}
            <div
                className={Dimensions.pagePaddingClass}
                style={{ border: 0, marginTop: "37px" }}
            >
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
                                    // span={6}
                                    xs={{ span: 24 }}
                                    sm={{ span: 12 }}
                                    md={{ span: 8 }}
                                    lg={{ span: 6 }}
                                    xl={{ span: 6 }}
                                    style={{ marginBottom: "23px" }}
                                >
                                    <ProductCard product={product} />
                                </Col>
                            );
                        })}

                    <div
                        style={{ width: "100%", marginTop: "27px" }}
                        className={"flex justify-center align-middle"}
                    >
                        <Link href={"shop"}>
                            <Button
                                style={{
                                    borderRadius: 0,
                                    borderColor: Colors.primary,
                                    color: Colors.textButtonColor,
                                    fontWeight: "bold",
                                }}
                                className={"ps-12 pe-12"}
                            >
                                Show More
                            </Button>
                        </Link>
                    </div>
                </Row>
            </div>
            {/* Inspiration */}
            <div
                style={{
                    background: Colors.secondaryLightColor,
                    marginTop: "37px",
                    marginBottom: "37px",
                }}
            >
                <div
                    className={Dimensions.pagePaddingClass}
                    style={{
                        border: 0,
                        background: Colors.secondaryLightColor,
                    }}
                >
                    <Row
                        // className="lg:h-600"
                        style={{ height: "600px" }}
                        justify={"center"}
                        align={"middle"}
                    >
                        <Col
                            // span={6}
                            xs={{ span: 12 }}
                            sm={{ span: 12 }}
                            md={{ span: 8 }}
                            lg={{ span: 6 }}
                            xl={{ span: 6 }}
                        >
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
                </div>
            </div>

            {/* footer */}
            <Footer />
        </Authenticated>
    );
};

export default Index;
