* UX
** Project Goals

With this page I aimed to make a fun and lighthearted spin on the famous Whack-a-mole game. 
Instead of Whacking moles, the name of the game is to pet pups. The game is intended for users 
who want a more relaxing experience than frenetically whacking moles. Perhaps the game is ideal 
for someone taking a quick break from their job and thinking of how they miss their dog at home. 

** User Stories

As a user of this game I am looking to release stress without being inactive. Whilst the game cannot truly
simulate the relaxing experience of petting dogs, it comes as close as a small javascript game can. A user
of this game wants to unwind from concrete life-goals and perform something smaller on the side. The scoring
function is both a competetive measure with other people as well as a measure of how well one does at virtually
engaging with petting dogs (consequently with how well one does to temporarily disengage from other things.) Users 
looking for more complex games or self-improvement games would do well to steer clear of Pet-a-Pup as the game is 
wholly anti-utilitarian.

** Design

This is a fun and lighthearted page on purpose, its design reflects that. The layout is simple and intuitive
and doesn't have much complexity to it in terms of navigation. The colors range from bright to mild to give a positive
impression without being too much in terms of intensity. With a few clicks the entire page can be navigated, from
entering a name and playing a game, to checking out the top scores or the about section. 

** Wireframes

As the project itself was rather simple in its form I didn't spend too much time on making Wireframes and instead tried out
design differences in HTML/CSS pretty early on. A simple wireframe was made here: https://wireframe.cc/RxCxz9

* Features
** Existing Features

*** Enter name
    Players are prompted to enter their names. The form needs to have some kind of text as the js-validation rejects empty input.
    Other than that people are free to choose whichever names that please them.

*** Navbar
    Players are able to navigate the game, highscores and an about page. 

*** Play game
    Players start the game when they are ready. When the game launches, pups begin to pop up only to rapidly pop down again. 
    Players need to move their mouse over the pups to continously score more and more points, the final score then being a
    measure of how intensely one has petted these virtual pups. 

*** Postgame score message
    At the end of the game players are greeted by a score message which returns their name and their and a picture of a Nova
    Scotia Duck Tolling Retriever which is in a rather good mood. 

*** Play again button
    Players have the option to play the game again which will restart the game immediately.

*** Submit score button
    Players also have the option to submit their scores to the topscore-list.

*** Highscores list
    There is a highscore list where one can compare one's score to other players' score.

** Features Left to Implement

*** Black-cat hazard
    I would have wanted to include one or two black cats (emerging and disappearing much like the pups) which the player would 
    have needed to avoid or receive a harsh penalty to their score. However, due to the game design being rather simple and wanting the
    layout to remain the same and the game playable on as many screen sizes, it was too difficult to implement as the cat-divs overlapped
    with the divs of the pups which in turn broke the continuity of the game. 

*** Challenges
    It would be nice to add some interativity and make it possible to send challenges to one's friends to determine who the best
    petter of pups is. However, that would be a bit too advanced for my current skill level.      

* Technologies Used
** Languages
    HTML, CSS and Javascript have been used to create this page. 

** Libraries and Frameworks
    *** Bootstrap
    Bootstrap has ben used to improve and simplify the implementation of the page design. Some default styles have been used
    and then slighly altered to fit the page and its purposes. However, much has been done without the help of bootstrap and the 
    game design itself is vanilla. 

    *** Google fonts
    Google fonts has been used to select a nice font for the page.

    *** Github & Gitpod
    The project has been created with the help of Gitpod and is hosted to Github pages. 

* Testing
* Deployment
** Local Deployment


* Credits
** Images

Tolling retriever: <span>Photo by <a href="https://unsplash.com/@jamie452?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jamie Street</a> on <a href="https://unsplash.com/s/photos/dog?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

Wizard Goldie: Image by <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=47229">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=47229">Pixabay</a>

Pup with bone: Image by <a href="https://pixabay.com/users/grafikacesky-947552/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1305702">grafikacesky</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1305702">Pixabay</a>

Beagle pup: Image by <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=48472">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=48472">Pixabay</a>

Dalmatian: Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=150954">OpenClipart-Vectors</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=150954">Pixabay</a>

** Acknowledgements

*** CodeInstitute -- This is a CodeInstitute project and the learning material led to this project and provided me with an understanding
of basic javascript concepts.

*** https://www.freecodecamp.org/ -- resources and free courses further enhanced understanding of basic javascript.

*** https://wesbos.com/courses - JavaScript30.com -- Helped me understand javascript much better and was important both for the basic setup
of the game as well as usage of local storage.  

*** https://developer.mozilla.org/ & https://www.w3schools.com/ -- both have been a reference for me throughout the project.  

*Disclaimer