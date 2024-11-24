<?php

namespace App\Providers;

use App\Events\UserRegistered;
use App\Listeners\CreateCartForUser;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    protected $listen = [
        UserRegistered::class => [
            CreateCartForUser::class,
        ],
    ];
    public function register(): void
    {
        //

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }

    }
}
