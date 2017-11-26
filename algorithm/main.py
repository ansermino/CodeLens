import sys
import shutil

from unzipper import unzp
from compute import run_algo_on_dirs
if __name__ == "__main__":

    if len(sys.argv) != 2:
        print('Usage: main.py assignment.zip')
        sys.exit()
    submissions = unzp(sys.argv[1], sys.argv[1].split('.')[0])
    # remove_list = submissions.copy()
    print(submissions)
    for subm1 in submissions:
        submissions.remove(subm1)
        for subm2 in submissions:
            run_algo_on_dirs(subm1, subm2)

    # shutil.rmtree("temp_dir")
