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


# Web Development Project 6 - *Data Dashboard (RecipeDash) Part 2*

Submitted by: **Laura Villarreal**

This web app: **Continues from part 1 by adding two charts to the main dashboard: one for the cooking times of each recipe in the dashboard and the other
displaying the price per serving for each recipe in the dashboard. It also includes a new recipe detail page that gives some extra information about each recipe
including the ingredients, directions, and a link to the page where the recipe came from.**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The app includes at least two unique chart developed using the fetched data that tell an interesting story**
- [X] **Clicking on an item in the list view displays more details about it**
- [X] **Clicking on an item has a direct, unique link to that item's detail view page**


The following **optional** features are implemented:

- [ ] The site's customized dashboard contains more content that explains what is interesting about the data
- [ ] The site allows users to toggle between different data visualizations

The following **additional** features are implemented:

* [X] Made the recipeDash logo and dashboard button link back to the home page
* [X] Modified how the data in the summary statistics is calculated a bit. Now only meals with health scores >= 30 are considered healthy and I rounded up the average for calculating average cooktimes.
* [X] Created a simple page that occurs whenever a user inputs a link that does not exist. It will link the user back to the home page.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/LauraVillarr/Web_102_Data_Dashboard_5_and_6/blob/master/project6_data_dashboard_walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
[ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

I had some issues in laying everything out in the way I wanted it. I initially had the main recipe part of the dashboard and summary statistics centered, but I needed to determine how to move it properly to the left while still keeping it aligned in order to make room for the charts. Because of this change, styling the detail page to be centered was a bit challenging as well. I also had a few issues with getting data to display on the details page with the usestate variable, but most of the issues I had with that particular problem were sorted out beforehand when I did the lab which did a similar thing.

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
