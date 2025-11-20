import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedAdmin } from "./AdminLayout-BT-KCncJ.js";
import { message } from "antd";
import { useState, useEffect } from "react";
import ProductForm from "./ProductForm-DcOdaWXD.js";
import { useForm } from "@inertiajs/react";
import { P as ProductData } from "./_Models-D7LNJOvB.js";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@headlessui/react";
import "@ant-design/icons";
import "../app.js";
import "axios";
import "react-dom/client";
import "antd/es/input/TextArea.js";
function Create({ auth, errors }) {
  const [messageApi, contextHolder] = message.useMessage();
  const { data, setData, post, reset } = useForm({
    ...ProductData
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const handleFileChange = ({ fileList }) => {
    const cleanImageArray = fileList.map((file) => file.originFileObj).filter(Boolean);
    if (cleanImageArray.length > 0) {
      setData("newimages", cleanImageArray);
    }
  };
  const onFinish = (values) => {
    console.log(values);
    post(route("admin.product.store"), {
      onSuccess: () => {
        messageApi.open({
          type: "success",
          content: "Product Created"
        });
      },
      onProgress: () => {
        setLoading(true);
        messageApi.open({
          type: "loading",
          content: "Creating Product.."
        });
      },
      onError: () => {
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
  return /* @__PURE__ */ jsxs(
    AuthenticatedAdmin,
    {
      user: auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Create Product" }),
      children: [
        contextHolder,
        /* @__PURE__ */ jsx(
          ProductForm,
          {
            data,
            onFinish,
            setData,
            fileList: [],
            loading,
            handleFileChange
          }
        )
      ]
    }
  );
}
export {
  Create as default
};
