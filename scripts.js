// Aguarda o DOM estar completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do formulário e da tabela
    const productForm = document.getElementById('product-form');
    const productListBody = document.getElementById('product-list-body');

    // Adiciona um "ouvinte" para o evento de envio do formulário
    productForm.addEventListener('submit', function(event) {
        // 1. Impede o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault();

        // 2. Coleta os dados dos campos do formulário
        const productName = document.getElementById('product-name').value;
        const productCode = document.getElementById('product-code').value;
        const quantity = document.getElementById('quantity').value;
        const costPrice = parseFloat(document.getElementById('cost-price').value).toFixed(2);
        const salePrice = parseFloat(document.getElementById('sale-price').value).toFixed(2);
        const category = document.getElementById('category').value;

        // 3. Cria uma nova linha (tr) para a tabela
        const newRow = document.createElement('tr');

        // 4. Cria as células (td) e insere os dados dentro da nova linha
        newRow.innerHTML = `
            <td>${productName}</td>
            <td>${productCode}</td>
            <td>${quantity}</td>
            <td>R$ ${costPrice}</td>
            <td>R$ ${salePrice}</td>
            <td>${category}</td>
            <td><button type="button" class="delete-btn">Apagar</button></td>
        `;

        // 5. Adiciona a nova linha ao corpo da tabela
        productListBody.appendChild(newRow);

        // 6. Limpa os campos do formulário para o próximo cadastro
        productForm.reset();

        // Opcional: Foca no primeiro campo do formulário novamente
        document.getElementById('product-name').focus();
    });

    // Adiciona um "ouvinte" para cliques no corpo da tabela (para os botões de apagar)
    productListBody.addEventListener('click', function(event) {
        // Verifica se o elemento clicado tem a classe 'delete-btn'
        if (event.target.classList.contains('delete-btn')) {
            // Encontra a linha (tr) pai do botão e a remove
            const rowToDelete = event.target.closest('tr');
            rowToDelete.remove();
        }
    });
});
