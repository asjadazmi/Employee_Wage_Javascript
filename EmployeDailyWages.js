const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const WAGE_PER_HOURS=20;
const FULL_TIME_HOURS=8;
let empHrs=0;
 empCheck1=Math.floor(Math.random()*10)%3;
switch(empCheck1){
    case IS_PART_TIME:
        empHrs= PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs= FULL_TIME_HOURS;
        break;
    default:
        empHrs= 0;    
}
let empWage=empHrs*WAGE_PER_HOURS;
console.log("Emp Wage: "+empWage)
