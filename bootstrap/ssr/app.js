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
  buttonBgColor: "#FFFFFF",
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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/Admin/Home/Categories/Components/CategoryForm.tsx": () => import("./assets/CategoryForm-ClUC0Hht.js"), "./Pages/Admin/Home/Categories/Create.tsx": () => import("./assets/Create-DUvpS6em.js"), "./Pages/Admin/Home/Categories/Index.tsx": () => import("./assets/Index-c5raXnxP.js"), "./Pages/Admin/Home/Categories/Show.tsx": () => import("./assets/Show-dmd954Pw.js"), "./Pages/Admin/Home/Index.tsx": () => import("./assets/Index-C-bSinwA.js"), "./Pages/Admin/Home/Orders/Components/OrderForm.tsx": () => import("./assets/AdminSettingForm-BS76lhTM.js").then((n) => n.O), "./Pages/Admin/Home/Orders/Create.tsx": () => import("./assets/Create-CrtmLxd0.js"), "./Pages/Admin/Home/Orders/Index.tsx": () => import("./assets/Index-DRRWlxu1.js"), "./Pages/Admin/Home/Orders/Show.tsx": () => import("./assets/Show-DHsnwjCo.js"), "./Pages/Admin/Home/Products/Components/ProductForm.tsx": () => import("./assets/ProductForm-DcOdaWXD.js"), "./Pages/Admin/Home/Products/Create.tsx": () => import("./assets/Create-CWgJUGfX.js"), "./Pages/Admin/Home/Products/Edit.tsx": () => import("./assets/Edit-CN9KZVYs.js"), "./Pages/Admin/Home/Products/Index.tsx": () => import("./assets/Index-CWJktwog.js"), "./Pages/Admin/Home/Products/Show.tsx": () => import("./assets/Show-BbLamn8d.js"), "./Pages/Admin/Home/Reports/Components/ExportButton.tsx": () => import("./assets/ExportButton-CG6-8mGH.js"), "./Pages/Admin/Home/Reports/ProductReport.tsx": () => import("./assets/ProductReport-B0zx84w-.js"), "./Pages/Admin/Home/Reports/SalesReport.tsx": () => import("./assets/SalesReport-B9Rq6SP1.js"), "./Pages/Admin/Home/Settings/Create.tsx": () => import("./assets/Create-CeuWhGZX.js"), "./Pages/Admin/Home/Settings/Edit.tsx": () => import("./assets/Edit-CA-yIVKX.js"), "./Pages/Admin/Home/Settings/component/AdminSettingForm.tsx": () => import("./assets/AdminSettingForm-BS76lhTM.js").then((n) => n.A), "./Pages/Admin/Home/Users/Create.tsx": () => import("./assets/Create-DjDcREQQ.js"), "./Pages/Admin/Home/Users/Edit.tsx": () => import("./assets/Edit-CyaGqMis.js"), "./Pages/Admin/Home/Users/Index.tsx": () => import("./assets/Index-Cpshhnkf.js"), "./Pages/Admin/Home/Users/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-DSmiwC1M.js"), "./Pages/Admin/Home/Users/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-BhkgNU-V.js"), "./Pages/Admin/Home/Users/Partials/UpdateUserInformationForm.tsx": () => import("./assets/UpdateUserInformationForm-DpZiF0Bv.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-BJq-4JRc.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-DSph7fpa.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login-CnUe-ApG.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register-CBQns03e.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-BZqRPclA.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-DiMwBUpD.js"), "./Pages/Cart/Index.tsx": () => import("./assets/Index-BQOLKXZT.js"), "./Pages/Checkout/Components/CheckoutForm.tsx": () => import("./assets/CheckoutForm-6zdFu4M1.js"), "./Pages/Checkout/Components/FormInput.tsx": () => import("./assets/FormInput-tIVQ5YWv.js"), "./Pages/Checkout/Index.tsx": () => import("./assets/Index-CFL85cVO.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard-BDpuaK8W.js"), "./Pages/Home/HomeDetails.tsx": () => import("./assets/HomeDetails-DtUo1QN5.js"), "./Pages/Home/Index.tsx": () => import("./assets/Index-xaHBdAJg.js"), "./Pages/Home/components/CardOverlay.tsx": () => import("./assets/CardOverlay-BbLtiyFC.js"), "./Pages/Orders/Components/OrdersTable.tsx": () => import("./assets/OrdersTable-BiB2QPiq.js"), "./Pages/Orders/Index.tsx": () => import("./assets/Index-CmF_BMGA.js"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-BbM1Kc6H.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-DFfeZau2.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-6CF9D2IB.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-BLc6rV1x.js"), "./Pages/Shop/Components/index/FilterBlock.tsx": () => import("./assets/FilterBlock-CIpEP_uI.js").then((n) => n.a), "./Pages/Shop/Components/index/ToolBar.tsx": () => import("./assets/ToolBar-Bh5o78m0.js"), "./Pages/Shop/Components/show/AdditionalInfo.tsx": () => import("./assets/AdditionalInfo-1-Vw4jkk.js"), "./Pages/Shop/Components/show/Description.tsx": () => import("./assets/Description-6rG0plfA.js"), "./Pages/Shop/Components/show/Reviews.tsx": () => import("./assets/Reviews-B2FQPtf2.js"), "./Pages/Shop/Index.tsx": () => import("./assets/Index-BvQnbbmT.js"), "./Pages/Shop/Show.tsx": () => import("./assets/Show-BbEI3-Iz.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome-BqgMjrZj.js") })),
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
