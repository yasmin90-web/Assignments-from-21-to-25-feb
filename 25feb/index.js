 /* Iterative function to reverse String of s*/
 function reverse_String(s)
 {
   s = s +"";
   rev_str = s.split("").reverse().join("");
   return rev_str;
 }
 function isPalindrome(string)
 {
     // get the reverse of string
     var rev_string = reverse_String(string);
 
      // Check if rev_string and string are same or not.
     if (rev_string == string) {
         return 1;
     }else{
         return 0;
     }
 }
 var str = prompt("Enter a string") 
 if (isPalindrome(str) == 1) {
     document.write("Is "+ str +" a palindrome? -> True")
 }else if (isPalindrome(str) == 0){
     document.write("Is "+ str +" a  palindrome? -> False")
 }