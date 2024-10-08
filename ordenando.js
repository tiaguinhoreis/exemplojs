// Função swap para trocar valores de duas posições em um vetor
const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
};

// Função shuffle para embaralhar elementos de um vetor
const shuffle = (array, swaps) => {
    for (let i = 0; i < swaps; i++) {
        let pos1 = Math.floor(Math.random() * array.length);
        let pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};

// Função bubble_sort para ordenar o vetor
const bubble_sort = (array) => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

// Função selection_sort para ordenar o vetor
const selection_sort = (array) => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};

// Função particionamento para o algoritmo quick_sort
const particionamento = (array, start, end) => {
    let pivot = array[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, end);
    return i + 1;
};

// Função quick_sort para ordenar o vetor
const quick_sort = (array, start, end) => {
    if (start < end) {
        let pivotIndex = particionamento(array, start, end);
        quick_sort(array, start, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, end);
    }
};