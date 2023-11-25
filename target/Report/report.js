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
  "error_message": "java.lang.AssertionError: check forgot\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.stepdefinition.ForgottenStepDefinition.userShouldNavigateToRecoverPage(ForgottenStepDefinition.java:45)\r\n\tat ✽.User should navigate to recover page(file:src/test/resources/FeatureFiles/Forgotten.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});