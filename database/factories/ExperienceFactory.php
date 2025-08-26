<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Experience>
 */
class ExperienceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = $this->faker->dateTimeBetween('-5 years', '-1 year');
        $endDate = $this->faker->optional(0.7)->dateTimeBetween($startDate, 'now');

        return [
            'title' => $this->faker->jobTitle(),
            'company' => $this->faker->company(),
            'description' => $this->faker->paragraphs(2, true),
            'start_date' => $startDate,
            'end_date' => $endDate,
            'type' => $this->faker->randomElement(['work', 'education']),
            'sort_order' => $this->faker->numberBetween(1, 10),
        ];
    }

    /**
     * Indicate that the experience is work-related.
     */
    public function work(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'work',
            'title' => $this->faker->jobTitle(),
            'company' => $this->faker->company(),
        ]);
    }

    /**
     * Indicate that the experience is education-related.
     */
    public function education(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'education',
            'title' => $this->faker->randomElement([
                'Bachelor of Computer Science',
                'Master of Software Engineering',
                'Bachelor of Information Technology',
                'Diploma in Web Development'
            ]),
            'company' => $this->faker->randomElement([
                'University of Technology',
                'Tech Institute',
                'Digital Arts College',
                'State University'
            ]),
        ]);
    }
}