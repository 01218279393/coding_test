function solution(a, b, c) {
    // Set을 이용해 중복되지 않는 숫자의 개수를 파악합니다.
    const uniqueNumbers = new Set([a, b, c]).size;

    // 각 항의 계산식을 변수로 만들어 가독성을 높입니다.
    const sum1 = a + b + c;
    const sum2 = a ** 2 + b ** 2 + c ** 2;
    const sum3 = a ** 3 + b ** 3 + c ** 3;

    if (uniqueNumbers === 3) {
        // 1. 세 숫자가 모두 다른 경우 (Set 크기가 3)
        return sum1;
    } else if (uniqueNumbers === 2) {
        // 2. 두 숫자가 같은 경우 (Set 크기가 2)
        return sum1 * sum2;
    } else {
        // 3. 세 숫자가 모두 같은 경우 (Set 크기가 1)
        return sum1 * sum2 * sum3;
    }
}