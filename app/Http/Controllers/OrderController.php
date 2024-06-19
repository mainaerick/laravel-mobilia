<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Resources\AdminOrderResource;
use App\Http\Resources\OrderResource;
use App\Models\CartItem;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        // $orders = Order::all();
        $orders = Order::with('user')->paginate(10);
        return Inertia::render('Orders/Index', [
            'orders' => OrderResource::collection($orders),
        ]);
    }
    public function admin_index()
    {
        $user = auth()->user();
        // $orders = Order::all();
        $orders = Order::all();
        return Inertia::render('Admin/Home/Orders/Index', [
            'orders' => AdminOrderResource::collection($orders),
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Home/Orders/Create', [
        ]);
    }

    public function checkout()
    {
        return inertia('Checkout/Index', [
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {

        $validated = $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'town' => 'required|string',
            'address' => 'required|string',
            'delivery_det' => 'required|string',
            'total_amount' => 'required|numeric',
            'status' => 'required|string',
            'shipping_address' => 'required|string',
            'billing_address' => 'nullable|string',
            'payment_method' => 'required|string',
            'payment_status' => 'required|string',
            'shipping_method' => 'nullable|string',
            'shipping_cost' => 'nullable|numeric',
            'items' => 'required|string',
            'notes' => 'nullable|string',
        ]);


        $validated["items"] = json_decode($request->items, true);

        $user = auth()->user();
        $validated["user_id"] = $user->id;

        $order = Order::create($validated);
        if ($order) {
            // Delete the cart items in  with the order
            $cart = $user->cart;
            CartItem::where('cart_id', $cart->id)->delete();

            return redirect()->route('orders.index')->with('success', 'Order created successfully');
        }
        return redirect()->route('checkout.create')->with('error', 'Failed to create order');
        // return redirect()->route('orders.index')->with('success', 'Order created successfully');

    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        $order = Order::with('user')->findOrFail($order);

        return Inertia::render('Orders/Show', [
            'order' => new OrderResource($order),
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $order = Order::findOrFail($id);

        $user = User::findOrFail(($order->user_id));
        $cart = $user->cart;
        $cartItems = $cart ? $cart->items() : collect();

        $items = [];

        // dd(json_decode($order->items, true));
        foreach ($order->items as $item) {

            $product = Product::findOrFail($item["productId"]);
            $items[] = $product;


        }


        // dd($items);

        return Inertia::render('Admin/Home/Orders/Show', [
            'order' => new OrderResource($order),
            'items' => $items
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, $id)
    {

        $order = Order::findOrFail($id);

        $validated = $request->validated();

        // dd($validated);

        $order->update($validated);

        return redirect()->back()->with('message', "Order was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();

        return redirect()->back()->with('message', "Order was deleted");
    }
}
