<?php session_start() ?>
<?php
if (isset($_SESSION['valid'])){
    $raw_data = file_get_contents('php://input');
    $data = json_decode($raw_data);
    $valid = validate($data);
    if ($valid == true) {
        $f = fopen("static/JelloRoster.json", "w");
        fwrite($f,$raw_data);
        echo "OK!\r\n";
    } else {
        echo "Error\r\n";
    }
} else {
    echo "You must log in!\r\n";
}

function validate($data) {
    if (count($data) > 25) {
        return false;
    }
    $pattern = '/^[A-Za-z\- ]+$/';
    foreach ($data as $d) {
        if (!property_exists($d, "name") || strlen($d->name) > 100 || preg_match($pattern, $d->name) == 0) {
            return false;
        }
        if (!property_exists($d, "female") || !gettype($d->female) == "boolean") {
            return false;
        }
        if (!property_exists($d, "power") || $d->power > 10 || $d->power < 1) {
            return false;
        }
        if (!property_exists($d, "technique") || $d->technique > 10 || $d->technique < 1) {
            return false;
        }
        if (!property_exists($d, "speed") || $d->speed > 10 || $d->speed < 1) {
            return false;
        }
    }
    return true;

}
?>