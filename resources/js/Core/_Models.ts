interface Dimension {
    depth: number;
    width: number;
    height: number;
}

export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    room: string;
    brand: string;
    material: string;
    color: string;
    dimensions: Dimension;
    weight: string;
    images: string[];
    rating: number;
    reviews: string[];
    colors: string[];
    sizes: string[];
    newimages?: any[];
    created_at?: string;
    updated_at?: string;
}

export const ProductData: Product = {
    name: "",
    description: "",
    price: Number.parseInt(""),
    quantity: Number.parseInt(""),
    category: "",
    room: "",
    brand: "",
    material: "",
    color: "",
    dimensions: {
        depth: Number.parseInt(""),
        width: Number.parseInt(""),
        height: Number.parseInt(""),
    },
    weight: "",
    images: [],
    rating: Number.parseInt(""),
    reviews: [],
    colors: [],
    sizes: [],
};

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Pagination {
    current_page: number;
    data: Product[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface CartItem {
    id: number;
    cart_id: number;
    product_id: number;
    quantity: number;
    created_at: string;
    updated_at: string;
    product: Product;
}

export interface OrderItem {
    productId: number;
    name: string;
    quantity: number;
    price: number;
}

export interface Order {
    id?: number; // Optional since it may not be set initially
    userId?: number | null; // Optional to accommodate guest users
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    town: string;
    address: string;
    delivery_det: string;
    total_amount: number; // Assuming it's a string to match your example
    status: string;
    shipping_address: string;
    billing_address: string;
    payment_method: string;
    payment_status: string;
    shipping_method: string;
    shipping_cost: string; // Assuming it's a string to match your example
    items: OrderItem[];
    notes: string;
    createdAt?: string; // Optional for timestamps
    updatedAt?: string; // Optional for timestamps
}

export interface Category {
    id: number;
    name: string;
    materials: [];
    colors: [];
    sizes: [];
    created_at: string;
    updated_at: string;
}
