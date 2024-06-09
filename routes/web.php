<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('home', HomeController::class);
    Route::resource('shop', ProductController::class);
    Route::resource('about', ProductController::class);
    Route::resource('contact', ProductController::class);
    Route::get('/images/{path}', function ($path) {
        $path = 'public/images/' . $path;

        // Validate the path to prevent directory traversal attacks
        if (str_contains($path, '..')) {
            abort(403);
        }

        if (Storage::exists($path)) {
            return response()->file(storage_path('app/' . $path));
        } else {
            abort(404);
        }
    })->where('path', '.*');
    Route::get('/shop/related/{id}', [ProductController::class, 'showRelated']);
    Route::post('/cart/add', [CartController::class, 'addToCart'])->name('cart.add');
    Route::delete('/cart/{id}', [CartController::class, 'removeItem'])->name('cart.removeItem');
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::get('/checkout', [OrderController::class, 'create'])->name('checkout.create');
    Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');


});
Route::middleware(['auth', 'verified'])->group(function () {
    // Route::resource('admin_', AdminController::class);
    Route::get('admin_', [AdminController::class, 'index'])->name('admin.index');
    Route::get('admin_/products', [AdminController::class, 'products_index'])->name('admin.product_index');
    Route::get('admin_/product/{id}', [AdminController::class, 'product_show'])->name('admin.product_show');
    Route::delete('admin_/product', [AdminController::class, 'product_destroy'])->name('admin.product_destroy');
    Route::put('admin_/product/{id}', [AdminController::class, 'product_update'])->name('admin.product_update');
    Route::post('admin_/product', [AdminController::class, 'product_store'])->name('admin.product_store');
    // Route::post('admin_/add_product', [AdminController::class, 'product_store'])->name('admin.product_store');

});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__ . '/auth.php';
