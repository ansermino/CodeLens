def sqr(num):
    square2 = num ** 2
    if square2 > 10:
        print("Hey")
    for i in range(1, 10):
        print(str(i) + "!")
    return square2

def hi(who):
    print("Hello, " + who + "!")

def sq2(num1, num2, who):
    hi(who)
    sqr(num1)
    sqr(num2)

