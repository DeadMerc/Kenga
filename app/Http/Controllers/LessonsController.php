<?php

namespace App\Http\Controllers;

use App\Lesson;
use Illuminate\Http\Request;

use App\Http\Requests;

class LessonsController extends Controller
{
    /**
     * @api {post} /v1/lessons storeLesson
     * @apiVersion 0.1.0
     * @apiName storeLesson
     * @apiGroup Lessons
     *
     *
     * @apiParam {string} title
     * @apiParam {string} sub_title
     * @apiParam {string} description
     * @apiParam {string} track
     * @apiParam {string} image
     *
     */
    public function store(Request $request){
        $rules = ['title'=>'required','sub_title'=>'required','description'=>'required','track'=>'required','image'=>false];
        return $this->helpReturn($this->fromPostToModel($rules,new Lesson,$request,'model'));
    }
    /**
     * @api {put} /v1/lessons/:id updateLesson
     * @apiVersion 0.1.0
     * @apiName updateLesson
     * @apiGroup Lessons
     *
     *
     * @apiParam {string} title
     * @apiParam {string} sub_title
     * @apiParam {string} description
     * @apiParam {string} track
     * @apiParam {string} image
     *
     */
    public function update(Request $request,$id){
        $rules = ['title'=>'required','sub_title'=>'required','description'=>'required','track'=>'required','image'=>false];
        return $this->helpReturn($this->fromPostToModel($rules,Lesson::findorfail($id),$request,'model'));
    }
    /**
     * @api {get} /v1/lessons/:id getLessons
     * @apiVersion 0.1.0
     * @apiName getLessons
     * @apiGroup Lessons
     *
     * @apiHeader token
     *
     */
    public function showAll(Request $request){
        return $this->helpReturn(Lesson::all());
    }
}
