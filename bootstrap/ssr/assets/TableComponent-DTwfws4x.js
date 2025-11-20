import { jsx } from "react/jsx-runtime";
import { C as Colors } from "../app.js";
import { ConfigProvider, Table } from "antd";
function TableComponent({ items, pagination, columns, footer }) {
  return /* @__PURE__ */ jsx(
    ConfigProvider,
    {
      theme: {
        components: {
          Table: {
            headerBg: Colors.secondary
          }
        }
      },
      children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        Table,
        {
          columns,
          dataSource: items,
          pagination,
          footer,
          scroll: { y: "400px" }
        }
      ) })
    }
  );
}
export {
  TableComponent as T
};
