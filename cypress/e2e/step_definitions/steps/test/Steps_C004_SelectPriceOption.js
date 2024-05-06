/* global Given, Then, When */
import {Given, When, Then, And, But} from "cypress-cucumber-preprocessor/steps"
import GuiaSelectPriceOption from '../pageobjects/PageObjects_C004_SelectPriceOption'
const guiaSelectPriceOption = new GuiaSelectPriceOption

// Guia Select Price Option
Given(/^acessar o frame Select Price Option igual a um campo$/, () => {
	guiaSelectPriceOption.acessar_o_frame_Select_Price_Option_igual_a_um_campo();
});

When(/^selecionar a opcao de preco do produto$/, () => {
	guiaSelectPriceOption.selecionar_a_opcao_de_preco_do_produto();
});

And(/^clicar o frame Select Price Option igual a zero campos$/, () => {
	guiaSelectPriceOption.clicar_o_frame_Select_Price_Option_igual_a_zero_campos();
});

Then(/^clicar no botao Next para o sistema redirecionar para o frame Send Quote$/, () => {
	guiaSelectPriceOption.clicar_no_botao_Next_para_o_sistema_redirecionar_para_o_frame_Send_Quote();
});
