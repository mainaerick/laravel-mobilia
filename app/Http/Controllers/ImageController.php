<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function show($path)
    {
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
    }
}
