<?php

require_once './autoloader.php';
$controller = new Controllers\Controller();
$controller->addProduct();
$controller->massDelete();
$controller->viewProducts();
