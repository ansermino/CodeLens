# CODELENS/NUMBER ONE

 > _Note:_ This document is meant to evolve throughout the planning phase of your project.    
 > That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section).

#### Q1: What are you planning to build?

CodeLens is software that detects plagiarism in code, like TurnItIn for code. CodeLens will be provided as software as a service -- a website that course instructors or the school departments can use to detect plagiarism.

We've noticed an influx of assignment plagiarism at the University level. With the recent popularity of GitHub and other public code hosting services, there are more students than ever sharing their code online. Whether it be impress potential recruiters/companies or to simply use version control software, students are making their code available for anyone to see. Since University instructors don't have the time to make their own unique assignments for each semester, they rely on reusing the same assignments throughout many different course offerings. At least within UofT, it's easy to score 100% on an assignment by simply googling "CSCXXX Assignment X" and seeing how a past student solved a problem.

Our goal for the MVP is as follows: A website that allows instructors to create their own course pages and upload current student assignments for each course. We'd like to provide instructors with many sources of plagiarism. These sources can include past assignments that the instructor also uploads, online code repositories like GitHub and BitBucket, or even assignments from other instructors (either from previous course offerings or from offerings of other institutions). Once run, the plagiarism detector would cross-check the current assignments between each other and between the each source. Following detection, the software provides some metric to quantify the level of similarity or plagiarism for each assignment. The instructor can use this metric to make decisions. This is the high-level idea of our project.

![The image did not display correctly](https://i.imgur.com/5W8Iy5T.jpg "Layout")

#### Q2: Who are your target users?

Our target users would be educational institutions -- specifically professors in the computing department who are teaching courses that historically have had a large number of plagiarized assignments. This means that this software would be used primarily by professors teaching assignment-based introductory computer science courses. While it would make sense to implement this at a University level (eg. have a CodeLens account for the department of computer science at the University of Toronto), we realize that not all professors would want to use this product. Thus, for now, we have decided to implement this at the professor level.

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Paul Gries (UofT professor) initially expressed the need for plagiarism detection software in the department of computer science. While they do have a solution currently, it is not intuitive to use and doesn't leverage GitHub and other easily accessible source code hosting software. Our product satisfies the need of our users because it would be an easy one-click solution to plagiarism checking. Instead of getting solutions to assignments and comparing them to student code (which is the currently accepted method via MOSS, a code-based plagiarism detector), instructors would simply upload their skeleton code for relevant files and press 'Run'.

Additionally we will allow users to store multiple iterations of submissions to increase the effectiveness of the plagarism detection. For assignments that don't change from one semester to the next this will allow a larger set on which to perform comparisons and increase the likelyness of detection plagarism. Along with this advantage of storage space we will also provide users with faster detection times. By utilizing specialized cloud services we can perform more efficient detection than running on a local machine as with MOSS.

This saves our users a huge amount of time. Instead of gluing together bash scripts to pipe into Moss and redirect, they have an easy to use interface online which will do all of the above and to a much more accurate degree. Hopefully, this would eventually deter cheating overall and lead to less problems for the instructor.

----

### Highlights

- Conversation with Paul Gries, a University of Toronto professors, indicated that there wasn't a sophisticated 21st century solution for code plagiarism (during a summer internship working with him). He suggested various methods for detecting code plagiarism, such as checking Abstract Syntax Trees for similarities.

- Lots of schools were implementing their own methods of plagiarism checking. University of Toronto's MarkUs project had a blog post about effective methods for plagiarism detection (http://blog.markusproject.org/?p=2570#ideas-of-criteria-for-plagiarism-detection). Other schools have also implemented their propreitary plagiarism checker. All of this wasted effort could be consolidated into one service that is used universally between many different schools.

- Many of the same assignments are used between different schools. CSC458 Assignment 1 is a rebranded Stanford Networking assignment, and CSC384 is a rebranded Berkeley artificial intelligence assignment. Because these schools implement their own method of detecting plagiarism which aren't shared with others, a lot of data is lost. By focusing on one platform we can store the same assignments and use them to gather data in future plagiarism runs.

- We originally wanted to make CodeLens' target school departments instead of professors themselves. We realized that it would be much more difficult to get the support of an entire department vs. an individual professor. Additionally, not all of the instructors in a department may wish to use CodeLens. This pursuaded us to go with opt-in instead of forcing professors to use something that they might not want to.

- We had many alternative ideas before deciding on CodeLens.

  - Originally, we wanted to make a booking app for hair salons. We realized that there are many apps that already do this, and that we wouldn't really be bringing anything revolutionary to the table. Not to mention that the app was pretty simple, and we thought that something challenging might be better suited for us.

  - Then, we thought that an alternative to online ads would make sense. We explored the idea of mining Monero (a Bitcoin derivative) in a user's browser. Essentially, instead of displaying the user an ad, websites would be running a Javascript file that mines Monero to our Monero wallet (this would be a SaaS project), and we would distribute the Monero to the website owners that use this. However, we decided against this idea because most people are browsing the internet with phones or laptops, which are battery reliant. Mining in the browser would drain the battery very quickly. Also, the amount of money to be made paled in comparison to the amount that ads made, which would deter website owners from using this. The workflow would go as follows:
     - Website owner registers with us (technically an ad network)
     - We provide a script to give to the website owner, which they install on their website
     - Users that visit that website will be mining Monero in the background, into our wallet
     - We send out payments to the websites, proportional to the amount of Monero that was mined on their website

  - The project that we settled on (CodeLens) made the most sense to us because as students we dislike the unfair disadvantages that other students gain by plagiarizing. We've seen how students have plagiarized assignments with minimal effort and have escaped justice. We're looking to put an end to that.
