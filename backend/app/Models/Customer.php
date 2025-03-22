<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory; // Ensure this is included

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'contact_number',
    ];
}
