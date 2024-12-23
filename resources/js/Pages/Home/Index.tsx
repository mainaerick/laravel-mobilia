import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Product } from "@/Core/_Models";
import { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeDetails from "./HomeDetails";
interface Props {
    auth: any;
    products: Product[];
    settings:any
}

const Index: React.FC<Props> = ({ auth, products,settings}) => {

    return (

        <Authenticated user={auth.user}>
            <HomeDetails products={products}  settings={settings}/>

        </Authenticated>

    );
};

export default Index;
