function solution(l, r) {
    const answer = [];

    for (let i = l; i <= r; i++) {
        // 숫자를 문자열로 변환한 뒤, 배열로 만들어 모든 요소가 '0' 또는 '5'인지 확인
        const isEveryZeroOrFive = [...String(i)].every(char => char === '0' || char === '5');

        if (isEveryZeroOrFive) {
            answer.push(i);
        }
    }

    // 배열이 비어있으면 [-1], 값이 있으면 오름차순 배열 반환
    return answer.length === 0 ? [-1] : answer;
}