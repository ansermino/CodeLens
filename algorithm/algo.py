import ast
import modDump
FUNCTION_NAME = "FUNCTION_NAME_REMOVED"
VAR_NAME = "NAME_REMOVED"

class LastCheck(ast.NodeVisitor):

    def __init__(self):
        self._funcList = []

    def identity(self):
        return self._funcList

    def visit_FunctionDef(self, node):
        print(modDump.dump(node))
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
        if not isinstance(node.value, ast.Str):
            if not isinstance(node.value.func, ast.Attribute):
                if node.value.func.id in self._funcList:
                    node.value.func.id = FUNCTION_NAME
        self.generic_visit(node)

    def visit_arg(self, node):
        self._args[node.arg] = None
        node.arg = VAR_NAME
        self.generic_visit(node)

    def visit_Name(self, node):
        if (node.id in self._args) or (node.id in self._funcList):
            node.id = VAR_NAME
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

    def visit_If(self, node):
        self.generic_visit(node)

    def visit_For(self, node):
        if isinstance(node.target, ast.Tuple):
            for child in ast.iter_child_nodes(node.target):
                if isinstance(child, ast.Name):
                    self._args[child.id] = None
        if isinstance(node.target, ast.Name):
            self._args[node.target.id] = None

        self.generic_visit(node)

    def visit_While(self, node):
        self.generic_visit(node)


class ComputePlag(ast.NodeVisitor):

    def __init__(self):
        self._funcdef = []
        self._expr = []
        self._assign = []
        self._call = []
        self._if = []
        self._for = []
        self._while = []

    def find_count(self):
        return self._funcdef, self._expr, self._assign, self._call, self._if, self._for, self._while

    def visit_FunctionDef(self, node):
        self._funcdef.append(ast.dump(node.args))
        self.generic_visit(node)

    def visit_Expr(self, node):
        self._expr.append(ast.dump(node))
        self.generic_visit(node)

    def visit_arg(self, node):
        self.generic_visit(node)

    def visit_Name(self, node):
        self.generic_visit(node)

    def visit_Assign(self, node):
        self._assign.append(ast.dump(node))
        self.generic_visit(node)

    def visit_Return(self, node):
        self.generic_visit(node)

    def visit_Call(self, node):
        self._call.append(ast.dump(node))
        self.generic_visit(node)

    def visit_If(self, node):
        self._if.append(ast.dump(node.test))
        self.generic_visit(node)

    def visit_For(self, node):
        self._for.append(ast.dump(node.target))
        self.generic_visit(node)

    def visit_While(self, node):
        self._while.append(ast.dump(node.test))
        self.generic_visit(node)

class recordNames(ast.NodeVisitor):
    def __init__(self):
        self._names = []

    def nameList(self):
        return self._names

    def visit_FunctionDef(self, node):
        self._names.append(node.name)
        self.generic_visit(node)

    def visit_Expr(self, node):
        self.generic_visit(node)

    def visit_arg(self, node):
        self._names.append(node.arg)
        self.generic_visit(node)

    def visit_Name(self, node):
        self.generic_visit(node)

    def visit_Assign(self, node):
        for child in ast.iter_child_nodes(node):
            if isinstance(child, ast.Name):
                self._names.append(child.id)
        self.generic_visit(node)

    def visit_Return(self, node):
        self.generic_visit(node)

    def visit_Call(self, node):
        self.generic_visit(node)

    def visit_If(self, node):
        self.generic_visit(node)

    def visit_For(self, node):
        if isinstance(node.target, ast.Tuple):
            for child in ast.iter_child_nodes(node.target):
                if isinstance(child, ast.Name):
                    self._names.append(child.id)
        if isinstance(node.target, ast.Name):
            self._names.append(node.target.id)

        self.generic_visit(node)

    def visit_While(self, node):
        self.generic_visit(node)


def computeDump(tree):

    namesAST = recordNames()
    namesAST.visit(tree)
    names = namesAST.nameList()

    layer = RemoveFuncNames({}, {})
    layer.visit(tree)
    functionNames1 = layer.UniqueFuncList().copy()

    arg_names = layer.UniqueArgList().copy()
    layer = RemoveFuncNames(functionNames1, arg_names)
    layer.visit(tree)

    check = ComputePlag()
    check.visit(tree)
    return check.find_count(), names


def influence(list1, list2, weight):
    if (len(list1) + len(list2)) == 0:
        return 0

    diff = list(set(list1).symmetric_difference(set(list2)))
    infl = (1 - (float(len(diff)) / (len(list1) + len(list2)))) * weight
    return infl


def finalResult(tree1, tree2):
    (funcs1, expr1, assign1, call1, if1, for1, while1), names1 = computeDump(tree1)
    (funcs2, expr2, assign2, call2, if2, for2, while2), names2 = computeDump(tree2)

    score = influence(funcs1, funcs2, 0.03)
    score += influence(expr1, expr2, 0.31)
    score += influence(assign1, assign2, 0.29)
    score += influence(call1, call2, 0.18)
    score += influence(if1, if2, 0.05)
    score += influence(for1, for2, 0.03)
    score += influence(while1, while2, 0.03)
    score += influence(names1, names2, 0.08)

    return score

