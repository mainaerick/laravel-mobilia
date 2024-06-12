import { Category } from "@/Core/_Models";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import React, { useState } from "react";
import CategoryForm from "./Components/CategoryForm";
import { useForm } from "@inertiajs/react";
import { message } from "antd";

type Props = { auth: any; category: any };

function Show({ auth, category }: Props) {
    const categorydata = category.data as Category;
    const [messageApi, contextHolder] = message.useMessage();

    const [loading, setLoading] = useState(false);
    const { data, setData, post, errors, reset } = useForm({
        ...categorydata,
        _method: "PUT",
    });
    // console.log(category);
    const onFinish = (values: any) => {
        console.log(data);
        post(route("admin.category.update", { id: data.id }), {
            onSuccess: () => {
                messageApi.open({
                    type: "success",
                    content: "Category Updated",
                });
            },
            onProgress: () => {
                setLoading(true);
                messageApi.open({
                    type: "loading",
                    content: "Category Updating...",
                });
            },
            onError: () => {
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
        <AuthenticatedAdmin user={auth}>
            {contextHolder}
            <CategoryForm
                data={data}
                onFinish={onFinish}
                setData={setData}
                loading={false}
            />
        </AuthenticatedAdmin>
    );
}

export default Show;
