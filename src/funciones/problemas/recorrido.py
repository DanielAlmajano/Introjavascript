def comparable(cadena: str) -> int:
    vocales = ['a', 'e', 'i', 'o', 'u']
    contador = 0
    for i in cadena.lower():
        if i in vocales:
            contador += 1
    return contador
print(comparable('aeiou'))