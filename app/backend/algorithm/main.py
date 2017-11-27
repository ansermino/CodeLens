import sys
import shutil

from unzipper import unzp
from compute import run_algo_on_dirs
if __name__ == "__main__":

    if len(sys.argv) != 3:
        print('Usage: main.py assignment.zip starter_code.zip')
        sys.exit()
    submissions = unzp(sys.argv[1], sys.argv[1].split('.')[0])
    starter_subm = unzp(sys.argv[2], sys.argv[2].split('.')[0])[0]
    for subm1 in submissions:
        submissions.remove(subm1)
        for subm2 in submissions:
            print("gg")
            run_algo_on_dirs(subm1, subm2, starter_subm)

    # shutil.rmtree("temp_dir")
