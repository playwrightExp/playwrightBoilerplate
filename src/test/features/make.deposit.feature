Feature: Make deposit to customer at XYZ Bank
#As a bank customer
#I want to be able to make a deposit to one of my existing accounts
#So that I can manage my finances

    @deposit @test
    Scenario: Make a deposit
    Given user navigate to login page
    When user make a deposit
    Then transaction updated successfully

    @deposit @test1
    Scenario: Make a deposit to check transaction with 10 seconds delay
    Given user navigate to login page
    When user make a deposit
    Then check transaction in few seconds delay that to get updated successfully


    @deposit @test @negativetest
    Scenario: Submit an empty deposit
    Given user navigate to login page
    When user make an empty deposit
    Then error message displayed on deposit text field

