<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

use App\Http\Requests;

class ProductsController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    /**
     * @api {get} /v1/products/:id getProducts
     * @apiVersion 0.1.0
     * @apiName getProducts
     * @apiGroup Products
     *
     * @apiParam {int} [id]
     *
     */
    public function index() {
        return $this->helpReturn(Product::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    /**
     * @api {post} /v1/products storeProducts
     * @apiVersion 0.1.0
     * @apiName storeProducts
     * @apiGroup Products
     *
     * @apiParam {string} name
     * @apiParam {double} price
     * @apiParam {string} description
     * @apiParam {string} lessons Например '1,2,3,5'
     * @apiparam {string} google_id
     *
     */
    public function store(Request $request) {
        $rules = [
            'name'=>'required',
            'price'=>'required',
            'description'=>'required',
            'lessons'=>'required',
            'google_id'=>'required'
        ];
        return $this->fromPostToModel($rules,new Product,$request,'model');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        return $this->helpReturn(Product::findorfail($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
    }

    /**
     * @api {put} /v1/products updateProducts
     * @apiVersion 0.1.0
     * @apiName updateProducts
     * @apiGroup Products
     *
     * @apiParam {string} [name]
     * @apiParam {double} [price]
     * @apiParam {string} [description]
     * @apiParam {string} [lessons] Например '1,2,3,5'
     * @apiparam {string} [google_id]
     *
     */
    public function update(Request $request, $id) {
        $rules = [
            'name'=>false,
            'price'=>false,
            'description'=>false,
            'lessons'=>false,
            'google_id'=>false,
        ];
        return $this->fromPostToModel($rules,Product::findorfail($id),$request,'model');
    }

    /**
     * @api {delete} /v1/products/:id deleteProducts
     * @apiVersion 0.1.0
     * @apiName deleteProducts
     * @apiGroup Products
     *
     * @apiParam {string} id
     */
    public function destroy($id) {
        return $this->helpInfo(Product::findorfail($id)->delete());
    }
}
