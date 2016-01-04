# mobilecodelock
Problem:
Write a program to determine total number of possible patterns in android’s lock screen. Conditions:
-          An acceptable pattern must touch atleast 4 points
-          Only one edge re-use is allowed in one pattern
 
Notes:
Call out all your assumptions
Provide a running & production ready code
An edge means a connection between two points. So if your matrix is
 
1              2              3
4              5              6
7              8              9
 
Then connection between 1 & 2 is an edge ({5,9} is also an edge … and so on)
Only one edge re-use implies that in your pattern you can use only one connection twice e.g. 1,2,4,,5,2,1 is an acceptable pattern (connection between 1 & 2 has been used twice), however, 1,2,4,5,2,1,4,2 isn’t as connections between 1,2 & 4,2 have been used twice

---------------------------------
### ASK

The ask was to observe the end-user edge formation (on selecting the numbers) and validate for edge not repeated more than twice in the selection.

### Assumptions - 
1. Edge is between two consecutive points. But since in number lock we can type any key, i consider all keys as posssible end-points to make an edge. 
Example - For "1", usual edges are {(1,2),(1,4),(1,5)} but i consider these as inclusive edges {(1,3), (1,6), (1,9), (1,8) , (1,7)}

2. Should we allow, same number selection in consecutive positions. REFLEXIVE EDGE.
Example - 1,2,2,3 (edges are {(1,2),(2,2), (2,3)} (2,2) is reflexive edge. I am considering this as allowed, because it is normal pattern in mobile lock screens.

3. Maximum length of the Lock key is 8 (minimum is 4 as given in problem statement).

### Alternative Solutions - 
1. Usually Interview questions are to look at linked list concept. Also, if we need to validate the number as we input - so this is one solution based on linked list approach - 
  - step 1.1. Accept User-Input, and create NEW_NODE with value keyed-in.
  - step 1.2 Check if the keyed-in value exists for any existing node in the linked list.
  - step 1.3 if No, add NEW_NODE.
  - step 1.4 if yes, check if CURRENT-LAST-NODE value is same in either BEFORE or AFTER node of this identified position.
  - step 1.5  ---------- if yes increment EDGE-COUNT by 1 and repeat step 1.4
  - step 1.6  ---------- if EDGE-COUNT is more than 2, throw error as 'unacceptable pattern' and exit.
  - step 1.7 if EDGE-COUNT is <2, Add NEW_NODE.
  - step 1.8 end.

