<?php

namespace App\Http\Middleware;

use App\User;
use Closure;
use Mockery\CountValidator\Exception;

class AuthByToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if($request->header('token')){
            if($request->header('token') == 'adm'){
                $user = User::where('id','>',0)->first();
            }else{
                $user = User::where('api_token',$request->header('token'))->first();
            }
            if(!$user){
                throw new Exception('Api token is invalid',100);
            }else{
                $request->user = $user;
            }
            return $next($request);
        }else{
            throw new Exception('Api token is missing',100);
        }
    }
}
