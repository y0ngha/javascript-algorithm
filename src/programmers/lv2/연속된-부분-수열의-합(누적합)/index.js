//https://school.programmers.co.kr/learn/courses/30/lessons/178870
export function logic(sequence, findNumber) {
    const prefixSum = Array.from({ length: sequence.length }).fill(0);

    let v = sequence.length + 1,
        sIdx = 1,
        eIdx = 1,
        aSIdx = 1,
        aEIdx = 1;

    for (let i = 1; i <= sequence.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + sequence[i - 1];
    }


    while (eIdx <= sequence.length) {
        const check = prefixSum[eIdx] - prefixSum[sIdx - 1];

        if (check < findNumber) {
            eIdx++;
        } else if (check === findNumber) {
            if (v > eIdx - sIdx) {
                v = eIdx - sIdx;
                aSIdx = sIdx;
                aEIdx = eIdx;
            }
            eIdx++;
        } else {
            sIdx++;
        }
    }

    return [aSIdx-1, aEIdx-1];
}
