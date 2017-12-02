# CodeLens

## Iteration 3 - Review & Retrospect

 * When: Thursday, November 30, 2017.
 * Where: Bahen Room 2270

## Process - Reflection

Our process was mainly the same as our last iteration. Some of the changes that we implemented were having two meetings per week, doing pair programming, and doing group code reviews. There were varying degrees of success for each of these additions (discussed below). 

#### Decisions that turned out well

* Group programming session

On many occasion we had group programming sessions. These sessions allowed us to have instant feedback on our code, without having to request reviews on GitHub. They also let us discuss our code more thoroughly. Another benefit of the group programming is that we were all able to keep up with the changes to the code, because there were happening live.

* Splitting up iteration into sprints

To hold ourselves more accountable we decided to split this iteration up into sprints. This turned out to be a really good decision for our group. It goes without saying that we should have started the project off like that. The two 5-day sprints we did helped us build the code more incrementally. We made a lot of progress in the first sprint, which When we met to do the It allowed us to make small goals that were easily achievable. These small goals kept us engaged and on track for the deliverable. Unlike the last deliverable where we did very little until the end of the deliverable, due to having large goals and not splitting them up into smaller tasks.

* Group code review

Having group code reviews was a good decision for our team. They forced our team to write clean, reable code. This is very important when working in a team because it ensures that all team members understand the code. The code reviews also forced us have a consistent coding style which also contributed to the readability of the code. Without our group code reviews our code would have been much more messy and would have been very confusing to someone not in our group.

* Pair Programming

Similar to the group programming sessions, the pair programming sessions allowed us to have instant feedback on our code. We mostly did our pair programming sessions with people from the same team (eg. Frontend, Backend, Algorithm). This was because people on the same team have the best idea of the codebase for that team.

#### Decisions that did not turn out as well as we hoped

* Trying to implement GitHub integration

In order to set CodeLens apart from the existing code plagiarism detectors (like MOSS from Stanford University), we intended to implement a way to check code submissions against GitHub repositories. Our reasoning for this was to increase the sources of plagiarism (as opposed to just comparing each pair of assignments submitted by the instructor). Our goal was to implement this GitHub feature during this iteration. We put about four days worth of effort into trying to implement it but after coming across a few issues we decided to drop this feature in our MVP. One such issue was finding suitable repositories to compare code with because it involves choosing effective keywords and then parsing repositories (which is a cumbersome process). GitHub also has anti-scraping features which prevented us from getting many results. Instead of finding an alternative we decided to scrap this feature because (1) it was much more involved than we expected and (2) we figured being a burden on GitHub’s servers was unethical. The attempt hindered our group because we could have spent that time implementing a few other features (some features which still need to implemented before the final demo). Our mistake was in overestimating our ability. In order to avoid this same mistake in the week before the final demo, we have put a lot of thought into the features we still need to implement (which are listed below).

* Having multiple people designing the database

The database is involved in two sections of our backend: the routing (to feed database information into the front end) and our plagiarism algorithms (to feed plagiarism scores of each submission tuple into the database). Due to a misunderstanding, the database was edited slightly differently by the back end team and the algorithm team. For example, the attributes for submissions table were changed to a different type and made to be foreign keys. This edit was left unnoticed until we encountered a bug after our group programming session. It took us an hour to find inconsistent database queries in the code. We learned that while working together as a group, allowing multiple people to access a resource (like a database table) at the same time can get hectic. Particularly when the goal is to do as much as possible in one meeting, as was the goal for our group programming session.



## Product - Review

#### Goals and/or tasks that were met/completed:
* Integrated file uploads between back end and front end
* Redesigned the front end
* Set up the back end routes in anticipation of further integrating the rest of the back end and front end

#### Goals and/or tasks that were planned but not met/completed:

 * From most to least important.
 * For each goal/task, explain why it was not met/completed.      
   e.g. Did you change your mind, or did you just not get to it yet?
* Full front end integration. We planned to connect all of the back end to the front end, however due to some delays, we only managed to integrate the core features.
* Code viewer. The instructors were supposed to be able to see the detected similarities between code. However, we found the way to do it too late for this iteration.


## Meeting Highlights

Going into the next iteration, our main insights are:

Put more time and effort into planning the integration between the backend and frontend of our project. During this iteration we found that integrating our backend and frontend took longer than expected. We ran into unexpected issues with authentication and database queries. This taught us to allocate more time for the integration and not to underestimate its complexity.

More pair programming. During this iteration we found that doing pair programming worked very well for our group. It allowed us to bounce ideas off each other and quickly write quality code. It also prevented individuals from introducing bugs into our project due to the extra set of eyes. For the final iteration we will definitely utilize more pair programming.

We found that doing multiple 1 week sprints was better for our productivity than doing just one month long script. We were able to get more done and didn’t wait till the last minute to do our work. We realized that we should have implemented these smaller sprints from the beginning of the project and in the future we will implement 1 week sprints when we have group projects to complete.
