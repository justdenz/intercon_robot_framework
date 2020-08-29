from robot.libraries.BuiltIn import BuiltIn
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time

def capture_full_page_screenshot():
    # get webdriver instance from robotframework selenium library
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--start-maximized')
    driver = webdriver.Chrome(chrome_options=chrome_options)
    driver.get("yoururlxxx")
    time.sleep(2)

    #the element with longest height on page
    ele=driver.find_element("xpath", '//div[@class="react-grid-layout layout"]')
    total_height = ele.size["height"]+1000

    driver.set_window_size(1920, total_height)      #the trick
    time.sleep(2)
    driver.save_screenshot("screenshot1.png")
    driver.quit()