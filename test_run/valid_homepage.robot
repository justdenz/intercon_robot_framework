*** Settings ***
Documentation     A test suite with a single test for valid login.
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Test Cases ***
Valid Homepage
    Open Browser To Home Page
    Go to Services Page
    [Teardown]    Close Browser
