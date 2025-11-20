import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedAdmin } from "./AdminLayout-BT-KCncJ.js";
import { useState } from "react";
import CategoryForm from "./CategoryForm-ClUC0Hht.js";
import { C as CategoryData } from "./_Models-D7LNJOvB.js";
import { useForm } from "@inertiajs/react";
import { message } from "antd";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@headlessui/react";
import "@ant-design/icons";
import "../app.js";
import "axios";
import "react-dom/client";
function Create({ auth }) {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const { data, setData, post, reset } = useForm({
    ...CategoryData
  });
  const onFinish = (values) => {
    console.log(data);
    post(route("admin.category.store"), {
      onSuccess: () => {
        reset();
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
  return /* @__PURE__ */ jsxs(
    AuthenticatedAdmin,
    {
      user: auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Create Category" }),
      children: [
        contextHolder,
        /* @__PURE__ */ jsx(
          CategoryForm,
          {
            data,
            onFinish,
            setData,
            loading
          }
        ),
        " "
      ]
    }
  );
}
export {
  Create as default
};
