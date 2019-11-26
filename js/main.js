$('#submit').click(function (e) {
    e.preventDefault();
    var $output = [];
    var $forms = $(".form_inputs").find("input");
    for (var i = 0; i < $forms.length; i++) {
        $output[i] = $forms[i].value
        }
        console.log($output)
    }
);

var $addings = 0;
var $selector = ".form_inputs"

$('#add').click(function () {
    if ($addings == 9){
        alert('You can\'t create more form!')}
    else{
    $addings += 1;
    $block_added = $(".form_inputs").clone()
    for (var i = 0; i < $block_added.find("input").length; i++) {
        $block_added.find("input")[i].id = $block_added.find("input")[i].id + $addings
    }
    for (var j = 0; j < $block_added.find("label").length; j++) {
        $block_added.find("label")[j].htmlFor =$block_added.find("label")[j].htmlFor + $addings
    }
    $block_added = $block_added.html()
    $block_added = '<div class="separator number' + $addings + '"></div><div class="form_inputs number' + $addings + '">' + $block_added + '</div>'
    $($selector).after($block_added)
    $selector = ".form_inputs.number" + $addings}
})

$('#delete').click(function(){
    if ($addings == 0){
        alert('You can\'t delete this form!')}
    else{
    $(".separator.number" + $addings ).remove()
    $($selector).remove()
    $addings -= 1
    if ($addings == 0){
        $selector = ".form_inputs"
    }
    else{
        $selector = ".form_inputs.number" + $addings
    }}
})

$('#clean').click(function(){
        let $inputs = $("input")
        for (var j = 0; j < $inputs.length; j++) {
            $inputs[j].value = ''
            $inputs[j].checked = false
        }
})