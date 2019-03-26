package br.com.userede.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import br.com.userede.pages.StepsSearchAUTO1;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.concurrent.TimeUnit;

public class StepsSearch {

	WebDriver driver;
	StepsSearchAUTO1 _step1Auto1SearchPage;

	public StepsSearch() {
		driver = Hooks.driver;

		_step1Auto1SearchPage = new StepsSearchAUTO1(driver);

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();

	}

	@Given("^I navigate to the search \"([^\"]*)\"$")
	public void que_eu_acesso_a_url(String pUrl) throws Throwable {
		driver.get(pUrl);
	}

	@When("^I filter for first registration \"([^\"]*)\"$")
	public void iFilterForFirstRegistration(String pFilter) throws Throwable {
		_step1Auto1SearchPage.filterYear(pFilter);

	}

	@When("^I sort cars by \"([^\"]*)\"$")
	public void iSortCarsPriceDescending(String pSort) throws Throwable {
		_step1Auto1SearchPage.sortCarsBy(pSort);

	}
	
	@Then("^I verify all cars are sorted by price descending$")
	public void iVerifyAllCarsSorted() throws Throwable {
		Assert.assertTrue(_step1Auto1SearchPage.getSortedCars());

	}
	
	
	@Then("^I verify all cars are filtered by first registration \"([^\"]*)\"$")
	public void iVerifyAllCarsFilter(String pFilter) throws Throwable {
		Assert.assertTrue(_step1Auto1SearchPage.getFilterCars(pFilter));

	}
}
