from typing import TypeVar, Dict

text = "hola que tal, bienbenidos a Bettatech. Si os esta gustando este video, suscribete y darle a la campana! campana hola"
S = TypeVar('S')
I = TypeVar('I')
def normalize(word: str) -> str:
    return word.lower().replace(',', '').replace('.', '').replace('!', '')

def count(text: str) -> Dict[S, I]:
    dic = {}
    text2 = text.split(' ')
    for word in text2:
        if normalize(word) in dic:
            dic[normalize(word)] += 1
        else:
            dic[normalize(word)] = 1

    print(dic)
print(count(text))