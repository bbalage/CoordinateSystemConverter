
function calculateFromTextBoxPoints() {
    const text = document.getElementById("textarea").value;
    const vectors = parseInputString(text);
    const transformation = calculateTransformation(vectors[0], vectors[1]);
    const readArea = document.getElementById("readArea");
    readArea.innerText = transformation;
}

function parseInputString(text) {
    const lines = text.split("\n");
    const dimensions = parseInt(lines[0]);
    let sourceVectors = new Array(dimensions + 1);
    for (let i = 0; i < dimensions + 1; ++i) {
        let lineI = i + 1;
        let vector = parseVectorString(lines[lineI], dimensions);
        sourceVectors[i] = vector;
    }
    let destVectors = new Array(dimensions + 1);
    for (let i = 0; i < dimensions + 1; ++i) {
        let lineI = i + dimensions + 1 + 1;
        let vector = parseVectorString(lines[lineI], dimensions);
        destVectors[i] = vector;
    }
    return [sourceVectors, destVectors];
}

function parseVectorString(line, dimensions) {
    const vectorStrs = line.split(";");
    if (vectorStrs.length !== dimensions) {
        throw new Error("Parse error. Dimension missmatch!");
    }
    let vector = new Array(dimensions);
    for (let i = 0; i < dimensions; ++i) {
        vector[i] = parseFloat(vectorStrs[i]);
    }
    return vector;
}

function calculateTransformation(sourceVectors, destVectors) {
    const dimensions = sourceVectors.length;
    // let arrayOfOnes = new Array(dimensions);
    // for (let element of arrayOfOnes)
    //     element = 1;
    let sourceMatrix = math.zeros(dimensions, dimensions);
    for (let row = 0; row < dimensions; ++row)
        for (let col = 0; col < dimensions; ++col)
            sourceMatrix.set([row, col], sourceVectors[row][col] !== undefined ? sourceVectors[row][col] : 1);
    const destMatrix = math.matrix(destVectors);
    const invSourceMatrix = math.inv(sourceMatrix);
    return math.multiply(destMatrix, invSourceMatrix);
}