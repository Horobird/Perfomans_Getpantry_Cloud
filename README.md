# Perfomans_Getpantry_Cloud

_______
  :small_orange_diamond:Here is one example of load testing with the help of tools from [Artillery](https://www.artillery.io/).      
  :small_orange_diamond:The [Pantry](https://getpantry.cloud/) resource is selected as the test object. With the help of Artillery, users are created who, through the API, change information in the authorized pantry.     
  :small_orange_diamond:[Artillery](https://www.artillery.io/) manipulates the time and number of users, increasing or decreasing the load on the server. The test report is displayed in the terminal        
          
  ![imag](https://github.com/Horobird/Perfomans_Getpantry_Cloud/blob/main/2023-06-21_17h00_17.png)
  
  and can also be received in the result.json or result.json.html.      
 :small_orange_diamond:In this example, at the start, one user per second is created for 10 seconds (warm-up), then the load increases sharply to ten users per second for 10 seconds and the transition to the cooling phase for 10 seconds, one user per second. The param.csv file is used to change the information.
