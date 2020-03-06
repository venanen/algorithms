class Graph{

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


}






// let matrix = [
// 	    /*A,B,C,D*/
// /*A*/ 	[0,4,2,-1],
// /*B*/	[4,0,6,-1],
// /*C*/	[2,6,0,3],
// /*D*/	[3,-1,-1,0]
// ]

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

let a = new Graph();
console.log(a.dijkstra(matrix));
//console.log(1>Infinity)


