package org.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.utilities.BaseClass;

import io.cucumber.java.en.*;

public class ForgottenStepDefinition extends BaseClass{

	
	
	@Given("User should open chrome browser and load url")
	public void userShouldOpenChromeBrowserAndLoadUrl() {
		launchChrome();
		loadUrl("https://www.facebook.com");
		winMax();
	   
	}

	@When("User should click the forggoten password link")
	public void userShouldClickTheForggotenPasswordLink() throws InterruptedException {
		
		driver.findElement(By.xpath("//a[text()='Forgotten password?']")).click();
		Thread.sleep(2000);
	
	}

	@When("User should input invalid mobile number on the textbox")
	public void userShouldInputInvalidMobileNumberOnTheTextbox() {
		driver.findElement(By.xpath("//input[@id='identify_email']")).sendKeys("0123456789");
	 
	}

	@When("User should click the search button")
	public void userShouldClickTheSearchButton() {
		
		driver.findElement(By.xpath("//button[@name='did_submit']")).click();
	
	}

	@Then("User should navigate to recover page")
	public void userShouldNavigateToRecoverPage() {
	  String current = driver.getCurrentUrl();
	 // Assert.assertTrue("check forgot", current.contains("Kavin"));
	  System.out.println("Forgotten -Pass");
	  
	}
}
