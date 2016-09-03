<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $table = 'users';

    public function lessons(){
        return $this->belongsToMany('App\Lesson','user_lesson','user_id','lesson_id');
    }
}
