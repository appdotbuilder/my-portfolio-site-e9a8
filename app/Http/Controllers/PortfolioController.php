<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Experience;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display the portfolio homepage.
     */
    public function index()
    {
        $featuredProjects = Project::featured()
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->limit(6)
            ->get();

        $workExperiences = Experience::work()
            ->orderBy('start_date', 'desc')
            ->get();

        $educationExperiences = Experience::education()
            ->orderBy('start_date', 'desc')
            ->get();

        return Inertia::render('welcome', [
            'projects' => $featuredProjects,
            'workExperiences' => $workExperiences,
            'educationExperiences' => $educationExperiences,
        ]);
    }

    /**
     * Display the specified project.
     */
    public function show(Project $project)
    {
        return Inertia::render('project-detail', [
            'project' => $project
        ]);
    }
}