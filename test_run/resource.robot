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
${TARGETS URL}      http://${SERVER}/targets
${BLOG URL}         http://${SERVER}/blog
${ABOUT URL}        http://${SERVER}/about
${CONTACT URL}      http://${SERVER}/contact
${WIDTH_MOBILE_S}        320
${WIDTH_MOBILE_M}        375
${WIDTH_MOBILE_L}        425
${WIDTH_TABLET}        768
${WIDTH_LAPTOP}       1024
${WIDTH_LAPTOP_L}     1440
${WIDTH_4K}     2560
${HEIGHT}       815

*** Keywords ***
Open Browser To Home Page
    Open Browser    ${HOMEPAGE URL}    ${BROWSER}
    Set Selenium Speed    ${DELAY}
    Title Should Be    Intercon Regenerative Center

Open Browser to Services Page
    Open Browser    ${SERVICES URL}   ${BROWSER}
    Set Selenium Speed    ${DELAY}
    Title Should Be     Services | Intercon Regenerative Center

Open Browser to Targets Page
    Open Browser    ${TARGETS URL}   ${BROWSER}
    Set Selenium Speed    ${DELAY}
    Title Should Be     Targets | Intercon Regenerative Center

Open Browser to Blog Page
    Open Browser    ${BLOG URL}   ${BROWSER}
    Set Selenium Speed    ${DELAY}
    Title Should Be     Blog | Intercon Regenerative Center

Open Browser to About Page
    Open Browser    ${ABOUT URL}   ${BROWSER}
    Set Selenium Speed    ${DELAY}
    Title Should Be     About Us | Intercon Regenerative Center

Open Browser to Contact Page
    Open Browser    ${CONTACT URL}   ${BROWSER}
    Set Selenium Speed    ${DELAY}
    Title Should Be     Contact Us - Intercon Regenerative Center