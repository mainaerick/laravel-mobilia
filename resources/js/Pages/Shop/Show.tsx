import { Product } from "@/Core/_Models";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Colors, Dimensions } from "@/utils/Config";
import {
    Row,
    Col,
    Flex,
    Divider,
    Typography,
    Image,
    Rate,
    Avatar,
    Radio,
    Button,
    Badge,
    InputNumber,
    Tabs,
    TabsProps,
    FormProps,
    Form,
    Input,
} from "antd";
import {
    CheckCircleOutlined,
    PlusOutlined,
    MinusOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    TwitterOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Description from "./Components/show/Description";
import AdditionalInfo from "./Components/show/AdditionalInfo";
import Reviews from "./Components/show/Reviews";
import Footer from "@/Components/Footer";
import ProductCard from "@/Components/ProductCard";
import { Link, router, usePage } from "@inertiajs/react";

type Props = {
    product: { data: Product };
    auth: any;
    relatedProducts: { data: Product[] };
    productCartItems?: [];
};
type AddToCartType = {
    quantity: number;
};
function Show({ auth, product, relatedProducts, productCartItems }: Props) {
    const productData: Product = product.data;
    const relatedData = relatedProducts.data;
    const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
    const { flash }: any = usePage().props;

    console.log(productCartItems)
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Description",
            children: <Description description={productData.description} />,
        },
        // { key: "2", label: "Additional Information", children: <AdditionalInfo additionalInfo={""} /> },
        {
            key: "3",
            label: "Reviews",
            children: <Reviews reviews={productData.reviews} />,
        },
    ];
    const colorSelected = (color: string) => {
        setSelectedColor(color);
    };

    const showMoreRelated = (productId: number) => {
        const queryParams: any = {};
        queryParams.category = productData.category;
        router.get(route("shop.index"), queryParams);
    };
    const addToCart: FormProps<AddToCartType>["onFinish"] = (values) => {
        if (values.quantity == undefined) {
            values.quantity = 1;
        }

        router.post(route("cart.add"), {
            product_id: productData.id,
            quantity: values.quantity,
        });
    };
    return (
        <Authenticated user={auth}>
            {/* Tool bar */}
            <div style={{ background: Colors.secondary, height: "100px " }}>
                <Row
                    style={{ height: "100%" }}
                    justify={"space-between"}
                    align={"middle"}
                    className={Dimensions.pagePaddingClass}
                >
                    <Col span={12}>
                        <Flex align={"center"} style={{ height: "30px" }}>
                            <Typography.Text type="secondary">
                                {"Home > Shop > "}
                            </Typography.Text>
                            <Divider
                                type="vertical"
                                style={{
                                    background: "black",
                                    height: "100%",
                                    margin: "0 23px",
                                }}
                            />
                            <Typography.Text>{" Sofa"}</Typography.Text>
                        </Flex>
                    </Col>
                    <Col span={12} style={{ width: "100%" }}>
                        <Row justify={"end"}></Row>
                    </Col>
                </Row>
            </div>
            {/* Product Details */}
            <div
                className={Dimensions.pagePaddingClass}
                style={{ marginTop: "18px" }}
            >
                <Row>
                    <Col span={12}>
                        <Flex gap={27}>
                            <Flex
                                gap={13}
                                vertical
                                style={{ height: 400, overflow: "auto" }}
                            >
                                <div>
                                    <img
                                        height={80}
                                        width={80}
                                        // style={{width:"100%",}}
                                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        height={80}
                                        width={80}
                                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        height={80}
                                        width={80}
                                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        height={80}
                                        width={80}
                                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                        alt=""
                                    />
                                </div>
                            </Flex>
                            <Image.PreviewGroup
                                items={[
                                    "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                                    "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
                                    "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
                                ]}
                            >
                                <Image
                                    width={"100%"}
                                    height={400}
                                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                />
                            </Image.PreviewGroup>
                        </Flex>{" "}
                    </Col>

                    <Col offset={1} span={11} style={{ background: "" }}>
                        <div>
                            <Flex gap={19} vertical>
                                <Typography.Title
                                    level={1}
                                    style={{ fontWeight: "normal", margin: 0 }}
                                >
                                    {productData.name}
                                </Typography.Title>
                                <Typography.Title
                                    level={5}
                                    style={{
                                        color: Colors.textGrayColor,
                                        margin: 0,
                                    }}
                                >
                                    {`Ksh ${productData.price}`}
                                </Typography.Title>
                                <Flex gap={20}>
                                    <Col>
                                        {" "}
                                        <Rate
                                            disabled
                                            allowHalf
                                            defaultValue={parseFloat(
                                                productData.rating,
                                            )}
                                        />
                                    </Col>
                                    <Col>
                                        <Divider
                                            type="vertical"
                                            style={{
                                                background: "black",
                                                height: "100%",
                                            }}
                                        />
                                    </Col>
                                    <Col>{`${productData.reviews.length} Customer Review(s)`}</Col>
                                </Flex>
                                <Typography.Paragraph>
                                    Setting the bar as one of the loudest
                                    speakers in its class, the Kilburn is a
                                    compact, stout-hearted hero with a
                                    well-balanced audio which boasts a clear
                                    midrange and extended highs for a sound.
                                </Typography.Paragraph>
                                <Typography.Text
                                    style={{ color: Colors.textGrayColor }}
                                >
                                    Size
                                </Typography.Text>

                                <Radio.Group
                                    defaultValue="a"
                                    buttonStyle="solid"
                                    style={{ gap: "13px" }}
                                >
                                    <Flex gap={13}>
                                        {productData.sizes.map(
                                            (size: string, key) => {
                                                return (
                                                    <Radio.Button
                                                        key={key}
                                                        value={size}
                                                    >
                                                        {size}
                                                    </Radio.Button>
                                                );
                                            },
                                        )}
                                    </Flex>
                                </Radio.Group>
                                <Typography.Text
                                    style={{ color: Colors.textGrayColor }}
                                >
                                    Color
                                </Typography.Text>

                                <Flex gap={13}>
                                    {productData.colors.map(
                                        (color: string, key) => {
                                            return (
                                                <Badge
                                                    key={key}
                                                    count={
                                                        selectedColor ===
                                                        color ? (
                                                            <CheckCircleOutlined
                                                                style={{
                                                                    color: Colors.primary,
                                                                }}
                                                            />
                                                        ) : (
                                                            0
                                                        )
                                                    }
                                                    showZero={false}
                                                >
                                                    <Button
                                                        shape="circle"
                                                        onClick={() =>
                                                            colorSelected(color)
                                                        }
                                                        style={{
                                                            backgroundColor:
                                                                color,
                                                            borderColor:
                                                                Colors.primary,
                                                        }}
                                                    ></Button>
                                                </Badge>
                                            );
                                        },
                                    )}
                                </Flex>
                                <Form
                                    name="addtocart"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    // style={{ maxWidth: 600 }}
                                    initialValues={{
                                        quantity: productCartItems
                                            ? productCartItems.length
                                            : 1,
                                    }}
                                    onFinish={addToCart}
                                    // onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Flex
                                        gap={13}
                                        style={{ marginTop: "13px" }}
                                    >
                                        <Form.Item<AddToCartType>
                                            name="quantity"
                                            rules={[
                                                {
                                                    required: false,

                                                    message:
                                                        "Please input your username!",
                                                },
                                            ]}
                                        >
                                            <InputNumber
                                                size="large"
                                                min={1}
                                                max={productData.quantity}
                                                keyboard={true}
                                                // defaultValue={1}
                                                controls={{
                                                    upIcon: <PlusOutlined />,
                                                    downIcon: <MinusOutlined />,
                                                }}
                                            />
                                        </Form.Item>

                                        <Button
                                            htmlType="submit"
                                            shape="round"
                                            size="large"
                                            icon={
                                                flash?.success && (
                                                    <CheckCircleOutlined />
                                                )
                                            }
                                        >
                                            Add To Cart
                                        </Button>
                                        <Button
                                            shape="round"
                                            size="large"
                                            icon={<PlusOutlined />}
                                        >
                                            Compare
                                        </Button>
                                    </Flex>
                                </Form>

                                <Divider
                                    style={{
                                        background: Colors.secondary,
                                        height: "0.1px",
                                    }}
                                />

                                <Flex gap={9}>
                                    <Col>SKU</Col>
                                    <Col>:</Col>
                                    <Col>23323</Col>
                                </Flex>
                                <Flex gap={9}>
                                    <Col>Category</Col>
                                    <Col>:</Col>
                                    <Col>{productData.category}</Col>
                                </Flex>
                                <Flex gap={9}>
                                    <Col>Tags</Col>
                                    <Col>:</Col>
                                    <Col>Sofa,Chair,Home,Shop</Col>
                                </Flex>
                                <Flex gap={9} align={"middle"}>
                                    <Col>Share</Col>
                                    <Col>:</Col>
                                    <Col>
                                        <Flex gap={7}>
                                            <FacebookOutlined
                                                style={{ fontSize: "23px" }}
                                            />
                                            <LinkedinOutlined
                                                style={{ fontSize: "23px" }}
                                            />
                                            <TwitterOutlined
                                                style={{ fontSize: "23px" }}
                                            />
                                        </Flex>
                                    </Col>
                                </Flex>
                            </Flex>
                        </div>{" "}
                    </Col>
                </Row>
            </div>

            <Divider />

            {/* Product More Info */}
            <div
                className={Dimensions.pagePaddingClass}
                style={{ marginBottom: 18 }}
            >
                <Tabs defaultActiveKey="1" centered items={items} />
            </div>
            <Divider />

            {/* Related Products */}
            <div
                className={Dimensions.pagePaddingClass}
                style={{ marginBottom: 38 }}
            >
                <Flex
                    align={"center"}
                    justify={"center"}
                    vertical={true}
                    style={{ marginBottom: 18 }}
                >
                    <Typography.Title level={3}>
                        Related Products
                    </Typography.Title>
                </Flex>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {relatedData.map((relatedProd, key) => {
                        return (
                            <Col span={6} key={key}>
                                <Link href={route("shop.show", relatedProd.id)}>
                                    <ProductCard product={relatedProd} />
                                </Link>
                            </Col>
                        );
                    })}
                </Row>

                <Flex
                    justify={"center"}
                    style={{ marginBottom: 38, marginTop: 28 }}
                >
                    <Button
                        style={{
                            borderRadius: 0,
                            borderColor: Colors.primary,
                            color: Colors.textButtonColor,
                            fontWeight: "bold",
                        }}
                        className={"ps-12 pe-12"}
                        onClick={() => showMoreRelated(productData.id)}
                    >
                        Show More
                    </Button>
                </Flex>
            </div>

            <Footer />
        </Authenticated>
    );
}

export default Show;
