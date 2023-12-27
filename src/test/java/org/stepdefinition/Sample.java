package org.stepdefinition;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Sample {

	
	public static void main(String[] args) throws IOException {
		
		
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		
		driver.get("https://www.facebook.com");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		List<WebElement> links = driver.findElements(By.tagName("a"));
		int size = links.size();
		System.out.println("Total links present in my home page: "+size);
		
		
		for (WebElement eachLink : links) {
			
			String linkUrl = eachLink.getAttribute("href");
			
			
			if (linkUrl!=null) {
				
				//1.Linkurl(String)----convert into Url
				URL url = new URL(linkUrl);
				
				
				//2.Establish Connection----URLConnection
				URLConnection o = url.openConnection();
				
				//3.Convert URLCOnnection to HTTPConnection
				//NewDataType ref = (newDataType)storedValue;
				HttpURLConnection h = (HttpURLConnection)o;
				
				int code = h.getResponseCode();
				
				if (code!=200) {
					System.out.println("Broken Link: "+linkUrl);
				}
				else {
					System.out.println("Working: "+linkUrl);
				}
				
				
			}
			
		}
		
		
		
		
		
		
	}
}
