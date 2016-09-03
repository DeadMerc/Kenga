<?php

namespace App\Http\Controllers;

use App\User_Lesson;
use Illuminate\Http\Request;

use App\Http\Requests;
use Mockery\CountValidator\Exception;

class PaymentsController extends Controller
{
    /**
     * @api {post} /v1/payments/check PaymentCheck
     * @apiVersion 0.1.0
     * @apiName PaymentCheck
     * @apiGroup Payments
     * @apiDescription Проверка покупки по хешу, так же добавление новые доступных уроков по хешу, пример покупки http://prntscr.com/cdogm2
     *
     *
     * @apiParam {string} payment_hash Хеш с покупки для её проверки
     * @apiParam {array} lessons Уроки, которые были куплены
     * @apiParam {string} security_hash Хеш для подтверждения отправителя, создаётся как sha1('NBA'.payment_hash.serialize(lessons).'VICTORY') при тесте, показывает, какой хеш ожидает система
     */
    public function checkPurchase(Request $request){
        $rules = [
            'payment_hash'=>'required',
            'lessons'=>'required',
            'security_hash'=>'required'
        ];
        $valid = Validator($request->all(),$rules);
        if($valid->fails()){
            throw new Exception(implode(',',$valid->errors()->all()),100);
        }
        if(!is_array($request->lessons)){
            $request->lessons = json_decode($request->lessons);;
        }
        $security_hash = sha1('NBA'.$request->payment_hash.serialize($request->lessons).'VICTORY');
        if($security_hash != $request->security_hash){
            throw new Exception('Hash is wrong, i want like this:'.$security_hash,100);
        }

        if(is_array($request->lessons)){
            foreach($request->lessons as $lesson){
                User_Lesson::firstOrCreate(['user_id'=>$request->user->id,'lesson_id'=>$lesson]);
            }
            return $this->helpInfo();
        }else{
            throw new Exception('Lessons is not valid json array',100);
        }

    }
}
