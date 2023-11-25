
@Smoke
Feature: Validate the login Functionality of Facebook Page



Background:
#Given User should launch the chrome browser and load the url

@Pink
Scenario: Validate the login with invalid username and invalid password

When User should input invalid username and invalid passworD in the textbox
						#2D MAP --> Header
						|Person |Colour|Fruits|
						|Ajay   |Greens|Apple |
						|Kumar  |Pink  |Grapes|
						|Kavin  |Red   |hello |
						|Vimal  |Yellow|how   |
And User should click the login button
And User should print the title of the page
And User should print the current Url of my page
Then User should navigate to incorrect credential page

@Yellow @Hello
Scenario: Validate the login witn valid username and invalid password

When User should input valid username and invalid password in the textbox
And User should click the login button
And User should print the current url of the page
And User should print the title of the page
Then User should navigate to incorrect credential page


Scenario Outline: Validate the login with invalid username and valid password
When User should input invalid username "<Fruits>" and valid password "<Colours>"in the textbox
And User should click the login button
And User should print the current url of the page
And User should print the title of the page
#Then User should navigate to incorrect credential page

Examples:
						|Fruits|Colours|
						|Apple |Green  |

						







