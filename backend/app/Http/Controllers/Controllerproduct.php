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
        $product->price = $req->input('price');
        $product->file = $req->input('file');
        $product->description = $req->input('description');
        $product->save();

        return $product;
    }

    function updateProduct($id, request $req)
    {
        $product = Product::find($id);
        $product->name = $req->input('name');
        $product->description = $req->input('description');
        $product->price = $req->input('price');
        if ($req->input('file')) {
            $product->file = $req->input('file');
        }
        $product->save();

        return $product;
    }

    function list()
    {
        return Product::all();
    }

    function getProduct($id)
    {
        return Product::find($id);
    }

    function search($key)
    {
        return Product::where('name', 'like', "%$key%")->get();
    }

    function delete($id)
    {
        $result = Product::where('id', $id)->delete();
        if ($result) {
            return ['result' => 'product has been deleted'];
        } else {
            return ['result' => 'failed to delete product'];
        }
    }
}
