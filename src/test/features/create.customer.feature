Feature: Create a new customer at XYZ Bank
#As a bank manager
#I want to be able to add new bank customers
#So that I can provide quality services to our customers

#Acceptance Criteria:
#First Name, Last Name and Post Code fields are required
#If operation is successful the following message is displayed: “Customer added successfully with customer id :X”
#If customer already exists the following message is displayed: “Please check the details. Customer may be duplicate.”
#New record is added to the Customers table
  
  @customer @test
  Scenario: Create a customer
    Given user navigate to login page
    When user create a customer
    Then customer added successfully

  @customer @test @negativetest
  Scenario: Create a duplicate customer to check error message
    Given user navigate to login page
    When user duplicate a customer in create customer section
    Then error message display during duplicate customer creation
