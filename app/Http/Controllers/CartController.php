<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;

class CartController extends Controller
{

    public function index(): \Inertia\Response
    {

        return inertia('Cart/Index', [
            // "products" => $products,
            // 'queryParams' => request()->query() ?: null,
        ]);
    }
    //
    public function addToCart(Request $request)
    {
        // $request->validate([
        //     'product_id' => 'required|exists:products,id',
        //     'quantity' => 'required|integer|min=1',
        // ]);


        $user = $request->user();
        // dd($user);
        $cart = $user->cart ?? Cart::create(['user_id' => $user->id]);


        $cart->items()->updateOrCreate(
            ['product_id' => $request->product_id],
            ['quantity' => $request->quantity]
        );

        return redirect()->back()->with('success', 'Product added to cart');
    }


    public function removeItem(Request $request, $id)
    {
        $user = auth()->user();
        $cart = $user->cart;

        if ($cart) {
            $cartItem = CartItem::where('cart_id', $cart->id)->where('id', $id)->first();
            // dd($cartItem);

            if ($cartItem) {
                $cartItem->delete();
            }
        }

        return redirect()->back()->with('success', 'Product removed from cart');
    }
}
