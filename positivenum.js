let num=10;

function checknumtype(number)
{
    if(number>0)
    {
        return "positive"
    }
    else if(number<0)
    {
        return "negative"

    }
    else
    {
        return "zero"
    }
}
console.log(checknumtype(num))
