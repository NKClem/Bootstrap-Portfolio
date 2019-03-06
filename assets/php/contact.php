<?php

//address in From field of email
$from = 'Demo contact form <demo@domain.com>';

//email address that will receive the email
$sendTo = 'Nicole Clements <nkclemm@gmail.com>';

//subject of email
$subject = 'New message from contact form';

//array of field names => text to appear in email
$fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message');

//okay message
$okMessage = 'Contact form successfully submitted.  Thank you for reaching out!  I will get back with you soon!';

//error message
$errorMessage = 'There was an error while submitting the orm.  Please try again later.';

//code for sending email

error_reporting(E_ALL & ~E_NOTICE);

try
{
    if(count($_POST) == 0) throw new \Exception('Form is empty');

    $emailText = "You have a new message from your contact form\n=======================\n";

    foreach ($_POST as $key => $value) {
        //if field exists in $fields array, include it in the email
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    //all necessary headers for the email
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );

    //send email
    mail($sendTo, $subject, $emailText, implode("\n", headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

//if requested by AJAX requeest, return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: applicaton/json');

    echo $encoded;
}
//else display the message
else {
    echo $responseArray['message'];
}

?>