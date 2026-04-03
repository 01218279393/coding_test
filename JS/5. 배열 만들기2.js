function solution(l, r) {
    const answer = [];

    for (let i = l; i <= r; i++) {
        const isEveryZeroOrFive = [...String(i)].every(char => char === '0' || char === '5');

        if (isEveryZeroOrFive) {
            answer.push(i);
        }
    }

    return answer.length === 0 ? [-1] : answer;
}