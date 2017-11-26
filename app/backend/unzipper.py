import sys
import zipfile

if __name__ == "__main__":

    if len(sys.argv) != 3:
        print('Usage: unzipper.py file1.py file2.py')
        sys.exit()

    zip_location = sys.argv[1]
    zip_destination = sys.argv[2]

    zip_ref = zipfile.ZipFile(sys.argv[1], 'r')
    zip_ref.extractall(sys.argv[2])
    zip_ref.close()
