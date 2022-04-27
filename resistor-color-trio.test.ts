import { decodedResistorValue } from "./resistor-color-trio";

describe("Resistor Colors", () => {
    it("Black and Brown and Red", () => {
        expect(decodedResistorValue(["black", "brown", "red"])).toBe("100 ohms")
    })
    it("Violet and Black and Yellow", () => {
        expect(decodedResistorValue(["violet", "black", "yellow"])).toBe("700 kiloohms")
    })
})

