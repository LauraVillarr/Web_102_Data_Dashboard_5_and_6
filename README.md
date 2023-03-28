# Web Development Project 5 - *Data Dashboard (RecipeDash)*

Submitted by: **Laura Villarreal**

This web app: **displays a dashboard of food items taken from the spoonacular API along with their healthscore, cooktime, link to the recipe, and image.
It also has 3 summary statistics at the top, a search bar, and a filter to get the food considered to be healthier.**

Time spent: **13** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The list displays a list of data fetched using an API call**
- [X] **Data uses the useEffect React hook and async/await syntax**
- [X] **The app dashboard includes at least three summary statistics about the data such as**
  - [X] First one displays the total number of recipes, the second one displays the number of recipes whose health score >= 10, and the third one takes the cooking times of all 15 recipes and averages them out.
- [X] **A search bar allows the user to search for an item in the fetched data**
- [X] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [X] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [X] The skeleton of a navbar was added for use in the next part of the project (currently does not do anything)
* [X] CSS styles were implemented to give the website a clean look.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
**For user stories for the API call and useEffect:**

<img src='https://github.com/LauraVillarr/Web_102_Data_Dashboard_5_and_6/blob/master/useEffect_and_API_stories_walkthrough_project5_data_dashboard.gif' title='Video Walkthrough API and UseEffect' width='' alt='Video Walkthrough API and useEffect' />

**For all other user stories:**
<img src='https://github.com/LauraVillarr/Web_102_Data_Dashboard_5_and_6/blob/master/walkthrough_project5_data_dashboard.gif' title='Video Walkthrough other user stories' width='' alt='Video Walkthrough other user stories' />
<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
[ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

This was the most challenging codepath project I have had so far for this course. I had a lot of issues first getting the API working and grabbing the data that I
wanted. Next, I had issues with how to get summation statistics. I did not realize immediately that a useEffect would be a good way to implement this. Next, I had a
lot of issues getting my search bar to work properly, as I was having issues with displaying the filtered data on the screen. I had also initially wanted the search
bar to have a search button, but decided that it may be easier for me to have the search results occur automatically instead of on a button press. I eventually
utilized a different approach from the lab to get it working, not using a useState but instead filtering and mapping it directly into the table. Finally, I had a bit
of issue getting my checkbox filter to work with the filtering implementation I wanted. I eventually was able to get the checkbox and search bar to filter separately.

## License

    Copyright [2023] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
