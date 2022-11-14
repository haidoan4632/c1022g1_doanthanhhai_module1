let year = parseInt(prompt('nhap vao nam'));
if (year %4 == 0){
    if (year %100==0){
        if (year%400 ==0){
            alert(year + " đây là năm nhuận");
        } else { alert(year +"đây không phải năm nhuận")}}
        else {
            alert(year +"đây là năm nhuận");
        }}
        else {
            alert(year +"đây không là năm nhuận")

}