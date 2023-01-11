// code your solution here
function superbowlWin(records) {
    const firstWinningRecord = records.find(record => record.result === "W");
    if(typeof firstWinningRecord === "undefined") {
        return firstWinningRecord;
    }
    return firstWinningRecord.year;
}