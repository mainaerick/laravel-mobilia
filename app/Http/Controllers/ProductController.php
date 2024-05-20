<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response
    {
        $products = Product::all();
        $query = Product::query();


        $per_page = request("per_page", 10);
        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");
        $category = request("category");


        if (str_contains($sortField, 'price')) {
            $sortField = 'price';
            if (str_contains($sortField, 'high')) {
                $sortDirection = "asc";
            } else {
                $sortDirection = "desc";
            }
        }

        if ($category) {
            $query->where("category", "like", "%" . $category . "%");
        }
        $products = $query->orderBy($sortField, $sortDirection)->paginate($per_page)
            ->onEachSide(1);


        //    dd($products);
        return inertia('Shop/Index', [
            "products" => $products,
            'queryParams' => request()->query() ?: null,
        ]);
        // return Inertia::render('Shop/Index', ['products' => $products];
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $shop)
    {
        // product query
        $query = Product::query();
        $query->where("category", "like", "%" . $shop->category . "%");
        $query->where("id", "!=", $shop->id);
        // cart query
        // $queryCart = Cart::query();
        // $queryCart->where("user_id", Auth::id());
        // $cart = $queryCart->get();
        $queryCartItems = CartItem::query();
        $queryCartItems->where("product_id", $shop->id);
        $productCartItems = $queryCartItems->get();
        // dd($cartItems);
        $related_product = $query->paginate(4);

        return Inertia::render('Shop/Show', [
            'product' => new ProductResource($shop),
            'relatedProducts' => $related_product,
            'productCartItems' => $productCartItems,
        ]);
    }
    /**
     * Display the related products.
     */
    public function showRelated(Product $shop)
    {
        $query = Product::query();
        // if (request("name")) {
        $query->where("category", "like", "%" . $shop->category . "%");
        $query->where("id", "!=", $shop->id);
        // dd($query);
        // }ß
        $related_product = $query->paginate(4);
        return inertia('Shop/Index', [
            "products" => $related_product,
            'queryParams' => request()->query() ?: null,
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
