import { ABSOLUTE_ZERO, materials } from "../data-source/config";

export default function materialHeatCalculatorStep (initialTemperature, material) {
    let tCurrent = initialTemperature;

    function getPhase (temperature, phases) {
        return Object.keys(phases).find((phase) => temperature >= phases[phase].start && temperature < phases[phase].end)
    }

    return function (tDelta) {
        if (typeof tDelta !== 'number' || tCurrent + tDelta < ABSOLUTE_ZERO) {
            return 'Invalid temperature data'
        }

        const tNew = tCurrent + tDelta;
        const tStep = tNew > tCurrent ? 1 : -1;
        let resultHeat = 0;

        while (tCurrent !== tNew) {
            const oldPhase = getPhase(tCurrent, materials[material]);
            const newPhase = getPhase(tCurrent + tStep, materials[material]);

            const currentPhase = tStep === 1 ? oldPhase : newPhase;
            const phaseConfig = materials[material][currentPhase];

            if (oldPhase !== newPhase) {
                resultHeat += phaseConfig.transformationHeat * tStep
            }

            tCurrent += tStep;
            resultHeat += phaseConfig.heatPerDegree * tStep
        }

        return { material, tOld: tCurrent - tDelta, tNew: tNew, heat: resultHeat }
    }
}
