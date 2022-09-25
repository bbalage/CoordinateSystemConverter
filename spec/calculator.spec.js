describe("Transformation matrix calculation tests", function () {

    describe("Point match tests 2D", function () {
        it("With first given values...", function () {
            const sourceVectors = [
                [0, 3, 1], [0, 0, 1], [3, 0, 1]
            ];
            const destVectors = [
                [2, 2, 1], [6, 2, 1], [6, 6, 1]
            ];
            const startPoint1 = [6, 0, 1];
            const expectedEndPoint1 = [6, 10, 1];

            const matrix = calculateTransformation(sourceVectors, destVectors);
            console.log(matrix);
            const actualEndPoint1 = math.multiply(matrix, math.transpose(math.matrix(startPoint1)));

            expect(actualEndPoint1.get([0])).toBe(expectedEndPoint1[0]);
            expect(actualEndPoint1.get([1])).toBe(expectedEndPoint1[1]);
        });

    });
});