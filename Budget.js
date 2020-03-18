
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


module.exports = Budget;


