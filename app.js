var sum1=0;
var sum2=0;
function ForSum(){
	for(var i=1; i<=1000; i++){
		sum1=sum1+i;
	}
	return sum1;
}
function whileSum(){
	var i=1;
	while(i<=1000){
		sum2=sum2+i;
		i++;
	}
	return sum2;
}
console.log("Sum upto 1000 numbers using For Loop: "+ForSum());
console.log("Sum upto 1000 numbers using While Loop: "+whileSum());