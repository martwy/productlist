<?php

namespace Models;

use DbConnection as DBConnection;

abstract class Product extends DBConnection
{
    private $id;
    private $sku;
    private $name;
    private $price;
    protected $attr;

    public function __construct()
    {
        $this->setSku($_POST['sku']);
        $this->setName($_POST['name']);
        $this->setPrice($_POST['price']);
        $this->setAttr();
        $this->insertProduct($this->getSku(), $this->getName(), $this->getPrice(), $this->getAttr());
    }
    public function getSku()
    {
        return $this->sku;
    }

    public function setSku($sku)
    {
        $this->sku = $sku;
    }
    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }
    public function getPrice()
    {
        return $this->price;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function insertProduct($sku, $name, $price, $attr)
    {
        $sql = "INSERT INTO products (sku, name, price, attr) VALUES (?, ?, ?, ?)";
        $stmt = $this->getConnection()->prepare($sql);

        $stmt->execute([$sku, $name, $price, $attr]);
    }

    public function deleteProducts($ids)
    {
        $extract_ids = implode(',', $ids);
        $sql = "DELETE FROM `products` WHERE `id` IN($extract_ids)";
        $stmt = $this->getConnection()->query($sql);
        $stmt->execute();
    }
}
