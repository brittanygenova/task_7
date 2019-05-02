$('.btn').on('click',function(){
    var textInput = $('#input').val();
    if (!textInput){
        alert("Please enter text!");
        return;
    }
    
    $('#tasks').append("<p>" + textInput + "<br>");
    
    
    });
