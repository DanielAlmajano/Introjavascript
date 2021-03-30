#Iteración en python funcion lambda
iterar = (lambda vector: [print(vector[i], end=', ') 
for i in range(0, len(vector))])
print(iterar(vector = [2, 3, 4, 5]))