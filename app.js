return (
    tugas * TUGAS_WEIGHT +
    uts * UTS_WEIGHT +
    uas * UAS_WEIGHT
);

function calculateFinalScore(
    tugas,
    uts,
    uas
) {
    return (
        tugas * TUGAS_WEIGHT +
        uts * UTS_WEIGHT +
        uas * UAS_WEIGHT
    );
}

function determineGrade(score) {

    if (score >= 85) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";

    return "E";
}

function displayResult(
    name,
    score,
    grade
) {

    document.getElementById(
        "hasil"
    ).innerHTML = `

        <h3>Hasil Nilai Mahasiswa</h3>

        <p>Nama: ${name}</p>

        <p>Total Nilai: ${score}</p>

        <p>Grade: ${grade}</p>

    `;
}

function processStudentData() {

    const name =
        document.getElementById(
            "nama"
        ).value;

    const tugas =
        Number(
            document.getElementById(
                "tugas"
            ).value
        );

    const uts =
        Number(
            document.getElementById(
                "uts"
            ).value
        );

    const uas =
        Number(
            document.getElementById(
                "uas"
            ).value
        );

    const finalScore =
        calculateFinalScore(
            tugas,
            uts,
            uas
        );

    const grade =
        determineGrade(
            finalScore
        );

    displayResult(
        name,
        finalScore,
        grade
    );
}