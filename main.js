$(document).ready(function () {
    $('form').on('submit', function (e){
        e.preventDefault()
        const novaTarefa = $("#tarefa").val()
        const novoItem = $(`<li>${novaTarefa}</li>`)
        $(novoItem).appendTo("ul")
        
        
        $(novoItem).click(function (){
            $(novoItem).css('text-decoration', 'line-through');
            
        })

        $('#tarefa').val('')
        
    })
})