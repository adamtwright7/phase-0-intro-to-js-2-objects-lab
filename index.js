let employee = {name: "sample name", streetAddress: "sample address"};

function updateEmployeeWithKeyAndValue(object,key,value) {
    return {...object, [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value) {
    object[key] = value;
    return object
}

function deleteFromEmployeeByKey(object,key) {
    let newObject = {...object};
    delete newObject[key]
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(object,key) {
    delete object[key]
    return object 
}

