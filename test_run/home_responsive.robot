*** Settings ***
Documentation     A test suite with tests for responsiveness 
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Variables ***
${DIR}    ./screenshots/home

*** Test Cases ***
Responsive Homepage
    Set Screenshot Directory    ${DIR}
    Open Browser To Home Page
    Set Window Size    ${WIDTH_4K}   ${HEIGHT}
    Capture Page Screenshot
    Set Window Size    ${WIDTH_LAPTOP_L}   ${HEIGHT}
    Capture Page Screenshot
    Set Window Size    ${WIDTH_LAPTOP}   ${HEIGHT}
    Capture Page Screenshot
    Set Window Size    ${WIDTH_TABLET}   ${HEIGHT}
    Capture Page Screenshot
    Set Window Size    ${WIDTH_MOBILE_L}   ${HEIGHT}
    Capture Page Screenshot
    Set Window Size    ${WIDTH_MOBILE_M}   ${HEIGHT}
    Capture Page Screenshot
    Set Window Size    ${WIDTH_MOBILE_S}   ${HEIGHT}
    Capture Page Screenshot

    [Teardown]    Close Browser
