# CodeLens

## Iteration 3

 * Start date: November 21st 2017
 * End date: December 1st 2017

## Process

Quick introduction

During this iteration, we intend to link the frontend and the backend, in addition we intend to polish the components that we created in iteration 2. By polishing the product we’re ensuring that any outstanding issues gets fixed in this iteration as well as any necessary refactoring of code to loosen the dependency.

#### Changes from previous iteration

The most significant changes that we made is the use of sprints, with the introduction of sprints this iteration we hope to accomplish tasks in a more timely manner at the same time also increasing the amount of feedback that the developers get. However instead of doing 3 individual sprints, where the first is a weekend long sprint, we have decided that it’d be best to have 2 sprints of equal lengths as it allows developers more time to produce quality code and integrating the feedback into their code. 

The first sprint will begin on the 21st of November to 26th of November lasting a total of 5 days, consequently the next sprint will begin on the 27th of November and end on the 1st of December, again lasting for 5 days.

At the end of this iteration, in order to determine if the use of sprints is successful, we will look at the percentage of sprint tasks completed or the percentage of tasks that were carried forward from one sprint to another.


The next change that we’re making is ensuring that all commits are only done to branches other than master. This ensures that we maintain at least one branch that can be used as production-ready code, where code is thoroughly tested and reviewed, in addition this allows for each developer to work in their own isolated branch, so external changes do not impact their workflow. At the end of this iteration, there shouldn’t be anyone committing directly to master, instead branches are the only things being merged into 

#### Roles & responsibilities

**Front-end Developer (David Ansermino, Ivan Topolcic)**

  The responsibility of the front-end developer is to design and build the interface. In our case the website that our users will interact with. With respect to our minimal viable product, how the flow of creating an assignment works and how we should display meaningful information obtained from the backend to our user.

**Back-end Developers (Daniel Chan, Patrick Gronowski)**

  The responsibility of the developers in this group is to architect and build the infrastructure that allows the interactions on the front end to be processed. In this phase, they’ll be responsible for setting up the server, the relevant routes that will transmit data between the client and the server.

**Code Reviewer (All)**

  The code reviewer(s) are responsible for ensuring that quality code gets committed to the codebase, that is to say they are the last line of defence in preventing “bad” code. They should ensure that the code that they’re reviewing follows proper style guides and ensure that the logic of the code is sound.

Every member in our group takes on this role, ensuring that every merge request is reviewed by at least one other individual.

**Plagiarism Algorithm Developers (Ihor Veselovskyy, Frank Karunaratna)**

  The responsibility of the developers in this group is to build an algorithm that will detect similarities between two sets of code. Starting with detecting similarity between pieces of code that are exactly the same. Then move on to detect similarities between two pieces of code where things like variable names, function names and class names have been changed. Add weights to the similarities that have been found so that a percentage of similarity can be given to the user. Use the AST to detect functionally similar code regardless of whitespace and comments.

**Video Engineers (David Ansermino, Ivan Toplocic, Frank Karunaratna)**

  The video engineers are tasked to create the video and ensure that our product gets presented in easily understandable format. First they write the script for the demo. After that they record the audio for the demo. They also create and edit the footage. 

#### Events

Throughout this iteration, we’ll be having 5 meetings, and their purpose is to help identify tasks for each sprint and providing feedback at the end of each sprint cycle. The meetings also allow us to clear any misconceptions and difficulties that any developer is facing. The following are the planned dates and locations for the meetings.

1. 21st November in Bahen 2270

- In the first meeting for this iteration, we’ll be identifying what issues we will be resolving from the backend and who will partake in connecting the frontend with the backend.This meeting also marks the starting point for our first sprint cycle.
  
2. 26th November in Bahen 2270

- In this meeting, we’ll be discussing about the tasks that were completed in this sprint, as well as performing peer code reviews to merge the completed tasks into the codebase. We’ll also be discussing about any feedback that other developers might have and integrating that feedback in the next sprint. This meeting also marks the ending point for our first sprint cycle, and will mark the starting point for our second sprint cycle. We plan to have a group programming session on this day.
  
3. 28th November in Bahen 2270

- In this meeting, we’ll be discussing about any problems that we’re facing, this meeting will primarily serve as a mid-sprint meeting. 
  
4. 30th November in Bahen 2270

- In this meeting, we’ll be having a final code session before the end of second sprint.
  
5. 1st December in Bahen 5206
    
- In this meeting, we’ll be checking off the tasks that were completed and also peer reviewing each merge request and providing feedback and creating tasks that need to be completed before we present our final demo.
This meeting marks the end of our second sprint cycle.

Because the goal of this iteration is also to prevent people from pushing directly onto master we’re going to be using Github to host our code review discussions. Once a merge request is opened, another fellow developer is assigned to review the code and initiate the discussion. The goal is to resolve a merge request and have it merged within 48 hours. If there are any outstanding issues they’ll be resolved in person during one of the meetings.

#### Artifacts

We’ll be making the following artifacts to aid in our planning process. 

Freedcamp Tasks
We’ll be using Freedcamp’s Task Board to track tasks between members. In addition to tracking high level tasks from the previous iterations, we’ve added more fine-grained tracking for lower level tasks as we’ve completed the majority of the high level ones.
As before, we’ll be assigning priorities to the lower level tasks. As these tasks are much smaller, we’ll need to do this more regularly than just once as per the high level tasks.
As a team, we’ll decide who wants to do which task. Each task will be assigned to the team responsible for that portion (front-end, back-end, algorithm). However, cross-team work is also encouraged as some people are more passionate about specific aspects. 
We found our previous iterations method of deciding the priorities to be effective where each of our member has a vote to say if they think it should be prioritized. The levels of each issue will depend on the number of votes from the team.
Github Issues
Bugs will be posted to Github issues. Once a task is completed, and a bug is found, instead of creating a task to fix the bug, a Github issue will be created instead. This allows us to work directly on Github instead of using third party applications.
This also allows for specific issues to have branches dedicated for them, and we can close the issue along with branch merging in one action.
Whiteboard
Whiteboarding worked well previously and allowed us to rapidly present, share, and modify design decisions. We’ll be using whiteboards extensively to show how pages flow, form design, and general website layout.
Whiteboarding will mostly occur in the early stages of the meeting as we present our ideas. Once we’ve had a whiteboard session, we’re reading to start designing required functionality.

#### Git / GitHub workflow

Our GitHub workflow remains the same from iteration 2, however in this iteration we’re pushing to ensure that the master branch is protected, that is to say that no individual should be pushing directly to master and branches are the only ones being merged into the master codebase. 

Our GitHub workflow is simple, and follows a workflow that was used during my summer internship. That is, we create a specific issue on the GitHub issues tracker for each task that the individual has been assigned, and mark the task on Freedcamp as in-progress.

Prior to working on an issue, we want to ensure that a new branch has been created, this is to help the developers, as it allows them to test new ideas without interfering with other team’s progress. The branch typically has a descriptive name related to the issue that it’s resolving, for example when working on backend authentication we want to name its branch “backend-authentication”, so that others can see what is being worked on.

Once work on the branch is complete (that is when the related issue has been resolved), the developer will open a pull request to initiate the code review phase. The code review is typically assigned to another developer within the team, so that it’s being reviewed by an individual that has the correct context. The code review phase is important as it allows another individual to examine the code’s logic for any flaws or styling issues. After a code review, the developer that worked on the issue can respond to the comments or integrate the feedback into his next commit.

Once the changes have been made to address the comments, the reviewer can have a final look at the changes, if there are any additional issues the discussion can continue until all discussion is resolved and is ready to be merged into the codebase.

The reason why we chose this workflow is that it maps each issue to a relevant pull request and allows us keep track of any discussions. So that in the future, if we need to refactor code or perform a code migration we can take note of any design decisions that we made during the initial implementation.

## Product

#### Goals and tasks

The goal for this iteration is to link the frontend of the application with the backend, which completes our minimal viable product. In addition we will be fixing any outstanding issues that were created during iteration 2 and incorporating any feedback to improve our product. 

An additional feature that we’re looking to implement in this iteration is the ability to view the similarities of files from different submissions and highlight them on the frontend.

For points 1-3, the ability to retrieve the information is already implemented on the backend in iteration 2, now the frontend needs to retrieve the live data from the endpoint and display live results. 

For points 4-6, the ability to authenticate, register and maintain sessions are all supported by the backend and the frontend has the views to support the functionality, however they aren’t linked.

Pipe information from the backend submissions and display all submissions on the frontend.
Pipe information from the backend plagiarism results and display them when the user wishes to view all comparisons. 
Pipe information from the backend assignments and display all 
Implement the ability to maintain sessions on the frontend.
Implement the ability to authenticate on the frontend.
Implement the ability to register a new user on the frontend.
Track the similarities between the files during a comparison operation and store the lines where the similarities occur in either files.
Have the ability to retrieve the lines and files that were detected to be similar, and show them on the frontend

#### Artifacts

Script for the video that we’re producing to describe our project.
The script allows us to get additional feedback before the creation of our video and allows us to recite the script for a smoother higher quality video.
New mockup for the design of the landing page.
The purpose of the new landing page is to better explain our product to new users and also allow users to easily login or register.
New mockup for the design of the login panel.
Instead of having a new webpage for the login, we’re now using an overlay to better maximize the use of the screen real-estate.
The image of the flow of how a assignment gets processed, from the moment it gets uploaded to the individual assignments being checked against each other.
Allows each developer to clearly understand the flow of how each ‘assignment’ gets processed behind the scenes.
Build the front-end component that will display the similarities between the files. 
This will allow us to visualize how this information gets displayed to the user and identify the key areas that we want to highlight/make it stand out.
