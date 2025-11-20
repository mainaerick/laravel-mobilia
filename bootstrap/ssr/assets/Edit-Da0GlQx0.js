import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import UpdateProfileInformation from "./UpdateUserInformationForm-DpZiF0Bv.js";
import { A as AuthenticatedAdmin } from "./AdminLayout-BT-KCncJ.js";
import DeleteUserForm from "./DeleteUserForm-DSmiwC1M.js";
import "./TextInput-DQL-42yE.js";
import "react";
import "./InputLabel-CaoVq05r.js";
import "./PrimaryButton-C5ts3FGL.js";
import "@headlessui/react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-BF_L6EzO.js";
import "@ant-design/icons";
import "../app.js";
import "axios";
import "react-dom/client";
import "antd";
import "./SecondaryButton-DFfgLaPF.js";
function Edit({
  user,
  roles,
  auth,
  mustVerifyEmail,
  status
}) {
  console.log(mustVerifyEmail, status);
  return /* @__PURE__ */ jsxs(
    AuthenticatedAdmin,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "User Details" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "User" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl",
              user,
              roles
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl", id: user.id }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
