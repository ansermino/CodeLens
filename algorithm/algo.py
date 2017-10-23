import ast


# This class is supposed to be for overwriting the names of functions /
# variables in the AST but it's not working yet.

# class RewriteName(ast.NodeTransformer):
#     def visit_Name(self, node):
#         return ast.copy_location(ast.Subscript(
#             value=ast.Name(id='data', ctx=ast.Load()),
#             slice=ast.Index(value=ast.Str(s=node.id)),
#             ctx=node.ctx
#         ), node)

# tree = RewriteName().visit(tree1)
# print(ast.dump(tree))

def basicPlagiarism(ast1, ast2):
	"""
	Detects if ast1 and ast2 have the same functions.
	Dis-regards white space, order of the functions and comments.

	Will only return true if all function names and variables are the same.
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
