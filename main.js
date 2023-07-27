$(document).ready(function() {
    
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
    
    // Manipular o envio do formulário
    $('#cadastroForm').submit(function(event) {
        event.preventDefault(); 

        // Exibir mensagem de envio
        $('.loading').css('display', 'block');

        
        const nomeCompleto = $('#nomeCompleto').val();
        const email = $('#email').val();
        const telefone = $('#telefone').val();
        const cpf = $('#cpf').val();
        const endereco = $('#endereco').val();
        const cep = $('#cep').val();

        
        

        
        console.log('Nome Completo:', nomeCompleto);
        console.log('Email:', email);
        console.log('Telefone:', telefone);
        console.log('CPF:', cpf);
        console.log('Endereço:', endereco);
        console.log('CEP:', cep);

        
        $('#cadastroForm')[0].reset();

        
        setTimeout(function() {
            $('.loading').css('display', 'none');
        }, 2000);
    });

    
    $('.btn-reset').click(function() {
        $('#cadastroForm')[0].reset();
    });
});