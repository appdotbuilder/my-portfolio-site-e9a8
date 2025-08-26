<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Store a newly created contact message.
     */
    public function store(StoreContactMessageRequest $request)
    {
        $contactMessage = ContactMessage::create($request->validated());

        // Here you could send an email notification
        // Mail::to('your-email@example.com')->send(new ContactMessageReceived($contactMessage));

        return back()->with('success', 'Thank you for your message! I will get back to you soon.');
    }
}