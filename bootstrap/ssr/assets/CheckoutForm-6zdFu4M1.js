import { jsx, jsxs } from "react/jsx-runtime";
import { message, Form, Row, Col, Typography, Flex, Radio, Button } from "antd";
import { useState, useEffect } from "react";
import FormInput from "./FormInput-tIVQ5YWv.js";
import { router } from "@inertiajs/react";
import { T as TableComponent } from "./TableComponent-DTwfws4x.js";
import "../app.js";
import "axios";
import "react-dom/client";
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
};
function CheckoutForm({
  form,
  orderDetails,
  items,
  errors,
  deleteOrderItems
}) {
  console.log(orderDetails);
  const [subTotal, setSubTotal] = useState("0");
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    console.log(values);
    values.total_amount = Number.parseFloat(subTotal);
    values.shipping_address = values.delivery_det;
    setLoading(true);
    values.items = [];
    items.map((item) => {
      var _a;
      (_a = values.items) == null ? void 0 : _a.push({
        productId: item.product_id,
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price
      });
    });
    const newOrder = { ...orderDetails, ...values };
    const newOrderWithJSONItems = {
      ...newOrder,
      items: newOrder.items
    };
    if (orderDetails.id) {
      router.put(route("order.update", newOrderWithJSONItems));
    } else {
      router.post(route("orders.store", newOrderWithJSONItems));
    }
    setLoading(false);
  };
  useEffect(() => {
    if (items) {
      let total = 0;
      items.map((item) => {
        total += item.product.price * item.quantity;
      });
      setSubTotal(Number.parseFloat(total.toString()).toFixed(2));
    }
  }, [items]);
  useEffect(() => {
    if (errors) {
      const errorValues = errors && Object.keys(errors).map(function(key) {
        return errors[key];
      });
      console.log(errorValues);
      errorValues.map((errorValue) => {
        message.error(errorValue, 5);
      });
    }
  }, [errors]);
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "id",
      render: (_, record) => {
        var _a;
        console.log(record);
        return /* @__PURE__ */ jsx(Typography.Text, { children: `${(_a = record == null ? void 0 : record.product) == null ? void 0 : _a.name} x ${record == null ? void 0 : record.quantity}` });
      }
    },
    {
      title: /* @__PURE__ */ jsx(Flex, { justify: "end", children: "Subtotal" }),
      // dataIndex: "product",
      key: "id",
      render: (_, record) => {
        let subtotal = record.quantity * parseFloat(record.product.price);
        return /* @__PURE__ */ jsx(Flex, { justify: "end", children: /* @__PURE__ */ jsx(Typography.Text, { children: `${Number.parseFloat(subtotal.toString()).toFixed(2)}` }) });
      }
    },
    {
      title: /* @__PURE__ */ jsx(Flex, { justify: "end", children: "Action" }),
      // dataIndex: "product",
      key: "id",
      render: (_, record) => {
        return /* @__PURE__ */ jsx(Flex, { justify: "end", children: /* @__PURE__ */ jsxs(Button, { onClick: () => deleteOrderItems(record), children: [
          " ",
          "Delete"
        ] }) });
      }
    }
  ];
  return /* @__PURE__ */ jsx(
    Form,
    {
      ...layout,
      form,
      initialValues: orderDetails,
      name: "control-hooks",
      onFinish,
      children: /* @__PURE__ */ jsxs(Row, { gutter: 12, children: [
        /* @__PURE__ */ jsxs(
          Col,
          {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 12 },
            lg: { span: 12 },
            xl: { span: 12 },
            children: [
              /* @__PURE__ */ jsxs(Row, { gutter: 16, children: [
                /* @__PURE__ */ jsxs(Col, { span: 12, children: [
                  " ",
                  /* @__PURE__ */ jsx(
                    FormInput,
                    {
                      name: "firstname",
                      label: "First Name",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(
                  FormInput,
                  {
                    name: "lastname",
                    label: "Last Name",
                    required: true
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx(
                FormInput,
                {
                  name: "email",
                  label: "Email Address",
                  type: "email",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx(
                FormInput,
                {
                  name: "phone",
                  label: "Phone",
                  type: "phone",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx(
                FormInput,
                {
                  name: "town",
                  label: "Town/City",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx(
                FormInput,
                {
                  name: "address",
                  label: "Address",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx(
                FormInput,
                {
                  name: "delivery_det",
                  label: "Delivery Details",
                  required: true
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Col,
          {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 8 },
            lg: { span: 12 },
            xl: { span: 12 },
            style: { width: "100%" },
            children: [
              /* @__PURE__ */ jsx(
                TableComponent,
                {
                  items,
                  pagination: void 0,
                  columns,
                  footer: () => {
                    return /* @__PURE__ */ jsxs(Row, { justify: "space-between", children: [
                      /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(Typography.Title, { level: 4, children: "Total" }) }),
                      /* @__PURE__ */ jsx(Col, { span: 12, children: /* @__PURE__ */ jsx(Flex, { align: "end", justify: "end", children: /* @__PURE__ */ jsx(Typography.Title, { level: 4, children: subTotal }) }) })
                    ] });
                  }
                }
              ),
              /* @__PURE__ */ jsx(Typography.Title, { level: 4, style: { marginTop: "17px" }, children: "Payment Method" }),
              /* @__PURE__ */ jsx(Form.Item, { name: "payment_method", children: /* @__PURE__ */ jsxs(Radio.Group, { children: [
                /* @__PURE__ */ jsxs(Radio, { defaultChecked: true, value: "mpesa", children: [
                  " ",
                  "Mpesa",
                  " "
                ] }),
                /* @__PURE__ */ jsxs(Radio, { value: "payondelivery", children: [
                  "Pay On Delivery",
                  " "
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(Flex, { justify: "center", style: { marginTop: "13px" }, children: /* @__PURE__ */ jsx(
                Button,
                {
                  htmlType: "submit",
                  block: true,
                  loading,
                  style: {
                    marginLeft: "30%",
                    marginRight: "30%",
                    borderRadius: "15px"
                  },
                  size: "large",
                  children: "Place Order"
                }
              ) })
            ]
          }
        )
      ] })
    }
  );
}
export {
  CheckoutForm as default
};
