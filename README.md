# Codelens

### Created by David Ansermino, Daniel Chan, Patrick Gronowski, Ivan Topolcic, Ihor Veselovskyy.

CodeLens is software that detects plagiarism in code, like TurnItIn does for essays. CodeLens will be provided as software as a service -- a website that course instructors can use to detect plagiarism.

We've noticed an influx of assignment plagiarism at the University level. With the recent popularity of GitHub and other public code hosting services, there are more students than ever sharing their code online. Whether it be to impress potential recruiters/companies or to simply use version control software, students are making their code available for anyone to see. Since University instructors don't have the time to make their own unique assignments for each semester, they rely on reusing the same assignments throughout many different course offerings. At least within UofT, it's easy to score 100% on an assignment by simply googling "CSCXXX Assignment X" and seeing how a past student solved a problem.

The high-level idea of our MVP is as follows: A website that allows instructors to compare student assignments. We'd like to allow instructors to use different sources of plagiarism: their own sources like past assignments and online code repositories like GitHub and BitBucket. The plagiarism detector cross-checks the current assignments (between each other and the sources) and provide some metric to quantify the level of similarity or plagiarism. The instructor can then use this metric to make their own judgement.
