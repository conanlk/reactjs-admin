export function findIndex(value, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]['id'] === value) {
            return i;
        }
    }
    return -1; 
}

export function gen4() {
    return Math.random().toString(16).slice(-4)
}

export function UniqueId() {
    return gen4() + gen4() + gen4() + gen4() + gen4() + gen4();
}