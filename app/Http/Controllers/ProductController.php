<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use App\Models\Setting;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
$per_page = 10;
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
            $query->where("room", "like", "%" . $category . "%");
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
    public function admin_index()
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
    public function report_index()
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
        return inertia('Admin/Home/Reports/ProductReport', [
            "products" => $products,
            'queryParams' => request()->query() ?: null,
        ]);

    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return inertia("Admin/Home/Products/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $data = $request->validated();
        $images = [];

        if ($request->hasFile('newimages')) {
            foreach ($request->file('newimages') as $image) {

                $path = $image->store('images/products', 'public');
                $images[] = $path;

            }

        }
        $data["images"] = $images;

        Product::create($data);
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

        // Available cart items

        $queryCartItems = CartItem::query();
        $queryCartItems->where("product_id", $shop->id);
        $related_product = $query->paginate(4);

        return Inertia::render('Shop/Show', [
            'product' => new ProductResource($shop),
            'relatedProducts' => $related_product,
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
    public function edit($id)
    {
        $product = Product::findOrFail($id);


        $query = Product::query();

        return Inertia::render('Admin/Home/Products/Show', [
            'product' => new ProductResource($product),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

        $product = Product::findOrFail($id);

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
            'images' => 'array',
            'newimages.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $images =[];
        if( $request->has("images")){
            $images = $validated['images'];
        }

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
    public function searchProduct(Request $request)
    {
        $searchquery = $request->get('query', '');

        $products = [];
        $per_page = request("per_page", 10);


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
            $query->where("room", "like", "%" . $category . "%");
        }
        if ($searchquery) {
            $products = Product::where('name', 'LIKE', "%{$searchquery}%") // Adjust fields accordingly
            ->orWhere('description', 'LIKE', "%{$searchquery}%") // Optional
            ->paginate($per_page);
        }
        else{
            $products = $query->orderBy($sortField, $sortDirection)->paginate($per_page)
                ->onEachSide(1);
        }



//        return inertia('SearchResults', [
//            'products' => $products,
//            'query' => $query,
//        ]);

        return Inertia::render('Shop/Index', ['products' => $products, 'queryParams' => request()->query() ?: null, 'search_query' => $query,]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
