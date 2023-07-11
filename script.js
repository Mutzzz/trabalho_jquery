$(document).ready(function() {

    $('#header-button').click(function() {
        $('#tarefas').slideDown();
    })

    $('#cancel-header-button').click(function(){
        $('#tarefas').slideUp();
    })


    $('#tarefas').on('submit', function(e) {
            e.preventDefault();
            const novaTarefa = $('#nome-da-tarefa').val();
            $('#tarefas').append(`<li class="lista">${novaTarefa}</li>`);
    })

    $(document).on('click', '.lista', function() {
        $(this).wrap('<strike>');
    });
    

})