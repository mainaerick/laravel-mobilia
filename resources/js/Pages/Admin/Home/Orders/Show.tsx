import { CartItem, Order, OrderItem } from "@/Core/_Models";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import CheckoutForm from "@/Pages/Checkout/Components/CheckoutForm";
import { usePage } from "@inertiajs/react";
import { Form } from "antd";
import React, { useEffect, useState } from "react";

type Props = { auth: any; order: any; items: CartItem[]; errors: any };

function Show({ auth, order, items, errors }: Props) {
    const [form] = Form.useForm();
    const [cartItems, setCartItems]: CartItem[] | any = useState();

    order = order.data as Order;

    useEffect(() => {
        let cartItems_: CartItem[] = [];

        order.items.map((item: OrderItem, key: number) => {
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
    }, [order.items]);

    const deleteOrderItem = (item: CartItem) => {
        const newCartItems = cartItems.filter(
            (item_: CartItem) => item_ !== item,
        );

        setCartItems(newCartItems);
    };
    return (
        <AuthenticatedAdmin user={auth}>
            {" "}
            {cartItems && (
                <CheckoutForm
                    form={form}
                    items={cartItems}
                    errors={errors}
                    orderDetails={order}
                    deleteOrderItems={deleteOrderItem}
                />
            )}
        </AuthenticatedAdmin>
    );
}

export default Show;
