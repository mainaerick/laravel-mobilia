import { Product } from "@/Core/_Models";
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
import React, { useEffect, useState } from "react";
import {
    Form,
    Input,
    Button,
    Row,
    Col,
    Typography,
    Table,
    Radio,
    Select,
    InputNumber,
    Upload,
    UploadFile,
    message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { router, useForm } from "@inertiajs/react";
import ProductForm from "./Components/ProductForm";

type Props = { auth: any; product: { data: Product }; errors: any };

function Show({ auth, product }: Props) {
    const productdata = product.data as Product;
    const [messageApi, contextHolder] = message.useMessage();

    const [loading, setLoading] = useState(false);


    const { data, setData, post, errors, reset } = useForm({
        ...productdata,
        _method: "PUT",
    });
    const [fileList, setFileList] = useState<UploadFile[]>([

    ]);
    useEffect(() => {
        const images: UploadFile[] = [];
        data.images.map((image: string, key: number) => {
            const newImage = "/" + image;

            images.push({
                uid: key.toString(),
                name: image,
                status: "done",
                url: newImage,
                thumbUrl: newImage,
            });
        });
        setFileList(images);
    }, [data]);

    const onFinish = (values: any) => {
        post(route("admin.product.update", { id: data.id }), {
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
            onError: (e) => {
                console .log(e)
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
    // const handleDimensionChange = (field: string, value: any) => {
    //     setData("dimensions", {
    //         ...data.dimensions,
    //         [field]: value,
    //     });
    // };
    const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
        const cleanImageArray = fileList
            .map((file) => file.originFileObj)
            .filter(Boolean);
        const stringImagesArray: any = fileList
            .map((file) => !file.originFileObj && file.name)
            .filter(Boolean);

        // setData("images",stringImagesArray)
        if (stringImagesArray.length > 0) {
            setData("images", stringImagesArray);
        }
        if (stringImagesArray.length<=0){
            console.log("old images is 0")
            setData("images", []);
        }
        if (cleanImageArray.length > 0) {
            setData("newimages", cleanImageArray);
        }
    };
    return (
        <AuthenticatedAdmin
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Product
                </h2>
            }
        >
            {contextHolder}
            {
                <ProductForm
                data={data}
                onFinish={onFinish}
                setData={setData}
                fileList={fileList}
                loading={loading}
                handleFileChange={handleFileChange}
            />}
        </AuthenticatedAdmin>
    );
}

export default Show;
