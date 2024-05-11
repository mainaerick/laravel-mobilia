export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    brand?: string | null;
    material?: string | null;
    color?: string | null;
    dimensions?: { height: number; width: number; depth: number } | null;
    weight?: number | null;
    images?: string[] | null;
    rating?: number | null;
    reviews?: any[] | null; // Define the structure of reviews according to your requirements
    created_at: string;
    updated_at: string;
}

