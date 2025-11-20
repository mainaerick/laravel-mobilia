import { jsxs, jsx } from "react/jsx-runtime";
import { Flex, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
function TableAction({ deleteFunc, editFunc }) {
  return /* @__PURE__ */ jsxs(Flex, { gap: 17, children: [
    /* @__PURE__ */ jsx(Typography.Link, { children: /* @__PURE__ */ jsx(
      EditOutlined,
      {
        style: { fontSize: 18 },
        onClick: editFunc
      }
    ) }),
    /* @__PURE__ */ jsx(Typography.Link, { children: /* @__PURE__ */ jsx(
      DeleteOutlined,
      {
        style: { color: "red", fontSize: 18 },
        onClick: deleteFunc
      }
    ) })
  ] });
}
export {
  TableAction as T
};
