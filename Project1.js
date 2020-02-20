
// This class creates budget items for each month of the fiscal year.
class Budget
{


    // Constructor sets object parameters of time of year, max budget, and array of expenses.
    constructor(month, budget, list) {
        // Properties of budget items.
        let time;
        let maxBudget;
        let expenses = [];



        // setter for time.
        this.setTime = function(t) {
            time = t;
        }

        // set max budget.
        this.setMaxBudget = function (m) {
            maxBudget = m;
        }
        // set expenses.
        this.setExp = function (e) {

            expenses = e;
        }


        // Getter function returns the month of the budget item.
        this.getTime = function () {
            return time;
        }
        // Getter function returns the max value of the budget item.
        this.getMaxBudget = function () {
            return maxBudget;
        }
        // Getter function returns the expenses array of the budget item.
        this.getExp = function () {
            return expenses;
        }


        // Setting all passed values from constructor.
        this.setTime(month);
        this.setMaxBudget(budget);
        this.setExp(list);

    }



    // Adds up all of the expenses for each object.
    sumOfExpenses()
    {
        let sum = 0;

        for(let b of this.getExp())
        {
            sum+=b;
        }

        return (Math.round(sum*100)/100);
    }

    // Checks if the month has positive or negative cash flow.
    cashFlow()
    {
        if(this.getMaxBudget()>=this.sumOfExpenses())
        {
            return true;
        }
        else
        {
            return false;
        }
    }


    // Calculate the amount of space available within each month.
    calculateSpace()
    {

        return  (this.getMaxBudget() - this.sumOfExpenses());
    }


    // Checks if the month needs to move its expenses or not.
    needToMove()
    {
        if(this.cashFlow()==true)
        {
            return " This month does not need to be moved.  "
        }
        else
        {
            return " This month needs to be rearranged. "
        }
    }




}

// this function uses the bubble sort algorithm to return the expenses array sorted in ascending order.
let sort = function(array)
{
    // Applying bubble sort to adjacent array values.
    for(var i = 0; i<10;i++)
    {
        let present = array[i];
        let above = array[i+1];

        if(present<=above)
        {
            continue
        }
        else if(above<present)
        {
            array[i]=above;
            array[i+1] =present;
        }

    }

    // Checking if array is sorted. If not run method again.
    for(var i = 0; i<10;i++)
    {
        if(array[i]>array[i+1])
        {
            sort(array);
        }
        else
        {
            continue;
        }

    }

    return array;
}


// These function creates a random array of expenses between 100 to 500 dollars and returns that array. We have decided 11 expenses are reasonable.
let randExpenses = function()
{
    // constant array values that mimic some real world constant expenses.
    let temp = [650,80,100,250,500];

    // Looping 6 more times to add 6 random expenses.
    for(var i = 4; i<10;i++)
    {
        let b= ((Math.random()*(500-100)+1)+100);
        let a = Math.round((b*100))/100;
        temp.push(a);

    }


    // We return a sorted array.
    return sort(temp);

}


// This function returns random monthly incomes in the range of 3400-3700 a month which we decided is reasonable.
function randRev()
{
    let temp = Math.round((Math.random()*((3700-3400)+1)+3400)*100)/100;

    return temp;

}

// This creates all of the months incomes and expenses.
let allObjects = [];
let Jan = new Budget("January", randRev(),randExpenses());
let Feb = new Budget("February", randRev(), randExpenses());
let Mar = new Budget("March", randRev(),randExpenses());
let Apr = new Budget("April", randRev(), randExpenses());
let May = new Budget("May", randRev(), randExpenses());
let Jun = new Budget("June", randRev(), randExpenses());
let Jul = new Budget("July",randRev(), randExpenses());
let Aug = new Budget("August",randRev(),randExpenses());
let Sept = new Budget("September",randRev(),randExpenses());
let Oct = new Budget("October",randRev(),randExpenses());
let Nov = new Budget("November",randRev(),randExpenses());
let Dec = new Budget("December", randRev(),randExpenses());
allObjects.push(Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sept,Oct,Nov,Dec);


// This method returns an array of values that need to be removed from a month to restore it to positive cash flow.
let makeMoveArray = function(month)
{
    let moveValues = []
    let sum = 0;
    for(let index of month.getExp())
    {
        if(sum<(month.calculateSpace()*(-1)))
        {

            sum+=index;
            moveValues.push(index);

        }
        else
        {
            break;
        }

    }



    return moveValues;

}

// negativeObj will holds all of the negative cash flow months and positiveObj will hold all of the positive cash flow months.
let negativeObj=[];
let positiveObj= [];


// This function runs on its own and will partition the months into two arrays, positive cash flows and negative cash flows.
(function separate()
{
    for(let a of allObjects)
    {
        if(a.cashFlow()==true)
        {
            positiveObj.push(a);
        }
        else
        {
            negativeObj.push(a);
        }
    }
})();

console.log("\n");
console.log("INITIAL EXPENSES THAT HAVE BEEN CREATED IN EACH MONTH OF THE FISCAL YEAR: ");

// This prints the initial state of all month of the year and if their expenses need to be moved or not.
for(let a of allObjects)
{
    console.log("Month: " + a.getTime() + " " + "|Budget: "+ a.getMaxBudget() + " |All Expenses: " + a.sumOfExpenses() + "\nExpenses: [" + a.getExp() + "]" + " " +  a.needToMove() + "\n");

}

console.log("\n\n");


// This array will hold arrays of values that need to be moved.
let valuesToBeMoved = [];


console.log("MONTHS AND THEIR EXPENSES THAT NEED TO BE REARRANGED: ");

// This function runs on its own and will update the expense array in each negative cash flow months with removed expenses to restore it to positive cash flow.
(function()
{
    // values to move.
    let a = [];
    // filtered array.
    let b = [];


    // Go through each negative cash flow month
    for(let index of negativeObj)
    {
        // Get the array of values that need to be removed.
        a= makeMoveArray(index);
        valuesToBeMoved.push(a);

        // go through all objects
        for(let q of allObjects)
        {
            // If the names match filter the expense array to valid expenses.
            if(q.getTime()==index.getTime())
            {
                b = q.getExp().filter(w=>w>a[a.length-1]);
                break;
            }
            else
            {
                continue;
            }
        }

        console.log(index.getTime() + " values that need to change: [" + a + "]\n");
        // Setting the expense array to the new values.
        index.setExp(b);

    }

})();

console.log("\n\n")

// This will print all objects again notice the negative cash flow months expenses arrays have values removed to update them.

console.log("PRINTING ALL OBJECTS. NEGATIVE CASH FLOW MONTHS EXPENSES UPDATED:")
for(let a of allObjects)
{
    console.log("Month: " + a.getTime() + " " + "|Budget: "+ a.getMaxBudget() + " |All Expenses: " + a.sumOfExpenses() + "\nExpenses: [" + a.getExp() + "] " + a.needToMove() + "\n");

}


// This class will create an object for month that need to transfer expenses to a new month.
class Balance
{
    // Constructor assigns each object a name and array of values to transfer, as well as a month to transfer it to.
    constructor(name,values)
    {
        let month;
        let moving = [];
        let movMonth;

        // Setter for month.
        this.setMonth = function(value)
        {
            month = value;

        }

        // setter for the month to move to.
        this.setMovMonth = function(m)
        {
            movMonth = m;
        }

        // Setter for the values to move.
        this.setMov = function(value)
        {
            moving = value;
        }


        // Returns the name of the object.
        this.getName = function()
        {
            return month;
        }


        // Returns the values to move.
        this.getValues = function()
        {
            return moving;
        }

        // Returns the month to move to.
        this.getMovMonth = function()
        {
            return movMonth;
        }

        // Setting the name and values to move.
        this.setMonth(name);
        this.setMov(values);
    }


    // This method will calculate the sum of values that need to be moved.
    sumOfMovables()
    {
        let sum = 0;
        for(let a of this.getValues())
        {
            sum+=a;
        }

        return sum;

    }

    // This function will transfer the values to a positive cash flow month and update that months expenses.
    moveTo()
    {

        for(let index of positiveObj)
        {
            if(this.sumOfMovables()<=index.calculateSpace())
            {
                this.setMovMonth(index.getTime());
                let temp = index.getExp();
                for(let value of this.getValues())
                {
                    temp.push(value);
                }

                index.setExp(temp);
                break;


            }
            else
            {
                continue;
            }
        }

        if(this.getMovMonth()==undefined)
        {
            this.setMovMonth("Values cannot be moved!")
        }

    }
}




// This array will hold all of the Balance objects
let movingObj = [];


// IIFE function that will createa a Balance object for each negative cash flow month.
(function()
{
    for(let i = 0; i<valuesToBeMoved.length;i++)
    {
        movingObj[i] = new Balance(negativeObj[i].getTime(),valuesToBeMoved[i])
    }
})();



console.log("\n")
console.log("OBJECTS VALUES TO MOVE AND THEIR SUM: ")
// This prints out what month needs to moved, the values to move, and their sum
for(let a of movingObj)
{
    console.log(a.getName() + " Values to move:[" + a.getValues() + "]    Sum of values:" + a.sumOfMovables() + "\n");
    a.moveTo();
}


console.log("OBJECTS AND WHICH MONTH THEIR EXPENSES ARE MOVING TO: ")
// This prints out what month each Balance object will move too.
for(let a of movingObj)
{
    console.log(a.getName() + " needs to be moved. " + "  Month moving to: "+ a.getMovMonth());
}

console.log("\n")
console.log("ALL ORIGINAL POSITIVE CASH FLOW MONTHS WITH UPDATED EXPENSES. SEE ABOVE TO SEE WHICH MONTHS EXPENSES CHANGED: ")
// This prints out all of the Positive cash flow months and their expenses. Notice that some have updated expenses.
for(let a of positiveObj)
{
    console.log("Positive cash flow months: " + a.getTime() + "  Expenses: [" + a.getExp()+ "] Space left: " + a.calculateSpace());
}