function solution(code) {
    let ret = '';
    let mode = 0;

    for (let idx = 0; idx < code.length; idx++) {
        const char = code[idx];

        if (char === "1") {
            // mode 전환 (0이면 1로, 1이면 0으로)
            mode = mode === 0 ? 1 : 0;
        } else {
            // mode가 0일 때 짝수 인덱스 체크, mode가 1일 때 홀수 인덱스 체크
            if (mode === 0 && idx % 2 === 0) {
                ret += char;
            } else if (mode === 1 && idx % 2 !== 0) {
                ret += char;
            }
        }
    }

    // 결과가 빈 문자열이면 "EMPTY", 아니면 ret 반환
    return ret === '' ? "EMPTY" : ret;
}