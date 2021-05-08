#Quitando los multiplos de 10
def multiplos5(n: int) -> int:
    contador = 0
    for i in range(5, n, 10):
        contador += 1
    return contador
print(multiplos5(10000))


#Quitando los multiplos de 5
def multiplos_10(n: int) -> int:
    contador = 0
    for i in range(10, n + 1, 10):
        contador += 1
    return contador
print(multiplos_10(10000))


#Multiplos de 7 quitando los numeros de acabados en 9
def multiplos_7(n: int) -> int:
    contador = 0
    for i in range(7, n, 7):
        a = str(i)
        if i[len(a) - 1:len(a)] == '9':
            contador += 1
        else:
            return None
    return contador
print(multiplos_7(100))