 <!-- Frederika Kmeťová
 ITW druhý projekt
 2023/2024
 .js file -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $rating = $_POST["rating"];
    $comment = $_POST["comment"];
    
    $to = 'frederyka@gmail.com';
$subject = 'Test Email';
$message = 'This is a test email.';
$headers = 'From: webmaster@example.com' . "\r\n" .
           'Reply-To: webmaster@example.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();
if (mail($to, $subject, $message, $headers)) {
    echo 'Test email sent successfully.';
} else {
    echo 'Error sending test email.';
}
?>


