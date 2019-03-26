$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AUTO1Group_Search.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: en"
    },
    {
      "line": 2,
      "value": "# encoding UTF-8"
    }
  ],
  "line": 3,
  "name": "Search Test Case",
  "description": "\nAs a customer\nI want to filter the search by price descending and verify the car offers",
  "id": "search-test-case",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "I can verify all cars by first registration",
  "description": "",
  "id": "search-test-case;i-can-verify-all-cars-by-first-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@chrome-same-session"
    },
    {
      "line": 8,
      "name": "@TestRegistrationYear"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I navigate to the search \"https://www.autohero.com/de/search/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I filter for first registration \u003cyearFilter\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify all cars are filtered by first registration \u003cyearFilter\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "search-test-case;i-can-verify-all-cars-by-first-registration;",
  "rows": [
    {
      "cells": [
        "yearFilter"
      ],
      "line": 15,
      "id": "search-test-case;i-can-verify-all-cars-by-first-registration;;1"
    },
    {
      "cells": [
        "\"2015\""
      ],
      "line": 16,
      "id": "search-test-case;i-can-verify-all-cars-by-first-registration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4851607916,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "I can verify all cars by first registration",
  "description": "",
  "id": "search-test-case;i-can-verify-all-cars-by-first-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@TestRegistrationYear"
    },
    {
      "line": 8,
      "name": "@chrome-same-session"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I navigate to the search \"https://www.autohero.com/de/search/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I filter for first registration \"2015\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify all cars are filtered by first registration \"2015\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.autohero.com/de/search/",
      "offset": 26
    }
  ],
  "location": "StepsSearch.que_eu_acesso_a_url(String)"
});
formatter.result({
  "duration": 24162015456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2015",
      "offset": 33
    }
  ],
  "location": "StepsSearch.iFilterForFirstRegistration(String)"
});
formatter.result({
  "duration": 388680297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2015",
      "offset": 54
    }
  ],
  "location": "StepsSearch.iVerifyAllCarsFilter(String)"
});
formatter.result({
  "duration": 5610146371,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "I can verify all cars are sorted by price descending",
  "description": "",
  "id": "search-test-case;i-can-verify-all-cars-are-sorted-by-price-descending",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@chrome-same-session"
    },
    {
      "line": 18,
      "name": "@TestDescendingPrice"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to the search \"https://www.autohero.com/de/search/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I sort cars by \"Höchster Preis\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I verify all cars are sorted by price descending",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "search-test-case;i-can-verify-all-cars-are-sorted-by-price-descending;",
  "rows": [
    {
      "cells": [
        "yearFilter"
      ],
      "line": 25,
      "id": "search-test-case;i-can-verify-all-cars-are-sorted-by-price-descending;;1"
    },
    {
      "cells": [
        "\"2015\""
      ],
      "line": 26,
      "id": "search-test-case;i-can-verify-all-cars-are-sorted-by-price-descending;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29949,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "I can verify all cars are sorted by price descending",
  "description": "",
  "id": "search-test-case;i-can-verify-all-cars-are-sorted-by-price-descending;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@chrome-same-session"
    },
    {
      "line": 18,
      "name": "@TestDescendingPrice"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to the search \"https://www.autohero.com/de/search/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I sort cars by \"Höchster Preis\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I verify all cars are sorted by price descending",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.autohero.com/de/search/",
      "offset": 26
    }
  ],
  "location": "StepsSearch.que_eu_acesso_a_url(String)"
});
formatter.result({
  "duration": 21048041396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Höchster Preis",
      "offset": 16
    }
  ],
  "location": "StepsSearch.iSortCarsPriceDescending(String)"
});
formatter.result({
  "duration": 421768269,
  "status": "passed"
});
formatter.match({
  "location": "StepsSearch.iVerifyAllCarsSorted()"
});
formatter.result({
  "duration": 5568586610,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "I can verify all cars by first registration and all cars are sorted by price descending",
  "description": "",
  "id": "search-test-case;i-can-verify-all-cars-by-first-registration-and-all-cars-are-sorted-by-price-descending",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@chrome-same-session"
    },
    {
      "line": 28,
      "name": "@TestDescendingRegistration"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I navigate to the search \"https://www.autohero.com/de/search/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I filter for first registration \u003cyearFilter\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I sort cars by \"Höchster Preis\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify all cars are filtered by first registration \u003cyearFilter\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I verify all cars are sorted by price descending",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "search-test-case;i-can-verify-all-cars-by-first-registration-and-all-cars-are-sorted-by-price-descending;",
  "rows": [
    {
      "cells": [
        "yearFilter"
      ],
      "line": 37,
      "id": "search-test-case;i-can-verify-all-cars-by-first-registration-and-all-cars-are-sorted-by-price-descending;;1"
    },
    {
      "cells": [
        "\"2015\""
      ],
      "line": 38,
      "id": "search-test-case;i-can-verify-all-cars-by-first-registration-and-all-cars-are-sorted-by-price-descending;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35693,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "I can verify all cars by first registration and all cars are sorted by price descending",
  "description": "",
  "id": "search-test-case;i-can-verify-all-cars-by-first-registration-and-all-cars-are-sorted-by-price-descending;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@chrome-same-session"
    },
    {
      "line": 28,
      "name": "@TestDescendingRegistration"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I navigate to the search \"https://www.autohero.com/de/search/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I filter for first registration \"2015\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I sort cars by \"Höchster Preis\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify all cars are filtered by first registration \"2015\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I verify all cars are sorted by price descending",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.autohero.com/de/search/",
      "offset": 26
    }
  ],
  "location": "StepsSearch.que_eu_acesso_a_url(String)"
});
formatter.result({
  "duration": 21024655159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2015",
      "offset": 33
    }
  ],
  "location": "StepsSearch.iFilterForFirstRegistration(String)"
});
formatter.result({
  "duration": 279535771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Höchster Preis",
      "offset": 16
    }
  ],
  "location": "StepsSearch.iSortCarsPriceDescending(String)"
});
formatter.result({
  "duration": 388133426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2015",
      "offset": 54
    }
  ],
  "location": "StepsSearch.iVerifyAllCarsFilter(String)"
});
formatter.result({
  "duration": 5578314602,
  "status": "passed"
});
formatter.match({
  "location": "StepsSearch.iVerifyAllCarsSorted()"
});
formatter.result({
  "duration": 5529279976,
  "status": "passed"
});
});