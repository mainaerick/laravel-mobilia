import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import { UploadFile, message } from "antd";
import React, { useEffect, useState } from "react";
import ProductForm from "./Components/ProductForm";
import { useForm } from "@inertiajs/react";
import { ProductData } from "@/Core/_Models";

type Props = { auth: any; errors: any };

function Create({ auth, errors }: Props) {
    const [messageApi, contextHolder] = message.useMessage();

    const { data, setData, post, reset } = useForm({
        ...ProductData,
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(errors);
    }, [errors]);
    const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
        const cleanImageArray = fileList
            .map((file) => file.originFileObj)
            .filter(Boolean);

        if (cleanImageArray.length > 0) {
            setData("newimages", cleanImageArray);
        }
    };
    const onFinish = (values: any) => {
        console.log(data);
        post(route("admin.product.store"), {
            onSuccess: () => {
                messageApi.open({
                    type: "success",
                    content: "Product Updated",
                });
            },
            onProgress: () => {
                setLoading(true);
                messageApi.open({
                    type: "loading",
                    content: "Product Updating..",
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
        <AuthenticatedAdmin
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create Product
                </h2>
            }
        >
            {contextHolder}
            <ProductForm
                data={data}
                onFinish={onFinish}
                setData={setData}
                fileList={[]}
                loading={loading}
                handleFileChange={handleFileChange}
            />
        </AuthenticatedAdmin>
    );
}

export default Create;
