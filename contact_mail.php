<?php
//$toEmail = "selimreza9920@gmail.com";
//$mailHeaders = "From: " . isset($_POST["name"]) . "<". $_POST["email"] .">\r\n";
//if(mail($toEmail, $_POST["subject"], $_POST["message"], $mailHeaders)) {
//    print "<p class='success'>Mail Sent.</p>";
//} else {
//    print "<p class='Error'>Problem in Sending Mail.</p>";
//}
//?>

<?php
if (isset($_POST["email"]) != ''){
    $ToEmail = 'selimreza9920@gmail.com';
    $EmailSubject = 'Mail From SNM Site';
    $mailheader = "From: ".$_POST["email"]."\r\n";
    $mailheader .= "Reply-To: ".$_POST["email"]."\r\n";
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $MESSAGE_BODY = "Name: ".isset($_POST["name"])."<br>";
    $MESSAGE_BODY .= "Email: ".$_POST["email"]."<br>";
    $MESSAGE_BODY .= "Message: ".nl2br($_POST["message"])."";

    if(mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader)){
        print "<p class='success'> Your mail has send successfully.</p>";
    }else{
        print "<p class='Error'>something is wrong</p>";
    }
}
?>