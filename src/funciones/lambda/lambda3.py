from typing import List, TypeVar
S = TypeVar(str)

def recorrido(cadena: str) -> List[S]:
    array = []
    for i in cadena:
        array.append(i)
    return array
print(recorrido(cadena = str(input('Di una Cadena: '))))


#lambda
array = []
recorrido2 = (lambda cadena: [print(array.append(i)) for i in cadena])
print(recorrido2('HOLA QUE TAL'))
 
