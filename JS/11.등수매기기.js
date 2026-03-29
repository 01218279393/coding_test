function solution(score) {
    const sums = score.map(s => s[0] + s[1]);
    const sorted = [...sums].sort((a, b) => b - a);

    return sums.map(s => sorted.indexOf(s) + 1);
}