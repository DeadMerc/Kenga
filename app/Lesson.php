<?php

namespace App;


use Illuminate\Database\Eloquent\Model;
use Request;

class Lesson extends Model
{
    protected $table = 'lessons';
    public $appends = [ 'access' ,'listened'];

    public function getListenedAttribute(){
        return 0;
    }

    public function getAccessAttribute() {
        $token = Request::header('token');
        //$access = false;
        if ($token) {
            if (User_Lesson::where('user_id', User::where('api_token', $token)->first()->id)
                ->where('lesson_id',$this->getAttribute('id'))
                ->first()) {
                $access = true;
            } else {
                $access = false;
            }
        } else {
            $access = 'not_know';
        }

        if ($access == true) {
            return 1;
        } elseif ($access == false) {
            /*
             * TODO: temp for test, default:0
             */
            return 1;
        } else {
            return null;
        }
    }

    public function getTrackAttribute($v) {
        if ($this->getAccessAttribute() == 0) {
            return null;
        } else {
            return $v;
        }
    }


}
