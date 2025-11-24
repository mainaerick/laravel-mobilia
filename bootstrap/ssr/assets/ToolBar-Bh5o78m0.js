import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { c as cn, F as FilterBlock } from "./FilterBlock-CIpEP_uI.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check, ChevronUp, Filter, X, Grid3x3, List } from "lucide-react";
import { C as Colors, D as Dimensions } from "../app.js";
import { Row } from "antd";
import { router } from "@inertiajs/react";
import "@radix-ui/react-checkbox";
import "clsx";
import "tailwind-merge";
import "axios";
import "react-dom/client";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const Toolbar = ({
  onFilterClick,
  onViewChange,
  currentView = "grid",
  totalResults,
  startIndex,
  endIndex,
  pageSize,
  onPageSizeChange,
  sortValue = "default",
  onSortChange,
  queryParams
}) => {
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [filters, setFilters] = useState({
    category: queryParams.category || [],
    room: queryParams.room || [],
    brand: queryParams.brand || [],
    material: queryParams.material || [],
    color: queryParams.color || [],
    price: queryParams.price || [],
    rating: queryParams.rating || []
  });
  const handleFilterChange = (filterType, value, checked) => {
    const updatedFilters = { ...filters };
    if (checked) {
      updatedFilters[filterType] = [...updatedFilters[filterType] || [], value];
    } else {
      updatedFilters[filterType] = (updatedFilters[filterType] || []).filter((v) => v !== value);
    }
    setFilters(updatedFilters);
    router.get(route("shop.index"), {
      sort_field: queryParams.sort_field,
      sort_direction: queryParams.sort_direction,
      per_page: queryParams.per_page,
      ...updatedFilters,
      page: 1
    }, {
      preserveState: true,
      preserveScroll: true
    });
  };
  const handleClearFilters = () => {
    setFilters({
      category: [],
      room: [],
      brand: [],
      material: [],
      color: [],
      price: [],
      rating: []
    });
    router.get(route("shop.index"), {
      sort_field: queryParams.sort_field,
      sort_direction: queryParams.sort_direction,
      per_page: queryParams.per_page,
      page: 1
    });
  };
  const hasActiveFilters = Object.values(filters).some((arr) => arr.length > 0);
  return /* @__PURE__ */ jsx("div", { style: { background: Colors.secondary }, className: "px-4 py-3 border-b ", children: /* @__PURE__ */ jsx(
    Row,
    {
      style: { height: "100%" },
      justify: "space-between",
      align: "middle",
      className: Dimensions.pagePaddingClass,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-[calc(100%+8rem)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative z-[60]", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => setShowFilterPanel(!showFilterPanel),
                className: "gap-2 bg-transparent",
                children: [
                  /* @__PURE__ */ jsx(Filter, { className: "w-4 h-4" }),
                  "Filter",
                  hasActiveFilters && /* @__PURE__ */ jsx("span", { className: "ml-1 px-1.5 py-0.5 text-xs bg-primary text-white rounded-full", children: Object.values(filters).reduce((sum, arr) => sum + arr.length, 0) })
                ]
              }
            ),
            showFilterPanel && /* @__PURE__ */ jsxs("div", { className: "absolute left-0 top-full mt-2 w-64 bg-white border rounded-lg shadow-lg z-[200] p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm", children: "Filters" }),
                /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: () => setShowFilterPanel(false), className: "h-6 w-6 p-0", children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" }) })
              ] }),
              /* @__PURE__ */ jsx(
                FilterBlock,
                {
                  title: "Category",
                  items: ["chairs", "tables", "sofas", "beds"],
                  selected: filters.category,
                  onChange: (value, checked) => handleFilterChange("category", value, checked)
                }
              ),
              /* @__PURE__ */ jsx(
                FilterBlock,
                {
                  title: "Room",
                  items: ["living", "bedroom", "dining"],
                  selected: filters.room,
                  onChange: (value, checked) => handleFilterChange("room", value, checked)
                }
              ),
              /* @__PURE__ */ jsx(
                FilterBlock,
                {
                  title: "Brand",
                  items: ["Ikea", "Ashley", "Wayfair"],
                  selected: filters.brand,
                  onChange: (value, checked) => handleFilterChange("brand", value, checked)
                }
              ),
              /* @__PURE__ */ jsx(
                FilterBlock,
                {
                  title: "Price",
                  items: ["0-50", "50-100", "100-200", "200+"],
                  selected: filters.price,
                  onChange: (value, checked) => handleFilterChange("price", value, checked)
                }
              ),
              hasActiveFilters && /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: handleClearFilters,
                  className: "w-full text-xs bg-transparent",
                  children: "Clear Filters"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-1 border-l pl-3", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: currentView === "grid" ? "default" : "ghost",
                size: "sm",
                onClick: () => onViewChange == null ? void 0 : onViewChange("grid"),
                "aria-label": "Grid view",
                children: /* @__PURE__ */ jsx(Grid3x3, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: currentView === "list" ? "default" : "ghost",
                size: "sm",
                onClick: () => onViewChange == null ? void 0 : onViewChange("list"),
                "aria-label": "List view",
                children: /* @__PURE__ */ jsx(List, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600 whitespace-nowrap", children: [
            "Showing ",
            startIndex,
            "-",
            endIndex,
            " of ",
            totalResults,
            " results"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 flex-wrap justify-start md:justify-end", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Show" }),
            /* @__PURE__ */ jsxs(Select, { value: pageSize == null ? void 0 : pageSize.toString(), onValueChange: (value) => onPageSizeChange == null ? void 0 : onPageSizeChange(Number(value)), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-16", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "10", children: "10" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "20", children: "20" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "30", children: "30" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "40", children: "40" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Sort by" }),
            /* @__PURE__ */ jsxs(Select, { value: sortValue, onValueChange: onSortChange, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-40", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "default", children: "Default" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "price_high", children: "Price: High to Low" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "price_low", children: "Price: Low to High" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "rating", children: "Rating" })
              ] })
            ] })
          ] })
        ] })
      ] })
    }
  ) });
};
export {
  Toolbar
};
