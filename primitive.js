let username="vijay";
let organization="ABC LTD";
const contactnumber=7845375312;
let knowautomation=true;
let usesplaywright;
console.log("Employee Name =" +username +" " +typeof(username))
console.log(`Employee Organization: ${organization} \t data type : ${typeof organization}`)
console.log(`Employee contactno : ${contactnumber} \t data type : ${typeof contactnumber}`)
console.log(`Employee knowsautomation : ${knowautomation} \t data type : ${typeof knowautomation}`)
console.log(`Employee usesplaywright : ${usesplaywright} \t data type : ${typeof usesplaywright}`)

let empname="dilip"
let targetchar='i'
let count=0
for(let i=0;i<empname.length;i++)
{
if(empname.charAt(i)==targetchar)
    {
        count++
    }
}

console.log(count)