from typing import List, TypeVar
I = TypeVar(int)
def fib(n: int) -> str:
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a + b
    print()
fib(1000)

#Utilizando un vector
def fibonacci(n: int) -> List[I]:
    array = []
    a = 0
    b = 1
    while a < n:
        a, b = b, b + a
        array.append(a)
    print(array)
fibonacci(1000)