*** Settings ***
Documentation     A test suite with a single test for valid login.
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Test Cases ***
Male Issues
    Open Browser To Targets Page
    Prevent Newletter Modal
    Maximize Browser Window
    Click Element       xpath://*[@id="app"]/div[3]/div/div[1]
    Wait Until Element Is Visible       xpath://*[@id="modal-scrollable___BV_modal_body_"]
    Current Frame Should Contain      Male Issues
    [Teardown]  Close Browser

Skin Care
    Open Browser To Targets Page
    Prevent Newletter Modal
    Maximize Browser Window
    Click Element       xpath://*[@id="app"]/div[3]/div/div[2]
    Wait Until Element Is Visible       xpath://*[@id="modal-scrollable___BV_modal_body_"]
    Current Frame Should Contain      Skin Care
    [Teardown]  Close Browser

Immune Support
    Open Browser To Targets Page
    Prevent Newletter Modal
    Maximize Browser Window
    Click Element       xpath://*[@id="app"]/div[3]/div/div[3]
    Wait Until Element Is Visible       xpath://*[@id="modal-scrollable___BV_modal_body_"]
    Current Frame Should Contain      Immune Support
    [Teardown]  Close Browser

Female Issues
    Open Browser To Targets Page
    Prevent Newletter Modal
    Maximize Browser Window
    Click Element       xpath://*[@id="app"]/div[3]/div/div[4]
    Wait Until Element Is Visible       xpath://*[@id="modal-scrollable___BV_modal_body_"]
    Current Frame Should Contain      Female Issues
    [Teardown]  Close Browser

Detoxification
    Open Browser To Targets Page
    Prevent Newletter Modal
    Maximize Browser Window
    Click Element       xpath://*[@id="app"]/div[3]/div/div[5]
    Wait Until Element Is Visible       xpath://*[@id="modal-scrollable___BV_modal_body_"]
    Current Frame Should Contain      Detoxification
    [Teardown]  Close Browser

Athleticism
    Open Browser To Targets Page
    Prevent Newletter Modal
    Maximize Browser Window
    Click Element       xpath://*[@id="app"]/div[3]/div/div[6]
    Wait Until Element Is Visible       xpath://*[@id="modal-scrollable___BV_modal_body_"]
    Current Frame Should Contain      Athleticism
    [Teardown]  Close Browser