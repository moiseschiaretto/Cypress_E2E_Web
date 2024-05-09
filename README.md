## Projeto "projeto_web"
- Autor Moisés Ademir Chiaretto
  
- Descrição das explicações de cada item da 'estrutura do projeto "projeto_web" desenvolvido'.
  
- **Cypress versão 13** 

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

## Arquivo README.md
Explicações da Estrutura do Projeto e as suas respectivas configurações.

## Configuração básica do Ambiente do Projeto "projeto_web"
   **1.** Instalar o VSCode
      
        https://code.visualstudio.com
      
   **2.** Configurar o VSCode conforme o estilo do desenvolvedor / QA
      
        Curso gratuito para personalizar o VSCode, apenas inscrever-se no site.
      
        https://www.udemy.com/course/produtividade-vscode
      
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
          
        cd C:\Cypress\projeto_web
      
   **8.** Estando dentro da pasta/diretório do "projeto", digitar:
      
        npm init -y
      
        - Este comando acima irá criar o arquivo "package.json".
          
   **9.** Instalar o Cypress 13 ou versão posterior, digitar:
       
        npm install cypress --save-dev
      
   **10.** Instalar o plugin do Cucumber, que permite escrever na linguagem Gherkin o BDD, digitar:
       
        npm install cypress-cucumber-preprocessor --save-dev
       
   **11.** Acessar o Cypress para criar a estrutura inicial do projeto, digitar:
       
        npx cypress open
       
   **12.** Aguardar a janela do Cypress ser exibida, clicar sobre a opção:
       
        - "E2E Testing"
          
   **13.** Clicar no botão "Start E2E Testing in Chrome".
       
   **14.** Fechar a janela do "Cypress".

   **15.** Observar que no "Frame EXPLORER" à esquerda da tela foi criada a estrutura inicial do projeto.
 
   **16.** Aproveitar para instalar o comando "xpath" caso precisar utilizar no código, digitar no terminal:

        npm install -D cypress-xpath


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

   - Caminho na estrutura do projeto: projeto_web\package.json
     
   Adicionar a este arquivo a seguinte configuração.
      
   ```
                ,
                "cypress-cucumber-preprocessor": {
                "nonGlobalStepDefinitions": false,
                "stepDefinitions": "cypress/e2e/step_definitions"
                },
                "cucumberJson": {
                "generate": true
                }
   ```


## Arquivo "report.js"

	Dashboard / Report e Scripts de Execuções em Cypress, segue o passo a passo (são 4 passos no total).
 
	1. No Arquivo "package.json" add em "cypress-cucumber-preprocessor"
 
	- Pasta "cucumberJson" irá gerar o BDD apresentado no Dashboard

	```
                ,
                "cucumberJson": {
                "generate": true
                }
	```

        2. Terminal do VS Code digitar a linha de comando abaixo para instalar o "multiple-cucumber-html-reporter"
	
        Linha de comando para a instalação:
	
                npm install multiple-cucumber-html-reporter --save-dev
		
        Gera em "package.json" em "devDependencies"
	
                "multiple-cucumber-html-reporter": "^1.18.0"

        3. Criar o Arquivo "report.js" na pasta Cypress e adicionar o conteúdo abaixo para o preenchimento do Dashboard.
	
        - Personalizar o 3º Frame do Dashborad coma as informações do Projeto.

	
	```
                const report = require('multiple-cucumber-html-reporter');
                report.generate({
                jsonDir: './cypress/cucumber-json/',
                reportPath: './cypress/cucumber-report/',
                metadata:{
                        device: 'Local test machine',
                browser: {
                        name: 'chrome',
                        version: '92'
                        },
                        platform: {
                        name: 'Windows',
                        version: '10'
                        }
                },
                customData: {
                        title: 'Run info',
                        data: [
                        {label: 'Project', value: 'Automatização em Cypress'},
                        {label: 'Release', value: '1.1'},
                {label: 'Execution Start Time', value: 'Mai 06th 2024, 09:00 AM'},
                        {label: 'Execution End Time', value: 'Mai 06th 2024, 09:05 AM'}
                        ]
                }
                });      
        ```


        4. Criar Scripts de Execução no Arquivo "package.json", para facilitar a execução do projeto.
	
        Caso desejar criar "scripts" de execuções do projeto, adicionar no arquivo "package.json".

	
	```
               "scripts": {
                "report:clear": "rm -r cypress/e2e/step_definitions/cucumber-report && rm -r cypress/e2e/step_definitions/cucumber-json
                || rm -r cypress/e2e/step_definitions/cucumber-report || rm -r cypress/e2e/step_definitions/cucumber-json",
                "test1:chrome": "cypress run --spec cypress/e2e/step_definitions/01_WizardDadosVeiculo_SemFalha.feature --browser chrome --headless",
                "test2:chrome": "cypress run --spec cypress/e2e/step_definitions/02_WizardDadosVeiculo_ComFalha.feature --browser chrome --headless",
                "test3:chrome": "cypress run --spec cypress/e2e/step_definitions/03_WizardDadosVeiculo_Indefinido.feature --browser chrome --headless",
                "cy:report": "node .cypress/e2e/step_definitions/report.js",
                "cy:visit": "C:/Cypress/projeto_web/cypress/cucumber-report/index.html --browser chrome"
                }, 
        ```
	
        Observação para a execução dos scripts acima no Terminal do VSCode:
	
           1. Sempre excluir as pastas "cucumber-json" e "cucumber-report" com informações das execuções anteriores (npm run report:clear).
	   
           2. Realizar as novas execuções de feature (npm run test1:chrome).
	   
           3. Sempre gerar o report atual (npm run cy:report).
	   
           4. Acessar o Dashboard / Report (npm run cy:visit).



## Entendendo o Ambiente de Automatização de Testes do Cypress 13

![01_Ambiente_DEV_Cypress](https://github.com/moiseschiaretto/Cypress_E2E_Web/assets/84775466/893d54c9-46f3-46e7-b032-38c4e18a3063)
