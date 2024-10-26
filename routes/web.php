<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home', [
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
    Route::get('/checkout', [OrderController::class, 'checkout'])->name('checkout.create');
    Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::put('/order/{id}', [OrderController::class, 'update'])->name('order.update');
    Route::delete('/order/{id}', [OrderController::class, 'destroy'])->name('order.destroy');
    Route::get('/order/{id}', [OrderController::class, 'edit'])->name('order.edit');
});
Route::middleware(['auth', 'verified', 'role:Admin'])->group(function () {
    // Route::resource('admin_', AdminController::class);
    Route::get('admin', [AdminController::class, 'index'])->name('admin.index');
    Route::get('admin/products', [ProductController::class, 'admin_index'])->name('admin.products');
    Route::get('admin/products/create', [ProductController::class, 'create'])->name('admin.products.create');
    Route::get('admin/product/{id}', [ProductController::class, 'edit'])->name('admin.product.edit');
    Route::delete('admin/product/{id}', [ProductController::class, 'destroy'])->name('admin.product.destroy');
    Route::put('admin/product/{id}', [ProductController::class, 'update'])->name('admin.product.update');
    Route::post('admin/product', [ProductController::class, 'store'])->name('admin.product.store');
    // Admin categories
    Route::get('admin/categories', [CategoryController::class, 'index'])->name('admin.categories');
    Route::get('admin/categories/create', [CategoryController::class, 'create'])->name('admin.categories.create');
    Route::get('admin/category/{id}', [CategoryController::class, 'edit'])->name('admin.category.edit');
    Route::put('admin/category/{id}', [CategoryController::class, 'update'])->name('admin.category.update');
    Route::post('admin/category', [CategoryController::class, 'store'])->name('admin.category.store');
    Route::delete('admin/category/{id}', [CategoryController::class, 'destroy'])->name('admin.category.destroy');
    // Admin Orders
    Route::get('admin/orders', [OrderController::class, 'admin_index'])->name('admin.orders');
    Route::get('admin/orders/create', [OrderController::class, 'create'])->name('admin.orders.create');
    Route::post('admin/order', [OrderController::class, 'store'])->name('admin.order.store');
    // Admin Users
    Route::get('admin/users/customers', [UserController::class, 'customers_index'])->name('admin.users.customers');
    Route::get('admin/users', [UserController::class, 'admins'])->name('admin.users');
    Route::get('admin/users/create', [UserController::class, 'create'])->name('admin.users.create');
    Route::get('admin/user/{id}', [UserController::class, 'edit'])->name('admin.user.edit');
    Route::put('admin/user/{id}', [UserController::class, 'update'])->name('admin.user.update');
    Route::post('admin/user', [UserController::class, 'store'])->name('admin.user.store');
    Route::delete('admin/user/{id}', [UserController::class, 'destroy'])->name('admin.user.destroy');
    Route::post('admain/email/verification-notification/{id}', [UserController::class, 'verify_user_email'])
        ->middleware('throttle:6,1')
        ->name('admin.verification.send');

    // Admin reports
    Route::get('admin/products/report', [ProductController::class, 'report_index'])->name('admin.products.report');
    Route::get('admin/sales/report', [OrderController::class, 'sales_index'])->name('admin.sales.report');

    // Route::post('admin_/add_product', [AdminController::class, 'product_store'])->name('admin.product_store');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__ . '/auth.php';
