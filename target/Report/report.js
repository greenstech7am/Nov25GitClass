$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/Forgotten.feature");
formatter.feature({
  "name": "Validate the forgotten password functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "name": "Validate the forgotten with invalid mobilenumber",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should click the forggoten password link",
  "keyword": "When "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldClickTheForggotenPasswordLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should input invalid mobile number on the textbox",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldInputInvalidMobileNumberOnTheTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldClickTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to recover page",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgottenStepDefinition.userShouldNavigateToRecoverPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Login.feature");
formatter.feature({
  "name": "Validate the login Functionality of Facebook Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Pink"
    }
  ]
});
formatter.step({
  "name": "User should input invalid username and invalid passworD in the textbox",
  "rows": [
    {
      "cells": [
        "Person",
        "Colour",
        "Fruits"
      ]
    },
    {
      "cells": [
        "Ajay",
        "Greens",
        "Apple"
      ]
    },
    {
      "cells": [
        "Kumar",
        "Pink",
        "Grapes"
      ]
    },
    {
      "cells": [
        "Kavin",
        "Red",
        "hello"
      ]
    },
    {
      "cells": [
        "Vimal",
        "Yellow",
        "how"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputInvalidUsernameAndInvalidPassworDInTheTextbox(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current Url of my page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfMyPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login witn valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Yellow"
    },
    {
      "name": "@Hello"
    }
  ]
});
formatter.step({
  "name": "User should input valid username and invalid password in the textbox",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputValidUsernameAndInvalidPasswordInTheTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to incorrect credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_navigate_to_incorrect_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should input invalid username \"\u003cFruits\u003e\" and valid password \"\u003cColours\u003e\"in the textbox",
  "keyword": "When "
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the current url of the page",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the title of the page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Fruits",
        "Colours"
      ]
    },
    {
      "cells": [
        "Apple",
        "Green"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should input invalid username \"Apple\" and valid password \"Green\"in the textbox",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldInputInvalidUsernameAndValidPasswordInTheTextbox(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the current url of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.userShouldPrintTheCurrentUrlOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the title of the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_print_the_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});