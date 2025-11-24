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
    Breadcrumb,
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
    productCartItems?: { quantity: number };
};
type AddToCartType = {
    quantity: number;
};
function Show({ auth, product, relatedProducts, productCartItems }: Props) {
    const productData: Product = product.data;
    const relatedData = relatedProducts.data;
    const [selectedImage, setSelectedImage] = useState(
        productData?.images?.[0] ? "/" + productData.images[0] : ""
    );
    const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
    const { flash }: any = usePage().props;

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

        queryParams.room = [productData.room];

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
                            {/* <Typography.Text type="secondary">
                                {"Home > Shop "}
                            </Typography.Text>
                            <Divider
                                type="vertical"
                                style={{
                                    background: "black",
                                    height: "100%",
                                    margin: "0 23px",
                                }}
                            />
                            <Typography.Text>{" Sofa"}</Typography.Text> */}
                            <Breadcrumb style={{ margin: "16px 0" }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>Shop</Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    {productData.name}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Flex>
                    </Col>
                    <Col span={12} style={{ width: "100%" }}>
                        <Row justify={"end"}></Row>
                    </Col>
                </Row>
            </div>
            {productData && (
                <>
                    {/* Product Details */}
                    <div
                        className={Dimensions.pagePaddingClass}
                        style={{ marginTop: "18px" }}
                    >
                        <Row>
                            <Col
                                sm={{ span: 24 }}
                                md={{ span: 12 }}
                                lg={{ span: 12 }}
                                xl={{ span: 12 }}
                                style={{ width: "100%" }}
                            >
                                <Flex gap={27}>
                                    <Flex
                                        gap={13}
                                        vertical
                                        style={{
                                            height: 400,
                                            overflow: "auto",
                                        }}
                                    >
                                        {productData?.images.map((i, key) => {
                                            const img = "/" + i;
                                            return (
                                                <div
                                                    key={key}
                                                    onClick={() => setSelectedImage(img)}
                                                    className="cursor-pointer"
                                                >
                                                    <Image
                                                        height={100}
                                                        width={100}
                                                        preview={false}
                                                        src={img}
                                                        alt=""
                                                        style={{
                                                            border:
                                                                selectedImage === img
                                                                    ? "2px solid #000"
                                                                    : "2px solid transparent",
                                                            borderRadius: 6,
                                                        }}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </Flex>
                                    <Image.PreviewGroup items={productData?.images.map((i) => "/" + i)}>
                                        <Image
                                            width="100%"
                                            height={400}
                                            src={selectedImage}
                                            alt=""
                                        />
                                    </Image.PreviewGroup>
                                </Flex>{" "}
                            </Col>

                            <Col
                                // offset={1}
                                // span={11}
                                xs={{ span: 24 }}
                                sm={{ span: 24 }}
                                md={{ span: 11, offset: 1 }}
                                lg={{ span: 11, offset: 1 }}
                                xl={{ span: 11, offset: 1 }}
                                style={{ width: "100%" }}
                            >
                                <div>
                                    <Flex gap={19} vertical>
                                        <Typography.Title
                                            level={1}
                                            style={{
                                                fontWeight: "normal",
                                                margin: 0,
                                            }}
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
                                                        productData.rating.toString(),
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
                                            Setting the bar as one of the
                                            loudest speakers in its class, the
                                            Kilburn is a compact, stout-hearted
                                            hero with a well-balanced audio
                                            which boasts a clear midrange and
                                            extended highs for a sound.
                                        </Typography.Paragraph>
                                        {productData?.sizes && (
                                            <>
                                                <Typography.Text
                                                    style={{
                                                        color: Colors.textGrayColor,
                                                    }}
                                                >
                                                    Size
                                                </Typography.Text>

                                                <Radio.Group
                                                    defaultValue="a"
                                                    buttonStyle="solid"
                                                    style={{ gap: "13px" }}
                                                >
                                                    <Flex gap={13}>
                                                        {productData?.sizes?.map(
                                                            (
                                                                size: string,
                                                                key,
                                                            ) => {
                                                                return (
                                                                    <Radio.Button
                                                                        key={
                                                                            key
                                                                        }
                                                                        value={
                                                                            size
                                                                        }
                                                                    >
                                                                        {size}
                                                                    </Radio.Button>
                                                                );
                                                            },
                                                        )}
                                                    </Flex>
                                                </Radio.Group>
                                            </>
                                        )}

                                        <Typography.Text
                                            style={{
                                                color: Colors.textGrayColor,
                                            }}
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
                                                                    colorSelected(
                                                                        color,
                                                                    )
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
                                                    ? productCartItems.quantity
                                                    : 1,
                                            }}
                                            onFinish={addToCart}
                                            // onFinishFailed={onFinishFailed}
                                            autoComplete="off"
                                        >
                                            <Flex
                                                gap={6}
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
                                                        size="middle"
                                                        min={1}
                                                        max={
                                                            productData.quantity
                                                        }
                                                        keyboard={true}
                                                        // defaultValue={1}
                                                        controls={{
                                                            upIcon: (
                                                                <PlusOutlined />
                                                            ),
                                                            downIcon: (
                                                                <MinusOutlined />
                                                            ),
                                                        }}
                                                    />
                                                </Form.Item>

                                                <Button
                                                    htmlType="submit"
                                                    shape="round"
                                                    size="middle"
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
                                                    size="middle"
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
                                                        style={{
                                                            fontSize: "23px",
                                                        }}
                                                    />
                                                    <LinkedinOutlined
                                                        style={{
                                                            fontSize: "23px",
                                                        }}
                                                    />
                                                    <TwitterOutlined
                                                        style={{
                                                            fontSize: "23px",
                                                        }}
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
                                    <Col
                                        // span={6}
                                        xs={{ span: 12 }}
                                        sm={{ span: 12 }}
                                        md={{ span: 8 }}
                                        lg={{ span: 6 }}
                                        xl={{ span: 6 }}
                                        key={key}
                                        style={{ marginBottom: "17px" }}
                                    >
                                        <Link
                                            href={route(
                                                "shop.show",
                                                relatedProd.id,
                                            )}
                                        >
                                            <ProductCard
                                                product={relatedProd}
                                            />
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
                                onClick={() =>
                                    showMoreRelated(productData.id as any)
                                }
                            >
                                Show More
                            </Button>
                        </Flex>
                    </div>
                </>
            )}

            <Footer />
        </Authenticated>
    );
}

export default Show;
