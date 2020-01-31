import { ABSOLUTE_ZERO, materials } from "../data-source/config";

export default function materialHeatCalculatorPhase (initialTemperature, material) {
    let tCurrent = initialTemperature;

    function calculatePhaseHeat (oldTemp, newTemp, { start, end, heatPerDegree, transformationHeat }) {
        const tStart = Math.min(end, Math.max(oldTemp, start));
        const tEnd = Math.min(end, Math.max(newTemp, start));
        const hasTransformed = end > Math.min(tStart, tEnd) && end <= Math.max(tStart, tEnd);

        const periodHeat = heatPerDegree * (tEnd - tStart);
        const transformHeat = !hasTransformed ? 0 : transformationHeat * (tEnd - tStart < 0 ? -1 : 1);

        return periodHeat + transformHeat
    }

    return function (tDelta) {
        if (typeof tDelta !== 'number' || tCurrent + tDelta < ABSOLUTE_ZERO) {
            return 'Invalid temperature data'
        }

        const phases = Object.keys(materials[material]);
        const resultHeat = phases.reduce((sum, phase) => {
            sum += calculatePhaseHeat(tCurrent, tCurrent + tDelta, materials[material][phase]);
            return sum
        }, 0);

        tCurrent = tCurrent + tDelta;

        return { material, tOld: tCurrent - tDelta, tNew: tCurrent, heat: resultHeat }
    }
}
