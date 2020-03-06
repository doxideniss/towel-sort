
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (!Array.isArray(matrix) || !matrix.length) {
        return []
    }

    let arr = []

    matrix.forEach((x, idx) => {
        arr.push(...((idx % 2 === 0) || (idx === 0)) ? x : x.reverse())
    })

    return arr


}
