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
            'hero_image' => 'nullable|image|max:5048',
            'logo' => 'nullable|image|max:5048',
            'dining' => 'nullable|image|max:5048',
            'bedroom' => 'nullable|image|max:5048',
            'living' => 'nullable|image|max:5048',
            'primary_color' => 'required|string',
            'secondary_color' => 'required|string',
            'inspiration_images.*' => 'nullable|image|max:5048', // Validate each uploaded image

        ]);

        foreach ($validated as $key => $value) {
            $setting = Setting::firstOrNew(['key' => $key]);
            if ($key === 'hero_image' && $request->hasFile($key)) {
                $file = $request->file($key);
                $extension = $file->getClientOriginalExtension();
                $fileName = 'hero_image' . '.' . $extension;
                $path = $file->storeAs('images/settings', $fileName, 'public'); // Store with custom name
                $setting->value = $path;
            }
            else if (in_array($key, ['logo','dining','bedroom','living']) && $request->hasFile($key)) {
                $path = $request->file($key)->store('images/settings', 'public');

                $setting->value = $path;
            }

            elseif ($key === 'inspiration_images' && $request->hasFile('inspiration_images')) {
                $images = [];
                foreach ($request->file('inspiration_images') as $index => $file) {
                    $fileName = 'inspiration_image_' . ($index + 1) . '_' . '.' . $file->getClientOriginalExtension();
                    $path = $file->storeAs('images/settings', $fileName, 'public');
                    $images[] = $path;
                }
                $setting->value = json_encode($images); // Store as JSON}
            }
            else {
                $setting->value = $value;
            }
            $setting->save();
        }

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
