
<?php
    $name = $_POST["quote-name"];
    $email = $_POST["quote-email"];
    $series = $_POST["selectOption"];
    $message = $_POST["quote-message"];
    $mobile = $_POST["quote-number"];
    $location = $_POST["quote-location"];

    $email_subject = "$name wants to get quotation of "$series" details \n Mobile: $mobile \n Location: $location";
    $headers = "From: $email";

    mail("phaneendrakumar121@gmail.com", $headers,  $message, $email_subject);
    header("Location: thankyou.html");
?>

