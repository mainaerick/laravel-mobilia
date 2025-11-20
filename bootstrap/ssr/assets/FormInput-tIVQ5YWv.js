import { jsx } from "react/jsx-runtime";
import { Form, Input } from "antd";
function FormInput({ name, label, type, required }) {
  return /* @__PURE__ */ jsx(Form.Item, { name, label, rules: [{ required }], children: /* @__PURE__ */ jsx(Input, { style: { marginTop: "13px", borderRadius: "9px" }, size: "large" }) });
}
export {
  FormInput as default
};
