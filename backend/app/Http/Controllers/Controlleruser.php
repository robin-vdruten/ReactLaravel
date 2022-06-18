<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\user;

class Controlleruser extends Controller
{
    function register(Request $req)
    {
        $user = new User();
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password = $req->input('password');
        $user->save();
        return $user;
    }
}
