
// let form_id = document.querySelector("#submit");

// submit.addEventListener("click", function () {
function sendContact() {
    let valid;
    valid = validateContact();
    if(valid) {
        jQuery.ajax({
            url: "contact_mail.php",
            data:'userName='+$("#name").val()+'&email='+
                $("#email").val()+'&subject='+
                $("#msg_subject").val()+'&message='+
                $("#message").val(),
            type: "POST",
            success:function(data){
                $("#mail-status").html(data);
            },
            error:function (){}
        });
    }

}

function validateContact() {
    let valid = true;
    $(".demoInputBox").css('background-color','');
    $(".info").html('');
    if(!$("#name").val()) {
        $("#name-info").html("(required)");
        $("#name").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#email").val()) {
        $("#email-info").html("(required)");
        $("#email").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#email-info").html("(invalid)");
        $("#email").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#msg_subject").val()) {
        $("#subject-info").html("(required)");
        $("#msg_subject").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#message").val()) {
        $("#message-info").html("(required)");
        $("#message").css('background-color','#FFFFDF');
        valid = false;
    }
    return valid;
}