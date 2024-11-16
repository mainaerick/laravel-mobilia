<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::create(['key' => 'hero_image', 'value' => null]);
        Setting::create(['key' => 'logo', 'value' => null]);
        Setting::create(['key' => 'primary_color', 'value' => '#ffffff']);
        Setting::create(['key' => 'secondary_color', 'value' => '#000000']);
    }
}
