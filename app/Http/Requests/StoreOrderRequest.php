<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
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
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'town' => 'required|string',
            'address' => 'required|string',
            'delivery_det' => 'required|string',
            'total_amount' => 'required|numeric',
            'status' => 'required|string',
            'shipping_address' => 'required|string',
            'billing_address' => 'nullable|string',
            'payment_method' => 'required|string',
            'payment_status' => 'required|string',
            'shipping_method' => 'nullable|string',
            'shipping_cost' => 'nullable|numeric',
            'items' => 'required|array',
            'notes' => 'nullable|string',
        ];
    }
}
