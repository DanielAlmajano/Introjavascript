import java.util.ArrayList;


public  class Lambda3 {
    public void recorrido(String cadena) {
        ArrayList<Integer> array = new ArrayList<Integer>();
        for (int i = 0; i <= cadena.length(); i++) {
            array.add(cadena.charAt(i));
        }
    }
    public static void main(String[] args) {
        
    }
}