<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model {
    use SoftDeletes;
    protected $table = 'products';

    public function getLessonsAttribute($v) {
        $lessons = json_decode($v);
        $list = [];
        if(is_array($lessons)){
            foreach($lessons as $lesson){
                $list[] = Lesson::find($lesson);
            }
        }
        return $list;
    }

}
