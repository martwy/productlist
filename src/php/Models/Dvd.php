<?php

namespace Models;

class Dvd extends Product
{
    public function getAttr()
    {
        return $this->attr;
    }

    public function setAttr()
    {
        $this->attr = "Size: " . $_POST['size'] . " MB";
    }
}
