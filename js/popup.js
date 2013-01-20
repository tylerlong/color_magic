var page = page || {};

page.change_background = function(color){
    chrome.tabs.executeScript(null, { code: "set_background('" + color +"')" });
    chrome.extension.getBackgroundPage().bg_color = color; 
    localStorage.bg_color = color;
}

page.change_foreground = function(color){
    chrome.tabs.executeScript(null, { code: "set_foreground('" + color +"')" });
    chrome.extension.getBackgroundPage().fg_color = color;
    localStorage.fg_color = color;
}

function Color(picker, input, action){
    this.picker = picker;
    this.input = input;
    picker.linkTo(function(value){
        input.val(value);
        input.change();
    });
    input.change(function(){
        var value = $(this).val();
        picker.setColor(value);
        action(value);
    });
    
}

Color.prototype.setColor = function(color){
    this.picker.setColor(color);
    this.input.val(color);
}
