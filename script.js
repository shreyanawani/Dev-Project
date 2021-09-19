$('#btnReset').click(function(){    
    $('#inpNewTask').val('')       
});
 

$('#btnAdd').click(function(){
    $('#ulTasks').append("<li class='list-group-item'>"+ $('#inpNewTask').val()+" </li>");
    $('.list-group-item').click(function(){
        $(this).toggleClass("done");        
    });
    $('#inpNewTask').val('')  
    
});

$('#btnSort').click(function(){ 
        $('#ulTasks .done').appendTo(ulTasks)    
        
 });

$('#btnCleanup').click(function(){
    $('.list-group-item.done').remove();
});