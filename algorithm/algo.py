import ast
FUNCTION_NAME = "FUNCTION_NAME_REMOVED"


class LastCheck(ast.NodeVisitor):

    def __init__(self):
        self._funcList = []

    def identity(self):
        return self._funcList

    def visit_FunctionDef(self, node):
        self._funcList.append(ast.dump(node))
        self.generic_visit(node)


class RemoveFuncNames(ast.NodeVisitor):

    def __init__(self, funcs, args):
        self._funcList = funcs.copy()
        self._args = args.copy()

    def UniqueFuncList(self):
        return self._funcList

    def UniqueArgList(self):
        return self._args

    def visit_FunctionDef(self, node):
        self._funcList[node.name] = None
        node.name = FUNCTION_NAME
        self.generic_visit(node)

    def visit_Expr(self, node):
        if node.value.func.id in self._funcList:
            node.value.func.id = FUNCTION_NAME
        self.generic_visit(node)

    def visit_arg(self, node):
        self._args[node.arg] = None
        node.arg = "NAME_REMOVED"
        self.generic_visit(node)

    def visit_Name(self, node):
        if (node.id in self._args) or (node.id in self._funcList):
            node.id = "NAME_REMOVED"
        self.generic_visit(node)

    def visit_Assign(self, node):

        for child in ast.iter_child_nodes(node):
            if isinstance(child, ast.Name):
                self._args[child.id] = None
        self.generic_visit(node)

    def visit_Return(self, node):
        self.generic_visit(node)

    def visit_Call(self, node):
        self.generic_visit(node)

def computeDump(tree):
    layer = RemoveFuncNames({}, {})
    layer.visit(tree)
    functionNames1 = layer.UniqueFuncList().copy()
    arg_names = layer.UniqueArgList().copy()
    layer = RemoveFuncNames(functionNames1, arg_names)
    layer.visit(tree)

    check = LastCheck()
    check.visit(tree)

    return check.identity()


def finalResult(tree1, tree2):
    firstDump = computeDump(tree1)
    secondDump = computeDump(tree2)
    return set(firstDump) == set(secondDump)

