<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
        $category = $this->faker->randomElement(['chairs', 'tables', 'sofas', 'beds']);
        return [
            'name' => $this->faker->unique()->word,
            'description' => $this->faker->sentence,
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'quantity' => $this->faker->numberBetween(1, 100),
            'category' => $category,
            'room' => $this->faker->randomElement(['living', 'bedroom', 'dining']),
            'brand' => $this->faker->company,
            'material' => $this->faker->randomElement(['wood', 'metal', 'plastic']),
            'color' => $this->faker->colorName,
            'dimensions' => ['height' => $this->faker->numberBetween(50, 200), 'width' => $this->faker->numberBetween(50, 200), 'depth' => $this->faker->numberBetween(50, 200)],
            'weight' => $this->faker->randomFloat(2, 1, 100),
            'rating' => $this->faker->randomFloat(2, 0, 5),
            'images' => [
                fake()->imageUrl(),
                fake()->imageUrl(),
                fake()->imageUrl(),
                fake()->imageUrl(),
            ],
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
