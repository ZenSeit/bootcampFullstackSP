package org.example.utils;

import java.util.List;

public class Challenge1 {


    public static String numberString(String typeS){
        String specialString="";
        if(typeS.equalsIgnoreCase("type a")){
            specialString="54";
            specialString+=Math.round(Math.random()*100000000);
            while(specialString.length()<10){
                specialString+=0;
            };
            return specialString;
        } else if (typeS.equalsIgnoreCase("type b")) {
            specialString="08";
            //while(specialString.length()<10){
            specialString+=Math.round(Math.random()*100000000);
            while(specialString.length()<10){
                specialString+=0;
            };
            return specialString;
        }
        return "We can't generate a String for this type";
    }

    public static boolean VerifyIsPresent(String stringChecked, List<String> stringList) throws NullPointerException,ClassCastException{
        try{
            return !stringList.contains(stringChecked);
        }catch (NullPointerException eNull){
            System.out.println("You don't send data");
            return true;
        }catch (ClassCastException eCast){
            System.out.println("You need to sent a list of strings");
            return true;
        }

    }
}
