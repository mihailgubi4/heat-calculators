import heatCalculator from "./heat-calculator/heat-calculator";
import materialHeatCalculatorWhile from "./calculators/calculator-with-cycle";
import materialHeatCalculatorPhases from "./calculators/calculator-by-phases";

const calculatorModes = {
    'cycle-mode': materialHeatCalculatorWhile,
    'by-phase-mode': materialHeatCalculatorPhases
}
;
Object.keys(calculatorModes).forEach((mode) => {
    console.log(`<<<<<<< Calculator mode: ${mode} >>>>>>>>>\r\n`);
    const waterHeatCalculator = heatCalculator('water', 0, calculatorModes[mode]);

    console.log(waterHeatCalculator(0));
    console.log(waterHeatCalculator(-1));
    console.log(waterHeatCalculator(1));
    console.log(waterHeatCalculator(1));
    console.log(waterHeatCalculator(-1));
    console.log(waterHeatCalculator(5));
    console.log(waterHeatCalculator(-10));
    console.log(waterHeatCalculator(10));
    console.log(waterHeatCalculator(95));
    console.log(waterHeatCalculator(-300));
    console.log(waterHeatCalculator(300));

    console.log(`\r\n<<<<<<< End of calculator mode: ${mode} >>>>>>>>>\r\n\r\n`)
});
