## Projeto "projeto_web"
- Autor Moisés Ademir Chiaretto
  
- Descrição das explicações de cada item da 'estrutura do projeto "projeto_web" desenvolvido'.
  
- Testes com **_3 (três) suítes de testes_**, ou seja, utilizando 3 (três) arquivos de Features com cenários de BDD que são **"Sem Falha", "Com Falha" e "Indefinido".**

- Os testes podem serem executados via **brouser ou terminal** com scripts gravados no **arquivo package.json"**, gerando reports com a ferramenta **multiple-cucumber-html-reporter**.

- **O multiple-cucumber-html-reporter é uma ferramenta de relatórios para o Cypress**, que integra relatórios gerados pelo Cucumber, fornecendo visualizações detalhadas e personalizadas dos resultados dos testes em formato HTML. Ele permite a geração de relatórios estéticos e informativos para análise dos testes executados.
  
- **Cypress versão 13**
<br>

|JavaScript	|Node.js    	|Cypress	|Cucumber	|HTML / CSS		|XPATH		|IDE VSCode	|
|---------------|---------------|---------------|---------------|-----------------------|---------------|---------------|
| <img width="137" alt="00_JavaScript" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/c8dbb0ed-86a5-4a9e-a799-41031c9878c5"> | <img width="93" alt="02_Node_JS" src="https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/1102f809-71e4-4fd2-8ff4-c9d1fee55034"> | ![03_cypress_logo_social](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/b0d41a63-a321-477d-b76f-39934329473d) | <img width="198" alt="Cucumber" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/da339cdb-10ae-4b78-bb19-71004b0b74a4"> | <img width="151" alt="00_HTML_CSS" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/edc4e22b-567a-476e-8f2a-33818c6b76ba"> | <img width="142" alt="00_XPATH" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/ae30d9f7-171c-4edc-91d3-ecb025c6322c"> | ![VS_CODE](https://github.com/moiseschiaretto/Cypress_E2E_API_REST/assets/84775466/5a192e0c-e2e8-410c-b4d9-9e861ebfe387) |
<br>

## Entendendo o Ambiente de Automatização de Testes do Cypress 13

![01_Ambiente_DEV_Cypress](https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/893d54c9-46f3-46e7-b032-38c4e18a3063)
<br>
  

## Estrutura do Projeto "projeto_web"

```
projeto_web
    |
    |-----README.md
    |-----cypress.config.js
    |-----package.json
    |-----.gitgnore
    |
    |-----cypress
	    |---support
	    |   |---e2e.js
	    |
	    |
            |---e2e
	        |---step_definitions
	    	|       |---01_WizardDadosVeiculo_SemFalha.feature
		|       |---02_WizardDadosVeiculo_ComFalha.feature   
	        |       |---03_WizardDadosVeiculo_Indefinido.feature
		|       |---steps
	        |             |---elements
		|             |---pageobjects
		|	      |---test
		|	      |---evidencias
		|	      |      |---screenshots
		|	      |	     |---videos
		|	      |---resources                
	        |---report.js
		|---cucumber-report
		|---cucumber-json
```
<br>


## Diretório "step_definitions"
- Cenários de BDD **"Sem Falha", "Com Falha" e "Indefinido".**

- 01_WizardDadosVeiculo_SemFalha.feature

- 02_WizardDadosVeiculo_ComFalha.feature

- 03_WizardDadosVeiculo_Indefinido.feature


![18_TDD](https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/5417acfb-fe89-4b43-aac5-2d9783e54236)
<br>

![TDD_RGR_IMG_MENOR](https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/a8cbb950-60e5-4353-a31f-4445011251a0)
<br>


## Execuções do BDD **"Sem Falha", "Com Falha" e "Indefinido".**

### Exemplo de execuções "_via browser_" das _Features do BDD e Métodos do TDD_

Comando digitado no terminal para a execução _**_via browser_**
<br>

```

npx cypress open

```
<br>

### Resultados das execuções das features de testes "via browser"

<br>

|Execução SEM FALHAS	|Execução COM FALHAS	|Execução INDEFINIDO	|
|-----------------------|-----------------------|-----------------------|
| ![01_EXECUCAO_SEM_FALHA](https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/4254e737-9b51-4ce8-a044-a46218478eb6) | ![02_EXECUCAO_COM_FALHA](https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/a3418e1e-eaf6-4c50-8228-f2c9ef599b15) | ![03_EXECUCAO_INDEFERIDO](https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/252bdea1-a138-4f18-b938-63eec260c68f) |
<br>
<br>


***

### Exemplo de execuções "_via terminal_" das _Features do BDD e Métodos do TDD_

Neste exemplo abaixo é um exemplo de testes de suítes de testes, ou seja, três features diferentes que são **"Sem Falha", "Com Falha" e "Indefinido".**

Comando digitado no terminal para a execução via terminal
<br>

```

npm run tests.cy.js

```

## Scripts de Execução

- Criar Scripts de Execução no Arquivo "package.json", para facilitar a execução do projeto.

- Caso desejar criar "scripts" de execuções do projeto, adicionar no arquivo "package.json".
	
```

"scripts": {
    "report:clear": "if exist cypress\\cucumber-report rd /s /q cypress\\cucumber-report && if exist cypress\\cucumber-json rd /s /q cypress\\cucumber-json",
    "test1:chrome": "cypress run --spec cypress/e2e/step_definitions/01_WizardDadosVeiculo_SemFalha.feature --browser chrome --headless",
    "test2:chrome": "cypress run --spec cypress/e2e/step_definitions/02_WizardDadosVeiculo_ComFalha.feature --browser chrome --headless",
    "test3:chrome": "cypress run --spec cypress/e2e/step_definitions/03_WizardDadosVeiculo_Indefinido.feature --browser chrome --headless",
    "cy:report": "node cypress/report.js",
    "cy:visit": "C:/Cypress/projeto_web/cypress/cucumber-report/index.html --browser chrome"
}

```
<br>

## Execução dos Scripts acima no Terminal do VSCode

### Realizar as novas execuções das Features "Sem Falha", "Com Falha", "Indefinido".
<br>

```

npm run test1:chrome

npm run test2:chrome

npm run test3:chrome

```

<br>
<br>

## Resultado da execução das três suítes de testes "via terminal"

|Execução SEM FALHAS		|Execução COM FALHAS		|Execução INDEFINIDO		|
|-------------------------------|-------------------------------|-------------------------------|
| <img width="442" alt="10_Terminal_Execucao_Feature_SEM_Falhas" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/e77411ca-6686-4043-a149-aaaeedff429c"> | <img width="447" alt="12_Terminal_Execucao_Feature_COM_Falhas" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/770eaf88-eea0-4e4a-8613-8781fe642e18"> | <img width="473" alt="14_Terminal_Execucao_Feature_INDEFINIDO" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/c77c981e-275c-43d5-a6dc-8ccb33fe730c"> |
| <img width="434" alt="11_Terminal_Execucao_Feature_SEM_Falhas" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/72e8f022-5cb4-4206-ae32-16168f02bc32"> | <img width="647" alt="13_Terminal_Execucao_Feature_COM_Falhas" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/f2f6d018-17d8-49f1-a24f-46de07c88594"> | <img width="472" alt="15_Terminal_Execucao_Feature_INDEFINIDO" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/168b76a3-d2da-42de-973d-d8dfe72d3343"> |

<br>

***

## Reports gerados no Cypress 13
<br>

**O multiple-cucumber-html-reporter é uma ferramenta de relatórios para o Cypress**, que integra relatórios gerados pelo Cucumber, fornecendo visualizações detalhadas e personalizadas dos resultados dos testes em formato HTML. Ele permite a geração de relatórios estéticos e informativos para análise dos testes executados.

<br>

|Report _SEM_ FALHAS	|Report COM FALHAS	|Report COM FALHAS	|Report INDEFINIDO	|Report INDEFINIDO	|
|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|
| <img width="680" alt="04_Cucumber_Report" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/c5757c8d-02d5-4cab-8769-b49a41ead003"> | <img width="680" alt="05_Cucumber_Report_FALHA" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/a2196aa4-8cb5-4695-b00c-0413749b72e0"> | <img width="680" alt="06_Cucumber_Report_FALHA" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/10c93848-8521-49e8-9f39-ae1e9677b823"> | <img width="680" alt="07_Cucumber_Report_INDEFINIDO" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/dc48fd4f-ab6e-40fe-b3ab-7c0ebf9819c4"> | <img width="680" alt="08_Cucumber_Report_INDEFINIDO" src="https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/28af7445-2374-4d22-9676-bd5012508a6e"> |
<br>

### Para gerar um report no Cypress 13 consultar _"Configurar um "report" no Cypress"_ no final deste documento
<br>
<br>


***

## Configuração básica do Ambiente do Trabalho no Cypress 13 - Projeto "projeto_web"

### Pré-requisitos
<br>

**1.** Instalar o VSCode

```

https://code.visualstudio.com

```
<br>

**2.** Configurar o VSCode conforme o estilo do desenvolvedor / QA

Curso gratuito para personalizar o VSCode, apenas inscrever-se no site.

```

https://www.udemy.com/course/produtividade-vscode

```
<br>

**3**. VSCode cores do ambiente de trabalho

- Menu View, Command Palette ou Teclas CTRL + SHIFT + P

- Preferences: Color Theme


**4.** Instalar o Node.js

https://nodejs.org/en

Node é um ambiente para execução de código em Javascript, para aplicação Web, empacota e interpretar o código em Javascript (Cypress).

https://www.youtube.com/watch?v=vYekSMBCCiM


**5.** Terminal do VSCode

No VSCode acessar o Menu Terminal, opção New Terminal

Teclas de atalho: CTRL + SHIFT + ‘ (aspas simples)


**6.** Acesssar a pasta/diretório do "projeto" para depois instalar as configurações do Cypress 13 ou versão posterior

- No terminal digitar o comando "cd" e o caminho da pasta/diretório do projeto, por exemplo:

```

cd C:\Cypress\projeto_web

```
<br>


**8.** Estando dentro da pasta/diretório do "projeto", digitar:

- Este comando abaixo irá criar o arquivo "package.json".

```

npm init -y

```
<br>


**9.** Instalar o Cypress 13 ou versão posterior, digitar:

```

npm install --save-dev cypress

```
<br>

**10.** Instalar o plugin do Cucumber, que permite escrever na linguagem Gherkin o BDD, digitar:

```

npm install --save-dev cypress-cucumber-preprocessor

```
<br>


**11.** Acessar o Cypress para criar a estrutura inicial do projeto, digitar:

```

npx cypress open

```
<br>


**12.** Aguardar a janela do Cypress ser exibida, clicar sobre a opção:

"E2E Testing"


**13.** Clicar no botão "Start E2E Testing in Chrome".


**14.** Fechar a janela do "Cypress".


**15.** Observar que no "Frame EXPLORER" à esquerda da tela foi criada a estrutura inicial do projeto.


**16.** Aproveitar para instalar o comando "xpath" caso precisar utilizar no código, digitar no terminal:

```

npm install -D cypress-xpath

```
<br>


## Arquivo "e2e.js"
- Caminho na estrutura do projeto: projeto_web\cypress\support\e2e.js

- Adicionar a este arquivo a seguinte configuração.
     
```

// Exceções não detectadas
// https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
// https://docs.cypress.io/api/cypress-api/catalog-of-events#Uncaught-Exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
return false
})
// Xpath, opcional na versão 13 do Cypress
require('cypress-xpath')

```


## Arquivo "cypress.config.js"

- Caminho na estrutura do projeto: projeto_web\cypress.config.js

Adicionar a este arquivo a seguinte configuração.


```

const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
e2e: {
setupNodeEvents(on, config) {
	on('file:preprocessor', cucumber())
	},
	specPattern: "cypress/e2e/step_definitions/*.feature",
	testIsolation: false,
	/*
	testIsolation: false,
	*** Resolve o problema abaixo!!! ***
	Default blank page
	This page was cleared by navigating to about:blank.
	All active session data (cookies, localStorage and sessionStorage) across all domains are cleared.
	*/
	"trashAssetsBeforeRuns": true,
	"video": false,
	"viewportWidth": 1024,
	"viewportHeight": 768,
	"defaultCommandTimeout": 10000
},
})

```

## Arquivo "package.json"

Caminho na estrutura do projeto: projeto_web\package.json
     
Adicionar a este arquivo a seguinte configuração.
      
```

,
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": false,
    "stepDefinitions": "cypress/e2e/step_definitions",
    "cucumberJson": {
        "generate": true
    }
}

```

***

## Configurar um "report" no Cypress

## Arquivo "report.js"

Dashboard / Report e Scripts de Execuções em Cypress, segue o passo a passo (são 3 passos no total).


**1.** No Arquivo "package.json" add em **"cypress-cucumber-preprocessor"**

- Pasta "cucumberJson" irá gerar o BDD apresentado no Dashboard

```
,
"cucumberJson": {
"generate": true
}

```

### O Arquivo "package.json" deverá estar conforme exibição abaixo em _"cypress-cucumber-preprocessor"_
<br>

```

"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": false,
    "stepDefinitions": "cypress/e2e/step_definitions",
    "cucumberJson": {
        "generate": true
    }
}

```
<br>


**2.** Terminal do VS Code digitar a linha de comando abaixo para instalar o "multiple-cucumber-html-reporter"

**Linha de comando para a instalação:**

```

npm install --save-dev multiple-cucumber-html-reporter

```
<br>

 
**Gera em "package.json" em "devDependencies"**

```

"multiple-cucumber-html-reporter": "^3.6.2"

```
<br>

**3.** Criar o Arquivo "report.js" na pasta Cypress e adicionar o conteúdo abaixo para o preenchimento do Dashboard.

- Personalizar o 3º Frame do Dashborad coma as informações do Projeto.


```

const report = require('multiple-cucumber-html-reporter');

// Obter a data e hora atual
const currentDateTime = new Date();
const formattedDateTime = `${currentDateTime.toLocaleString('en-US', { month: 'short' })} ${currentDateTime.getDate()}th ${currentDateTime.getFullYear()}, ${currentDateTime.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`;

report.generate({
    jsonDir: 'cypress/cucumber-json/',
    reportPath: 'cypress/cucumber-report/',
    metadata: {
        device: 'Local test machine',
        browser: {
            name: 'chrome',
            version: '125'
        },
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Automatização em Cypress' },
            { label: 'Release', value: '1.1' },
            { label: 'Execution Start Time', value: formattedDateTime },
            { label: 'Execution End Time', value: formattedDateTime }
        ]
    }
});
     

```
<br>

## Scripts de Execução

- Criar Scripts de Execução no Arquivo "package.json", para facilitar a execução do projeto.

- Caso desejar criar "scripts" de execuções do projeto, adicionar no arquivo "package.json".

	
```

"scripts": {
    "report:clear": "if exist cypress\\cucumber-report rd /s /q cypress\\cucumber-report && if exist cypress\\cucumber-json rd /s /q cypress\\cucumber-json",
    "test1:chrome": "cypress run --spec cypress/e2e/step_definitions/01_WizardDadosVeiculo_SemFalha.feature --browser chrome --headless",
    "test2:chrome": "cypress run --spec cypress/e2e/step_definitions/02_WizardDadosVeiculo_ComFalha.feature --browser chrome --headless",
    "test3:chrome": "cypress run --spec cypress/e2e/step_definitions/03_WizardDadosVeiculo_Indefinido.feature --browser chrome --headless",
    "cy:report": "node cypress/report.js",
    "cy:visit": "C:/Cypress/projeto_web/cypress/cucumber-report/index.html --browser chrome"
}

```
<br>


## Execução dos Scripts acima no Terminal do VSCode

**1.** Excluir as pastas **_"cucumber-json" e "cucumber-report"_** com informações das execuções anteriores.

```

npm run report:clear

```
<br>


**2.** Realizar as novas execuções das Features "Sem Falha", "Com Falha", "Indefinido".

```

npm run test1:chrome

npm run test2:chrome

npm run test3:chrome

```
<br>


**3.** Gerar o report atual.

```

npm run cy:report

```
<br>


**4.** Acessar o Dashboard / Report.

```

npm run cy:visit

```
<br>
<br>

