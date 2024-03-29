# Iron Maps
Iron Maps is a gym finder for enthusiasts and strength athletes. We make it easy to find a gym with our curated directory of gyms.
Users have the ability to add/edit/delete gym postings, add/edit/delete reviews, and also like individual gyms.

**Link to project:** https://ironmaps.up.railway.app/

![Screen Shot 2022-11-22 at 5 06 51 PM](https://user-images.githubusercontent.com/97640502/203451205-091dc89e-2a2e-4087-a60d-098f949a5b8c.png)
![Screen Shot 2022-11-22 at 5 05 18 PM](https://user-images.githubusercontent.com/97640502/203451174-0326bce8-5046-4b6e-88c0-46814be93bc2.png)
![Screen Shot 2022-11-22 at 5 09 46 PM](https://user-images.githubusercontent.com/97640502/203451459-5ffa5080-25da-4407-9640-851b6e6eff96.png)




## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Tailwind, Node.JS, MongoDB, Express

Gyms are added to the database using a form that handles a POST request. These gyms are created on the form, sent to the MongoDB database and retrieved and displayed to the user on their profile using EJS. The training facility can be favorited using an update method.

Reviews are created using a form in which the user inputs their information and talks about hteir experience. From this data, reviews aredisplayed to the user under the appropriate gym. 

Users are authenticated using PassportJS so anyone can have their own account. Passwords are hashed using bcrypt to protect user privacy.

## Optimizations


Core functionality on the app is completed. As per requests from friends and family, I will be implementing these features in the future:

- Adding pagination to organize the all gym page into multiple pages
- ability to add social media links to a gyms post
- ability to add multiple images per post 

## Lessons Learned:

- While building this app, I've learned that it's important to keep track of IDs that exist between the various models of the app. If proper links are not established with the methods, the server will not return anything.

- Additionally, EJS may throw errors if data contains undefined elements. It's best to render entire objects within EJS and parse through properties as necessary.

- I've also learned how to use tailwind to style the front-end and reinforce the fundamentals of flexbox.


## Check Out My Other Work:

[SCCS: NASA's Astronomy Picture of the Day](https://github.com/hansontram/cosmo-nasa-react) - Select a date and display a picture or video loaded from NASA's very own API.

[SupaCook](https://github.com/hansontram/supacook-recipes) - A recipe app allowing users to log an ingredient and generates multiple recipe ideas including the specified item. 

[CodeWars Challenges](https://github.com/hansontram/codewars-challenges) - A collection of all the CodeWars problems I've done to sharpen my problem solving skills and practice Javascript.


