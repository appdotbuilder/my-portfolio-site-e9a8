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
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Job title or degree');
            $table->string('company')->comment('Company name or institution');
            $table->text('description')->comment('Job or education description');
            $table->date('start_date')->comment('Start date');
            $table->date('end_date')->nullable()->comment('End date (null for current)');
            $table->enum('type', ['work', 'education'])->comment('Type of experience');
            $table->integer('sort_order')->default(0)->comment('Display order');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('type');
            $table->index('start_date');
            $table->index(['type', 'start_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('experiences');
    }
};