import { jsx } from "react/jsx-runtime";
function Hero({ title, whichRoute }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        position: "relative",
        height: "300px",
        width: "100%",
        textAlign: "left",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url("/images/settings/hero_image.png")`,
        marginBottom: ""
      }
    }
  );
}
export {
  Hero as H
};
