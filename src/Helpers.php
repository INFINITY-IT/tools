<?php
/**
 * a simple function to encrypt data for response
 * @param $data
 * @param string $key
 * @return array
 */
function crypt_response($data, string $key = '$BZMf'): array
{
    $data = json_encode($data);
    $base64 = base64_encode($data);
    $eq = 0;
    while ($base64[strlen($base64) - 1] == '=') {
        $base64 = substr($base64, 0, -1);
        $eq++;
    }
    $base64 = strrev($base64);
    $base64 = base64_encode($base64);
    return [
        $key => $base64,
        'e' => $eq
    ];
}

function refreshToken()
{
    $auth = [];
    foreach (config('auth.guards') as $guard => $value) {
        $auth[$guard] = auth($guard)->check();
    }
    return response()->json(crypt_response([
        'token' => csrf_token(),
        'auth' => $auth,
    ]));
}
