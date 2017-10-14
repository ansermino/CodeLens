# CODELENS

#### Q1: What are you planning to build?

CodeLens is software that detects plagiarism in code, like TurnItIn but for code. CodeLens will be provided as software as a service -- a website that course instructors or the school departments can use to detect plagiarism.

We've noticed an influx of assignment plagiarism at the University level. With the recent popularity of GitHub and other public code hosting services, there are more students than ever sharing their code online. Whether it be to impress potential recruiters/companies or to simply use version control software, students are making their code available for anyone to see. Since University instructors don't have the time to make their own unique assignments for each semester, they rely on reusing the same assignments throughout many different course offerings. At least within UofT, it's easy to score 100% on an assignment by simply googling "CSCXXX Assignment X" and seeing how a past student solved a problem.

The high-level idea of our MVP is as follows: A website that allows instructors to compare student assignments. We'd like to allow instructors to use different sources of plagiarism: their own sources like past assignments and online code repositories like GitHub and BitBucket. The plagiarism detector would cross-check the current assignments (between each other and the sources) and provide some metric to quantify the level of similarity or plagiarism. The instructor can use this metric to make decisions.

Here are a few mock-ups of our project:

![The image did not display correctly](https://i.imgur.com/5W8Iy5T.jpg "Layout")

 ![The image did not display correctly](https://github.com/csc301-fall-2017/project-team-01/blob/master/designs/code_view.png?raw=true "Layout")
 
  ![The image did not display correctly]( https://github.com/csc301-fall-2017/project-team-01/blob/master/designs/ui_view.png?raw=true "Layout")

#### Q2: Who are your target users?

Our target users would be course instructors who are teaching programming courses and are concerned that students may plagiarize code/assignments. We expect our software to be primarily used by professors teaching assignment-based introductory Computer Science courses (where plagiarism is rampant). We're not closed to the idea of directly targeting institutions or faculties (i.e. the entire Computer Science Faculty at the University of Toronto) but we figure that we should start small. The entire department may not want to use our service, so starting small at the professor-level makes sense. Our software will be most useful for University professors who experience large amounts of plagiarism and have a large source of assignments to check against.

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

There is a server system from Stanford University (Measure Of Software Similarity, or MOSS) for determining the similarity of programs. This system is currently used by academic institutions, but it does have some drawbacks. First off, the initial setup to use MOSS is time consuming and requires technical knowledge. We aim to make our software quick and easy to use. Instead of gluing together bash scripts to pipe into MOSS, we can provide an online interface that allows instructors to upload assignment files they need, along with assignments from old offerings, and simply hit RUN.

Another aspect that we can improve on is to provide storage of past assignments that instructors can check current assignments against. Instructors would no longer have to provide these assignments as an input into MOSS (which doesn't store any assignments) if they wanted to use them as a source. This source of assignments can grow between each iteration of the course. This could be useful if instructors wanted to compare assignments from other institutions. We also intend to search for plagiarism from online code repositories, like GitHub and BitBucket, as a way of further increasing the size of the source of plagiarism. We hope that by cross-checking assignments with a larger source we can improve plagiarism detection.

Paul Gries (University of Toronto professor) has expressed to us the need for plagiarism detection software in the department of Computer Science. While they do have a solution currently, it is not intuitive to use and doesn't leverage GitHub and other easily accessible source code hosting software. There is room for improvement and we believe that our product will satisfy this need.

### Highlights

- Conversation with Paul Gries, a University of Toronto professor, indicated that there wasn't a sophisticated 21st century solution for code plagiarism (during a summer internship working with him). He suggested various methods for detecting code plagiarism, such as checking Abstract Syntax Trees for similarities (something we'll definitely look into during further research). Furthermore, some of us had Paul as an instructor for CSC207 and, at that time, he mentioned that plagiarism checking for assignment 1 took an absurdly long time. This was the inspiration for the project.

- Lots of schools implement their own methods of plagiarism checking. University of Toronto's MarkUs project had a blog post about effective methods for plagiarism detection (http://blog.markusproject.org/?p=2570#ideas-of-criteria-for-plagiarism-detection). We'll investigate these methods in our own implementation. Other schools have also implemented their propreitary plagiarism checker. All of this wasted effort could be consolidated into one efficient service that is used universally between many different schools.

- Many of the same assignments are used between different schools. CSC458 Assignment 1 is a rebranded Stanford Networking assignment and CSC384 has a rebranded Berkeley artificial intelligence assignment. Because these schools implement their own method of detecting plagiarism which aren't shared with others, a lot of data is lost. By focusing on one platform we can store the same assignments and use them to gather data in future plagiarism runs. Perhaps we could somehow link results between institutions in our implementation.

- We originally wanted to make CodeLens' target school departments instead of professors themselves. We realized that it would be much more difficult to get the support of an entire department v.s. an individual professor. Additionally, not all of the instructors in a department may wish to use CodeLens. This pursuaded us to allow instructors to opt-in instead of forcing professors to use something that they might not want to do.

- We had many alternative ideas before deciding on CodeLens.

  - We wanted to make a booking app for hair salons. We realized that there are many apps that already do this and that we couldn't bring anything new to the table. We also thought that something challenging might be better suited for us.

  - We explored the idea of providing websites a way of mining Minero (a Bitcoin derivative) in a user's browser as an alternative to using advertisements. We decided against this idea because many people browse the Internet with phones or laptops and this would drain the battery fairly quickly. Additionally, the pay out rate is worse than advertisements.

 - We settled on CodeLens because as students we dislike the unfair disadvantages that other students gain by plagiarizing. We've seen how students have plagiarized assignments with minimal effort and have escaped justice. We're looking to put an end to that. While we're only targeting academia for this project, our product has uses in industry (like checking if a commercial product illegally borrows code from somewhere else). The idea of a scaleable project (that we can work on after this course) is very appealing.
