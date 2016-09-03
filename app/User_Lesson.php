<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User_Lesson extends Model
{
    protected $table = 'user_lesson';
    public $fillable =[
        'user_id','lesson_id'
    ];

    public $timestamps  = false;
}
