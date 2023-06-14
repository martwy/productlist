<?php

class DbConnection
{
    private $host = "localhost";
    private $username = "id20755699_admin";
    private $password = "Junior!23";
    private $database = "id20755699_productlist";


    protected function getConnection()
    {
        try {
            $connection = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database, $this->username, $this->password);
        } catch(PDOException $exception) {
            echo "Error: " . $exception->getMessage();
        }

        return $connection;
    }
}
