import { decodedResistorValue } from "./resistor-color-trio";

describe("Resistor Colors", () => {
    it("Black and Brown and Red", () => {
        expect(decodedResistorValue(["black", "brown", "red"])).toBe("100 ohms")
    })
    it("Black and Brown", () => {
        expect(decodedResistorValue(["black", "brown", "red"])).toBe("100 ohms")
    })
})

