from robot.libraries.BuiltIn import BuiltIn
from selenium import webdriver

def capture_full_page_screenshot():
    # get webdriver instance from robotframework selenium library
    seleniumlib = BuiltIn().get_library_instance('SeleniumLibrary')
    webdriver = seleniumlib.driver

    # capturing body tag gives full page screenshot
    body_tag = webdriver.find_element_by_tag_name('body')
    body_tag.screenshot('image_name.png')