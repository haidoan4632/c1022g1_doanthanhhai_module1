function kiem_tra() {
    let can_nang = document.getElementById("cannang").value;
    let chieu_cao = document.getElementById("chieucao").value;
    let bmi = can_nang / (chieu_cao*chieu_cao);
    if (bmi < 18)
    document.getElementById("bmi").value = 'Underweight';
    else if (bmi < 25.0)
        document.getElementById("bmi").value = 'Normal';
    else if (bmi < 30.0)
        document.getElementById("bmi").value = 'Overweight';
    else
        document.getElementById("bmi").value = 'Obese';
}