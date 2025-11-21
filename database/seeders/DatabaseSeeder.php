<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Factories\CategoryFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Auth\Events\Registered;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    private $permissions = [
        'role-list',
        'role-create',
        'role-edit',
        'role-delete',
        'product-list',
        'product-create',
        'product-edit',
        'product-delete'
    ];

    public function run(): void
    {
        // User::factory(10)->create();

        //        User::factory()->create([
//            'name' => 'Test User',
//            'email' => 'test@example.com',
//        ]);
        foreach ($this->permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'email_verified_at' => now(),
        ]);
        $role = Role::create(['name' => 'Admin']);

        $permissions = Permission::pluck('id', 'id')->all();

        $role->syncPermissions($permissions);

        $admin->assignRole([$role->id]);

        event(new Registered($admin));
        for ($i = 0; $i < 20; $i++) {
            $user = User::create([
                'name' => "User{$i}",
                'email' => "user{$i}@example.com",
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
                'email_verified_at' => now(),
            ]);
            $role = Role::updateOrCreate(['name' => 'User']);
            $permissions = Permission::pluck('id', 'id')->all();
            $role->syncPermissions($permissions);
            $user->assignRole([$role->id]);
            event(new Registered($user));
        }

        // Create a regular user
        // $user = User::create([
        //     'name' => 'Eric',
        //     'email' => 'user@example.com',
        //     'password' => Hash::make('password'),
        //     'remember_token' => Str::random(10),
        //     'email_verified_at' => now(),

        // ]);
        // $user->assignRole($userRole);

        // User::create([
        //     'name' => fake()->name(),
        //     'email' => fake()->unique()->safeEmail(),
        //     'email_verified_at' => now(),
        //     'password' => Hash::make('password'),
        //     'role' => User::ROLE_USER,
        //     'remember_token' => Str::random(10),
        // ]);
        // Create 10 products using the ProductFactory
        Product::factory()->count(10)->create();
        Category::factory()->count(10)->create();

        $settings = [
            ['key' => 'hero_image', 'value' => "images/settings/hero_image.png"],
            ['key' => 'logo', 'value' => null],
            ['key' => 'living', 'value' => "images/living.jpg"],
            ['key' => 'dining', 'value' => "images/dining.jpg"],
            ['key' => 'bedroom', 'value' => "images/bedroom.jpg"],
            ['key' => 'primary_color', 'value' => '#ffffff'],
            ['key' => 'secondary_color', 'value' => '#000000'],
            ['key' => 'inspiration_images', 'value' => json_encode([
                "images/settings/inspiration_image_1_.jpg",
                "images/settings/inspiration_image_2_.jpg",
                "images/settings/inspiration_image_3_.jpg"])],
        ];

        foreach ($settings as $setting) {
            DB::table('settings')->updateOrInsert(
                ['key' => $setting['key']],
                ['value' => $setting['value']]
            );
        }
    }
}
