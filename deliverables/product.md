# CODELENS/NUMBER ONE

 > _Note:_ This document is meant to evolve throughout the planning phase of your project.    
 > That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section).

#### Q1: What are you planning to build?

CodeLens is software that detects plagiarism in code, like TurnItIn for code. We've noticed an influx of assignment plagiarism at the University level. With the recent popularity of GitHub and other public code hosting services, there are more students than ever sharing their code online. Whether it be impress potential recruiters/companies or to simply use version control software, students are making their code available for anyone to see. Since University instructors don't have the time to make their own unique assignments for each semester, they rely on reusing the same assignments throughout many different course offerings. At least within UofT, it's easy to score 100% on an assignment by simply googling "CSCXXX Assignment X" and seeing how a past student solved a problem. CodeLens will be provided as software as a service -- a website that course instructors or the school departments can use to detect plagiarism.

![The image did not display correctly](https://i.imgur.com/5W8Iy5T.jpg "Layout")

#### Q2: Who are your target users?

Our target users would be educational institutions -- specifically professors in the computing department who are teaching courses that historically have had a large number of plagiarized assignments. This means that this software would be used primarily by professors teaching assignment-based introductory computer science courses. While it would make sense to implement this at a University level (eg. have a CodeLens account for the department of computer science at the University of Toronto), we realize that not all professors would want to use this product. Thus, for now, we have decided to implement this at the professor level.

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Paul Gries (UofT professor) initially expressed the need for plagiarism detection software in the department of computer science. While they do have a solution currently, it is not intuitive to use and doesn't leverage GitHub and other easily accessible source code hosting software. Our product satisfies the need of our users because it would be an easy one-click solution to plagiarism checking. Instead of getting solutions to assignments and comparing them to student code (which is the currently accepted method via MOSS, a code-based plagiarism detector), instructors would simply upload their skeleton code for relevant files and press 'Run'.

Additionally we will allow users to store multiple iterations of submissions to increase the effectiveness of the plagarism detection. For assignments that don't change from one semester to the next this will allow a larger set on which to perform comparisons and increase the likelyness of detection plagarism. Along with this advantage of storage space we will also provide users with faster detection times. By utilizing specialized cloud services we can perform more efficient detection than running on a local machine.

This saves our users a huge amount of time. Instead of gluing together bash scripts to pipe into Moss and redirect, they have an easy to use interface online which will do all of the above and to a much more accurate degree. Hopefully, this would eventually deter cheating overall and lead to less problems for the instructor.

----

### Highlights

We ran through a lot of different ideas before we settled on this one. 

...

Specify 3 - 5 key decisions and/or insights that came up during your meetings
and/or collaborative process.

 * Short (5 min' read max)
 * Decisions can be related to the product and/or the team process.
    * Mention which alternatives you were considering.
    * Present the arguments for each alternative.
    * Explain why the option you decided on makes the most sense for your team/product/users.
 * Essentially, we want to understand how (and why) you ended up with your current product plan.
