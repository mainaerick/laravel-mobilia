import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import React from "react";

type Props = { auth: any };

function Create({ auth }: Props) {
    return (
        <AuthenticatedAdmin
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create Order
                </h2>
            }
        >
            Create
        </AuthenticatedAdmin>
    );
}

export default Create;
