# CodeLens
## Iteration 2

 * Start date: 16 October 2017
 * End date: 16 November 2017
## Process

#### Introduction
During this iteration our main goal is to decide on what steps we need to take to build our product. We decided that the first step that we’d take would be to build the minimal viable product, following that we’d look to build additional features that aren’t necessary for the algorithm to work. 

#### Roles & responsibilities

Front-end Developer (David Ansermino)
The responsibility of the front-end developer is to design and build the interface. In our case the website that our users will interact with. With respect to our minimal viable product, how the flow of creating an assignment works and how we should display meaningful information obtained from the backend to our user.

Back-end Developers (Daniel Chan, Patrick Gronowski, Ivan Topolcic)
The responsibility of the developers in this group is to architect and build the infrastructure that allows the interactions on the front end to be processed. In this phase, they’ll be responsible for setting up the server, the relevant routes that will transmit data between the client and the server.

Code Reviewer (All)
The code reviewer(s) are responsible for ensuring that quality code gets committed to the codebase, that is to say they are the last line of defence in preventing “bad” code. They should ensure that the code that they’re reviewing follows proper style guides and ensure that the logic of the code is sound.

Every member in our group takes on this role, ensuring that every merge request is reviewed by at least one other individual.

Plagiarism Algorithm Developers (Ihor Veselovskyy, Frank Karunaratna)
The responsibility of the developers in this group is to build an algorithm that will detect similarities between two sets of code. Starting with detecting similarity between pieces of code that are exactly the same. Then move on to detect similarities between two pieces of code where things like variable names, function names and class names have been changed. Add weights to the similarities that have been found so that a percentage of similarity can be given to the user. Use the AST to detect functionally similar code regardless of whitespace and comments.



#### Events

Describe meetings (and other events) you are planning to have:

Throughout this iteration we plan on having 5 weekly in-person meetings; the intended purpose is to catch-up with each other’s progress on their assigned tasks, help clear any misconceptions and difficulties. The following dates and locations are the dates and locations of these meetings.

17th October in Bahen 2270
In this specific meeting, our main focus will be identifying what needs to be done and assigning priorities to each task.
24th October in Bahen 2270
31st October in Bahen 2270
3rd November in Bahen 2270
16th November in Bahen 2270
In this specific meeting, the main focus will be to review the material that we’ve created thus far for the deliverable and make changes where necessary, this includes the review of the script for the video and the video itself.
17th November in Bahen 2270
	Final touches on iteration documents and video.

In addition to weekly meetings, members of our group will open merge requests on GitHub and request a review from another member from their team. Ideally the merge request will get reviewed in 48 hours, and feedback will be left on the merge request. The code reviews will happen solely on Github unless there have been serious misunderstandings, in which case we will address them in person.

On top of code reviews, we intend on scheduling pair programming sessions. These pair programming sessions will happen in Bahen 2230, and the first session is planned for the 6th of November which will happen with Ivan Topolcic and Patrick Gronowski. Having learnt a great deal from a previous summer internship through pair programming, I (Daniel Chan) thought it’d be a great way to teach a beginner good practices of web development from someone with experience.


#### Artifacts

We’ll be making the following artifacts to aid in the creation of our product for this iteration.
Task Boards
We use the Freedcamp (task board) to track our high level tasks that we need to complete. The benefit of this is that it allows us to give members of our group specific tasks to complete using a high level description.
In addition to having the ability to assign tasks to specific members, we can also assign priorities to each task, so that the developer knows which issues to tackle first.
Tasks will get assigned to members depending on what the issue is, i.e for the front end tasks, they will get assigned to the front end team and for the backend tasks, they will get assigned to the back end team.
GitHub Issues
For more specific and sub-issues we create them on the GitHub issue tracker so that we have a place where we can log discussions for future reference.
It ensures that all merge requests have a relevant issue that their addressing.
Interactive Interface Mockup
Allows us to quickly create prototypes to see how a change could impact a user’s experience. 
Allows backend developers to visualize how their data will be represented through the user interface.
Entity-Relationship Diagram
The ER diagram is used to represent the models and relationships.
Whiteboard Idea Sessions
Allows us to rapidly generate ideas and pinpoint flaws through group discussions. These will coincide with our weekly meetings and will be most likely occur in the early stages of this iteration.

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-do lists, Task boards, schedule(s), etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * How do you prioritize tasks?
   * How do tasks get assigned to team members?

#### Git / GitHub workflow

Our GitHub workflow is simple, and follows a workflow that was used during my summer internship. That is, we create a specific issue on the GitHub issues tracker for each task that the individual has been assigned, and mark the task on Freedcamp as in-progress.

Prior to working on an issue, we want to ensure that a new branch has been created, this is to help the developers, as it allows them to test new ideas without interfering with other team’s progress. The branch typically has a descriptive name related to the issue that it’s resolving, for example when working on backend authentication we want to name its branch “backend-authentication”, so that others can see what is being worked on.

Once work on the branch is complete (that is when the related issue has been resolved), the developer will open a pull request to initiate the code review phase. The code review is typically assigned to another developer within the team, so that it’s being reviewed by an individual that has the correct context. The code review phase is important as it allows another individual to examine the code’s logic for any flaws or styling issues. After a code review, the developer that worked on the issue can respond to the comments or integrate the feedback into his next commit.

Once the changes have been made to address the comments, the reviewer can have a final look at the changes, if there are any additional issues the discussion can continue until all discussion is resolved and is ready to be merged into the codebase.

The reason why we chose this workflow is that it maps each issue to a relevant pull request and allows us keep track of any discussions. So that in the future, if we need to refactor code or perform a code migration we can take note of any design decisions that we made during the initial implementation.


Describe your Git / GitHub workflow.     
Essentially, we want to understand how your team members share a codebase and avoid conflicts.

 * Be concise, yet precise.      
For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Don't forget to **explain why** you chose this workflow.







## Product

#### Goals and tasks

Our goal for this iteration is to build a minimal viable product, so that our users can easily upload their student’s submissions and check for any signs of plagiarism. We have several components that are used to build the minimal viable product, the front-end web interface component and the back-end component.

For the front-end we have the following tasks that we’re aiming to complete (in order of importance from greatest to least):
1. Initialize React app
2. Create a login and registration page
3. Create assignment submission summary page
4. Create all submissions table page
5. Create a diff page for examining differences between a pair of submissions.
6. Create a home page.
7. Create a upload process page.
8. Create a user landing page

For the back-end we have the following tasks that we’re aiming to complete (in order of importance from greatest to least):
1. Create a basic Node server with Express.
2. Create the database schema for the backend.
3. Create an endpoint for uploading assignments.
4. Create a route for getting a specific submission.
a. Routes for getting multiple submissions.
5. Create a route for getting a specific assignment.
a. Routes for getting multiple assignments.
6. Create a route for logging in.
7. Create a route for registering.
8. Create a function to unzip the uploaded file.
9. Create a function to delete the folder once the submissions have been analyzed.
10. Create a route for creating an assignment.

All of the above tasks can be referenced on FreedCamp for more details, they can be referenced in our deliverable 2 folders.

 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

Entity Relationship Diagram 
This helps us visualize the relationships between models that we need, using symbols to represent the information.
Interactive Mockup for the Website
This helps us create rapid prototypes so that we can incorporate feedback before implementing it through code. 
The minimal viable product
The front-end component (web interface)
This includes the code and assets for the dynamic web interface.
The back-end component 
This includes the code and the algorithm that checks if a pair of assignments are plagiarised.
Sample assignments that are plagiarised to be used to demonstrate the capabilities of our plagiarism algorithm.

 * Artifacts can be text, code, images, videos, interactive mock-ups and/or any other useful artifact you can think of.
 * Make sure to explain the purpose of each artifact (i.e. Why is it on your to-do list? Why is it useful for your team?)
 * Be concise, yet precise.         
   For example: "Build the website" is not precise at all, but "Build a static home page and upload it somewhere, so that it is publicly accessible" is much clearer.

