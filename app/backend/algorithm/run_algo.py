import sys
import algo
import ast


def start_algo(file1, file2, file3=None) -> float:
    with open(file1) as f1:
        s1 = f1.read()

    with open(file2) as f2:
        s2 = f2.read()

    tree1 = ast.parse(s1)
    tree2 = ast.parse(s2)
    if file3 is not None:
        with open(file3) as f3:
            s3 = f3.read()
        starter = ast.parse(s3)
        result = algo.finalResult(tree1, tree2, starter)
    else:
        result = algo.finalResult(tree1, tree2)

    result = str(result)
    result = float(result[:(result.find('.') + 5)])

    if result >= 0.5:
        print("PLAGIARISM DETECTED: {} and {}, with {}% confidence".format(file1, file2, (result * 100)))
    else:
        print("No plagiarism! The similarity is {}%".format(result * 100))
    return result

if __name__ == "__main__":

    if len(sys.argv) != 4:
        print('Usage: run_algo.py file1.py file2.py starter.py')
        sys.exit()

    file1 = sys.argv[1]
    file2 = sys.argv[2]
    starter = sys.argv[3]
    start_algo(file1, file2, starter)
