package br.com.userede.pages;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import br.com.userede.utils.BaseWebPageFactory;
import br.com.userede.utils.Util;

public class StepsSearchAUTO1 extends BaseWebPageFactory {

	@FindBy(how = How.XPATH, using = "//h3[text() = 'Dados da empresa']")
	private WebElement _headerCompanytInfo;

	@FindBy(how = How.XPATH, using = "//span[text()='Erstzulassung ab']")
	private WebElement filterYearBtn;

	@FindBy(how = How.XPATH, using = "//div[@data-qa-selector='filter-year']//select")
	private WebElement filterYearSelect;

	@FindBy(how = How.XPATH, using = "//div[@data-qa-selector='sort-select']//select")
	private WebElement orderBySelect;

	@FindBy(how = How.XPATH, using = "//div[@data-qa-selector='results-found']")
	private WebElement carsFilteredYear;

	public StepsSearchAUTO1(WebDriver pDriver) {
		super(pDriver);
	}

	public void filterYear(String pFilter) {
		Select dropdown = new Select(filterYearSelect);
		filterYearBtn.click();
		dropdown.selectByVisibleText(pFilter);

	}

	public void sortCarsBy(String pSort) {
		Select dropdown = new Select(orderBySelect);
		dropdown.selectByVisibleText(pSort);
	}

	public boolean getSortedCars() throws InterruptedException {
		By locator = By.xpath("(//div[@data-qa-selector='price'])");
		waitForList(locator);
		List<WebElement> elements = carsFilteredYear.findElements(locator);
		Integer lastPrice = 0;
		for (Iterator<WebElement> iterator = elements.iterator(); iterator.hasNext();) {
			WebElement webElement = (WebElement) iterator.next();
			Integer priceCar = Util.getInteger(webElement.getText());
			if (lastPrice == 0)
				lastPrice = priceCar;
			if (lastPrice < priceCar)
				return false;
			lastPrice = priceCar;
		}
		return true;
	}

	public boolean getFilterCars(String pFilter) throws InterruptedException {
		Integer year = Integer.valueOf(pFilter);
		List<Integer> yearList = new ArrayList<Integer>();
		while (year <= Calendar.getInstance().get(Calendar.YEAR)) {
			yearList.add(year);
			year++;
		}
		By locator = By.xpath("(//div[@data-qa-selector='results-found']//a//li[1])");
		waitForList(locator);
		List<WebElement> elements = carsFilteredYear.findElements(locator);

		for (Iterator<WebElement> iterator = elements.iterator(); iterator.hasNext();) {
			WebElement webElement = (WebElement) iterator.next();
			String yearCar = webElement.getText();
			if (!yearList.contains(Integer.valueOf(yearCar.substring(yearCar.length() - 4, yearCar.length()))))
				return false;
		}
		return true;
	}

	private void waitForList(By locator) throws InterruptedException {
		for (int i = 0; i < 10; i++) {
			List<WebElement> elements = carsFilteredYear.findElements(locator);
			try {
				elements.get(1).getText();
				Thread.currentThread();
				Thread.sleep(5000);
				return;
			} catch (Exception e) {
				Thread.currentThread();
				Thread.sleep(1000);
			}
		}

	}

}
