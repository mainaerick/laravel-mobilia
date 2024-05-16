import Footer from "@/Components/Footer";
import { Pagination, Product } from "@/Core/_Models";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Colors, Dimensions } from "@/utils/Config";
import {
    Card,
    Flex,
    Typography,
    Button,
    Col,
    Row,
    Divider,
    Input,
    Select,
} from "antd";
import { FilterOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import ProductCard from "@/Components/ProductCard";
import PaginationDiv from "@/Components/PaginationDiv";
import { router } from "@inertiajs/react";

type Props = { auth: any; products: Pagination; queryParams: any };

function Index({ auth, products, queryParams = null }: Props) {
    queryParams = queryParams || {};
    const productsData = products.data as Product[];
    const handleChangeSort = (name: string) => {
        // if (name.includes("price")) {
        //     name = "price";
        //     if (name.includes("high")) {
        //         queryParams.sort_direction = "asc";
        //     } else {
        //         queryParams.sort_direction = "desc";
        //     }
        // }
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }

        console.log(queryParams);

        router.get(route("shop.index"), queryParams);
    };

    const handlePageChange = (e: any) => {
        router.get(route("shop.index"), queryParams);
    };
    return (
        <Authenticated user={auth}>
            = {/* Hero */}
            <div
                style={{
                    position: "relative",
                    height: "300px",
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
                        // right: "50%",
                    }}
                >
                    <Flex
                        vertical
                        align={"center"}
                        justify={"center"}
                        // style={{
                        //     padding: "37px 13px 13px 13px",
                        // }}
                    >
                        <Typography.Title
                            level={1}
                            style={{
                                textAlign: "center",
                                color: Colors.textBlackColor,
                                width: "100%",
                                fontWeight: "normal",
                            }}
                        >
                            Shop
                        </Typography.Title>

                        <Typography.Text>{"Home>Shop"}</Typography.Text>
                    </Flex>
                </div>
            </div>
            {/* Tool Bar Div */}
            <div style={{ background: Colors.secondary, height: "100px " }}>
                <Row
                    style={{ height: "100%" }}
                    justify={"space-between"}
                    align={"middle"}
                    className={Dimensions.pagePaddingClass}
                >
                    <Col span={12}>
                        <Flex align={"center"} style={{ height: "30px" }}>
                            <div>
                                <FilterOutlined /> Filter
                            </div>
                            <Divider
                                type="vertical"
                                style={{
                                    background: "black",
                                    height: "100%",
                                    margin: "0 23px",
                                }}
                            />
                            <Typography.Text>
                                {"Showing 1-16 of 32 results"}
                            </Typography.Text>
                        </Flex>
                    </Col>
                    <Col span={12} style={{ width: "100%" }}>
                        <Row justify={"end"}>
                            <Col span={8}>
                                <Flex
                                    gap={9}
                                    justify={"flex-end"}
                                    align={"center"}
                                >
                                    <div>
                                        <Typography.Text>Show</Typography.Text>
                                    </div>
                                    <div style={{ width: "50px", border: 0 }}>
                                        <Input variant="borderless" />
                                    </div>
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Flex
                                    gap={9}
                                    justify={"center"}
                                    align={"center"}
                                >
                                    <div>
                                        <Typography.Text>
                                            Sort By
                                        </Typography.Text>
                                    </div>
                                    <div style={{ width: "200px" }}>
                                        <Select
                                            size="large"
                                            defaultValue={
                                                queryParams.sort_field
                                            }
                                            style={{ width: "200px" }}
                                            onChange={handleChangeSort}
                                            options={[
                                                {
                                                    value: "price_high",
                                                    label: "Price: High to Low",
                                                },
                                                {
                                                    value: "price_low",
                                                    label: "Price: Low to High",
                                                },
                                                {
                                                    value: "popularity",
                                                    label: "Popularity",
                                                },
                                                {
                                                    value: "rating",
                                                    label: "Rating",
                                                },
                                            ]}
                                        />
                                    </div>
                                </Flex>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div
                className={Dimensions.pagePaddingClass}
                style={{ marginTop: "37px", marginBottom: "37px" }}
            >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {productsData &&
                        productsData?.map((product: Product, key) => {
                            return (
                                <Col
                                    key={key}
                                    span={6}
                                    style={{ marginBottom: "23px" }}
                                >
                                    <ProductCard product={product} />
                                </Col>
                            );
                        })}
                </Row>

                <Flex justify={"center"} style={{ marginTop: "37px" }}>
                    <PaginationDiv handleChange={handlePageChange} />
                </Flex>
            </div>
            <Footer />
        </Authenticated>
    );
}

export default Index;
