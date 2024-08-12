<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class ShareCartData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check()) {
            $cart = Auth::user()->cart;
            $cartQuantity = $cart ? $cart->items->sum('quantity') : 0;
            $cartItems = $cart ? $cart->items()->with('product')->get() : collect();

            Inertia::share('cartQuantity', $cartQuantity);
            Inertia::share('cartItems', $cartItems);
        }

        return $next($request);
    }
}
