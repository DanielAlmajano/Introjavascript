import time

def divisores(n: int) -> int:
    for i in range(1, int(n / 2 + 1)):
        if n % i == 0:
            yield i
    yield n
inicio = time.time()
d = divisores(4000000)
[print(i) for i in d]
print('Fin de el programa: %s segundos' % round((time.time() - inicio), 2))
