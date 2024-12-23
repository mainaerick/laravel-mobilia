<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use function Laravel\Prompts\error;

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
    public function product_update(Request $request, $id)
    {

        $product = Product::findOrFail($id);
        // dd($request);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
            'category' => 'required|string|max:255',
            'room' => 'string|max:255',
            'brand' => 'required|string|max:255',
            'material' => 'required|string|max:255',
            'color' => 'required|string|max:255',
            'dimensions.depth' => 'required|numeric',
            'dimensions.width' => 'required|numeric',
            'dimensions.height' => 'required|numeric',
            'weight' => 'required|numeric',
            'rating' => 'required|numeric|min:0|max:5',
            'reviews' => 'required|array',
            'sizes' => 'required|array',
            'colors' => 'required|array',
            'images' => 'required|array',
            'newimages.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $images = $validated['images'];

        if ($request->hasFile('newimages')) {
            foreach ($request->file('newimages') as $image) {

                $path = $image->store('images/products', 'public');
                $images[] = $path;

            }


        }
        $validated["images"] = $images;

        // dd($validated);
        $product->update($validated);

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
