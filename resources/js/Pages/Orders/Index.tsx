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
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { router, usePage } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import OrdersTable from "@/Pages/Orders/Components/OrdersTable";

type Props = { auth: any; orders: any; success: any };

function Index({ auth, orders, success }: Props) {
    const { props } = usePage();

    orders = orders.data;
    const items = orders as Order[];
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

    return (
        <Authenticated user={auth.user}>
            <Hero whichRoute={"Shop>Orders"} title={"Orders"} />

            <div
                className={Dimensions.pagePaddingClass}
                style={{ marginTop: "48px", marginBottom: "48px" }}
            >
                <Row gutter={16}>
                    <Col span={24}>
                         <OrdersTable auth={auth} items={items} pagination={false}  setClickedOrder={null}/>
                    </Col>
                </Row>
            </div>

            <ShopInfo />
            <Footer />
        </Authenticated>
    );
}

export default Index;
