public class Multiplos {
    //Quitando multiplos de 10
    public void multiplos5(int n) {
        int contador = 0;
        for (int i = 5; i <= n; i = i + 10) {
            contador++;
        }
        System.out.println(contador);
    }

    //Quitando multiplos de 5
    public void multiplos10(int n) {
        int contador = 0;
        for (int i = 10; i <= n; i = i + 10) {
            contador++;
        }
        System.out.println(contador);
    }
}

