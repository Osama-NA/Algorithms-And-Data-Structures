const direction = [
    [-1, 0], 
    [1, 0], 
    [0, -1], 
    [0, 1]
]

const walkMaze = (maze, wall, current, end, seen, path) => {
    // Base cases:
    // 1 - Off the map
    if(current.x < 0 || current.y < 0 || current.x >= maze[0].length || current.y >= maze.length) {
        return false
    }

    // 2 - Hit a wall
    if(maze[current.y][current.x] === wall) {
        return false
    }

    // 3 - At the end (Completed case)
    if(current.x === end.x && current.y === end.y) {
        path.push(end)
        return true
    }

    // 4 - Already seen
    if(seen[current.y][current.x]) {
        return false
    }

    // 3 Steps to recursion
    // Pre-recursion
    seen[current.y][current.x] = true
    path.push(current)

    // Recursion (move through the 4 directions we have)
    for(let i = 0; i < direction.length; ++i){
        const [x, y] = direction[i]
        let walkMazeResult = walkMaze(
            maze, 
            wall, 
            {
                x: current.x + x, 
                y: current.y + y
            }, 
            end, 
            seen,
            path
        )

        if(walkMazeResult) return true
    }

    // Post-recursion
    path.pop()

    return false
}

const solveMaze = (maze, wall, start, end) => {
    const seen = []
    const path = []

    // Set all maze "seen" locations to false(not seen)
    for(let i = 0; i < maze.length; ++i){
        seen.push(new Array(maze[0].length).fill(false))
    }

    walkMaze(maze, wall, start, end, seen, path)

    return path
}

module.exports = solveMaze