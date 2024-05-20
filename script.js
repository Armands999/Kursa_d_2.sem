const canvas = document.getElementById("zīmēšanasLaukums");
const ctx = canvas.getContext("2d");

function uzzimet() {
    const figurasTips = document.getElementById("figurasTips").value;
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const radiuss = parseFloat(document.getElementById("radiuss").value);
    const augstums = parseFloat(document.getElementById("augstums").value);

    let krasuIzvele;
    if (document.getElementById("krasuIzveleSarkana").checked) {
        krasuIzvele = "#FF0000";
    } else if (document.getElementById("krasuIzveleZala").checked) {
        krasuIzvele = "#00FF00";
    } else if (document.getElementById("krasuIzveleZila").checked) {
        krasuIzvele = "#0000FF";
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (figurasTips === "aplis") {
        ctx.beginPath();
        ctx.arc(x, y, radiuss, 0, 2 * Math.PI);
        ctx.fillStyle = krasuIzvele;
        ctx.fill();
    } else if (figurasTips === "taisnsturis") {
        ctx.fillStyle = krasuIzvele;
        ctx.fillRect(x, y, radiuss, augstums);
    }
}



function Deva() {
    const svars = parseFloat(document.getElementById("svars").value);
    const devaUzKg = parseFloat(document.getElementById("devaUzKg").value);
    const deva = svars * devaUzKg;

    document.getElementById("aprēķinātāDeva").value = deva.toFixed(2);
  }