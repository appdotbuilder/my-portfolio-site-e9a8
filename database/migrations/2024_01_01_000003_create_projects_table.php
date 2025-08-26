<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Project title');
            $table->text('description')->comment('Short project description');
            $table->text('detailed_description')->comment('Detailed project description');
            $table->string('image_url')->nullable()->comment('Project image URL');
            $table->json('technologies')->comment('Technologies used in the project');
            $table->string('demo_url')->nullable()->comment('Live demo URL');
            $table->string('github_url')->nullable()->comment('GitHub repository URL');
            $table->boolean('featured')->default(false)->comment('Whether project is featured');
            $table->integer('sort_order')->default(0)->comment('Display order');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('featured');
            $table->index('sort_order');
            $table->index(['featured', 'sort_order']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};