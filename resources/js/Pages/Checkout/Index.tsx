import Hero from "@/Components/Hero";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Dimensions } from "@/utils/Config";
import {
    Button,
    Col,
    Flex,
    Form,
    Input,
    Radio,
    Row,
    Table,
    TableProps,
    Typography,
    message,
} from "antd";
import React, { useEffect, useState } from "react";
import FormInput from "./Components/FormInput";
import { router, useForm, usePage } from "@inertiajs/react";
import { CartItem, InitialOrder, Order, Product } from "@/Core/_Models";
import CheckoutForm from "./Components/CheckoutForm";

type Props = { auth: any; errors: any };

function Index({ auth, errors }: Props) {
    const [form] = Form.useForm();
    const { props } = usePage();
    const items = props?.cartItems as CartItem[];

    return (
        <Authenticated user={auth}>
            <Hero whichRoute={"Shop>Checkout"} title={"Checkout"} />

            <div
                className={Dimensions.pagePaddingClass}
                style={{ marginTop: "48px", marginBottom: "48px" }}
            >
                <Flex vertical>
                    <Typography.Title level={3}>
                        Billing details
                    </Typography.Title>

                    <CheckoutForm
                        form={form}
                        items={items}
                        errors={errors}
                        orderDetails={InitialOrder}
                        deleteOrderItems={function (item: CartItem): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                </Flex>
            </div>
        </Authenticated>
    );
}

export default Index;
