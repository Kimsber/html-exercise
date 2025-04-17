function getBmi(height, weight) {
    const bmi = weight / (height / 100) ** 2;
    //console.log(bmi.toFixed(2));

    return bmi.toFixed(2);
}

function getComment(bmi) {
    let comment, color;
    if (bmi < 18.5) {
        comment = "體重過輕，需多攝取均衡營養並養成運動習慣";
        color = "rgb(85, 240, 240)";
    } else if (bmi < 24) {
        comment = "體重健康，繼續保持";
        color = "green";
    } else if (bmi < 27) {
        comment = "體重過重，須注意攝食並多運動";
        color = "yellow";
    } else {
        comment = "肥胖，應諮詢醫生進行健康管理";
        color = "orange";
    }
    return [comment, color];
}