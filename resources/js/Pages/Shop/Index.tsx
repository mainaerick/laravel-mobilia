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
    Breadcrumb, Empty,
} from "antd";
import { FilterOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import ProductCard from "@/Components/ProductCard";
import PaginationDiv from "@/Components/PaginationDiv";
import { Link, router } from "@inertiajs/react";
import Hero from "@/Components/Hero";
import ShopInfo from "@/Components/ShopInfo";

type Props = { auth: any; products: Pagination; queryParams: any };

function Index({ auth, products, queryParams = null }: Props) {
    queryParams = queryParams || {};
    const currentPage = products.current_page;
    const totalNumber = products.total;
    const perPage = products.per_page;
    const productsData = products.data as Product[]
    const handleChangeSort = (name: string) => {
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

        router.get(route("shop.index"), queryParams);
    };

    const handlePageChange = (e: any) => {
        queryParams.page = e;
        router.get(route("shop.index"), queryParams);
    };
    const onShowSizeChange = (current: any, size: any) => {
        console.log(size);
        // queryParams.page = current;
        queryParams.per_page = size;
    };
    return (
        <Authenticated user={auth}>
            {/* Hero */}
            <Hero
                whichRoute={
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Shop</Breadcrumb.Item>
                    </Breadcrumb>
                }
                title={"Shop"}
            />
            {/* Tool Bar Div */}
            <div style={{ background: Colors.secondary, height: "100px " }}>
                <Row
                    style={{ height: "100%" }}
                    justify={"space-between"}
                    align={"middle"}
                    className={Dimensions.pagePaddingClass}
                >
                    <Col
                        // span={12}
                        sm={{ span: 24 }}
                        md={{ span: 12 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                        style={{ width: "100%" }}
                    >

                    </Col>
                    <Col
                        // span={12}
                        sm={{ span: 24 }}
                        md={{ span: 12 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                        style={{ width: "100%" }}
                    >
                        <Row justify={"end"}>
                            <Col
                                // span={12}
                                xs={{ span: 24 }}
                                sm={{ span: 24 }}
                                md={{ span: 24 }}
                                lg={{ span: 12 }}
                                xl={{ span: 12 }}
                            >
                                <Flex gap={9} justify={"end"} align={"center"}>
                                    <div>
                                        <Typography.Text>
                                            Sort By
                                        </Typography.Text>
                                    </div>
                                    <div style={{ width: "200px" }}>
                                        <Select
                                            size="middle"
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
            {/* Shop */}
            {productsData.length > 0 ? <div
                className={Dimensions.pagePaddingClass}
                style={{marginTop: "37px", marginBottom: "37px"}}
            >
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    {productsData &&
                        productsData?.map((product: Product, key) => {
                            return (
                                <Col
                                    key={key}
                                    // span={6}
                                    xs={{span: 24}}
                                    sm={{span: 12}}
                                    md={{span: 8}}
                                    lg={{span: 6}}
                                    xl={{span: 6}}
                                    style={{marginBottom: "23px"}}
                                >
                                        <ProductCard product={product}/>
                                </Col>
                            );
                        })}
                </Row>

                <Flex justify={"center"} style={{marginTop: "37px"}}>
                    <PaginationDiv
                        handleChange={handlePageChange}
                        current={currentPage}
                        total={totalNumber}
                        perPage={perPage}
                        onShowSizeChange={onShowSizeChange}
                    />
                </Flex>
            </div>:<Empty  description={
                <Typography.Text>
                    Looks empty in here
                </Typography.Text>
            } style={{ height:"200px",marginTop:"3rem"}}/>}

            {/* Shop Details */}
            <ShopInfo/>
            <Footer/>
        </Authenticated>
    );
}

export default Index;
