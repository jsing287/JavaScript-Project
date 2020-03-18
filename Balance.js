

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
    moveTo(obj)
    {

        for(let index of obj)
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

module.exports = Balance;