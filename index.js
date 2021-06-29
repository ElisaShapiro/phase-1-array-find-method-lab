function superbowlWin(win) {
    let winningYear = win.find((win) => win.result === "W");
    if (winningYear) {
        return winningYear.year;
    } else {
        return 
    }
}
superbowlWin(record);
