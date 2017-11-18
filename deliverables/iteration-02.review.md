# CodeLens (Team 1)

## Iteration 2 - Review & Retrospect

 * When: November 16, 2017
 * Where: Bahen 2250

## Process - Reflection

We have streamlined our process since the last iteration and our workflow has become more manageable. It’s not perfect and we intend to improve it even more in the final iteration. We’ve had a few hiccups (discussed below in detail) along the way, but nothing that set us back too much.

#### Decisions that turned out well

List process-related (i.e. team organization) decisions that, in retrospect, turned out to be successful.

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be successful.
 * Feel free to refer/link to process artifact(s).

* Two Weekly Meetings

For iteration 1 we met once per week. Part way through iteration 2 we realized that we were not holding ourselves accountable for our poor time management so we decided to hold meetings twice per week. This improved our productivity, but our consistency 


* Code Review

Code reviewing allowed us to maintain the high quality of the code base. Due to it, we didn’t have to redo code and concentrate on implementing new features.  


* Pair programming

We all seem to be on a similar level when it comes to Python, but each of us has differences when it comes to web programming. By working on the project in pairs, the more experienced team member was able to teach some new concepts to the less experienced team member. Besides that, pair programming also improves the quality of code and improves our chances of finding bugs more quickly. For example, Ivan has much more experience with backend than Patrick but by working side by side they were able to find bugs much easier (immediate code review) and Patrick was able to learn the basics of Node and JavaScript and is able to apply those concepts when working alone.


* Switching team members

Switching teams had both positive and negative consequences and that’s why it appears in both lists. By moving Daniel over from the front end team to the back end team we finished much more of the back end than we expected to (it put us ahead of schedule). Fast tracking the back end is evidently a positive thing, but we did experience some set back (which is explained in the next list).


* Switching from Trello to Freedcamp

Switching to Freedcamp did not improve our process to much. We didn’t have too much on Trello yet so the switch didn’t set us back. Freedcamp affords us to better section off tasks per team and assign people to jobs. At the beginning of the iteration we planned out the steps that we would tackle and delegated these steps to each subteam. Members of each subteam can pick up a task. Task status can be changed from not being worked on, to in progress, to completed. Freedcamp improved our workflow and improved each team member’s understanding of what needed to be done (i.e. everyone was on the same page).



#### Decisions that did not turn out as well as we hoped

List process-related (i.e. team organization) decisions that, in retrospect, were not as successful as you thought they would be.

* Switching team members.

Switching teams had both positive and negative consequences and that’s why it appears in both lists. At the beginning of the iteration, we delegated two members to front end: David and Daniel. We decided that front end was not as important as back end and did not need two people on that subteam. So Daniel was moved to the back end with Ivan and Patrick, leaving David as the only person on front end since he was more experienced with React. This turned out to be poor decision because we did not have any contingency plan. David was sick during reading week and this delayed the completion of the front end. Despite completion, we weren’t ready for this small hiccup and things could’ve gone worse than they did. We’ll keep David on the front end but make sure someone (Daniel who has front end experience) can take over front end work in such circumstances.

* Not meeting during reading week.

Not meeting during reading week was a poor idea. Before reading week we argued that we didn’t have to meet because we could have online meetings through things like Skype and Google Hangouts. This plan never materialized because we didn’t set up any meeting times before reading week. Poor planning resulted in little work being done over the reading week. We also did not do much due to the other assignments and midterms that most of us had after reading week. This is not an excuse and this has to be fixed. There was no accountability for unfinished work. We tried to introduce more accountability by meeting twice per week. This plan worked initially, but our consistency dropped off during reading week. We intend to fix this for the next iteration by using three weekly sprints prior to the final demo deadline. Better planning for these sprints along with the two weekly meetings should improve our productivity and hold us more accountable to each other.




 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Feel free to refer/link to process artifact(s).


#### Planned changes

For the final iteration we plan to complete the project in three weekly sprints. One quick sprint for next Monday (in three days), and the next two sprints ending on the following Mondays. The last sprint will be after the deliverable is due but before the final demo is due. We meet on the Saturday after deliverable 2 to plan the specifics of our sprints so that we can afford a short first sprint. The specifics will include tasks like: how and when we’ll connect our front end and back end, how we’ll implement file upload and storage. These sprints will let us track our progress more closely more finely and should keep us on track for the final deliverable. The weekly deadlines will help us with our time management and should stop us from leaving everything to the last minute.

Each team member needs to adhere to our GitHub workflow. Occasionally one of us will push to master instead of use branches. While this hasn’t caused issue yet, it may cause conflict issues during our most important iteration yet. We plan to be more strict with our GitHub workflow (explained in detail in the plan document).

## Product - Review

#### Goals and/or tasks that were met/completed:

Created basic website layout and background
 * We created a landing page for our website
![Landing Page](https://raw.githubusercontent.com/csc301-fall-2017/project-team-01/master/deliverables/artifacts/web_homepage.png?token=AORB-_5W2R9BYDXe4tbrBlnJHMrT2m5Dks5aGM6XwA%3D%3D)

 * We created a login / registration page
 ![Login Page](https://raw.githubusercontent.com/csc301-fall-2017/project-team-01/master/deliverables/artifacts/web_loginpanel.png?token=AORB-8vGVU5zOykKfJsFs9HP2aMR_WNBks5aGM6ZwA%3D%3D)

 * We created an assignment page that lists all assignments for a professor
![All Assignments](https://raw.githubusercontent.com/csc301-fall-2017/project-team-01/master/deliverables/artifacts/web_assignmentsview.png?token=AORB-wkfSOyHg1c4i3Wvmw6moxba-W7Rks5aGM6cwA%3D%3D)


* Created an algorithm to detect plagiarism, which returns similarity percentage. Artifacts:

Python AST API: 
    https://greentreesnakes.readthedocs.io/en/latest/
    It turned out to that the Python official API for AST was very concise and not suitable for someone with little prior exposure. We used this custom API, which was very user-friendly, to parse the code and create an AST, which was used for the code comparison. An AST tree allows us to remove syntactic differences, such as comments and whitespace, between code so we can explore the semantic differences.
    
Document with our list algorithm ideas:            
    https://docs.google.com/document/d/1LoVwpOHhTHiTfdSufw56fbhpsAcgmtvy-RTLJ_2sDkM/
    
We used this document to keep track of the ideas to implement in the algorithm.

* Account creation / Login

    For the account authentication, we used PassportJS which allows us to integrate authenticated sessions into our product. PassportJS allows us to perform local authentication, allowing us to be the ones storing their login details. In addition to using PassportJS we also used an bCrypt to aid in the encryption and hashing of passwords to ensure that all sensitive data is stored securely.
 
#### Goals and/or tasks that were planned but not met/completed:

 * From most to least important.
 * For each goal/task, explain why it was not met/completed.      
   e.g. Did you change your mind, or did you just not get to it yet?

* Connect the front end with the back end.
    1. The front end took longer to implement than expected and the back end is not
    2. Currently we hard coded the front end so that we could present something for the demo.
    
* Connecting our front end to our back end
    1. It took us longer than expected to complete the front end
    2. This was due to our little experience with react
    3. This delayed our integration with the front end
    4. Now that we have our front end mostly completed, it should be easy to integrate with the back end

* Getting code from GitHub / StackOverflow to check against for plagiarism
    1. We decided that this integration with external websites was more of an extra feature and probably shouldn’t be part of our MVP
    2. So we decided that we don’t have to implement this idea

* Getting samples of plagiarized code to test
    1. We had asked Francois Pitt to provide us with samples of plagiarized code
    2. Due to time constraints he was not able to provide us with these samples before the deadline of the iteration
    3. By the next iteration we should have received the samples and should be able to test our algorithm against real cases of plagiarized code

## Meeting Highlights

Going into the next iteration, our main insights are:

 * 2 - 4 items
 * Short (no more than one short paragraph per item)
 * High-level concepts that should guide your work for the next iteration.
 * These concepts should help you decide on where to focus your efforts.
 * Can be related to product and/or process.

For some of our weekly meetings we would have team members arriving late, this would cause problems because not all of us live on campus and staying late is not possible. This would result in parts of our meetings, usually 30min at the beginning and end, where we would have team member missing. By enforcing a strict start and end time we can ensure that our entire meetings are productive.

Not relying on outside sources to test our plagiarism algorithm. We originally wanted to use actual plagiarized assignments to test on our algorithm, but this required DCS assistance. Due to time constraints they couldn’t provide them to us. This somewhat slowed our progress. For the next iteration we could create our own plagiarized examples to test our algorithm on.

One main thing we should focus on for the next iteration is to focus on the MVP. During this iteration we tried to implement many extra features that we not part of an MVP. Some of these include GitHub / StackOverflow integration, having accounts for students, pooling past assignments to use in future plagiarism checks. We realized that these are good features but they go beyond an MVP and that we should focus on implementing core features, like assignment uploads and account creation for professors.

