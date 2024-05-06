/// <reference types="Cypress" />

import { Elements_C005_SendQuote }  from '../elements/Elements_C005_SendQuote'

class GuiaSendQuote {
    // Guia Select Send Quote

    // Acessar o frame Send Quote igual a quatro campos$
    acessar_o_frame_Send_Quote_igual_a_quatro_campos(){
        // Clicar na Select Price Option
        cy.get('#sendquote').click()
        // Validar a quantidade de campos obrigatórios preenchidos
        cy.xpath('//*[@id=\"sendquote\"]//span[@class = \"counter\"]').should('contain', '4')
    }

    // Preencher ou selecionar os dados dos campos de envio da cotacao
    preencher_ou_selecionar_os_dados_dos_campos_de_envio_da_cotacao(){
        // Campo E-Mail
        cy.get('#email').click()
        cy.get('#email').clear()
        cy.get('#email').type('test@gmail.com')
        cy.get('#email').should('have.value', 'test@gmail.com')

        // Campo Phone
        cy.get('#phone').click()
        cy.get('#phone').clear()
        cy.get('#phone').type('4199997777')
        cy.get('#phone').should('have.value', '4199997777')

        // Username
        cy.get('#username').click()
        cy.get('#username').clear()
        cy.get('#username').type('MoisesChiaretto')
        cy.get('#username').should('have.value', 'MoisesChiaretto')

        // Password
        cy.get('#password').click()
        cy.get('#password').clear()
        cy.get('#password').type('Teste123')
        cy.get('#password').should('have.value', 'Teste123')

        // Confirm Password
        cy.get('#confirmpassword').click()
        cy.get('#confirmpassword').clear()
        cy.get('#confirmpassword').type('Teste123')
        cy.get('#confirmpassword').should('have.value', 'Teste123')

        // Comments
        cy.get('#Comments').click()
        cy.get('#Comments').clear()
        cy.get('#Comments').type('Cliente Gold')
        cy.get('#Comments').should('have.value', 'Cliente Gold')
    }

    // Clicar o frame Send Quote igual a zero campos
    clicar_o_frame_Send_Quote_igual_a_zero_campos(){
        // Clicar na Select Price Option
        cy.get('#sendquote').click()
        // Validar a quantidade de campos obrigatórios preenchidos
        cy.xpath('//*[@id=\"sendquote\"]//span[@class = \"counter zero\"]', '0') 
    }

    // Clicar no botao Send para enviar os dados e exibir a mensagem de alerta de confirmacao de envio
    clicar_no_botao_Send_para_enviar_os_dados_e_exibir_a_mensagem_de_alerta_de_confirmacao_de_envio(){
        // Aguardar o Botão "Send" ficar habilitadao
        cy.wait(2000) 
        // BTN Send
        cy.get('#sendemail').click()
        cy.wait(10000) 

        // Assert da Modal de MSG de Confirmacao de Envio
        cy.xpath('/html/body/div[4]/h2').should('contain', 'Sending e-mail success!')
        cy.wait(3000)

        // BTN OK - Modal de MSG de Confirmacao de Envio
        cy.xpath('/html/body/div[4]/div[7]/div/button').click()
               
    }
}
export default GuiaSendQuote;
