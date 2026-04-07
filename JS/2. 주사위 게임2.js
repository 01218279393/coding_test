function solution(a, b, c) {
    const uniqueNumbers = new Set([a, b, c]).size;

    const sum1 = a + b + c;
    const sum2 = a ** 2 + b ** 2 + c ** 2;
    const sum3 = a ** 3 + b ** 3 + c ** 3;

    if (uniqueNumbers === 3) {
        return sum1;
    } else if (uniqueNumbers === 2) {
        return sum1 * sum2;
    } else {
        return sum1 * sum2 * sum3;
    }
}