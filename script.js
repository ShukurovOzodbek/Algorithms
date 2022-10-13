const RomeToArab = (s) => {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const first = map[s[i]];
        const second = map[s[i + 1]]
        if (first < second) {
            i++
            result += second - first;
        } else {
            result += first;
        }
    }
    return result;
}
// console.log(RomeToArab('MIV'))

function MinusZero(x) {
    if (x < 0) {
        return false
    }
    else if(x === 0) {
        if (x === 0 && (1 / x) === -Infinity) return false
        else return true
    }
    else if (x > 0) {
        return true
    }
}

console.log(MinusZero(-4)); // false
console.log(MinusZero(-3)); // false
console.log(MinusZero(-2)); // false
console.log(MinusZero(-1)); // false
console.log(MinusZero(-0)); // false
console.log(MinusZero(0)); // true
console.log(MinusZero(1)); // true
console.log(MinusZero(2)); // true
console.log(MinusZero(3)); // true
console.log(MinusZero(4)); // true