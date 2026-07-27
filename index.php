<?php
// PHP Transparent Proxy to local Node.js server on port 5000
$node_base = 'http://127.0.0.1:5000';
$request_uri = str_replace('/backend-api', '/api', $_SERVER['REQUEST_URI']);
$url = $node_base . $request_uri;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $_SERVER['REQUEST_METHOD']);

$headers = [];
foreach (getallheaders() as $key => $value) {
    if (strtolower($key) !== 'host') {
        $headers[] = "$key: $value";
    }
}
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$body = file_get_contents('php://input');
if ($body) {
    curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
}

curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$err = curl_error($ch);
curl_close($ch);

if ($err) {
    header("HTTP/1.1 500 Internal Server Error");
    echo "Proxy Error: " . $err;
    exit;
}

$res_headers = substr($response, 0, $header_size);
$res_body = substr($response, $header_size);

http_response_code($http_code);

foreach (explode("\r\n", $res_headers) as $hdr) {
    if ($hdr && stripos($hdr, 'Transfer-Encoding') === false && stripos($hdr, 'Content-Length') === false && stripos($hdr, 'HTTP/') === false) {
        header($hdr);
    }
}

echo $res_body;
?>
