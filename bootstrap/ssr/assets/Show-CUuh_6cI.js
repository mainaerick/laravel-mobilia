import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedAdmin } from "./AdminLayout-BT-KCncJ.js";
import { useState, useEffect } from "react";
import { message } from "antd";
import { useForm } from "@inertiajs/react";
import ProductForm from "./ProductForm-DcOdaWXD.js";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@headlessui/react";
import "@ant-design/icons";
import "../app.js";
import "axios";
import "react-dom/client";
import "antd/es/input/TextArea.js";
function Show({ auth, product }) {
  const productdata = product.data;
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const { data, setData, post, errors, reset } = useForm({
    ...productdata,
    _method: "PUT"
  });
  const [fileList, setFileList] = useState([]);
  useEffect(() => {
    const images = [];
    data.images.map((image, key) => {
      const newImage = "/" + image;
      images.push({
        uid: key.toString(),
        name: image,
        status: "done",
        url: newImage,
        thumbUrl: newImage
      });
    });
    setFileList(images);
  }, [data]);
  const onFinish = (values) => {
    post(route("admin.product.update", { id: data.id }), {
      onSuccess: () => {
        messageApi.open({
          type: "success",
          content: "Product Updated"
        });
      },
      onProgress: () => {
        setLoading(true);
        messageApi.open({
          type: "loading",
          content: "Product Updating.."
        });
      },
      onError: (e) => {
        console.log(e);
        messageApi.open({
          type: "error",
          content: "An error occurred"
        });
      },
      onFinish: () => {
        setLoading(false);
      }
    });
  };
  const handleFileChange = ({ fileList: fileList2 }) => {
    const cleanImageArray = fileList2.map((file) => file.originFileObj).filter(Boolean);
    const stringImagesArray = fileList2.map((file) => !file.originFileObj && file.name).filter(Boolean);
    if (stringImagesArray.length > 0) {
      setData("images", stringImagesArray);
    }
    if (stringImagesArray.length <= 0) {
      console.log("old images is 0");
      setData("images", []);
    }
    if (cleanImageArray.length > 0) {
      setData("newimages", cleanImageArray);
    }
  };
  return /* @__PURE__ */ jsxs(
    AuthenticatedAdmin,
    {
      user: auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Product" }),
      children: [
        contextHolder,
        /* @__PURE__ */ jsx(
          ProductForm,
          {
            data,
            onFinish,
            setData,
            fileList,
            loading,
            handleFileChange
          }
        )
      ]
    }
  );
}
export {
  Show as default
};
