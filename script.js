$(document).ready(function() {

    $('#header-button').click(function() {
        $('#tarefas').slideDown();
    })

    $('#cancel-header-button').click(function(){
        $('#tarefas').slideUp();
    })


    $('#tarefas').on('submit', function(e){
        e.preventDefault();
    })

})