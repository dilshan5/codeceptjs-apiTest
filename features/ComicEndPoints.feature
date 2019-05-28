Feature: Marvel API - Comic
  In order to sure everything is up-to-date and working
  As a person
  I want to check all the Comic endpoints

  Scenario: Single comic by id - response payload matches the Comic type definition
    Given I am Server Side Application with "Valid" in QueryParams
    When I send a GET request to "/v1/public/comics/27649"
    And Response status code should be "200"
    Then the response payload should be:
      | Response Key    | Object Type |
      | code            | number      |
      | status          | string      |
      | copyright       | string      |
      | attributionText | string      |
      | attributionHTML | string      |
      | data            | object      |
      | etag            | string      |
