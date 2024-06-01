document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
   
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Por favor, ingrese valores válidos para el peso y la estatura.");
        return;
    }
    const bmi = weight / (height ** 2);
    const category = getBmiCategory(bmi);
   
    document.getElementById('bmiValue').textContent = bmi.toFixed(2);
    document.getElementById('bmiCategory').textContent = category;
    document.getElementById('result').style.display = 'block';
});

function getBmiCategory(bmi) {
    if (bmi < 18.5) {
        return 'Bajo peso, come más.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Peso normal, mantente así.';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Sobrepeso, haz más ejercicio.';
    } else {
        return 'Obesidad, ten cuidado.';
    }
}q