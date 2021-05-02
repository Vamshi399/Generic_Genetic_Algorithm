(function () {
    var ga = new GeneticAlgorithm(configuration); // Se crea una nueva instancia del algoritmo genetico
    ga.initialize(); // Se inicializa el algoritmo
    var element50 = ga.simulateConditionalGeneration(50); // Se recupera el elemento tras una simulacion de 50 generaciones
    document.getElementById("result1").innerHTML = element50.write(); // Mostrar el resultado
    var element100 = ga.simulateConditionalGeneration(100); // Se recupera el elemento tras una simulacion de 100 generaciones
    document.getElementById("result2").innerHTML = element100.write(); // Mostrar el resultado
    var element200 = ga.simulateConditionalGeneration(200); // Se recupera el elemento tras una simulacion de 100 generaciones
    document.getElementById("result3").innerHTML = element200.write(); // Mostrar el resultado
})();