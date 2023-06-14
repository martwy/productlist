<?php

namespace Models;

class Book extends Product
{
    public function getAttr()
    {
        return $this->attr;
    }

    public function setAttr()
    {
        $this->attr = "Weight: " . $_POST['weight'] . "KG";
    }
}
