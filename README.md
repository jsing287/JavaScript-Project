# JavaScript-Project
This program was created for the final project of the SE2202A JavaScript course taken by all second year Software Engineering
students at Western University. The task given by the instructor was to create an accounting program that was able to rearrange an individuals expenses for the year in order to balance their budget on a monthly basis. 

The program begins by creating 12 budget accounts with random monthly revenues and expenses within a reasonable range. It then finds the months that are over budget, identifies these months to the user with the exact expenses that need to be moved. The program then finds months that can take on more expenses, and moves over budget expenses to these months. Thus the account is balanced. The program utilizes various Immediately Invokable Functions Expressions (IIFE) in order to make the runtime quicker.

Breakdown of outputs:

1. The program outputs every months expenses, and budget along with notifying the user if the expenses need to be moved or not
2 The program prints out which months need their expenses rearranged and exactly which expenses need to be moved in order for
this month to balance.
3. The program will then again, print out every month expenses and budgets along with the negative cash flow months expenses
array updated.
4. The program prints out which month is recieving new expenses and from which over budget month it is recieving this from.
5. The program prints out every positive cash flow month with some of them having updated expenses arrays as from the transfer.
