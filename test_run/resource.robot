*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***
${SERVER}         intercon-git-ty.gabtan99.now.sh
${BROWSER}        Chrome
${DELAY}          0
${VALID USER}     demo
${VALID PASSWORD}    mode
${HOMEPAGE URL}      http://${SERVER}/
${SERVICES URL}      http://${SERVER}/services

*** Keywords ***
Open Browser To Home Page
    Open Browser    ${HOMEPAGE URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
    Home Page Should Be Open

Home Page Should Be Open
    Title Should Be    Intercon Regenerative Center

Services Page Should Be Open
    Title Should Be     Services | Intercon Regenerative Center

Go to Services Page
    Click Link    xpath=//a[@href="/services"]
    Set Selenium Speed    ${DELAY}
    Services Page Should Be Open
    