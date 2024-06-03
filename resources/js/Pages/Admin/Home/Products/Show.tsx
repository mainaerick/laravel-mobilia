import { Product } from "@/Core/_Models";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import React from "react";

type Props = { auth: any; product: { data: Product } };

function Show({ auth, product }: Props) {

  
    return <AuthenticatedAdmin user={auth}>Show</AuthenticatedAdmin>;
}

export default Show;
