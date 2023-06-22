# Perfomans_Getpantry_Cloud

_______
[<img src="https://img.shields.io/badge/Artillery v2.0.0-32-8B4513?style=flat-square& &logoColor=FFFF00"/>](https://en.wikipedia.org/wiki/JavaScript)   [<img src="https://img.shields.io/badge/Node v19.8.1-7B68EE?style=flat-square&logo=Node .js&logoColor=00FF00"/>](https://nodejs.org/en)   [<img src="https://img.shields.io/badge/YAML-3CB371?style=flat-square&logo=yaml&logoColor=FFA500"/>](https://github.com/yaml/)       
  :small_orange_diamond:Here is one example of load testing with the help of tools from [Artillery](https://www.artillery.io/).   
        
  :small_orange_diamond:The [Pantry](https://getpantry.cloud/) resource is selected as the test object. With the help of Artillery, users are created who, through the API, change information in the authorized pantry.     
  :small_orange_diamond:[Artillery](https://www.artillery.io/) manipulates the time and number of users, increasing or decreasing the load on the server. The test report is displayed in the terminal        
          
  ![imag](https://github.com/Horobird/Perfomans_Getpantry_Cloud/blob/main/img.png)
  
  and can also be received in the result.json or result.json.html.      
 :small_orange_diamond:In this example, at the start, one user per second is created for 10 seconds (warm-up), then the load increases sharply to ten users per second for 10 seconds and the transition to the cooling phase for 10 seconds, one user per second. The param.csv file is used to change the information.
