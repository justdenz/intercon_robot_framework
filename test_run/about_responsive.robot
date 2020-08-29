*** Settings ***
Documentation     A test suite to check mobile responsiveness in about page
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Test Cases ***
Test Run
    Open Browser to About Page
    [Teardown]    Close Browser