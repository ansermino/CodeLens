import sys
import os
from run_algo import start_algo
import psycopg2


def run_algo_on_dirs(dir1: str, dir2: str, assignment_id: int, starter: str = None) -> None:
    """
    Runs the plagiarism checker on all the files in the two directories.
    """

    # Get all the files in dir1
    dir1_files = os.listdir(dir1)
    dir1_files.sort()

    # Get all the files in dir2
    dir2_files = os.listdir(dir2)
    dir2_files.sort()

    # Get all the starter files
    starter_files = os.listdir(starter)
    starter_files.sort()

    # Make sure the dir's have the same number of files
    if (len(dir1_files) != len(dir2_files)):
        print("The directories must have the same number of files.")
        sys.exit()

    if (dir1_files != dir2_files):
        print("The directories must have the same files.")
        sys.exit()

    # Connect to the db
    conn = psycopg2.connect("dbname=plagiarism user=csc301 password=team01")
    cur = conn.cursor()
    plag = ()

    # Run the algo on all the matching files in the directory
    for x in range(len(dir1_files)):

        if dir1_files[x] in starter_files:
            starter_file_path = "./" + starter + "/" + dir1_files[x]
        else:
            starter_file_path = None

        dir1_file_path = "./" + dir1 + "/" + dir1_files[x]
        dir2_file_path = "./" + dir2 + "/" + dir2_files[x]

        id1 = os.path.basename(os.path.normpath(dir1))
        id2 = os.path.basename(os.path.normpath(dir2))
        plag = start_algo(dir1_file_path, dir2_file_path, starter_file_path)
        cur.execute("""INSERT INTO public.plagiarism_tuples (submission_a, submission_b,
                    plagiarism_score, assignment_id, lines_1, lines_2, \"createdAt\", \"updatedAt\")
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s);
                    """,
                    (id1, id2, plag[0] * 100, assignment_id, plag[1], plag[2],
                     "NOW()", "NOW()"))

    conn.commit()
    cur.close()
    conn.close()


if __name__ == "__main__":

    if len(sys.argv) != 3:
        print("Usage: compute.py dir1 dir2")
        sys.exit()

    dirr1 = sys.argv[1]
    dirr2 = sys.argv[2]

    run_algo_on_dirs(dirr1, dirr2, 0)
