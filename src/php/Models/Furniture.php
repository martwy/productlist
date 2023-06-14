<?php

namespace Models;

class Furniture extends Product
{
    public function getAttr()
    {
        return $this->attr;
    }

    public function setAttr()
    {
        $this->attr = "Dimension: " . $_POST['height']."x".$_POST['width']."x".$_POST['length'];
    }
}
