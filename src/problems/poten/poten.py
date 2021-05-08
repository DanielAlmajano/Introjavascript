def poten_2_5(n: int) -> int:
    conver = str(n)
    if conver[len(conver) - 1:len(conver)] == '5':
        conver2 = int(conver[:len(conver) - 1])
        conver2 = conver2 * (conver2 + 1)
        final1 = '25'
        final2 = str(conver2)
        final3 = final2 + final1
        final4 = int(final3)
    else:
        raise TypeError('The number is not multiple by five')
    return final4
print(poten_2_5(25))
