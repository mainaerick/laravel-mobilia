import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Product } from "@/Core/_Models";
import { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeDetails from "./HomeDetails";
interface Props {
    auth: any;
    products: Product[];
}

const Index: React.FC<Props> = ({ auth, products }) => {

    return (

        <Authenticated user={auth.user}>
            <HomeDetails products={products} />

        </Authenticated>

    );
};

export default Index;
