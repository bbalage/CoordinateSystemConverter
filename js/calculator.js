let transformationMatrix = math.identity(3);

function calculateFromTextBoxPoints() {
    const text = document.getElementById("textarea").value;
    const vectors = parseInputString(text);
    const transformation = calculateTransformation(vectors[0], vectors[1]);
    const readArea = document.getElementById("readArea");
    readArea.innerText = transformation;
    transformationMatrix = transformation;
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
    let vector = new Array(dimensions + 1);
    for (let i = 0; i < dimensions; ++i) {
        vector[i] = parseFloat(vectorStrs[i]);
    }
    vector[dimensions] = 1.0;
    return vector;
}

function calculateTransformation(sourceVectors, destVectors) {
    const sourceMatrix = math.matrix(sourceVectors);
    const destMatrix = math.matrix(destVectors);
    const sourceMatrixT = math.transpose(sourceMatrix);
    const invSourceMatrix = math.inv(sourceMatrixT);
    const destMatrixT = math.transpose(destMatrix);
    return math.multiply(destMatrixT, invSourceMatrix);
}

function transformInputVector() {
    const text = document.getElementById("vectorInput").value;
    const vector = parseVectorStringArbitraryDimensions(text);
    const vectorMatrix = math.transpose(math.matrix(vector));
    //const columnVector = math.transpose(vectorMatrix);
    const transformedVector = math.multiply(transformationMatrix, vectorMatrix);
    document.getElementById("vectorOutput").innerText = transformedVector;
}

function parseVectorStringArbitraryDimensions(line) {
    const vectorStrs = line.split(";");
    let vector = new Array(vectorStrs.length);
    for (let i = 0; i < vector.length; ++i) {
        vector[i] = parseFloat(vectorStrs[i]);
    }
    return vector;
}