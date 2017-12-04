import sys
import shutil

from unzipper import unzp
from compute import run_algo_on_dirs


if __name__ == "__main__":
    """
    :parameter argv[1]: location of zip file with all assignments. 
    The names of directories will be used for student_id fields
    :parameter argv[2]: location of zip file with starter code
    (directory has to have the same content as assignments)
    :parameter argv[3]: assignment id
    """
    if len(sys.argv) != 4:
        print('Usage: main.py assignment.zip starter_code.zip assignment_id')
        sys.exit()
    submissions = unzp(sys.argv[1], "temp")
    starter_subm = unzp(sys.argv[2], "temp1")[0]
    assignment_id = int(sys.argv[3])
    for subm1 in submissions:
        submissions.remove(subm1)
        for subm2 in submissions:
            run_algo_on_dirs(subm1, subm2, assignment_id, starter_subm)

    # shutil.rmtree("temp_dir")
