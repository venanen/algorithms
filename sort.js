class Sort {

	/**
	 *
	 * Сортировка массива пузырьком
 	 * @param array - несортированный массив
	 * @returns {array} - сортированный массив
	 */
	static bubbleSort(array) {
		let endSortFlag = false;
		while (!endSortFlag) {
			endSortFlag = true;
			for (let index = 0; index < array.length - 1; index++) { // не .forEach, так как for быстрее.
				if (array[index] > array[index + 1]) {
					endSortFlag = false;
					[array[index], array[index+1]] = [array[index+1], array[index]]; //деструктивное присваивание, свап значений.


				}
			}
		}


		return array;
	}

	/**
	 * Сортировка методом выбора
	 * @param array - несортированный массив
	 * @returns {array} - сортированный массив
	 */
	static selectSort(array) {
		let minValueIndex;
		for (let index = 0; index < array.length - 1; index++) {
			minValueIndex = index;
			for (let i = index + 1; i < array.length; i++) {
				if (array[i] < array[minValueIndex])
					minValueIndex = i;
				[array[minValueIndex], array[index]] = [array[index], array[minValueIndex]];

			}
		}
		return array;
	}

	/**
	 * Сортировка вставками
	 * @param array
	 * @returns {array}
	 */
	insertSort(array){

		array.forEach((item, index) => {
			let insertElement = array[index], j = index - 1;
			while (j >= 0 && array[j] > insertElement) {
				array[j + 1] = array[j];
				j--;
			}
			array[j + 1] = insertElement;

		});

		return array;
	}


	/**
	 * Сортировка по методу  Шелла с приращением 2 на каждом проходе
	 * @param array
	 * @returns {*}
	 */
	static shellSort(array){
		let gap = Math.floor(array.length / 2);
		while (gap >= 1) {
			for (let i = gap; i < array.length; i++) {
				const current = array[i];
				let j = i;
				while (j > 0 && array[j - gap] > current) {
					array[j] = array[j - gap];
					j -= gap;
				}
				array[j] = current;
			}
			gap = Math.floor(gap / 2);
		}
		return array;
	}

	/**
	 * Сортировка подсчета
	 * @param array
	 * @returns {Array}
	 */
	static countSort(array) {
		let n = array.length,
			count = new Array(n).fill(0),
			newArray = [];
		for (let index = 0; index < n - 1; index++) {
			for (let j = index + 1; j < n; j++) {
				if (array[index] < array[j]) count[j]++;
				else count[index]++;
			}
		}
		for (let i = 0; i < n; i++)
			newArray[count[i]] = array[i];
		return newArray;
	}

	/**
	 * сортировка расческой
	 * @param array
	 * @returns {*}
	 */
	static combSort(array) {
		const factor = 1.247;
		let gapFactor = array.length / factor;
		while (gapFactor > 1) {
			const gap = Math.round(gapFactor);
			for (let i = 0, j = gap; j < array.length; i++, j++) {
				if (array[i] > array[j]) {
					[array[i], array[j]] = [array[j], array[i]];
				}
			}
			gapFactor = gapFactor / factor;
		}
		return array;

	}

	/**
	 * сортировка слиянием
	 * @param array
	 * @returns {*}
	 */
	mergeSort(array){
		const merge = (arrFirst, arrSecond) => { // функция объединения двух массивов
			const arrSort = [];
			let index = 0,
				j = 0;

			while (index < arrFirst.length && j < arrSecond.length) {
				arrSort.push( (arrFirst[index] < arrSecond[j]) ? arrFirst[index++] : arrSecond[j++] );
			}
			return [
				...arrSort,
				...arrFirst.slice(index),
				...arrSecond.slice(j)
			];
		};

		if (array.length <= 1) { // конец рекурсии
			return array;
		}
		const middle = Math.floor(array.length / 2);
		const arrayLeft = array.slice(0, middle); // получаем массив, находящийся справа от центрального значения
		const arrayRight = array.slice(middle);  // получаем массив, находящийся слева от центрального значения
		return merge(this.mergeSort(arrayLeft), this.mergeSort(arrayRight)); //массивы разбиваются на два рекурсивно, пока все не станут равны 1 элементу.
	}

	/**
	 * быстрая сортировка
	 * @param array
	 * @returns {*}
	 */
	quickSort(array){
		if (array.length <= 1) {
			return array
		}
		let supporting = array[0], // опорный элемент
			smaller = [], // массив элементов меньше опорного
			bigger = []; // массив элементов больше опорного

		for(let index = 1; index<array.length; index++){
			if(array[index] > supporting)
				bigger.push(array[index]);
			else
				smaller.push(array[index]);

			console.log(bigger, smaller)
		}

		return ([...this.quickSort(smaller), supporting, ...this.quickSort(bigger)])

	}

}

let b = [1, 4, 3, 2];
let a = new Sort();
console.log(a.quickSort(b));