from factorial import factorial
 
def combinatorio(n: int, k: int) -> int:
    if type(n) and type(k) != type(0):
        raise ValueError('Valor erroneo')
    elif n < k:
        raise ValueError('Valor erroneo')
    else:
        return (factorial(n) / (factorial(k) * factorial(n - k)))

a = int(input('Di un numero: '))
b = int(input('Di un numero: '))
print(combinatorio(a, b))
