# ManageMyProperty
## Springboard-Section-50-Capstone-Project-2

### Description
This app is desgined to both demonstrate technical skills and also provide something of use, which I hope may be used. 
Firstly, the motivation for the idea.  I own an apartment in a building which is managed by a managing agent. 
Naturally, problems crop up and they need to be sorted. Currently, other than email or a call, there is no way to report an issue
to the management. Even worse, there is no way to review the issues you have reported; look at the details, read the updates, check the progress.
For the managing agent, except for spreadsheets or a word document, there is no means to centrally hold all the issues and reviewing them in one place.  

Therefore, I thought I could answer this requirement and at the same time demonstrate some of the key coding skills and technologies I have picked up during the 
Springboard Software Engineering course.

#### What does the app do?
Let's look in more detail at the functionality of the app. from the perspective of the user.
If I am non-admin user, I have firstly to register before I can get access. This involves entering a series of details, such as username and password plus my property into a form.
On submission, I am in!  

Now I can create an issue, see my issues, update my issues, review updates made by admin users, and close my issues.
I can also view my profile details.  

As an admin user, the role of the managing agent who is responsible for resolving the problems, I can do all of the above, but, in addition, 
review issues created by other users, update any of them and close them.  

Yes, it's simple, but answers a genuine requirement and can be added to.

#### What technology was used in the coding?
The structure of the code is divided into front and backend.

##### Frontend
This uses Create React App which is a useful tool for building React components.  
As per convention, the top level component is App.js which renders all other components.
In addition, I have made use of React Router to allow for client-side routing. Whereas server-side routing requires an individual request to be made 
to the server for each new html page, with the client-side alternative, we still represent each page by a url address, all the rendering is done on the client side.  

To implement the routing functionality in React Router, the components, which are themselves wrapped in a <Route> tag, are all enclosed by <BrowserRouter>. 
This enables the routing.  

Going back to the <Router> tag, it has a couple of props. There is the component itself, but also the url.

![](images/router_tag.png)



What the app does
Tech used
Challenges and what could be implemented in future

