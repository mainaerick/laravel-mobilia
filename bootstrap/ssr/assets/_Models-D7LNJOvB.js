const ProductData = {
  name: "",
  description: "",
  price: Number.parseInt(""),
  quantity: Number.parseInt(""),
  category: "",
  room: "any",
  brand: "",
  material: "",
  color: "",
  dimensions: {
    depth: Number.parseInt(""),
    width: Number.parseInt(""),
    height: Number.parseInt("")
  },
  weight: "",
  images: [],
  rating: Number.parseInt(""),
  reviews: [],
  colors: [],
  sizes: []
};
const InitialOrder = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  town: "",
  address: "",
  delivery_det: "",
  total_amount: 0,
  status: "pending",
  shipping_address: "",
  billing_address: "",
  payment_method: "",
  payment_status: "pending",
  shipping_method: "",
  shipping_cost: "20",
  items: [],
  notes: ""
};
const CategoryData = {
  name: "",
  materials: [],
  colors: [],
  sizes: []
};
export {
  CategoryData as C,
  InitialOrder as I,
  ProductData as P
};
