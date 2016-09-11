<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group([ 'prefix' => 'api'], function () {
    Route::group([ 'prefix' => 'v1'], function () {
        Route::post('users','UsersController@login');

        Route::post('lessons','LessonsController@store');
        Route::put('lessons/{id}','LessonsController@update');
        Route::group([ 'middleware' => \App\Http\Middleware\AuthByToken::class], function () {
            Route::put('users','UsersController@update');
            Route::get('lessons','LessonsController@showAll');

            Route::resource('products','ProductsController');

            Route::post('payments/check','PaymentsController@checkPurchase');
        });
    });
});