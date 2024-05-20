<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    //
    public function addToCart(Request $request)
    {
        // $request->validate([
        //     'product_id' => 'required|exists:products,id',
        //     'quantity' => 'required|integer|min=1',
        // ]);


        $user = $request->user();
        dd($user);
        $cart = $user->cart ?? Cart::create(['user_id' => $user->id]);


        $cart->items()->updateOrCreate(
            ['produÏct_id' => $request->product_id],
            ['quantity' => $request->quantity]
        );

        return redirect()->back()->with('success', 'Product added to cart');
    }
}
