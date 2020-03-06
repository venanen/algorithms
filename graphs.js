class Graph{

	/**
	 * Поиск кратчайшего пути по алгоритму Дейкстра. Матрица должна быть NxN, однако используется часть справа и сверху от нулевой диагонали
	 * @param matrix
	 * @returns {int array[][]}
	 *
	 */
	dijkstra(matrix){
		if(matrix[0].length !== matrix.length)
			throw new Error("Матрица не квадратична")

		let matrixOneDirectionSize = matrix[0].length;
		let weightMatrix = new Array(matrixOneDirectionSize).fill(Infinity);
		weightMatrix[0] = 0;

		for(let i = 0; i<matrixOneDirectionSize; i++){
			for(let j = i; j<matrixOneDirectionSize; j++){
				if(matrix[i][j] === -1)
					continue;
				if(weightMatrix[j] > matrix[i][j]+weightMatrix[i])
					weightMatrix[j] = matrix[i][j]+weightMatrix[i]
			}
		}
		return weightMatrix;
	}

	// bfSearch(matrix, searchValue){ //с числами
	// 	let levelSearchIndex = 0;
	// 	let path = [[]];
	// 	let recursionSearch = (level)=>{
	// 		for(let i = level; i<matrix.length; i++){
	// 			path[level].push(i)
	// 			if(matrix[level][i] !== -1){
	// 				if(matrix[level][i] === searchValue){
	// 					return path;
	// 				}else{
	// 					recursionSearch(i);
	// 				}
	// 			}
	//
	// 		}
	// 	}
	//
	//
	// }

	bfSearch(matrix, searchValue){
		let level;
		//console.log(matrix[Object.keys(matrix)[0]])
		let path = []
		let visitedNode = [Object.keys(matrix)[0]];
		let recursionSearch = (level)=>{
			for(let i = 0; i<matrix[level].length; i++){
				console.log(visitedNode)
				if(visitedNode.includes(matrix[level][i]))
					continue;
				if(matrix[level][i] === searchValue)
					return matrix[level][i];
				visitedNode.push(level+0);
				path[level] = level+"->"+i;
				console.log("Visited node "+level+". Next node is: "+matrix[level][i]);
				recursionSearch(matrix[level][i]);
			}
		}
		return recursionSearch(Object.keys(matrix)[0]);

	}


}















let graph = new Graph();


/* Тесты
let matrix = [
	[0,1,4,-1,-1,-1,-1,-1],
	[1,0,5,-1,3,-1,-1,-1],
	[4,5,0,9,-1,1,-1,-1],
	[-1,-1,9,0,-1,-1,8,-1],
	[-1,5,-1,-1,0,-1,-1,2],
	[-1,-1,1,-1,-1,0,12,6],
	[-1,-1,-1,8,-1,12,0,10],
	[-1,-1,-1,-1,2,6,10,0]
];
console.log(graph.dijkstra(matrix));



// matrix = [
// 	    /*A,B,C,D*/
// /*A*/ 	[0,4,2,-1],
// /*B*/	[4,0,6,-1],
// /*C*/	[2,6,0,3],
// /*D*/	[3,-1,-1,0]
// ]
//console.log(graph.dijkstra(matrix));

let matrix = 	{
		1: [4,6],
		4: [1,6,8],
		6: [4,1,8],
		8: [4,6]
	}

console.log(graph.bfSearch(matrix, 8));



module.export = graph;