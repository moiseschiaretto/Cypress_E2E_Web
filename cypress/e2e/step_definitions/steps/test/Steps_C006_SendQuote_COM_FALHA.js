/* global Given, Then, When */
import {Given, When, Then, And, But} from "cypress-cucumber-preprocessor/steps"
import GuiaSendQuote from '../pageobjects/PageObjects_C006_SendQuote_COM_FALHA'
const guiaSendQuote = new GuiaSendQuote

// Guia Send Quote
Given(/^acessar o frame Send Quote igual a quatro campos - COM FALHA$/, () => {
	guiaSendQuote.acessar_o_frame_Send_Quote_igual_a_quatro_campos();
});

When(/^preencher ou selecionar os dados dos campos de envio da cotacao$/, () => {
	guiaSendQuote.preencher_ou_selecionar_os_dados_dos_campos_de_envio_da_cotacao();
});

And(/^clicar o frame Send Quote igual a zero campos$/, () => {
	guiaSendQuote.clicar_o_frame_Send_Quote_igual_a_zero_campos();
});

Then(/^clicar no botao Send para enviar os dados e exibir a mensagem de alerta de confirmacao de envio$/, () => {
	guiaSendQuote.clicar_no_botao_Send_para_enviar_os_dados_e_exibir_a_mensagem_de_alerta_de_confirmacao_de_envio();
});

