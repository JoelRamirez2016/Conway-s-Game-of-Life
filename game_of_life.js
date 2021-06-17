let cells = function(sqmatrix){
	var n = 0;

	for (var i = 0; i < sqmatrix.length; i++) {
		for (var j = 0; j < sqmatrix[i].length; j++) {
			n += sqmatrix[i][j];
		}
	}
	return n;
}

let nextStateGame = function(sqmatrix){
	var adjacents
	var cp_matrix = sqmatrix.map(function(arr) {
    	return arr.slice();
	});

	for (var y = 0; y < sqmatrix.length; y++) {
		for (var x = 0; x < sqmatrix.length; x++) {
			adjacents = adjacentsCells(sqmatrix, x, y, sqmatrix.length);

			if (adjacents < 2 || adjacents > 3)
				cp_matrix[y][x] = 0;
			else if (adjacents == 3)
				cp_matrix[y][x] = 1;
		}
	}
	return cp_matrix;
}

let createRandomGameGrid = function(size){
	matrix = new Array();

	for (var i = 0; i < size; i++) {
		matrix[i] = new Array();

		for (var j = 0; j < size; j++) {
			matrix[i][j] = Math.floor(Math.random() * 2);
		}
	}
	return matrix;
}

let adjacentsCells = function(sqmatrix, x, y)  {
	var adjacents = 0;
	var i = y - 1;
	var j;

	for (var timesy = 0; timesy < 3; timesy++, i++){
		if (i >= 0 && i < sqmatrix.length)
		{	
			j = x - 1
			for (var timesx = 0; timesx < 3; timesx++, j++) {
				if ((i != y || j != x) && j >= 0 && j < sqmatrix.length && sqmatrix[i][j])
					adjacents++;
			}
		}
	}

	return adjacents;
}
