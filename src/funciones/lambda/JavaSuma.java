public class JavaSuma {
    private int con, suma;
    public void sumaN(int n) {
        con = 1;
        while (con <= n) {
            suma = suma + con;
            con++;
        }
        System.out.println(suma);
    }
    public static void main(String[] args) {
        JavaSuma n1 = new JavaSuma();
        n1.sumaN(100);
    }
}