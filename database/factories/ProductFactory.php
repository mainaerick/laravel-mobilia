<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $room = $this->faker->randomElement(['living', 'bedroom', 'dining']);
        $category = $this->faker->randomElement($room == "dining" ? ['tables',] : ($room === "living" ? ['chairs', 'sofas',] : ($room === "bedroom" ? ['beds'] : null)));

        // Helper to load only allowed image types
        $loadImages = function ($folder) {
            $allowed = ['jpg', 'jpeg', 'png','webp'];

            return collect(Storage::disk('public')->files("images/$folder"))
                ->filter(function ($file) use ($allowed) {
                    return in_array(strtolower(pathinfo($file, PATHINFO_EXTENSION)), $allowed);
                })
                ->values()
                ->toArray();
        };

// Load images per room (filtered)
        $livingImages  = $loadImages("living");
        $diningImages  = $loadImages("dining");
        $bedroomImages = $loadImages("bedroom");

// Pick 1–3 random valid images
        $pickRandomImages = function ($images) {
            if (empty($images)) {
                return [];
            }

            $count = rand(1, min(3, count($images)));

            return collect($images)
                ->random($count)
                ->values()
                ->toArray();
        };

// Decide images by room
        $images = match ($room) {
            'dining'  => $pickRandomImages($diningImages),
            'bedroom' => $pickRandomImages($bedroomImages),
            'living'  => $pickRandomImages($livingImages),
            default   => [],
        };
        return [
            'name' => $this->faker->unique()->word,
            'description' => $this->faker->sentence,
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'quantity' => $this->faker->numberBetween(1, 100),
            'category' => $category,
            'room' => $room,
            'brand' => $this->faker->company,
            'material' => $this->faker->randomElement(['wood', 'metal', 'plastic']),
            'color' => $this->faker->colorName,
            'dimensions' => ['height' => $this->faker->numberBetween(50, 200), 'width' => $this->faker->numberBetween(50, 200), 'depth' => $this->faker->numberBetween(50, 200)],
            'weight' => $this->faker->randomFloat(2, 1, 100),
            'rating' => $this->faker->randomFloat(2, 0, 5),
            'images'      => $images,
            'reviews' => [
                fake()->sentence,
                fake()->sentence,
            ],
            'sizes' => $category == "sofas" ? ['1 seater', '2 seater', '3 seater'] : ($category == "beds" ? ['3 by 6', '4 by 6', '5 by 6', '6 by 6'] : null),
            'colors' => [fake()->colorName(), fake()->colorName(), fake()->colorName()],
            'created_at' => time(),
            'updated_at' => time(),

        ];
    }
}
