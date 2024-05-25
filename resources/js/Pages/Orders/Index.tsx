import Hero from "@/Components/Hero";
import { CartItem, Order, OrderItem, Product } from "@/Core/_Models";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Colors, Dimensions } from "@/utils/Config";
import {
    Button,
    Col,
    ConfigProvider,
    Flex,
    Row,
    Space,
    Table,
    TableProps,
    Typography,
    message,
    Image,
} from "antd";
import ShopInfo from "@/Components/ShopInfo";
import { Link } from "react-alice-carousel";
import { useEffect, useState } from "react";
import { DeleteFilled } from "@ant-design/icons";
import { router, usePage } from "@inertiajs/react";
import Footer from "@/Components/Footer";

type Props = { auth: any; orders: any; success: any };

function Index({ auth, orders, success }: Props) {
    const { props } = usePage();

    orders = orders.data;
    const items = orders as Order[];
    console.log(props);
    const [subTotal, setSubTotal] = useState<string>("0");
    useEffect(() => {
        if (success) {
            message.success("Order created", 2.5);
        }
    }, [success]);
    const handleRemoveItem = (id: number) => {
        router.delete(route("cart.removeItem", id), {
            onSuccess: () => {
                // Optionally, you can handle success actions like showing a notification
                console.log("Item removed successfully");
            },
        });
    };
    const columns: TableProps<Order>["columns"] = [
        {
            title: "Total Amount",
            dataIndex: "total_amount",
            key: "total_amount",
            render: (total_amount: string) => (
                <Typography.Text>{total_amount}</Typography.Text>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: string) => (
                <Typography.Text>{status}</Typography.Text>
            ),
        },
        {
            title: "Shipping Address",
            dataIndex: "shipping_address",
            key: "shipping_address",
            render: (shipping_address: string) => (
                <Typography.Text>{shipping_address}</Typography.Text>
            ),
        },
        {
            title: "Billing Address",
            dataIndex: "billing_address",
            key: "billing_address",
            render: (billing_address: string | null) => (
                <Typography.Text>
                    {billing_address ? billing_address : "N/A"}
                </Typography.Text>
            ),
        },
        {
            title: "Payment Method",
            dataIndex: "payment_method",
            key: "payment_method",
            render: (payment_method: string) => (
                <Typography.Text>{payment_method}</Typography.Text>
            ),
        },
        {
            title: "Payment Status",
            dataIndex: "payment_status",
            key: "payment_status",
            render: (payment_status: string) => (
                <Typography.Text>{payment_status}</Typography.Text>
            ),
        },
        {
            title: "Shipping Method",
            dataIndex: "shipping_method",
            key: "shipping_method",
            render: (shipping_method: string | null) => (
                <Typography.Text>
                    {shipping_method ? shipping_method : "N/A"}
                </Typography.Text>
            ),
        },
        {
            title: "Shipping Cost",
            dataIndex: "shipping_cost",
            key: "shipping_cost",
            render: (shipping_cost: string) => (
                <Typography.Text>{shipping_cost}</Typography.Text>
            ),
        },
        {
            title: "Notes",
            dataIndex: "notes",
            key: "notes",
            render: (notes: string | null) => (
                <Typography.Text>{notes ? notes : "N/A"}</Typography.Text>
            ),
        },
    ];
    return (
        <Authenticated user={auth.user}>
            <Hero whichRoute={"Shop>Orders"} title={"Orders"} />

            <div
                className={Dimensions.pagePaddingClass}
                style={{ marginTop: "48px", marginBottom: "48px" }}
            >
                <Row gutter={16}>
                    <Col span={24}>
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
                </Row>
            </div>

            <ShopInfo />
            <Footer />
        </Authenticated>
    );
}

export default Index;
