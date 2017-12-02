# CodeLens

## Iteration 3 - Review & Retrospect

 * When: November 30 & November 31
 * Where: Bahen Room 2270

## Process - Reflection

Since the last iteration we have made use of two 5-day sprints. This final iteration was the shortest of them all (only 10 days) so short sprints made sense and made a good impact on our progress. We were able to work on our project incrementally and as a result our process has improved significantly since the last iteration.

#### Decisions that turned out well

* Splitting up iteration into sprints

To hold ourselves more accountable we decided to split this iteration up into sprints. This turned out to be a really good decision for our group. It goes without saying that we should have started the project off like that. The two 5-day sprints we did helped us build the code more incrementally. Small goals were achieved more easily. These small goals kept us engaged and on track for the deliverable. We made a lot of progress in our sprints, which as a result enabled us to make even more progress during our group programming sessions. Our performance between this iteration and the last one is significant. In the last iteration we did very little until the end of the deliverable (a combination of starting late and having larger goals). This time we started early and worked often.

* Group programming sessions

After the end of each of our two 5-day sprints we met together to program as a group. These sessions proved to be valuable as it allowed us to have instant feedback on our code without having to request reviews on GitHub. Being together let us be in constant communication with each other and discuss our code more thoroughly (though there was some miscommunication about the database which is explained in the next section). Another benefit of the group programming sessions is that we since we were all there we were are all aware of the changes to our code base. We also made a lot of progress during these sessions. Integrating the front end with the back end is much easier when members from each team work together.

* Group code review

Having group code reviews was a good decision for our team. They forced our team to write clean, reable code. This is very important when working in a team because it ensures that all team members understand the code. The code reviews also forced us have a consistent coding style which also contributed to the readability of the code. Without our group code reviews our code would have been much more messy and would have been very confusing to someone not in our group. So it allowed us to maintain the high quality of the code base and we didn’t have to fix code too often.

* Pair Programming

We continued to pair program within our smaller teams. We all seem to be on a similar level when it comes to Python, but each of us has differences when it comes to web programming. By working on the project in pairs, the more experienced team member was able to teach some new concepts to the less experienced team member. Besides that, pair programming also improves the quality of code and improves our chances of finding bugs more quickly. For example, Ivan has much more experience with backend than Patrick but by working side by side they were able to find bugs much easier (immediate code review) and Patrick was able to learn the basics of Node and JavaScript and is able to apply those concepts when working alone. Working with a partner also makes it easier to discuss ideas and what needs to be done.

#### Decisions that did not turn out as well as we hoped

* Trying to implement GitHub integration

In order to set CodeLens apart from the existing code plagiarism detectors (like MOSS from Stanford University), we intended to implement a way to check code submissions against GitHub repositories. Our reasoning for this was to increase the sources of plagiarism (as opposed to just comparing each pair of assignments submitted by the instructor). Our goal was to implement this GitHub feature during this iteration. We put about four days worth of effort into trying to implement it but after coming across a few issues we decided to drop this feature in our MVP. One such issue was finding suitable repositories to compare code with because it involves choosing effective keywords and then parsing repositories (which is a cumbersome process). GitHub also has anti-scraping features which prevented us from getting many results. Instead of finding an alternative we decided to scrap this feature because (1) it was much more involved than we expected and (2) we figured being a burden on GitHub’s servers was unethical. The attempt hindered our group because we could have spent that time implementing a few other features (some features which still need to implemented before the final demo). So while our second sprint was relatively effective it was much less effective than the first sprint. Our mistake was in overestimating our ability. In order to avoid this same mistake in the week before the final demo, we have put a lot of thought into the features we still need to implement (which are listed below).

* Having multiple people designing the database

The database is involved in two sections of our backend: the routing (to feed database information into the front end) and our plagiarism algorithms (to feed plagiarism scores of each submission tuple into the database). Due to a misunderstanding, the database was edited slightly differently by the back end team and the algorithm team. For example, the attributes for submissions table were changed to a different type and made to be foreign keys. This edit was left unnoticed until we encountered a bug after our group programming session. It took us an hour to find inconsistent database queries in the code. We learned that while working together as a group, allowing multiple people to access a resource (like a database table) at the same time can get hectic. Particularly when the goal is to do as much as possible in one meeting, as was the goal for our group programming session.

#### Planned changes

We are not making any changes to our process moving forward. We will treat the final week leading up to the demo as a final week-long sprint. We have already decided on the final features that we need to implement (listed below) and we will meet on Saturday (December 1) to discuss how to tackle these features. We plan to have one more group programming session (since we make a lot of progress with them) and one big demo session (to fix the kinks in our demo) prior to the final demo.

## Product - Review

#### Goals and/or tasks that were met/completed:
* Integrated file uploads between back end and front end
* Redesigned the front end

![New Front End](https://raw.githubusercontent.com/csc301-fall-2017/project-team-01/master/deliverables/artifacts_deliverable_3/web_newhomepage.png?token=AORB-58gyXFE0EMyFw1_Mrp4aH7A5q5_ks5aK0IGwA%3D%3D)

![New Login](https://raw.githubusercontent.com/csc301-fall-2017/project-team-01/master/deliverables/artifacts_deliverable_3/web_newloginpanel.png?token=AORB-xKt3ruwcXPk0ZkWIo1pJXQF2mlbks5aK0IKwA%3D%3D)

* Set up the back end routes in anticipation of further integrating the rest of the back end and front end

#### Goals and/or tasks that were planned but not met/completed:

* Full front end integration. We planned to connect all of the back end to the front end, however due to some delays, we only managed to integrate the core features. We underestimated the difficulty of this task and it will be the focus of our final iteration.

* Code viewer. The instructors were supposed to be able to see the detected similarities between code. However, we found the way to do it too late for this iteration. We should be able to implement this feature for the final iteration.


## Meeting Highlights

Going into the next iteration, our main insights are:

Put more time and effort into planning the integration between the backend and frontend of our project. During this iteration we found that integrating our backend and frontend took longer than expected. We ran into unexpected issues with authentication and database queries. This taught us to allocate more time for the integration and not to underestimate its complexity.

More pair programming. During this iteration we found that doing pair programming worked very well for our group. It allowed us to bounce ideas off each other and quickly write quality code. It also prevented individuals from introducing bugs into our project due to the extra set of eyes. For the final iteration we will definitely utilize more pair programming.

We found that doing multiple 1 week sprints was better for our productivity than doing just one month long script. We were able to get more done and didn’t wait till the last minute to do our work. We realized that we should have implemented these smaller sprints from the beginning of the project and in the future we will implement 1 week sprints when we have group projects to complete.
