package br.com.userede.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"features/AUTO1Group_Search.feature",},
		glue = "br.com.userede.stepdefinition", 
		monochrome = true, plugin = {"pretty", "html:Reports/cucumber" })
public class RunnerTest {
}
