function set_background(color){
    $('body').css('background', color);
}
function set_foreground(color){
    $('body').css('color', color);
}
chrome.extension.sendRequest('colors', function(response){
    set_background(response.bg_color);
    set_foreground(response.fg_color);
});
