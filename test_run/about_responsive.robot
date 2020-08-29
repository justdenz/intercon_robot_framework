*** Settings ***
Documentation     A test suite to check mobile responsiveness in about page
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Variables ***
${DIR}    screenshots

*** Test Cases ***
Responsive About Page