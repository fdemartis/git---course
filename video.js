const {Builder, By, Key, util} = require("selenium-webdriver");
const { get } = require("selenium-webdriver/http");

const driver = new Builder().forBrowser("firefox").build();
//Navigate to url
driver.get("https://www.youtube.com.ar");
//Enter text in search box
driver.findElement(By.name("search_query")).sendKeys("autos");
//Just enter
driver.findElement(By.name("search_query")).sendKeys(Key.ENTER);
//Maximize window
driver.manage().window().maximize();
//Minimize window
driver.manage().window().minimize();