*** Settings ***
Documentation     A test suite to check mobile responsiveness in about page
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Variables ***
${DIR}        ./screenshots/about

*** Test Cases ***
Responsive About Page
    Set Screenshot Directory    ${DIR}
    Open Browser to About Page
    Set Window Size    ${WIDTH_MOBILE_L}   ${HEIGHT}
    Capture Full Page Screenshot
    [Teardown]      Close Browser