import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import React, { useState } from "react";
import CategoryForm from "./Components/CategoryForm";
import { Category, CategoryData } from "@/Core/_Models";
import { useForm } from "@inertiajs/react";
import { message } from "antd";

type Props = { auth: any };

function Create({ auth }: Props) {
    const [messageApi, contextHolder] = message.useMessage();

    const [loading, setLoading] = useState(false);

    const { data, setData, post, reset } = useForm({
        ...CategoryData,
    });

    const onFinish = (values: any) => {
        console.log(data);
        post(route("admin.category.store"), {
            onSuccess: () => {
                reset();
                messageApi.open({
                    type: "success",
                    content: "Product Created",
                });
            },
            onProgress: () => {
                setLoading(true);
                messageApi.open({
                    type: "loading",
                    content: "Creating Product..",
                });
            },
            onError: (e) => {
                console.log(e);
                messageApi.open({
                    type: "error",
                    content: "An error occurred",
                });
            },
            onFinish: () => {
                setLoading(false);
            },
        });
    };
    return (
        <AuthenticatedAdmin
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create Category
                </h2>
            }
        >
            {contextHolder}
            {
                <CategoryForm
                    data={data}
                    onFinish={onFinish}
                    setData={setData}
                    loading={loading}
                />
            }{" "}
        </AuthenticatedAdmin>
    );
}

export default Create;
