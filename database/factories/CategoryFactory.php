<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->randomElement(['beds', 'chairs', 'tables', 'sofas']);
        $materials = ['wood', 'metal', 'plastic'];
        $colors = [$this->faker->colorName, $this->faker->colorName, $this->faker->colorName];
        $sizes = $name == "sofas" ? ['1 seater', '2 seater', '3 seater'] : ($name == "beds" ? ['3 by 6', '4 by 6', '5 by 6', '6 by 6'] : null);
        return [
            'name' => $name,
            'materials' => $materials,
            'colors' => $colors,
            'sizes' => $sizes
        ];
    }
}
