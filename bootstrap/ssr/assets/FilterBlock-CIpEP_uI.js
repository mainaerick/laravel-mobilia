import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(
      CheckboxPrimitive.Indicator,
      {
        className: cn("grid place-content-center text-current"),
        children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
function FilterBlock({ title, items, selected, onChange }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-4 pb-4 border-b", children: [
    /* @__PURE__ */ jsx("h4", { className: "font-medium text-xs mb-2", children: title }),
    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx(
        Checkbox,
        {
          id: `${title}-${item}`,
          checked: selected.includes(item),
          onCheckedChange: (checked) => onChange(item, checked)
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: `${title}-${item}`, className: "text-sm cursor-pointer", children: item })
    ] }, item)) })
  ] });
}
const FilterBlock$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FilterBlock
}, Symbol.toStringTag, { value: "Module" }));
export {
  FilterBlock as F,
  FilterBlock$1 as a,
  cn as c
};
