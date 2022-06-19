<?php

use App\Http\Controllers\Controlleruser;
use App\Http\Controllers\Controllerproduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [Controlleruser::class, 'register']);
Route::post('login', [Controlleruser::class, 'login']);
Route::post('addproduct', [Controllerproduct::class, 'addProduct']);
Route::get('list', [Controllerproduct::class, 'list']);
Route::delete('delete/{id}', [Controllerproduct::class, 'delete']);
Route::get('product/{id}', [Controllerproduct::class, 'getProduct']);
Route::put('updateproduct/{id}', [Controllerproduct::class, 'updateProduct']);
Route::get('search/{key}', [Controllerproduct::class, 'search']);
