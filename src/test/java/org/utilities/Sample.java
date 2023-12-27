package org.utilities;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.TreeSet;

public class Sample {

	
	public static void main(String[] args) {
		
		//37. right pyramid
		
		// *
	//    **
	//   ***	
		


		//              2<=3T
		for (int i = 1; i <=3; i++) {
			
			
			// Space
			
			//          3-2  0>=1F
			for (int j =3-i; j>=1; j--) {
				System.out.print(" ");   
						
			}
			
			
			              //3<=2 F
			for (int j = 1; j <=i; j++) {
				
				System.out.print("*");                 
			}		
			
			System.out.println();
			
		}
		
		
		

	
	}
}
