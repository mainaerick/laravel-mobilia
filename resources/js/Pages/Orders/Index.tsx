import { Order } from "@/Core/_Models";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

type Props = { auth: any; orders: Order[] };

function Index({ auth, orders }: Props) {
    console.log(orders)
    return (
        <Authenticated user={auth}>
            {/* <ul>
                {orders?.map((order) => {
                    return <li>{order.firstname}</li>;
                })}
            </ul> */}
        </Authenticated>
    );
}

export default Index;
