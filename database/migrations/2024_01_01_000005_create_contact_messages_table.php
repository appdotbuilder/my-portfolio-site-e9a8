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
        Schema::create('contact_messages', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Sender name');
            $table->string('email')->comment('Sender email');
            $table->text('message')->comment('Contact message');
            $table->boolean('read')->default(false)->comment('Whether message has been read');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('read');
            $table->index('created_at');
            $table->index(['read', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_messages');
    }
};