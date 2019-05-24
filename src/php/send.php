<?php

$sendto   = "";

    $username = $_POST['name'];
	$phone = $_POST['phone'];
	$tariff = $_POST['tariff'];



	
	$subject  = "Заказ тарифа.";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Заказ тарифа.</h2>\r\n";
    $msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
	$msg .= "<p><strong>Тариф:</strong> ".$tariff."</p>\r\n";
	$msg .= "</body></html>";

	@mail($sendto, $subject, $msg, $headers);

?>
