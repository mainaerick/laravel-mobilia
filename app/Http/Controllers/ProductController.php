<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
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

        $currentPage = request("sort_field", 'created_at');

        $sortField = request("sort_field", 'created_at');        
        $sortDirection = request("sort_direction", "desc");

        if(str_contains($sortField,'price')){
            $sortField='price';
            if(str_contains($sortField,'high')){
                $sortDirection="asc";
            }
            else{
                $sortDirection="desc";
            }
        }
        $products = $query->orderBy($sortField, $sortDirection)->paginate(10)
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
    public function show(Product $product)
    {
        //
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
