/// <reference types="Cypress" />

import { Elements_C004_SelectPriceOption } from '../elements/Elements_C004_SelectPriceOption'

class GuiaSelectPriceOption {
    // Guia Select Price Option

    // Acessar o frame Select Price Option igual a um campo
    acessar_o_frame_Select_Price_Option_igual_a_um_campo(){
        // Clicar na Select Price Option
        cy.get('#selectpriceoption').click()
        // Validar a quantidade de campos obrigatórios a serem preenchidos
        cy.xpath('//*[@id=\"selectpriceoption\"]//span[@class = \"counter\"]').should('contain', '1')
    }

    // Selecionar a opcao de preco do produto
    selecionar_a_opcao_de_preco_do_produto(){
       // Flag Gold
       cy.xpath('/html/body/div[1]/div/div[1]/div/div/form/div/section[4]/section/div[1]/table/tfoot/tr/th[2]/label[2]/span')
       .click()
       //.should('have.value', 'Yes')
       //.should('be.enabled')
       //.should('be.true')
       //.should('be.checked')
       //.should('equal', 'Yes')
       //.should('equal', '1')
    }

    // Clicar o frame Select Price Option igual a zero campos
    clicar_o_frame_Select_Price_Option_igual_a_zero_campos(){
        // Clicar na Select Price Option
        cy.get('#selectpriceoption').click()
        // Validar a quantidade de campos obrigatórios preenchidos
        cy.xpath('//*[@id=\"selectpriceoption\"]//span[@class = \"counter zero\"]', '0')
    }

    // Clicar o frame Select Price Option igual a zero campos
    clicar_no_botao_Next_para_o_sistema_redirecionar_para_o_frame_Send_Quote(){
        // Clicar na Select Price Option
        cy.get('#sendquote').click()
        // Validar a quantidade de campos obrigatórios preenchidos
        cy.xpath('//*[@id=\"sendquote\"]//span[@class = \"counter\"]', '4')
    }
}
export default GuiaSelectPriceOption;
