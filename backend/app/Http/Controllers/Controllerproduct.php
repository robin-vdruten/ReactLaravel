<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\product;

class Controllerproduct extends Controller
{
    function addProduct(Request $req)
    {
        $product = new Product();
        $product->name = $req->input('name');
    }
}
