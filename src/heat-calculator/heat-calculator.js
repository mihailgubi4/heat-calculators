import { ABSOLUTE_ZERO, materials } from "../data-source/config";

export default function heatCalculator (material, initialTemperature = 0, calculator = () => {}) {
    const errors = [];

    if (initialTemperature < ABSOLUTE_ZERO || typeof initialTemperature !== 'number') {
        errors.push('Invalid initial temperature')
    }

    if (!Object.keys(materials).includes(material)) {
        errors.push('Invalid material')
    }

    if (errors.length) {
        return () => errors
    }

    return calculator(initialTemperature, material)
}
