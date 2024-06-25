import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import React from "react";
import UpdateUserInformationForm from "./Partials/UpdateUserInformationForm";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";

type Props = {};

export default function Edit({
    user,
    roles,
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{
    user: any;
    roles: [];
    mustVerifyEmail: boolean;
    status?: string;
}>) {
    console.log(mustVerifyEmail, status);
    return (
        <AuthenticatedAdmin
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    User Details
                </h2>
            }
        >
            <Head title="User" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdateUserInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                            user={user}
                            roles={roles}
                        />
                    </div>

                    {/* <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div> */}

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" id={user.id} />
                    </div>
                </div>
            </div>
        </AuthenticatedAdmin>
    );
}
