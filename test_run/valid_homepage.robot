*** Settings ***
Documentation     A test suite with a single test for valid login.
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Test Cases ***
Valid Homepage
    Open Browser To Home Page
    Set Window Size    ${WIDTH_4K}   ${HEIGHT}
    Set Screenshot Directory    \hello
    Capture Page Screenshot
    [Teardown]    Close Browser
