<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/Home/Index', [
            // "products" => $products,
            // 'queryParams' => request()->query() ?: null,
        ]);
    }

    public function products_index()
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
        return inertia('Admin/Home/Products/Index', [
            "products" => $products,
            'queryParams' => request()->query() ?: null,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function product_create()
    {
        //
    }
    public function product_store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     */
    public function product_show($id)
    {
        $product = Product::findOrFail($id);


        $query = Product::query();

        return Inertia::render('Admin/Home/Products/Show', [
            'product' => new ProductResource($product),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function product_edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function product_update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function product_destroy(string $id)
    {
        //
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
