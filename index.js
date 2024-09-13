function getpoint() {
    let m = +document.getElementById('math').value;
    let l = +document.getElementById('literature').value;
    let e = +document.getElementById('english').value;
    let avg = (m + l + e) / 3;
    let content = `Điểm trung bình của bạn là: ${avg}`;
    if (avg < 5) {
        content += ' - không đạt';
    } else {
        if (avg <= 7) {
            content += ' - đạt';
        } else {
            if (avg <8) {
                content += ' - khá';
            } else {
                if (avg <9) {
                    content += ' - tốt';
                } else {
                    content += ' - xuất sắc'
                }
            }
        }
    }
    document.getElementById('result').innerHTML = content;
}
function reset() {
    document.getElementById('math').value = "";
    document.getElementById('literature').value = "";
    document.getElementById('english').value = "";
    document.getElementById('result').innerText = "Điểm trung bình của bạn là:";
    document.getElementById('math').focus();
}