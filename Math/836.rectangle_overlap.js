var isRectangleOverlap = function (rec1, rec2) {
	let [x1,y1,x2,y2] = rec1;
	let [a1,b1,a2,b2] = rec2;

    // make sure that there is some overlap on the x-axis
	if(a1>=x2 || a2<=x1) return false;  
    
    // make sure that there is some overlap on the y-xais
	if(b1>=y2 || b2<=y1) return false;  

	// by this point there is overlap on both the x-axis and the y-axis.
	return true;
}