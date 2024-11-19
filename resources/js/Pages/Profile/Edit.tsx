import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import {Head, usePage} from '@inertiajs/react';
import { PageProps } from '@/types';
import type { MenuProps } from 'antd';
import {Col, Form, Menu, Row} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {useState} from "react";
import {Dimensions} from "@/utils/Config";
import ShopInfo from "@/Components/ShopInfo";
import {CartItem, Order, OrderItem} from "@/Core/_Models";
import OrdersTable from "@/Pages/Orders/Components/OrdersTable";
import CheckoutForm from "@/Pages/Checkout/Components/CheckoutForm";
type MenuItem = Required<MenuProps>['items'][number];

const navitems: MenuItem[] = [
    {
        label: 'Account',
        key: 'account',
        icon: <MailOutlined />,
    },
    {
        label: 'Orders',
        key: 'orders',
        icon: <MailOutlined />,
    },
]
export default function Edit({ auth, mustVerifyEmail,orders, status }: PageProps<{auth:any, mustVerifyEmail: boolean, status?: string }>) {
    const [current, setCurrent] = useState('account');
    const [currentOrder, setCurrentOrder] = useState<Order>();
    const [cartItems, setCartItems]: CartItem[] | any = useState();
    const [form] = Form.useForm();
    orders = orders.data;
    const items = orders as Order[];

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };
    const setClickedOrder = (orderId:number)=>{
        let cartItems_: CartItem[] = [];
       const order =  items.find((item:Order)=>item.id===orderId)
        order?.items.map((item: OrderItem, key: number) => {
            const cartItem: CartItem = {
                id: key,
                cart_id: auth.user.cart.id,
                product_id: item.productId,
                quantity: item.quantity,
                product: {
                    name: item.name,
                    description: "",
                    price: item.price,
                    quantity: 0,
                    category: "",
                    room: "",
                    brand: "",
                    material: "",
                    color: "",
                    dimensions: { depth: 0, width: 0, height: 0 },
                    weight: "",
                    images: [],
                    rating: 0,
                    reviews: [],
                    colors: [],
                    sizes: [],
                },
                created_at: "",
                updated_at: "",
            };

            cartItems_.push(cartItem);
        });
        // cartItems_.splice()
        setCartItems(cartItems_);
        setCurrentOrder(order)
    }
    const deleteOrderItem = (item: CartItem) => {
        const newCartItems = cartItems.filter(
            (item_: CartItem) => item_ !== item,
        );

        setCartItems(newCartItems);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Profile</h2>}
        >
            <Head title="Account" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={navitems} />
                    {current === "orders" ? <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <div
                            className={Dimensions.pagePaddingClass}
                            style={{marginTop: "48px", marginBottom: "48px"}}
                        >
                            <Row gutter={16}>
                                <Col span={24}>

                                     <OrdersTable items={items} pagination={false}   setClickedOrder={setClickedOrder}/>
                                    {currentOrder  && <CheckoutForm form={form} orderDetails={currentOrder} items={cartItems} errors={{}} deleteOrderItems={deleteOrderItem}/>}
                                </Col>
                            </Row>
                        </div>

                    </div> : <div>
                        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <UpdatePasswordForm className="max-w-xl"/>
                        </div>

                        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <DeleteUserForm className="max-w-xl"/>
                        </div>
                    </div>}


                </div>
            </div>
        </AuthenticatedLayout>
    );
}
