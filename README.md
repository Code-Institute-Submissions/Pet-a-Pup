# Pet-a-Pup

Play game here: https://marcusaureliuslinden.github.io/Pet-a-Pup/index.html

## Table of contents
    1. UX 
        * Project Goals
        * User Stories
        * Design
        * Wireframes
    2. Features
        * Existing Features
        * Features Left to Implement
    3. Technologies Used
        * Languages
        * Libraries and Frameworks
    4. Testing
        * Manual Test-Log
        * Code validation
    5. Deployment
    6. Credits
        * Images
    7. Acknowledgements

## UX
### Project Goals

With this page I aimed to make a fun and lighthearted spin on the famous Whack-a-mole game. 
Instead of Whacking moles, the name of the game is to pet pups. The game is intended for users 
who want a more relaxing experience than frenetically whacking moles. Perhaps the game is ideal 
for someone taking a quick break from their job and thinking of how they miss their dog at home. 

### User Stories

As a user of this game I am looking to release stress without being inactive. Whilst the game cannot truly
simulate the relaxing experience of petting dogs, it comes as close as a small javascript game can. A user
of this game wants to unwind from concrete life-goals and perform something smaller on the side. The scoring
function is both a competetive measure with other people as well as a measure of how well one does at virtually
engaging with petting dogs (consequently with how well one does to temporarily disengage from other things.) Users 
looking for more complex games or self-improvement games would do well to steer clear of Pet-a-Pup as the game is 
wholly anti-utilitarian.

### Design

This is a fun and lighthearted page on purpose, its design reflects that. The layout is simple and intuitive
and doesn't have much complexity to it in terms of navigation. The colors range from bright to mild to give a positive
impression without being too much in terms of intensity. With a few clicks the entire page can be navigated, from
entering a name and playing a game, to checking out the top scores or the about section. 

### Wireframes

As the project itself was rather simple in its form I didn't spend too much time on making Wireframes and instead tried out
design differences in HTML/CSS pretty early on. A simple wireframe was made here: https://wireframe.cc/RxCxz9
Most of the game follows the wireframe. The About page has been disregarded as it wasn't really necessary and wouldn't have
added much value to the page in my opinion. 

## Features
### Existing Features

* Enter name
    Players are prompted to enter their names. The form needs to have some kind of text as the js-validation rejects empty input.
    Other than that people are free to choose whichever names that please them.

* Navbar
    Players are able to navigate the game, highscores and an about page. 

* Play game
    Players start the game when they are ready. When the game launches, pups begin to pop up only to rapidly pop down again. 
    Players need to move their mouse over the pups to continously score more and more points, the final score then being a
    measure of how intensely one has petted these virtual pups. 

* Postgame score message
    At the end of the game players are greeted by a score message which returns their name and their and a picture of a Nova
    Scotia Duck Tolling Retriever which is in a rather good mood. 

* Play again button
    Players have the option to play the game again which will restart the game immediately.

* Submit score button
    Players also have the option to submit their scores to the topscore-list.

* Highscores list
    There is a highscore list where one can compare one's score to other players' score.

### Features Left to Implement

* Black-cat hazard
    I would have wanted to include one or two black cats (emerging and disappearing much like the pups) which the player would 
    have needed to avoid or receive a harsh penalty to their score. However, due to the game design being rather simple and wanting the
    layout to remain the same and the game playable on as many screen sizes, it was too difficult to implement as the cat-divs overlapped
    with the divs of the pups which in turn broke the continuity of the game. 

* Challenges
    It would be nice to add some interativity and make it possible to send challenges to one's friends to determine who the best
    petter of pups is. However, that would be a bit too advanced for my current skill level.      

## Technologies Used
### Languages
    HTML, CSS and Javascript have been used to create this page. 

### Libraries and Frameworks
    * Bootstrap
    Bootstrap has ben used to improve and simplify the implementation of the page design. Some default styles have been used
    and then slighly altered to fit the page and its purposes. However, much has been done without the help of bootstrap and the 
    game design itself is vanilla. 

    * Google fonts
    Google fonts has been used to select a nice font for the page.

    * Github & Gitpod
    The project has been created with the help of Gitpod and is hosted to Github pages. 

## Testing

    Testing has been done manually throughout the project. Major test issues are noted in the test-log below.

### Manual Test-Log:
        * Pop-out (“pupOut”) function written and tested. Same Pup returned in a row is a problem. 
        If-statement added to random-hole function to prevent repeat – upon testing caught this error from the console: “Uncaught ReferenceError: Cannot access 'prevHole' before initialization
        at randomHole (main.js:9)
        at <anonymous>:1:1”” → moved previous hole declaration outside of random hole function and assigned it as let instead of const to be redeclarable – now working and no repeats with around 50 calls of the function. 

        * Pop-out function is still experiencing repeats. → Upon adding timeout function to make the Pups disappear again the popping up and down occurs without any repetitions.  

        * Scoring function added, returning error:
        function pet(e){
            score++;
            score.textContent = score;
        }
        pups.forEach(pup => pup.addEventListener("click", pet));

        “TypeError: Assignment to constant variable.
            at HTMLDivElement.pet (main.js:41)”
        “score++;”
        identified as constant variable rather than functioning as an increment
        → declare score as “let score = 0” & redeclare “const score = document…” to “const scoreboard …” → Once naming is done properly scoring function is working. 

        * Submitting and updating the scoreboard via local storage has one issue. The sorting into local storage happens after the score has been fed from the end of the game. Issue is that generate scoreboard function is not called until the local storage data has been set. – Guido (my mentor) helped me refactor the code to include event listeners instead of declaring functions to be called via clicks. This improved the logical performance of the page and made possible to feed information from the game page to the highscores page.

        * Every time show top scores is clicked, the array is being added on. → declare variable to access the table and set that tables html-content to an empty string before performing the rest of that function.

        * Overlap between images and start button on larger screens preventing button from being clicked. Adjusted css to prevent overlap.


### Code validation

        * HTML-validation: HTML code has passed validation on both pages at https://validator.w3.org/nu/#textarea without issues found. 

        * CSS-validation: CSS code has passed validation on https://jigsaw.w3.org/css-validator/validator without issues found. 

        * Javascript-validation: Jshint validation returns 33 warnings, every single one is similar to this "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)"
        which is not an issue. The validator also indicates that scoresArray is undefined in four places. In all of those places "scoresArray" is instrumental to the functioning of the code and the 
        array is defined on row 123.  

## Deployment
  
  The project is deployed on Github Pages and can be reached here: https://marcusaureliuslinden.github.io/Pet-a-Pup/index.html

  Code is public and can be found on my github pages at this repository address: https://github.com/MarcusAureliusLinden/Pet-a-Pup. From There
  the code can be downloaded or cloned and deployed elsewhere. 

## Credits
### Images

Tolling retriever: <span>Photo by <a href="https://unsplash.com/@jamie452?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jamie Street</a> on <a href="https://unsplash.com/s/photos/dog?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

Wizard Goldie: Image by <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=47229">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=47229">Pixabay</a>

Pup with bone: Image by <a href="https://pixabay.com/users/grafikacesky-947552/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1305702">grafikacesky</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1305702">Pixabay</a>

Beagle pup: Image by <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=48472">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=48472">Pixabay</a>

Dalmatian: Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=150954">OpenClipart-Vectors</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=150954">Pixabay</a>

Background: Image by Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=152502">OpenClipart-Vectors</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=152502">Pixabay</a>

## Acknowledgements

* CodeInstitute -- This is a CodeInstitute project and the learning material led to this project and provided me with an understanding
of basic javascript concepts.

* https://www.freecodecamp.org/ -- resources and free courses further enhanced understanding of basic javascript.

* https://wesbos.com/courses - JavaScript30.com -- Helped me understand javascript much better and was important both for the basic setup
of the game as well as usage of local storage.  

* https://developer.mozilla.org/ & https://www.w3schools.com/ -- both have been a reference for me throughout the project. 

* My mentor Guido Cecilio Garcia Bernal has been of great help to this project and helped me restructure the code to make all the functions interact
properly. 