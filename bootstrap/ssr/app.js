import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const Colors = {
  primary: "#B88E2F",
  secondary: "#F9F1E7",
  secondaryLightColor: "#FCF8F3",
  cardInfoBgColor: "#FFF3E3",
  textTitleColor: "#3A3A3A",
  buttonBgColor: "#FFFFFF",
  textSubtitleColor: "#666666",
  textWhiteColor: "#FFFFFF",
  textGrayColor: "#898989",
  textBlackColor: "#000",
  textButtonColor: "#B88E2F",
  cardDescriptionBgColor: "#F4F5F7"
};
const Dimensions = {
  pagePaddingClass: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
};
const appName = "Mobilia";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/Admin/Home/Categories/Components/CategoryForm.tsx": () => import("./assets/CategoryForm-ClUC0Hht.js"), "./Pages/Admin/Home/Categories/Create.tsx": () => import("./assets/Create-CwyBwqgz.js"), "./Pages/Admin/Home/Categories/Index.tsx": () => import("./assets/Index-2G9Di2iO.js"), "./Pages/Admin/Home/Categories/Show.tsx": () => import("./assets/Show-DfjMx0Qq.js"), "./Pages/Admin/Home/Index.tsx": () => import("./assets/Index-DkWK1lpo.js"), "./Pages/Admin/Home/Orders/Components/OrderForm.tsx": () => import("./assets/AdminSettingForm-BS76lhTM.js").then((n) => n.O), "./Pages/Admin/Home/Orders/Create.tsx": () => import("./assets/Create-BlsvQBD5.js"), "./Pages/Admin/Home/Orders/Index.tsx": () => import("./assets/Index-yg98KfBG.js"), "./Pages/Admin/Home/Orders/Show.tsx": () => import("./assets/Show-CrVZGX9f.js"), "./Pages/Admin/Home/Products/Components/ProductForm.tsx": () => import("./assets/ProductForm-DcOdaWXD.js"), "./Pages/Admin/Home/Products/Create.tsx": () => import("./assets/Create-BnjhFtEX.js"), "./Pages/Admin/Home/Products/Edit.tsx": () => import("./assets/Edit-CA-yIVKX.js"), "./Pages/Admin/Home/Products/Index.tsx": () => import("./assets/Index-MbunW5Q9.js"), "./Pages/Admin/Home/Products/Show.tsx": () => import("./assets/Show-CUuh_6cI.js"), "./Pages/Admin/Home/Reports/Components/ExportButton.tsx": () => import("./assets/ExportButton-CG6-8mGH.js"), "./Pages/Admin/Home/Reports/ProductReport.tsx": () => import("./assets/ProductReport-Di41EV0C.js"), "./Pages/Admin/Home/Reports/SalesReport.tsx": () => import("./assets/SalesReport-CeLDBBA_.js"), "./Pages/Admin/Home/Settings/Create.tsx": () => import("./assets/Create-C6Er3pGt.js"), "./Pages/Admin/Home/Settings/Edit.tsx": () => import("./assets/Edit-CN9KZVYs.js"), "./Pages/Admin/Home/Settings/component/AdminSettingForm.tsx": () => import("./assets/AdminSettingForm-BS76lhTM.js").then((n) => n.A), "./Pages/Admin/Home/Users/Create.tsx": () => import("./assets/Create-CKTe5XWK.js"), "./Pages/Admin/Home/Users/Edit.tsx": () => import("./assets/Edit-Da0GlQx0.js"), "./Pages/Admin/Home/Users/Index.tsx": () => import("./assets/Index-BstwcePB.js"), "./Pages/Admin/Home/Users/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-DSmiwC1M.js"), "./Pages/Admin/Home/Users/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-BhkgNU-V.js"), "./Pages/Admin/Home/Users/Partials/UpdateUserInformationForm.tsx": () => import("./assets/UpdateUserInformationForm-DpZiF0Bv.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-BJq-4JRc.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-DSph7fpa.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login-CnUe-ApG.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register-CBQns03e.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-BZqRPclA.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-DiMwBUpD.js"), "./Pages/Cart/Index.tsx": () => import("./assets/Index-B0Mmj74u.js"), "./Pages/Checkout/Components/CheckoutForm.tsx": () => import("./assets/CheckoutForm-6zdFu4M1.js"), "./Pages/Checkout/Components/FormInput.tsx": () => import("./assets/FormInput-tIVQ5YWv.js"), "./Pages/Checkout/Index.tsx": () => import("./assets/Index-DOmi4BC4.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard-BR9-Ahe6.js"), "./Pages/Home/HomeDetails.tsx": () => import("./assets/HomeDetails-Cp7Ktq3E.js"), "./Pages/Home/Index.tsx": () => import("./assets/Index-Dtwd9Vcn.js"), "./Pages/Home/components/CardOverlay.tsx": () => import("./assets/CardOverlay-BbLtiyFC.js"), "./Pages/Orders/Components/OrdersTable.tsx": () => import("./assets/OrdersTable-Cu3IlSBT.js"), "./Pages/Orders/Index.tsx": () => import("./assets/Index-B4k3x8KE.js"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-CH3ilZ3A.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-DFfeZau2.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-6CF9D2IB.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-BLc6rV1x.js"), "./Pages/Shop/Components/show/AdditionalInfo.tsx": () => import("./assets/AdditionalInfo-1-Vw4jkk.js"), "./Pages/Shop/Components/show/Description.tsx": () => import("./assets/Description-6rG0plfA.js"), "./Pages/Shop/Components/show/Reviews.tsx": () => import("./assets/Reviews-B2FQPtf2.js"), "./Pages/Shop/Index.tsx": () => import("./assets/Index-C_8vjUO_.js"), "./Pages/Shop/Show.tsx": () => import("./assets/Show-CGezf9LR.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome-BqgMjrZj.js") })),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: Colors.primary
  }
});
export {
  Colors as C,
  Dimensions as D
};
