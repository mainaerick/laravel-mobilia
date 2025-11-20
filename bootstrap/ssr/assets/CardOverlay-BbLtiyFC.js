import { jsxs, jsx } from "react/jsx-runtime";
const CardOverlay = ({}) => {
  const handleMouseEnter = (event) => {
    const target = event.target;
    const overlay = target.querySelector(".overlay");
    if (overlay) {
      overlay.classList.add("opacity-100");
    }
  };
  const handleMouseLeave = (event) => {
    const target = event.target;
    const overlay = target.querySelector(".overlay");
    if (overlay) {
      overlay.classList.remove("opacity-100");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative w-64 h-64", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [
    /* @__PURE__ */ jsx("img", { src: "images/living.jpg", alt: "Avatar", className: "w-full h-full object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center overlay transition-opacity opacity-0", children: /* @__PURE__ */ jsx("div", { className: "text-white font-bold", children: "John Doe" }) })
  ] });
};
export {
  CardOverlay as default
};
