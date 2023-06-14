<?php

namespace Controllers;

use Models\Product as Product;

class Controller extends Product
{
    private $type;
    private $massDeleteIds;
    public function __construct()
    {
        if(isset($_POST['sku'])) {
            $this->type = '\\Models\\' . $_POST['productType'];
        }
    }
    public function __set($name, $value)
    {
        echo "Setting '$name' to '$value'\n";
        $this->$name = $value;
    }

    public function addProduct()
    {
        header('Access-Control-Allow-Origin: https://lovely-rails.000webhostapp.com/add-product');
        if(isset($_POST['sku'])) {
            new $this->type();
        }
    }

    public function massDelete()
    {
        header('Access-Control-Allow-Origin: https://lovely-rails.000webhostapp.com/');
        if(isset($_POST['ids'])) {
            $this->massDeleteIds = $_POST['ids'];
            $this->deleteProducts($this->massDeleteIds);
        }
    }

    public function viewProducts(){
        header('Access-Control-Allow-Origin: https://lovely-rails.000webhostapp.com/');
        $viewProduct = new \Views\ProductView();
        $viewProduct->getProducts();
    }

}
