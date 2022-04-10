const superbowlWin = (record) => {
    let findWin = record.find(
        (obj) => {
            if (obj.result === `W`) {
                return obj.year;
            }
        }
    )
    if (findWin === undefined) {
        return findWin;
    } else {
        return findWin.year;
    }
}
