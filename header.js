let {Builder, By} = require('selenium-webdriver');
driver = new Builder().forBrowser('firefox').build();

(async function test(){

//Navigate to url
await driver.get('https://www.mercadolibre.com.ar/');
//click options of header menu
await driver.findElement(By.xpath("//a[text()='Ofertas']")).click();
await driver.findElement(By.xpath("//a[text()='Ofertas']")).click();

await driver.findElement(By.xpath("//a[text()='Historial']")).click();
await driver.findElement(By.xpath("//a[text()='Supermercado']")).click();
await driver.findElement(By.xpath("//a[text()='Tiendas oficiales']")).click();
await driver.findElement(By.xpath("//a[text()='Vender']")).click();
await driver.findElement(By.xpath("//a[text()='Ayuda']")).click();
})();
