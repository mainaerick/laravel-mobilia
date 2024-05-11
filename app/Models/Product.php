<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
        'category',
        'brand',
        'material',
        'color',
        'dimensions',
        'weight',
        'rating',
        'images',
        'reviews'
    ];

    protected $casts = [
        'dimensions' => 'array',
        'images' => 'array',
        'reviews' => 'array',

    ];

}
