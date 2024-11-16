<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        $settings = Setting::all()->pluck('value', 'key');
        return Inertia::render('Admin/Home/Settings/Create', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request): \Illuminate\Http\RedirectResponse
    {
        $validated = $request->validate([
            'hero_image' => 'nullable|image|max:2048',
            'logo' => 'nullable|image|max:2048',
            'primary_color' => 'required|string',
            'secondary_color' => 'required|string',
        ]);

        foreach ($validated as $key => $value) {
            $setting = Setting::firstOrNew(['key' => $key]);
            if (in_array($key, ['hero_image', 'logo']) && $request->hasFile($key)) {
                $path = $request->file($key)->store('settings', 'public');
                $setting->value = $path;
            } else {
                $setting->value = $value;
            }
            $setting->save();
        }

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
