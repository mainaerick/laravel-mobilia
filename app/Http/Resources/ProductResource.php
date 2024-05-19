<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'quantity' => $this->quantity,
            'category' => $this->category,
            'brand' => $this->brand,
            'material' => $this->material,
            'color' => $this->color,
            'dimensions' => $this->dimensions,
            'weight' => $this->weight,
            'images' => $this->images,
            'rating' => $this->rating,
            'reviews' => $this->reviews,
            'sizes'=>$this->sizes,
            'colors'=>$this->colors,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            
        ];
        // return parent::toArray($request);
    }
}
