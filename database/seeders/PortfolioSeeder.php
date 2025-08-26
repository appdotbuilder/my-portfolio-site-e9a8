<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Experience;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create sample projects
        Project::create([
            'title' => 'E-Commerce Platform',
            'description' => 'A full-featured e-commerce platform with modern design and powerful admin panel.',
            'detailed_description' => 'Built a comprehensive e-commerce solution using Laravel and React. Features include product management, shopping cart, payment integration, order tracking, and advanced analytics. The platform handles thousands of products and processes hundreds of orders daily.',
            'image_url' => 'https://picsum.photos/400/300?random=1',
            'technologies' => ['Laravel', 'React', 'TypeScript', 'MySQL', 'Redis', 'Stripe API'],
            'demo_url' => 'https://demo.example.com',
            'github_url' => 'https://github.com/username/ecommerce',
            'featured' => true,
            'sort_order' => 1,
        ]);

        Project::create([
            'title' => 'Task Management App',
            'description' => 'A collaborative task management application with real-time updates and team features.',
            'detailed_description' => 'Developed a modern task management application that allows teams to collaborate effectively. Features include real-time notifications, drag-and-drop task organization, time tracking, and comprehensive reporting. Built with focus on user experience and performance.',
            'image_url' => 'https://picsum.photos/400/300?random=2',
            'technologies' => ['Vue.js', 'Node.js', 'Socket.io', 'PostgreSQL', 'Docker'],
            'demo_url' => 'https://tasks.example.com',
            'github_url' => 'https://github.com/username/tasks',
            'featured' => true,
            'sort_order' => 2,
        ]);

        Project::create([
            'title' => 'Portfolio Website',
            'description' => 'A responsive portfolio website showcasing creative work and professional experience.',
            'detailed_description' => 'Designed and developed a stunning portfolio website with smooth animations, dark mode support, and SEO optimization. The site features a modern design system, optimized performance, and accessibility compliance.',
            'image_url' => 'https://picsum.photos/400/300?random=3',
            'technologies' => ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
            'demo_url' => 'https://portfolio.example.com',
            'github_url' => 'https://github.com/username/portfolio',
            'featured' => true,
            'sort_order' => 3,
        ]);

        // Create additional projects
        Project::factory(6)->create();

        // Create work experiences
        Experience::create([
            'title' => 'Senior Full Stack Developer',
            'company' => 'Tech Solutions Inc.',
            'description' => 'Led development of multiple high-traffic web applications. Managed a team of 5 developers and implemented CI/CD pipelines that improved deployment efficiency by 60%. Specialized in Laravel, React, and cloud infrastructure.',
            'start_date' => '2022-01-01',
            'end_date' => null, // Current job
            'type' => 'work',
            'sort_order' => 1,
        ]);

        Experience::create([
            'title' => 'Full Stack Developer',
            'company' => 'Digital Agency Pro',
            'description' => 'Developed and maintained client websites and web applications. Worked closely with design teams to implement pixel-perfect UIs. Built RESTful APIs and integrated third-party services.',
            'start_date' => '2020-03-01',
            'end_date' => '2021-12-31',
            'type' => 'work',
            'sort_order' => 2,
        ]);

        Experience::create([
            'title' => 'Frontend Developer',
            'company' => 'StartupXYZ',
            'description' => 'Focused on creating responsive and interactive user interfaces. Collaborated with UX designers to improve user experience. Implemented modern frontend technologies and best practices.',
            'start_date' => '2019-01-01',
            'end_date' => '2020-02-29',
            'type' => 'work',
            'sort_order' => 3,
        ]);

        // Create education experiences
        Experience::create([
            'title' => 'Bachelor of Computer Science',
            'company' => 'University of Technology',
            'description' => 'Graduated with honors. Specialized in software engineering and web development. Completed capstone project on machine learning applications in web development.',
            'start_date' => '2015-09-01',
            'end_date' => '2019-05-31',
            'type' => 'education',
            'sort_order' => 1,
        ]);

        Experience::create([
            'title' => 'Web Development Bootcamp',
            'company' => 'Code Academy Pro',
            'description' => 'Intensive 6-month program covering full-stack web development. Built 10+ projects using modern technologies. Learned agile development methodologies and collaborative coding practices.',
            'start_date' => '2018-06-01',
            'end_date' => '2018-12-31',
            'type' => 'education',
            'sort_order' => 2,
        ]);
    }
}