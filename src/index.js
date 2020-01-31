import heatCalculator from "./heat-calculator/heat-calculator";
import materialHeatCalculatorStep from "./calculators/calculator-by-step";
import materialHeatCalculatorPhase from "./calculators/calculator-by-phase";

const calculatorModes = {
    'by-step-mode': materialHeatCalculatorStep,
    'by-phase-mode': materialHeatCalculatorPhase
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
