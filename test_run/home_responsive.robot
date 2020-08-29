*** Settings ***
Documentation     A test suite with tests for responsiveness 
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Variables ***
${HELLO}    C:\Users\Andrew\Desktop\projects\intercon_robot_framework\hi

*** Test Cases ***
Responsive Homepage
    Open Browser To Home Page
    Set Window Size    ${WIDTH_4K}   ${HEIGHT}
    Set Screenshot Directory    ${HELLO}
    Capture Page Screenshot
    [Teardown]    Close Browser
