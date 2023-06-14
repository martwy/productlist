<?php

namespace Views;
use DbConnection as DBConnection;
class ProductView extends DbConnection
{
    public function getProducts()
    {
        $sql = "SELECT * FROM products";
        $stmt = $this->getConnection()->query($sql);
        $products = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        echo json_encode($products);
    }
}
