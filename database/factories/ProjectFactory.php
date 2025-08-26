<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->sentence(10),
            'detailed_description' => $this->faker->paragraphs(3, true),
            'image_url' => 'https://picsum.photos/400/300?random=' . $this->faker->numberBetween(1, 100),
            'technologies' => $this->faker->randomElements([
                'React', 'Vue.js', 'Angular', 'Laravel', 'Node.js', 'Python', 
                'TypeScript', 'JavaScript', 'PHP', 'MySQL', 'PostgreSQL', 
                'MongoDB', 'Redis', 'Docker', 'AWS', 'Tailwind CSS'
            ], $this->faker->numberBetween(3, 6)),
            'demo_url' => $this->faker->optional(0.7)->url(),
            'github_url' => $this->faker->optional(0.8)->url(),
            'featured' => $this->faker->boolean(0.3),
            'sort_order' => $this->faker->numberBetween(1, 10),
        ];
    }

    /**
     * Indicate that the project is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'featured' => true,
        ]);
    }
}