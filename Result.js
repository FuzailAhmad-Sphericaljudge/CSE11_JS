function calculateResult() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);

    if(name === "" || roll === "") {
        alert("Please enter Name and Roll Number");
        return;
    }

    let total = s1 + s2 + s3 + s4;
    let percentage = total / 4;

    let grade;

    if(percentage >= 90)
        grade = "A+";
    else if(percentage >= 80)
        grade = "A";
    else if(percentage >= 70)
        grade = "B";
    else if(percentage >= 60)
        grade = "C";
    else if(percentage >= 50)
        grade = "D";
    else
        grade = "F";

    let status =
        (s1 >= 33 && s2 >= 33 && s3 >= 33 && s4 >= 33)
        ? "PASS"
        : "FAIL";

    let resultBox = document.getElementById("result");

    resultBox.style.display = "block";

    resultBox.innerHTML = `
        <h2>Marksheet</h2>
        <hr><br>
        <p><b>Name:</b> ${name}</p>
        <p><b>Roll No:</b> ${roll}</p>
        <p><b>Total:</b> ${total}/400</p>
        <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
        <p><b>Grade:</b> ${grade}</p>
        <p class="${status === 'PASS' ? 'pass' : 'fail'}">
            <b>Result:</b> ${status}
        </p>
    `;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("sub1").value = "";
    document.getElementById("sub2").value = "";
    document.getElementById("sub3").value = "";
    document.getElementById("sub4").value = "";

    document.getElementById("result").style.display = "none";
}