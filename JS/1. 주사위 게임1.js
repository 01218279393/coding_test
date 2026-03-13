function solution(a, b) {
    // 1. a와 b가 모두 홀수인지 확인
    if (a % 2 !== 0 && b % 2 !== 0) {
        return a ** 2 + b ** 2;
    } 
    // 2. a와 b 중 하나만 홀수인지 확인
    else if (a % 2 !== 0 || b % 2 !== 0) {
        return 2 * (a + b);
    } 
    // 3. 모두 홀수가 아닌 경우 (모두 짝수인 경우)
    else {
        return Math.abs(a - b);
    }
}