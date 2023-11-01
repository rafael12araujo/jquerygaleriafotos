$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li syle="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendtop(novoItem);
        $(`
        <div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real
            Ver imagem em tamanho real
        </a>
        </div>
        `).appendto(novoItem);
        $(novoItem).appendto('ul');
        $(novoItem).fadein(1000);
        $('#endereco-imagem-nova').val('')
    })
})




