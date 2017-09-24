module.exports = function check(str, bracketsConfig) {
    var arr = [], // рабочая строка
	    stk = [], // стэк для хранения промежуточных символов
		config = bracketsConfig; // эталонный массив
	arr = str.split("");
	for (var i = 0; i < arr.length; i++) { 
		for (var j = 0; j < config.length; j++){
			if (config[j][0] === config[j][1] && arr[i] === config[j][0]) { // проверка на одинаковые символы
				if (stk[stk.length-1] === arr[i]) { //если такой символ уже есть в стеке
					stk.pop();
					break;
				} else {
				stk.push(arr[i]); // добавление символа в стек
				break;
			    }
			}
		    if (arr[i] === config[j][0]) { // в случае когда символ совпадает со эталонным символом
			stk.push(arr[i]);
			break;
		    } else if(arr[i] === config[j][1]) { // в случае когда символ совпадает со эталонным символом
				
		        if (stk.pop() === config[j][0]) { // в случае когда последний элемент из стека совпадает с эталонным символом, находящимся в одном массиве с текущим символом
				    break;
			    } else { return false;}
		    }
		
	    }
    }
	if (stk.length != 0) { // проверка на пустой стек
		return false;
	}
	return true;
}
