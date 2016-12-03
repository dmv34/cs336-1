#Preliminary Design

##Front-end Component Structure   
![Structure](https://github.com/Loganvp/cs336/blob/master/Project/React%20Component.jpg)   
User Interface design  
![UI](https://github.com/Loganvp/cs336/blob/master/Project/UI.png)
##Back-end Component Structure
   
First table of avalible squadrons to pull from.   
```JSON
[{"squadron": (name/id of squadron), "points": (int number out of 100),"faction": (one of the three playable factions), "pilots": [{"name": (of pilot), "ship": (name of ship),"upgrades": [ (list of all upgrade cards on ship) ] }, (remaining pilots in squadron)] }, (many more squadrons)]
```
Second table of squadron matchups.   
```JSON
[{"squadron1": (name of first squadron), "squadron2": (name of second squadron), "percentage", (int value of percent chance that squad 1 beats squad 2)}, (many more matchups)]
```
