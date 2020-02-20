# JavaScript-Project
This program was created for the final project of the SE2202A JavaScript course taken by all second year Software Engineering
students at Western University. The task given by the instructor was to create an accounting program that was able to rearrange 
the expenses of an individuals account so that each month their budget would balance. As the project gave alot of room for interpretation 
of how to complete the task I decided to take the most realistic approach to the problem.The program initially randomly creates 
an expense array and a random budget between a reasonable range for each month. Furthermore, the program scans through each 
month to find which ones need their expenses to moved so that their expenses can be less than or equal to their budget for 
that month. The program will then remove however many expenses neccessary to create this balance and transfer them to another
months expenses array. As some months will be under budget they will be able to take on more expenses thus allowing for this
transfer to occur. At the end of the program two outcomes can occur, either the program balances every months budget without
issues and account is fully balanced or, due to the fact that these are randomly generated expenses some months expenses will
not be moveable as no other month has enough space to take them on. In either case the program catches these outcomes and 
notifies the user when this occurs.

Breakdown of outputs:

1. The program outputs every months expenses, and budget along with notifying the user if the expenses need to be moved or not
2 The program prints out which months need their expenses rearranged and exactly which expenses need to be moved in order for
this month to balance.
3. The program will then again, print out every month expenses and budgets along with the negative cash flow months expenses
array updated.
4. The program prints out which month is recieving new expenses and from which over budget month it is recieving this from.
5. The program prints out every positive cash flow month with some of them having updated expenses arrays as from the transfer.
