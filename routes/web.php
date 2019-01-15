<?php

//Web
Route::view('/', 'web.inicio');
Route::view('/inicio', 'web.inicio');

Route::view('/noticias', 'web.noticias');
Route::view('/noticias/{slug}', 'web.noticia');

Route::view('/servicios', 'web.servicios.servicios');
Route::view('/servicios/salon-de-juntas', 'web.servicios.salon-de-juntas');
Route::view('/servicios/salon-social', 'web.servicios.salon-social');
Route::view('/servicios/bbq', 'web.servicios.bbq');

Route::view('/archivos', 'web.archivos');

Route::view('/clasificados', 'web.clasificados');
Route::view('/clasificados/{slug}', 'web.clasificado');

Route::view('/peticiones', 'web.peticiones.peticiones');
Route::view('/peticiones/genericas', 'web.peticiones.peticiones_genericas');
Route::view('/peticiones/parqueadero', 'web.peticiones.peticion_parqueadero');

Route::view('/censo', 'web.censo');

Route::view('/pagos', 'web.pagos');

//Admin
Route::view('/admin', 'admin.index');
Route::view('/admin/noticias', 'admin.noticias');