<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'firstname',
        'lastname',
        'email',
        'phone',
        'town',
        'address',
        'delivery_det',
        'total_amount',
        'status',
        'shipping_address',
        'billing_address',
        'payment_method',
        'payment_status',
        'shipping_method',
        'shipping_cost',
        'items',
        'notes',
    ];

    protected $casts = [
        'items' => 'array',
        'shipping_cost' => 'decimal:2',
        'total_amount' => 'decimal:2',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
