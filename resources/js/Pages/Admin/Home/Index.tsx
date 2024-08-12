import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import React from "react";

type Props = { auth: any };

function Index({ auth }: Props) {
  console.log(auth)
    return <AuthenticatedAdmin user={auth}>Index</AuthenticatedAdmin>;
}
export default Index;
