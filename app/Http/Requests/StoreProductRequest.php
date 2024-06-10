<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
            'category' => 'required|string|max:255',
            'room' => 'required|string|max:255',
            'brand' => 'required|string|max:255',
            'material' => 'required|string|max:255',
            'color' => 'required|string|max:255',
            'dimensions.depth' => 'required|numeric',
            'dimensions.width' => 'required|numeric',
            'dimensions.height' => 'required|numeric',
            'weight' => 'required|numeric',
            'rating' => 'required|numeric|min:0|max:5',
            'reviews' => 'required|array',
            'sizes' => 'required|array',
            'colors' => 'required|array',
            'images' => 'array',
            'newimages.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }
}
