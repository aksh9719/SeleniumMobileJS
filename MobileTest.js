const { Builder, By, Key } = require('selenium-webdriver');

(async function example() {
    let desiredCapabilities = {
        'w3c': true,
        'platformName': 'iOS',
        'platformVersion': '13',
        'deviceName': "iPhone 11",
        'nativeWebScreenshot': true,
        'build': 'Demo',
        'isRealMobile': true,
        'console': true,
        'visual': true,
        'network': true,
        'tunnel': false,
        "newCommandTimeout": 300
    };

    let username = "LT_USERNAME";
    let accessKey = "LT_ACCESS_KEY";
    let url = `https://${username}:${accessKey}@mobile-hub.lambdatest.com/wd/hub`;

    let driver = await new Builder()
        .usingServer(url)
        .withCapabilities(desiredCapabilities)
        .build();

    try {
        await driver.get("https://lambdatest.github.io/sample-todo-app/");
        await driver.sleep(2000);

        let list1 = await driver.findElement(By.xpath("//input[@name='li1']"));
        await list1.click();
        await driver.sleep(1000);

        let list2 = await driver.findElement(By.xpath("//input[@name='li2']"));
        await list2.click();
        await driver.sleep(1000);

        let inputField = await driver.findElement(By.id("sampletodotext"));
        await inputField.click();
        await inputField.sendKeys("item 1");
        await driver.hideKeyboard();
        await driver.sleep(1000);

        await driver.executeScript("document.getElementById('addbutton').click();");
        await driver.sleep(1000);

        inputField = await driver.findElement(By.id("sampletodotext"));
        await inputField.click();
        await inputField.sendKeys("item 2");
        await driver.hideKeyboard();
        await driver.sleep(1000);

        await driver.executeScript("document.getElementById('addbutton').click();");
        await driver.sleep(5000);

    } finally {
        await driver.quit();
    }
})();
