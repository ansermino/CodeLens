import zipfile
import sys

def unzp(dir_zip, destination=None) -> list:
    """
    Unzip the archive of directories
    :param dir_zip: location of the directories archive
    :param destination: destination of unzipping
    :return: the list of directories, with the destination prefix
    """

    zip_ref = zipfile.ZipFile(dir_zip, 'r')
    zip_ref.extractall(destination)
    files_info = zip_ref.infolist()
    files = []
    for file in files_info:
        if file.is_dir():
            files.append(file.filename)
    files = list(map(lambda x: destination + "/" + x, files))
    zip_ref.close()
    return files


if __name__ == "__main__":

    if len(sys.argv) != 2:
        print("Usage: unziper.py dir")
        sys.exit();

    dir1 = sys.argv[1]

    unzp(dir1, dir1.split('.')[0])




