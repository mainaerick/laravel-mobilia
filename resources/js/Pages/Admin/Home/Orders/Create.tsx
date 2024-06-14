import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import React from "react";

type Props = { auth: any };

function Create({ auth }: Props) {
    return <AuthenticatedAdmin user={auth}>Create</AuthenticatedAdmin>;
}

export default Create;
