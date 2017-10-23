import ast

FUNCTION_NAME = "FUNCTION_NAME_REMOVED"

def basicPlagiarism(ast1, ast2):
	"""
	Detects if ast1 and ast2 have the same functions.
	Dis-regards white space, order of the functions and comments.

	Will only return true if all variables are the same.
	"""

	functions1 = []
	functions2 = []

	for node in ast.walk(ast1):
		if isinstance(node, ast.FunctionDef):
			functions1.append(ast.dump(node))

	for node in ast.walk(ast2):
		if isinstance(node, ast.FunctionDef):
			functions2.append(ast.dump(node))

	return set(functions1) == set(functions2)


def removeFunctionNames(someAst):
	"""
	Removes function names from the given ast.
	
	First by replacing the function definitions and then removing any nested
	calls of one of the functions that were replaced.
	"""

	functionNames = []

	for node in ast.walk(someAst):
		if isinstance(node, ast.FunctionDef):
			functionNames.append(node.name)

			node.name = FUNCTION_NAME

	return removeFunctionCalls(someAst, functionNames);


def removeFunctionCalls(someAst, functionList):
	"""
	Removes calls to functions in functionList from the ast.
	"""

	for node in ast.walk(someAst):

		if isinstance(node, ast.Expr):

			if node.value.func.id in functionList:
				node.value.func.id = FUNCTION_NAME

	return someAst


def removeArgs(someAst):
	argNames = []

	for node in ast.walk(someAst):
		if isinstance(node, ast.arg):
			argNames.append(node.arg)
			node.arg = "NAME_REMOVED"

	for node in ast.walk(someAst):
		if isinstance(node, ast.Name):
			if node.id in argNames:
				node.id = "NAME_REMOVED"

	return someAst