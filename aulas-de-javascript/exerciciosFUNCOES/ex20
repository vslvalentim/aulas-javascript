const calcularGasto = (salarios) => {
    let gastoTotal = 0;

    for (const salario of salarios) {
        gastoTotal += salario < 2000 ? salario * 1.1 : salario;
    }

    return gastoTotal;
};

console.log(calcularGasto([1500, 2000, 2500]));