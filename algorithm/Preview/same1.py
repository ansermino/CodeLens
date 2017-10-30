def mySquare(x):
    square = x ** 2
    my = x + 5
    for k in range(1, 10):
        print(k)

    if my > 5:
        print("Hey")

    return square

def sayHello(name):
    print("Hello, " + name + "!")

def squareTwoNums(x, y, user):
    sayHello(user)
    mySquare(x)
    mySquare(y)
