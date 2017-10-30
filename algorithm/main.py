import sys
import classImp
import ast


def start_algo(file1, file2):
	with open(file1) as f1:
		s1 = f1.read()

	with open(file2) as f2:
		s2 = f2.read()

	tree1 = ast.parse(s1)
	tree2 = ast.parse(s2)

	result = classImp.finalResult(tree1, tree2)

	if result:
		print("PLAGIARISM DETECTED: " + file1 + " and " + file2)
	else:
		print("All Good!")


if __name__ == "__main__":
	
	if len(sys.argv) != 3:
		print('Usage: main.py file1.py file2.py')
		sys.exit()

	file1 = sys.argv[1]
	file2 = sys.argv[2]
	start_algo(file1, file2)
