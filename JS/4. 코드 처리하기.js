function solution(code) {
    let ret = '';
    let mode = 0;

    for (let idx = 0; idx < code.length; idx++) {
        const char = code[idx];

        if (char === "1") {
            mode = mode === 0 ? 1 : 0;
        } else {
            if (mode === 0 && idx % 2 === 0) {
                ret += char;
            } else if (mode === 1 && idx % 2 !== 0) {
                ret += char;
            }
        }
    }

    return ret === '' ? "EMPTY" : ret;
}