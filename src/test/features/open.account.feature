Feature: Open an account at XYZ Bank
#As a bank manager
#I want to be able to open new accounts for existing customers
#So that I can provide quality services to our customers

#Acceptance Criteria:
#Available currencies: Dollar, Pound, Rupee
#If operation is successful the following message is displayed: “Account created successfully with account Number :X”
#The customer’s record in the Customers table is updated with the new account number
  
  @openaccount @test
  Scenario Outline: Open a new account for existing customer
    Given user navigate to login page
    When open a new account in "<currency>" for existing customer
    Then new account added for the existing customer successfully
    Examples:
    | currency|
    | Dollar | 
    | Pound |
    | Rupee |

