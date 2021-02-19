let {Builder, By} = require('selenium-webdriver');
driver = new Builder().forBrowser('firefox').build();

(async function test(){

//Navigate to url
await driver.get('https://www.telecentroplay.com.ar/login');
//enter user
await driver.findElement(By.id("username")).sendKeys("fdemartis94@gmail.com");
//enter pass
await driver.findElement(By.id("password")).sendKeys("elgordoliam");
//click submit
await driver.findElement(By.xpath("//button[@class='btn btn-primary float-right']")).click();

})();