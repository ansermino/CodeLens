import ast

sample = "if x == 1:\n  if x == 2:\n    x = 2\n"

sample_2 = "class XYZ:\n  x = 1\n  def __init__(self):\n    self._a = 10\n"


def print_deep(s, depth, new_line):
    if new_line:
        print(depth * 2 * '-' + s)
    else:
        print(depth * 2 * '-' + s),


def print_element(elem, depth):
    print_deep(str(elem), depth, False)
    if getattr(elem, '_fields', None) is None:
        pass
    elif elem._fields == ():
        print_deep(str(elem), depth+1, False)
    else:
        for f in elem._fields:
            attr = getattr(elem, f)
            if type(attr) == list:
                for e in attr:
                    print_element(e, depth+1)
            else:
                print_element(attr, depth+1)


def print_tree(source):
    tree = ast.parse(source)
    i = ast.iter_fields(tree)
    for e in tree.body:
        print_element(e, 0)


data = {"classes": [], "functions": [], "variables": [], "class_count": 0, "function_count": 0, "variable_count": 0 }


def print_info(source):
    tree = ast.parse(source)
    i = ast.iter_fields(tree)
    for x in i:
        print_tree(x)



print_tree(sample)

