<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use Mockery\CountValidator\Exception;

class UsersController extends Controller
{
    /**
     * @api {post} /v1/users LoginBySocialToken
     * @apiVersion 0.1.0
     * @apiName LoginBySocialToken
     * @apiGroup Users
     * @apiDescription Отправляем токен после получения его от гугла, если записи в базе с таким токеном нет, она будет создана, если есть, то вернётся объект User
     *
     *
     * @apiParam {string} social_token
     */
    public function login(Request $request){
        if(!$request->social_token){
            throw new Exception('Missing social token',100);
        }else{
            $user = User::where('social_token',$request->social_token)->first();
            if(!$user){
                $user = new User;
                $user->social_token = $request->social_token;
                $user->api_token = md5($request->social_token.rand(999,99999));
                $user->save();
            }
            return $this->helpReturn($user);
        }
    }
    /**
     * @api {put} /v1/users UpdateUser
     * @apiVersion 0.1.0
     * @apiName searchMessage
     * @apiGroup Users
     * @apiPermission Secured
     * @apiDescription Обновить профиль пользователя
     *
     * @apiHeader {string} token
     *
     * @apiParam {string} [name]
     * @apiParam {int} [age]
     * @apiParam {string} [city]
     * @apiParam {string} [email]
     */
    public function update(Request $request){
        $rules = ['name'=>false,'age'=>false,'city'=>false,'email'=>false];
        return $this->fromPostToModel($rules,User::findorfail($request->user->id),$request,'model');
    }
}
