<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'firstname'=>$this->firstname,
            'lastname'=>$this->lastname,
            'email'=>$this->email,
            'phone'=>$this->phone,
            'town'=>$this->town,
            'address'=>$this->address,
            'delivery_det'=>$this->delivery_det,
            'total_amount' => $this->total_amount,
            'status' => $this->status,
            'shipping_address' => $this->shipping_address,
            'billing_address' => $this->billing_address,
            'payment_method' => $this->payment_method,
            'payment_status' => $this->payment_status,
            'shipping_method' => $this->shipping_method,
            'shipping_cost' => $this->shipping_cost,
            'items' => $this->items,
            'notes' => $this->notes,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
