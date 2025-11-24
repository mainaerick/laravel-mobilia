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
import {Toolbar} from "@/Pages/Shop/Components/index/ToolBar";
import {useState} from "react";

type Props = { auth: any; products: Pagination;settings:any; queryParams: any };

function Index({ auth, products,settings, queryParams }: Props) {
    const [currentView, setCurrentView] = useState<"grid" | "list">("grid")
    const [pageSize, setPageSize] = useState(products.per_page)
    const [sortValue, setSortValue] = useState(queryParams.sort_field||"default")
    const currentPage = products.current_page;
    const totalNumber = products.total;
    const toPage=products.to;
    const perPage = products.per_page;
    const productsData = products.data as Product[]

    const handleChangeSort = (name: string) => {
        const newQueryParams = { ...queryParams };

        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                newQueryParams.sort_direction = "desc";
            } else {
                newQueryParams.sort_direction = "asc";
            }
        } else {
            newQueryParams.sort_field = name;
            newQueryParams.sort_direction = "asc";
        }

        setSortValue(name);
        router.get(route("shop.index"), newQueryParams);
    };

    const handlePageSizeChange = (value:any)=>{
        const newQueryParams = { ...queryParams };
        newQueryParams.per_page = value
        setPageSize(value)
        router.get(route("shop.index"), newQueryParams);
    }
    const handlePageChange = (e: any) => {
        queryParams.page = e;
        router.get(route("shop.index"), queryParams);
    };
    const onShowSizeChange = (current: any, size: any) => {
        const newQueryParams = { ...queryParams };
        newQueryParams.per_page = size;
        newQueryParams.page = 1; // Reset to first page
        setPageSize(size);
        router.get(route("shop.index"), newQueryParams);
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
                settings={settings}
            />
            {/* Tool Bar Div */}
            <Toolbar
                currentView={currentView}
                onViewChange={setCurrentView}
                pageSize={pageSize}
                onPageSizeChange={(value) => handlePageSizeChange(value)}
                sortValue={sortValue as string}
                onSortChange={(value) => handleChangeSort(value)}
                totalResults={totalNumber}
                startIndex={1}
                endIndex={toPage}
                onFilterClick={() => console.log("Filter clicked")}
                queryParams={queryParams}
            />
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
