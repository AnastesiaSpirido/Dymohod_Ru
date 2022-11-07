 $(document).ready(function() {
  if (typeof $.cookie("bg_color")!=="undefined") {
  let form_id = document.getElementById("bg_form");
  let form_value = $.cookie("bg_color");
  form_id.value = form_value;
  $("body").css("background-color", $.cookie("bg_color"));
         }
        
    $("#bg_form").change(function(){
    $("body").css("background-color", $("#bg_form :selected").val());
     $.cookie("bg_color", $("#bg_form :selected").val(), {expires: 1});
         });
        });