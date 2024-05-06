# Author: Moises Chiaretto
# language: en
Feature: 02 - Wizard Dados do Veiculo - COM FALHA
    O cenário: Inserir Dados de envio da Cotacao no primeiro passo consta uma divergência no texto: COM FALHA
    acessar o frame Send Quote igual a quatro campos - COM FALHA

Scenario: Inserir Dados do Veiculo
    Given acessar o frame Enter Vehicle Data igual a doze campos
    When permitir preencher ou selecionar os dados dos campos do veículo
    And clicar o frame Enter Vehicle Data igual a zero campos
    Then clicar no botao Next para o sistema redirecionar para o frame Enter Insurant Data

Scenario: Inserir Dados do Seguro
    Given acessar o frame Enter Insurant Data igual a sete campos
    When permitir preencher ou selecionar os dados dos campos do seguro
    Then clicar o frame Enter Insurant Data igual a zero campos
    And clicar no botao Next para o sistema redirecionar para o frame Enter Produt Data

Scenario: Inserir Dados do Produto
    Given acessar o frame Enter Product Data igual a seis campos
    When preencher ou selecionar os dados dos campos do produto
    And clicar o frame Enter Product Data igual a zero campos
    Then clicar no botao Next para o sistema redirecionar para o frame Select Price Option

Scenario: Selecionar Opcao Preco
    Given acessar o frame Select Price Option igual a um campo
    When selecionar a opcao de preco do produto
    And clicar o frame Select Price Option igual a zero campos
    Then clicar no botao Next para o sistema redirecionar para o frame Send Quote

Scenario: Inserir Dados de envio da Cotacao
    Given acessar o frame Send Quote igual a quatro campos - COM FALHA
    When preencher ou selecionar os dados dos campos de envio da cotacao
    And clicar o frame Send Quote igual a zero campos
    Then clicar no botao Send para enviar os dados e exibir a mensagem de alerta de confirmacao de envio 