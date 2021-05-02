# geneticAlgorithm.js
geneticAlgorithm.js is a script to make easy the creation and reuse of generic genetic algorithms, it allows to use a standard configuration or own functions created by the user.

![Genetics](https://drive.google.com/uc?export=download&id=0Bz4LuIzp5T_ZejhaUHVIV1M0Slk)

## Introduction
### What is a genetic algorithm?
The genetic algorithm is a method for solving both constrained and unconstrained optimization problems that is based on natural selection, the process that drives biological evolution.
### What are they used for?
You can apply the genetic algorithm to solve a variety of optimization problems that are not well suited for standard optimization algorithms, including problems in which the objective function is discontinuous, nondifferentiable, stochastic, or highly nonlinear
### How do they work?
The genetic algorithm repeatedly modifies a population of individual solutions. At each step, the genetic algorithm selects individuals at random from the current population to be parents and uses them to produce the children for the next generation. Over successive generations, the population "evolves" toward an optimal solution. You can apply the genetic algorithm to solve a variety of optimization problems that are not well suited for standard optimization algorithms, including problems in which the objective function is discontinuous, nondifferentiable, stochastic, or highly nonlinear. The genetic algorithm can address problems of mixed integer programming, where some components are restricted to be integer-valued.

![Process](http://www.pohlheim.com/Papers/mpga_gal95/fig1.gif)

## Architecture of the project

##### Folder Structure

The project is organized in a simple way, so that anyone can use or contribute

* Readme.md: The text you are reading rigth now.
* GPL.txt: General Public License.
* index.html: You can see here an example of use.
* js/: Javascript files and Json for configuration
* app.js: Declaration of variables and modification of the DOM to see the results
* configuration.json: configuration for genetic algorithm
* geneticAlgorithm.js: It contains the bulk of the application. The three main classes, GeneticAlgorithm, Element and Functions.
* doc/: Full documentation generated with JSDoc in English and Spanish

![Folder Structure](https://drive.google.com/uc?export=download&id=0Bz4LuIzp5T_ZSnYyVC1SdjdzNEU)

##### Class Diagram

* Element: It represents an element of the population (or phenotype)
* Functions: It is a library of functions to be used by the genetic algorithm and some auxiliary functions. For example "rouletteWheeelSelection" today is the only selection function implemented. But the idea is to develop more in the future and can make isolated functions to be used without affecting the rest of the algorithm.
* GeneticAlgorithm: It represents a complete genetic algorithm. Receives as a parameter a configuration in which functions that are used to simulate the evolution process are specified. It also has some auxiliary functions.

![Class Diagram](https://drive.google.com/uc?export=download&id=0Bz4LuIzp5T_ZRW8xMGpmX1FabW8)


## Getting Started
If you copy javascript files into ```/js``` folder as it appears on our directory structure. You only need to add this at the end of the ````<body>````
```html
<body>
    <!-- Div to display results-->
    <div id="result"></div>
    <script src="js/geneticAlgorithm.min.js"></script>
    <script src="js/configuration.json"></script>
    <script src="js/app.js"></script>
</body>
```
You can use this standard configuration or change as you want. The default fitnessFunction calculates the fitness depending on of the number of "1" in the chromosome. You must change it to your own goals. We recommend changing the parameters and fitnessFunction but not other functions if you are not an advanced user. 
```javascript
//configuration.json
 configuration = { // variable "configuration" to be used by the genetic algorithm
     "chromosomeSize": 30, 
     "popSize": 50, 
     "repeated": true, 
     "percentMutation": 2, 
     "percentCrossOver": 75,
     "genes": ["A", "C", "1"], 
     "isValid": new Functions().isValid, 
     "fitnessFunction": new Functions().fitnessFunction, // change it for your own function. It must recive a element of Element type as a parameter. See documentation for details.
     "initialization": new Functions().initialization, 
     "evaluation": new Functions().evaluate, 
     "selection": new Functions().rouletteWheelSelection, 
     "crossover": new Functions().crossover, 
     "mutation": new Functions().mutation,
     "evolution": new Functions().evolution 
 };
````
A simple example of use
```javascript
//app.js
 (function () {
    var ga = new GeneticAlgorithm(configuration); // a instance of the algorithm is declared
    ga.initialize(); // It is initialized
    var element = ga.simulateConditionalGeneration(50); // The best element after 50 generations is calculated
    document.getElementById("result").innerHTML = element.write(); // The element is displayed in a div with id "result"
})();
````
## Usage
### Conditional Simulations
An instance of GeneticAlgortihm has the next functions to simulate processes depending on your goal. They return the best element obtained in the simulation
```javascript
simulateConditionalGeneration(finalGeneration)
simulateConditionalTime(finalTime)
simulateConditionalFitness(finalFitness)
```
### Functions
You also can change standard functions. For example if you dont want to use  ```rouletteWheelSelection``` you can implement your own ```tournamentSelection``` or whatever you want. You just have to create your function following interface instruccions (in the documentation) and select it in the configuration.json file.
