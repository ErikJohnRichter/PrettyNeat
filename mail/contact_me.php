<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'hello@thisisprettyneat.com';
$email_subject = "Website Subscription Form:  $name";
$email_body = "Subscription from PrettyNeat.\n\n"."Name: $name\n\nEmail: $email_address\n\nMessage: \n$message";

mail($to,$email_subject,$email_body);
return true;			
?>