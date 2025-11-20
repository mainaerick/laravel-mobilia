import { jsx, jsxs } from "react/jsx-runtime";
import { Form, Row, Col, Input, InputNumber, Upload, Button, Select } from "antd";
import TextArea from "antd/es/input/TextArea.js";
import { UploadOutlined } from "@ant-design/icons";
function ProductForm({
  data,
  onFinish,
  setData,
  fileList,
  loading,
  handleFileChange
}) {
  const handleDimensionChange = (field, value) => {
    setData("dimensions", {
      ...data.dimensions,
      [field]: value
    });
  };
  return /* @__PURE__ */ jsx(
    Form,
    {
      layout: "vertical",
      initialValues: data,
      name: "product-form",
      onFinish,
      children: /* @__PURE__ */ jsxs(Row, { gutter: 16, children: [
        /* @__PURE__ */ jsxs(Col, { xs: 24, sm: 24, md: 12, lg: 12, xl: 12, children: [
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "name",
              label: "Product Name",
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
              name: "description",
              label: "Description",
              rules: [
                {
                  required: true,
                  message: "Please input the product description!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                TextArea,
                {
                  rows: 4,
                  onChange: (e) => {
                    setData("description", e.target.value);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "price",
              label: "Price",
              rules: [
                {
                  required: true,
                  message: "Please input the price!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                InputNumber,
                {
                  onChange: (e) => {
                    e && setData("price", e.toString());
                  },
                  style: { width: "100%" }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "quantity",
              label: "Quantity",
              rules: [
                {
                  required: true,
                  message: "Please input the quantity!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                InputNumber,
                {
                  style: { width: "100%" },
                  onChange: (e) => {
                    e && setData(
                      "quantity",
                      Number.parseInt(e.toString())
                    );
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "category",
              label: "Category",
              rules: [
                {
                  required: true,
                  message: "Please input the category!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                Input,
                {
                  onChange: (e) => {
                    setData("category", e.target.value);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "brand",
              label: "Brand",
              rules: [
                {
                  required: true,
                  message: "Please input the brand!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                Input,
                {
                  onChange: (e) => {
                    setData("brand", e.target.value);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "material",
              label: "Material",
              rules: [
                {
                  required: true,
                  message: "Please input the material!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                Input,
                {
                  onChange: (e) => {
                    setData("material", e.target.value);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "color",
              label: "Color",
              rules: [
                {
                  required: true,
                  message: "Please input the color!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                Input,
                {
                  onChange: (e) => {
                    setData("color", e.target.value);
                  }
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Col, { xs: 24, sm: 24, md: 12, lg: 12, xl: 12, children: [
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: ["dimensions", "depth"],
              label: "Depth",
              rules: [
                {
                  required: true,
                  message: "Please input the depth!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                InputNumber,
                {
                  onChange: (e) => {
                    handleDimensionChange("depth", e);
                  },
                  style: { width: "100%" }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: ["dimensions", "width"],
              label: "Width",
              rules: [
                {
                  required: true,
                  message: "Please input the width!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                InputNumber,
                {
                  onChange: (e) => {
                    handleDimensionChange("width", e);
                  },
                  style: { width: "100%" }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: ["dimensions", "height"],
              label: "Height",
              rules: [
                {
                  required: true,
                  message: "Please input the height!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                InputNumber,
                {
                  onChange: (e) => {
                    handleDimensionChange("height", e);
                  },
                  style: { width: "100%" }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "weight",
              label: "Weight",
              rules: [
                {
                  required: true,
                  message: "Please input the weight!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                Input,
                {
                  onChange: (e) => {
                    setData("weight", e.target.value);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "images",
              label: "Images",
              style: { maxHeight: 300, overflow: "auto" },
              rules: [
                {
                  required: true,
                  message: "Please upload the images!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                Upload,
                {
                  listType: "picture",
                  beforeUpload: () => false,
                  multiple: true,
                  fileList,
                  onChange: handleFileChange,
                  children: /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(UploadOutlined, {}), children: "Upload Images" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "rating",
              label: "Rating",
              rules: [
                {
                  required: true,
                  message: "Please input the rating!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                InputNumber,
                {
                  style: { width: "100%" },
                  min: 0,
                  max: 5,
                  step: 0.01,
                  onChange: (e) => {
                    e && setData("rating", e.toString());
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "reviews",
              label: "Reviews",
              rules: [
                {
                  required: true,
                  message: "Please input the reviews!"
                }
              ],
              children: /* @__PURE__ */ jsx(
                Select,
                {
                  mode: "tags",
                  style: { width: "100%" },
                  placeholder: "Add reviews",
                  onChange: (e) => {
                    e && setData("reviews", e);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Item,
            {
              name: "sizes",
              label: "Sizes",
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
            Form.Item,
            {
              name: "colors",
              label: "Colors",
              rules: [
                {
                  required: true,
                  message: "Please input the available colors!"
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
        ] })
      ] })
    }
  );
}
export {
  ProductForm as default
};
