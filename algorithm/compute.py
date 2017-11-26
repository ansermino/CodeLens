import sys
import os
import main

def run_algo_on_dirs(dir1, dir2):
    """
    Runs the plaigerism checker on the files in the two directories.
    """

    dir1_files = os.listdir(dir1)
    dir1_files.sort()

    dir2_files = os.listdir(dir2)
    dir2_files.sort()

    if (len(dir1_files) != len(dir2_files)):
        print("The directories must have the same number of files.")
        sys.exit()

    if (dir1_files != dir2_files):
        print("The directories must have the same files.")
        sys.exit()

    for x in range(len(dir1_files)):
        dir1_file_path = "./" + dir1 + "/" + dir1_files[x]
        dir2_file_path = "./" + dir2 + "/" + dir2_files[x]

        main.external_start_algo(dir1_file_path, dir2_file_path);


if __name__ == "__main__":

    if len(sys.argv) != 3:
        print("Usage: compute.py dir1 dir2")
        sys.exit();

    dir1 = sys.argv[1]
    dir2 = sys.argv[2]

    run_algo_on_dirs(dir1, dir2);
