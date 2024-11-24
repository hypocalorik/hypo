function calculateAll() {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert to meters

    // Métabolisme Basal
    let MB = gender === "male"
        ? 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age)
        : 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);

    // IMC
    const BMI = weight / (height * height);

    // Fourchette de Poids Idéal
    const weightMin = 18.5 * (height * height);
    const weightMax = 24.9 * (height * height);

    // Hydratation
    const hydration = 0.033 * weight;

    // Résultats
    alert(`
        Résultats pour ${name} :
        - Métabolisme Basal : ${MB.toFixed(2)} kcal/jour
        - IMC : ${BMI.toFixed(2)} (${BMI < 18.5 ? "Insuffisance pondérale" : BMI > 24.9 ? "Surpoids" : "Poids normal"})
        - Fourchette de Poids Idéal : ${weightMin.toFixed(1)} kg à ${weightMax.toFixed(1)} kg
        - Hydratation : ${hydration.toFixed(2)} L/jour
    `);
}
