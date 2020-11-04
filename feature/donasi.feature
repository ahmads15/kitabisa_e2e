Feature: Donation for campaign on kitabisa.com

Background: Open Web browser kitabisa.com

Scenario: Donation for campaign
Given a web browser is kitabisa.com page
When User choose donasi
And User choose donation saling jaga
And User click button donasi sekarang
And User click amount as 10k
And User choose transfer BCA as payment method
Then User successfully payment and redirect to penggalangan dana