package br.com.userede.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import br.com.userede.utils.DriverFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	public static WebDriver driver;

	@Before("@firefox")
	public void openFirefoxBrowserDeskop() throws Exception {

		driver = DriverFactory.getDriver(DriverFactory.Browsers.FIREFOX);
		driver.manage().deleteAllCookies();

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();

	}

	@Before("@firefox-same-session")
	public void openFirefoxSameSessionBrowserDeskop() throws Exception {

		if (driver == null) {
			driver = DriverFactory.getDriver(DriverFactory.Browsers.FIREFOX);
			driver.manage().deleteAllCookies();

			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.manage().window().maximize();
		}

	}

	@Before("@safari")
	public void openSafariBrowserDeskop() throws Exception {

		driver = DriverFactory.getDriver(DriverFactory.Browsers.SAFARI);
		driver.manage().deleteAllCookies();

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}

	@Before("@chrome")
	public void openChromeBrowserDeskop() throws Exception {

		driver = DriverFactory.getDriver(DriverFactory.Browsers.CHROME);
		driver.manage().deleteAllCookies();

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Before("@chrome-same-session")
	public void openChromeBrowserDeskopSameSession() throws Exception {
		if (driver == null) {
			driver = DriverFactory.getDriver(DriverFactory.Browsers.CHROME);
			driver.manage().deleteAllCookies();

			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		}
	}

	@After("@closeBrowser")
	public void closeBrowser() throws Exception {

		try {

			driver.quit();

		} catch (Exception e) {

			System.out.println(e.getMessage());

		}

	}

	@After("@refreshBrowser")
	public void refreshBrowser() throws Exception {

		try {

			driver.navigate().refresh();
			;

		} catch (Exception e) {

			System.out.println(e.getMessage());

		}

	}

}
