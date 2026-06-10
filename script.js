function calcularEconomia(){

```
let litros = Number(document.getElementById("litros").value);

if(litros <= 0 || isNaN(litros)){
    document.getElementById("resultado").innerHTML =
    "Digite um valor válido.";
    return;
}

let economiaAnual = litros * 365;

document.getElementById("resultado").innerHTML =
"Economia estimada em um ano: <strong>" +
economiaAnual.toLocaleString('pt-BR') +
" litros de água.</strong>";
```

}

