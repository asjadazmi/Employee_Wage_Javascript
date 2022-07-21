const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const WAGE_PER_HOURS=20;
const FULL_TIME_HOURS=8;
const NUM_OF_WORKING_DAYS=20;
 function getWorkingHours(empCheck1){
    switch(empCheck1){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;    
    }
}

let empHrs=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    empCheck1=Math.floor(Math.random()*10)%3;
    empHrs+=getWorkingHours(empCheck1);

}

let empWage=empHrs*WAGE_PER_HOURS;
console.log("Total hrs: "+empHrs+", Emp Wage: "+empWage)
