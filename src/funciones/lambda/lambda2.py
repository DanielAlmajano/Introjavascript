from typing import TypeVar

I = TypeVar(int)

def suma_n(n: int) -> I:
    suma = 0
    for i in range(1, n + 1):
        suma += i
    yield suma
d = suma_n(100)
[print(i) for i in d]

#Lambda
suman = 0
suma_nu = (lambda n: ([suman += i for i in range(1, n + 1)] return suma))
print(suma_nu(100))