<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Space extends Model
{
    protected $table = 'space';
    use HasFactory;
    protected $fillable = [
        'user_id', 
        'data'
    ];    
}