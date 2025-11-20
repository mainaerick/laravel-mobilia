import { jsx, jsxs } from "react/jsx-runtime";
import { D as Dimensions } from "../app.js";
import { Typography } from "antd";
import "axios";
import "react-dom/client";
import "@inertiajs/react";
function Description({ description }) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { style: {
    maxHeight: 400,
    overflow: "auto",
    padding: "0 16px"
  }, className: Dimensions.pagePaddingClass, children: [
    " ",
    /* @__PURE__ */ jsx(Typography.Paragraph, { children: description })
  ] }) });
}
export {
  Description as default
};
