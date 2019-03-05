import { expect } from "chai"
import Lagrange from "../src/lagrnage_oop"
import data from "../src/dataset";

describe("Lagrange Test", () => {

    describe(`valueOf function data: ${JSON.stringify(data.points)}`, () => {
        it(`Should return 2 for given dataset and L(3)`, () => {
            const lagrange = new Lagrange(data.points);
            expect(lagrange.valueOf(3)).to.equal(2);
        });

        it(`Should return 1 for given dataset and L(1)`, () => {
            const lagrange = new Lagrange(data.points);
            expect(lagrange.valueOf(1)).to.equal(9)
        });

        it(`Should return 13 for given dataset and L(8)`, () => {
            const lagrange = new Lagrange(data.points);
            expect(lagrange.valueOf(8)).to.equal(13)
        });
    })

});
