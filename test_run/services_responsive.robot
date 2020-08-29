*** Settings ***
Documentation     A test suite with tests for responsiveness 
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Variables ***
${DIR}    ./screenshots/services

*** Test Cases ***
Responsive Homepage
    Set Screenshot Directory    ${DIR}
    Open Browser to Services Page
    Wait Until Newsletter Modal
    Set Window Size    ${WIDTH_4K}   ${HEIGHT}
    Capture Page Screenshot   4K.png
    Set Window Size    ${WIDTH_LAPTOP_L}   ${HEIGHT}
    Capture Page Screenshot   LAPTOP_L.png
    Set Window Size    ${WIDTH_LAPTOP}   ${HEIGHT}
    Capture Page Screenshot   LAPTOP.png
    Set Window Size    ${WIDTH_TABLET}   ${HEIGHT}
    Capture Page Screenshot   TABLET.png
    Set Window Size    ${WIDTH_MOBILE_L}   ${HEIGHT}
    Capture Page Screenshot   MOBILE_L.png
    Set Window Size    ${WIDTH_MOBILE_M}   ${HEIGHT}
    Capture Page Screenshot   MOBILE_M.png
    Set Window Size    ${WIDTH_MOBILE_S}   ${HEIGHT}
    Capture Page Screenshot   MOBILE_S.png
    [Teardown]    Close Browser
