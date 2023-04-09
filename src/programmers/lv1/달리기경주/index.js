export function logic(players, callings) {
    const playersMap = new Map();
    const playerIndexesMap = new Map();

    players.map((player, index) => {
        playersMap.set(player, index);
        playerIndexesMap.set(index, player);
    })

    callings.forEach(callingPlayerName => {
        const callingPlayerIndex = playersMap.get(callingPlayerName)
        playersMap.set(callingPlayerName, callingPlayerIndex - 1);

        const swapTargetPlayerName = playerIndexesMap.get(callingPlayerIndex - 1);
        playersMap.set(swapTargetPlayerName, callingPlayerIndex);

        playerIndexesMap.set(callingPlayerIndex - 1, callingPlayerName)
        playerIndexesMap.set(callingPlayerIndex, swapTargetPlayerName)
    })

    const result = [];

    playerIndexesMap.forEach(playerName => {
        result.push(playerName)
    });

    return result;
}
