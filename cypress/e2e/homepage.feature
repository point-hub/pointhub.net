Feature: Homepage
  Background: User visiting homepage
    Given I visit homepage "/"

  Scenario: User see homepage hero
    Then I should see hero title "Solusi Sistem Software Fleksibel & Terintegrasi"
    And I should see button "Lihat Software" and have link to "https://wa.me/+628113399578"

  Scenario: User see homepage products
    Then I should see product information
      | Product                   | 
      | Key Performance Indicator | 
      | Checkin                   | 
      | Shift Control             | 
      | Sales Visitation          | 
  
  Scenario: User see homepage testimony
    Then I should see testimony title "Sudah Dipercaya 2000+ Pemilik Bisnis"
  
  Scenario: User see homepage standard
    Then I should see testimony title "Sudah Dipercaya 2000+ Pemilik Bisnis"
