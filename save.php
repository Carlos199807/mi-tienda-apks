<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = file_get_contents("php://input");
    $decoded = json_decode($data, true);
    if ($decoded === null) {
        echo json_encode(["ok" => false, "error" => "JSON invalido"]);
        exit;
    }
    $file = "tienda_data.json";
    $result = file_put_contents($file, json_encode($decoded, JSON_PRETTY_PRINT));
    if ($result !== false) {
        echo json_encode(["ok" => true]);
    } else {
        echo json_encode(["ok" => false, "error" => "No se pudo guardar"]);
    }
} else {
    echo json_encode(["ok" => false, "error" => "Metodo no permitido"]);
}
?>