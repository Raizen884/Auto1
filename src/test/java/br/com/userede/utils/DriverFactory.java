package br.com.userede.utils;

import java.io.File;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.safari.SafariDriver;

public class DriverFactory {

	public enum Browsers {
		FIREFOX, CHROME, SAFARI
	}

	public static WebDriver getDriver(Browsers browser) throws Exception {

		switch (browser) {
		case FIREFOX:
			
			File geckodriver = new File("src/test/resources/drivers/geckodriver.exe");
			
			System.setProperty("webdriver.gecko.driver", geckodriver.getAbsolutePath());

			DesiredCapabilities capabilities = DesiredCapabilities.firefox();
			capabilities.setCapability("marionette", false);

			return new FirefoxDriver(capabilities);

		case CHROME:
			
			File chromedriver = new File("src/test/resources/drivers/chromedriver.exe");
			
			System.setProperty("webdriver.chrome.driver", chromedriver.getAbsolutePath());

			ChromeOptions options = new ChromeOptions();
			options.addArguments("disable-infobars");
			options.addArguments("--start-fullscreen");

			return new ChromeDriver(options);

		case SAFARI:

			return new SafariDriver();

		default:
			return null;
		}

	}
}
