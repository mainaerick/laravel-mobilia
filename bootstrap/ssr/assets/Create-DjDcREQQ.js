import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-DQL-42yE.js";
import { I as InputLabel } from "./InputLabel-CaoVq05r.js";
import { P as PrimaryButton } from "./PrimaryButton-C5ts3FGL.js";
import { A as AuthenticatedAdmin } from "./AdminLayout-BTxGKBRd.js";
import { useForm, Head } from "@inertiajs/react";
import { useEffect } from "react";
import "./ApplicationLogo-DwGw9LaR.js";
import "./ResponsiveNavLink-CMrbbniR.js";
import "@headlessui/react";
import "@ant-design/icons";
import "../app.js";
import "axios";
import "react-dom/client";
import "antd";
function Create({ auth }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("admin.user.store"));
  };
  return /* @__PURE__ */ jsxs(
    AuthenticatedAdmin,
    {
      user: auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Create User" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Create User" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Name" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "name",
                name: "name",
                value: data.name,
                className: "mt-1 block w-full",
                autoComplete: "name",
                isFocused: true,
                onChange: (e) => setData("name", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "email",
                type: "email",
                name: "email",
                value: data.email,
                className: "mt-1 block w-full",
                autoComplete: "username",
                onChange: (e) => setData("email", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "password",
                type: "password",
                name: "password",
                value: data.password,
                className: "mt-1 block w-full",
                autoComplete: "new-password",
                onChange: (e) => setData("password", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "password_confirmation",
                value: "Confirm Password"
              }
            ),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "password_confirmation",
                type: "password",
                name: "password_confirmation",
                value: data.password_confirmation,
                className: "mt-1 block w-full",
                autoComplete: "new-password",
                onChange: (e) => setData("password_confirmation", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password_confirmation,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Submit" }) })
        ] })
      ]
    }
  );
}
export {
  Create as default
};
