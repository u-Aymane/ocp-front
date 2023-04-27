export default function csvToArray(file, cb) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const text = e.target.result;
        const data = convertCSV(text);
        cb(data);
    };
    reader.readAsText(file);
}

function convertCSV(str) {
    // slice from start of text to the first \n index
    // use split to create an array from string by delimiter
    const firstColumn = str.slice(0, str.indexOf("\n"));
    const delimiter = getDelimiter(firstColumn);
    const headers = firstColumn.split(delimiter);

    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    // Map the rows
    // split values from each row into an array
    // use headers.reduce to create an object
    // object properties derived from headers:values
    // the object passed as an element of the array
    const arr = rows.map(function (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function (object, header, index) {
            object[header] = values[index];
            return object;
        }, {});
        return el;
    });

    // return the array
    return arr;
}

function getDelimiter(row) {
    const delimiters = [",", ";", "|", "\t", " "];
    const arr = delimiters.map((delimiter) => {
        return {
            delimiter,
            count: row.split(delimiter).length,
        };
    });
    let delimiter = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].count > delimiter.count) {
            delimiter = arr[i];
        }
    }
    return delimiter.delimiter;
}
