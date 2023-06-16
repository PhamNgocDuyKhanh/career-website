<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// File upload
$cv = $_FILES['cv'];
$cv_name = $cv['name'];
$cv_tmp_name = $cv['tmp_name'];

// Email details
$to = 'khanh.phamngocduy@positivethinking.tech';
$subject = 'New CV Submission';
$body = "Name: $name\nEmail: $email\nMessage: $message";

// Attach CV file
$attachments = array($cv_tmp_name);

// Headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=" . uniqid(rand(), true) . "\r\n";

// Email sending
$mail_sent = mail($to, $subject, $body, $headers, $attachments);

// Check if the email was sent successfully
if ($mail_sent) {
  echo 'CV submitted successfully. Thank you!';
} else {
  echo 'CV submission failed. Please try again.';
}
?>
