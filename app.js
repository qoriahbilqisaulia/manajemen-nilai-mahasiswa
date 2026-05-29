function calculateFinalScore(tugas, uts, uas) {

    return (tugas * 0.3) +
           (uts * 0.3) +
           (uas * 0.4);

}

function determineGrade(total) {

    if (total >= 85) return "A";
    if (total >= 70) return "B";
    if (total >= 60) return "C";
    if (total >= 50) return "D";

    return "E";
}

function proses() {

    let nama = document.getElementById("nama").value;

    let tugas = parseInt(
        document.getElementById("tugas").value
    );

    let uts = parseInt(
        document.getElementById("uts").value
    );

    let uas = parseInt(
        document.getElementById("uas").value
    );

    let total =
        calculateFinalScore(
            tugas,
            uts,
            uas
        );

    let grade =
        determineGrade(total);

    document.getElementById("hasil").innerHTML =
        "Nama: " + nama +
        "<br>Total: " + total +
        "<br>Grade: " + grade;
}