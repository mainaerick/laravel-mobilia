interface Dimension {
    depth: number;
    width: number;
    height: number;
  }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    quantity: number;
    category: string;
    room: string;
    brand: string;
    material: string;
    color: string;
    dimensions: Dimension;
    weight: string;
    images: string[];
    rating: string;
    reviews: string[];
    colors:string[];
    sizes:string[];
    created_at: string;
    updated_at: string;
  }
  
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