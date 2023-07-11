$(document).ready(function(){

    $("#telefone").mask("(00) 00000-0000", {
        placeholder: '(00) 00000-0000'
    })

    $("#cpf").mask("000.000.000-00", {
        placeholder: '000.000.000-00'
    })

    $("#cep").mask("00000-000", {
        placeholder: '00000-000'
    })

    $("form").validate({
        rules:{
            nome:{
                required: true
            },

            telefone:{
                required: true
            },

            email:{
                required: true
            },

            endereco:{
                required: true
            },

            cep:{
                required: true
            },

            cpf:{
                required: true
            },
            messages:{
                nome: 'por favor, insira o seu nome',

                telefone: 'por favor, insira o seu telefone',

                email: 'por favor, insira o seu email',

                cpf: 'por favor, insira o seu cpf',

                endereco: 'por favor, insira o seu endereco',

                cep: 'por favor, insira o seu cep'
            }
            
        }
    })
})