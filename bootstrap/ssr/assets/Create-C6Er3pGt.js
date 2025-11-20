import { jsxs, jsx } from "react/jsx-runtime";
import { useForm } from "@inertiajs/react";
import { message, Form, Upload, Button, ColorPicker } from "antd";
import { A as AuthenticatedAdmin } from "./AdminLayout-BT-KCncJ.js";
import "react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@headlessui/react";
import "@ant-design/icons";
import "../app.js";
import "axios";
import "react-dom/client";
const Create = ({ auth, settings, success }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { data, setData, post, errors } = useForm({
    hero_image: null,
    logo: null,
    living: null,
    dining: null,
    bedroom: null,
    primary_color: settings.primary_color || "#ffffff",
    secondary_color: settings.secondary_color || "#000000"
  });
  const handleSubmit = (value) => {
    console.log(value);
    post(route("admin.settings.update"), {
      onSuccess: () => {
        messageApi.open({
          type: "success",
          content: "Product Updated"
        });
      },
      onError: (e) => {
        console.log(e);
        messageApi.open({
          type: "error",
          content: "An error occurred " + e.hero_image + " " + e.logo
        });
      }
    });
  };
  return /* @__PURE__ */ jsxs(
    AuthenticatedAdmin,
    {
      user: auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Configure App" }),
      children: [
        contextHolder,
        /* @__PURE__ */ jsxs(Form, { layout: "vertical", onFinish: handleSubmit, children: [
          /* @__PURE__ */ jsx(Form.Item, { label: "Hero Image", children: /* @__PURE__ */ jsx(
            Upload,
            {
              beforeUpload: (file) => {
                setData("hero_image", file);
                return false;
              },
              children: /* @__PURE__ */ jsx(Button, { children: "Upload Hero Image" })
            }
          ) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "Logo", children: /* @__PURE__ */ jsx(
            Upload,
            {
              beforeUpload: (file) => {
                setData("logo", file);
                return false;
              },
              children: /* @__PURE__ */ jsx(Button, { children: "Upload Logo" })
            }
          ) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "Dining", children: /* @__PURE__ */ jsx(
            Upload,
            {
              beforeUpload: (file) => {
                setData("dining", file);
                return false;
              },
              children: /* @__PURE__ */ jsx(Button, { children: "Upload Dining" })
            }
          ) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "Bedroom", children: /* @__PURE__ */ jsx(
            Upload,
            {
              beforeUpload: (file) => {
                setData("bedroom", file);
                return false;
              },
              children: /* @__PURE__ */ jsx(Button, { children: "Upload Bedroom" })
            }
          ) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "Living", children: /* @__PURE__ */ jsx(
            Upload,
            {
              beforeUpload: (file) => {
                setData("living", file);
                return false;
              },
              children: /* @__PURE__ */ jsx(Button, { children: "Upload Living" })
            }
          ) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "Primary Color", children: /* @__PURE__ */ jsx(
            ColorPicker,
            {
              value: data.primary_color,
              onChange: (value) => setData("primary_color", value.toHexString())
            }
          ) }),
          /* @__PURE__ */ jsx(Form.Item, { label: "Secondary Color", children: /* @__PURE__ */ jsx(
            ColorPicker,
            {
              value: data.secondary_color,
              onChange: (value) => setData("secondary_color", value.toHexString())
            }
          ) }),
          settings.inspiration_images && JSON.parse(settings.inspiration_images).map((img, index) => /* @__PURE__ */ jsx("div", { style: { marginBottom: "10px" }, children: /* @__PURE__ */ jsx(
            "img",
            {
              src: `${img}`,
              alt: `Inspiration ${index + 1}`,
              style: { maxWidth: "150px", marginRight: "10px" }
            }
          ) }, index)),
          /* @__PURE__ */ jsx(
            Upload,
            {
              listType: "picture",
              multiple: true,
              beforeUpload: (file) => {
                const files = data.inspiration_images || [];
                setData("inspiration_images", [...files, file]);
                return false;
              },
              children: /* @__PURE__ */ jsx(Button, { children: "Add Inspiration Images" })
            }
          ),
          /* @__PURE__ */ jsx(Form.Item, { children: /* @__PURE__ */ jsx(Button, { type: "primary", htmlType: "submit", children: "Save Settings" }) })
        ] })
      ]
    }
  );
};
export {
  Create as default
};
