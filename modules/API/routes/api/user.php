<?php
/**
 * JUZAWEB CMS - Laravel CMS for Your Project
 *
 * @package    juzaweb/juzacms
 * @author     The Anh Dang
 * @link       https://juzaweb.com/cms
 * @license    GNU V2
 */

use Juzaweb\Api\Http\Controllers\UserController;

Route::group(
    [
        'prefix' => 'user',
        'middleware' => 'auth:sanctum',
    ],
    function () {
        Route::apiResource('/', UserController::class);
    }
);
