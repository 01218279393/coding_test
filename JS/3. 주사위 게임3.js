function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    const counts = new Map();

    // 1. 각 숫자의 빈도수 계산
    for (const num of dice) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    // 빈도수 순서대로 정렬 (많이 나온 숫자 우선)
    const sortedCounts = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    const size = counts.size;

    if (size === 1) {
        // 1. 네 숫자가 모두 같음
        const [p, count] = sortedCounts[0];
        return 1111 * p;
    }

    if (size === 2) {
        const [p, pCount] = sortedCounts[0];
        const [q, qCount] = sortedCounts[1];

        if (pCount === 3) {
            // 2. 세 숫자가 p로 같고 하나가 q
            return (10 * p + q) ** 2;
        } else {
            // 3. 두 개씩 p, q로 같음
            return (p + q) * Math.abs(p - q);
        }
    }

    if (size === 3) {
        // 4. 두 개는 p로 같고 나머지는 q, r
        // 정렬했으므로 가장 많이 나온(2번) p는 sortedCounts[0]에 있음
        const q = sortedCounts[1][0];
        const r = sortedCounts[2][0];
        return q * r;
    }

    // 5. 네 숫자가 모두 다름 (size === 4)
    return Math.min(...dice);
}