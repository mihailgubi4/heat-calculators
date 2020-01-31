export const ABSOLUTE_ZERO = -273;

export const materials = {
    water: {
        solid: {
            start: -273,
            end: 0,
            heatPerDegree: 2.7,
            transformationHeat: 400
        },
        liquid: {
            start: 0,
            end: 100,
            heatPerDegree: 4.2,
            transformationHeat: 200
        },
        gas: {
            start: 100,
            end: Infinity,
            heatPerDegree: 2.8,
            transformationHeat: 0
        }
    },
    iron: {
        solid: {
            start: -273,
            end: 514,
            heatPerDegree: 1.2,
            transformationHeat: 100
        },
        liquid: {
            start: 514,
            end: 1320,
            heatPerDegree: 2.1,
            transformationHeat: 200
        },
        gas: {
            start: 1320,
            end: Infinity,
            heatPerDegree: 2.7,
            transformationHeat: 0
        }
    },
    nitrogen: {
        solid: {
            start: -273,
            end: -214,
            heatPerDegree: 1.1,
            transformationHeat: 200
        },
        liquid: {
            start: -214,
            end: -198,
            heatPerDegree: 2.1,
            transformationHeat: 500
        },
        gas: {
            start: -198,
            end: Infinity,
            heatPerDegree: 3.3,
            transformationHeat: 0
        }
    }
};
