function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    const counts = new Map();

    for (const num of dice) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    const sortedCounts = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    const size = counts.size;

    if (size === 1) {
        const [p, count] = sortedCounts[0];
        return 1111 * p;
    }

    if (size === 2) {
        const [p, pCount] = sortedCounts[0];
        const [q, qCount] = sortedCounts[1];

        if (pCount === 3) {
            return (10 * p + q) ** 2;
        } else {
            return (p + q) * Math.abs(p - q);
        }
    }

    if (size === 3) {
        const r = sortedCounts[2][0];
        return q * r;
    }

    return Math.min(...dice);
}