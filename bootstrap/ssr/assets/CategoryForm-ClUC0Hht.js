import { jsxs, jsx } from "react/jsx-runtime";
import { Form, Input, Select, Button } from "antd";
function CategoryForm({ data, onFinish, setData, loading }) {
  return /* @__PURE__ */ jsxs(
    Form,
    {
      layout: "vertical",
      initialValues: data,
      name: "category-form",
      onFinish,
      children: [
        /* @__PURE__ */ jsx(
          Form.Item,
          {
            name: "name",
            label: "Category Name",
            rules: [
              {
                required: true,
                message: "Please input the product name!"
              }
            ],
            children: /* @__PURE__ */ jsx(
              Input,
              {
                onChange: (e) => {
                  setData("name", e.target.value);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Form.Item,
          {
            name: "colors",
            label: "Available Colors",
            rules: [
              {
                required: true,
                message: "Please input the colors!"
              }
            ],
            children: /* @__PURE__ */ jsx(
              Select,
              {
                mode: "tags",
                style: { width: "100%" },
                placeholder: "Add colors",
                onChange: (e) => {
                  e && setData("colors", e);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Form.Item,
          {
            name: "materials",
            label: "Available Materials",
            rules: [
              {
                required: true,
                message: "Please input the materials!"
              }
            ],
            children: /* @__PURE__ */ jsx(
              Select,
              {
                mode: "tags",
                style: { width: "100%" },
                placeholder: "Add materials",
                onChange: (e) => {
                  e && setData("materials", e);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Form.Item,
          {
            name: "sizes",
            label: "Available Sizes",
            rules: [
              {
                required: true,
                message: "Please input the sizes!"
              }
            ],
            children: /* @__PURE__ */ jsx(
              Select,
              {
                mode: "tags",
                style: { width: "100%" },
                placeholder: "Add sizes",
                onChange: (e) => {
                  e && setData("sizes", e);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "primary",
            htmlType: "submit",
            block: true,
            loading,
            style: { borderRadius: "15px" },
            size: "large",
            children: "Submit"
          }
        )
      ]
    }
  );
}
export {
  CategoryForm as default
};
