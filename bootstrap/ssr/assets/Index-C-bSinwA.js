import { jsx } from "react/jsx-runtime";
import { A as AuthenticatedAdmin } from "./AdminLayout-BTxGKBRd.js";
import "react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-CMrbbniR.js";
import "@inertiajs/react";
import "@headlessui/react";
import "@ant-design/icons";
import "../app.js";
import "axios";
import "react-dom/client";
import "antd";
function Index({ auth }) {
  console.log(auth);
  return /* @__PURE__ */ jsx(AuthenticatedAdmin, { user: auth, children: "Index" });
}
export {
  Index as default
};
