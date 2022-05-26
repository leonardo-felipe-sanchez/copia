
var currentTextInput;
var puzzelArrayData;

function initializeScreen(){
	var puzzelTable = document.getElementById("puzzel");
	puzzelArrayData = preparePuzzelArray();
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var row = puzzelTable.insertRow(-1);
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			var cell = row.insertCell(-1);
			if(rowData[j] != 0){
				var txtID = String('txt' + '_' + i + '_' + j);
				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
			}else{
				cell.style.backgroundColor  = "black";
			}
		}
	}
	addHint();
}

function addHint(){
	document.getElementById("txt_1_3").placeholder = "1";
	document.getElementById("txt_13_0").placeholder = "2";
	document.getElementById("txt_9_12").placeholder = "3";
	document.getElementById("txt_7_0").placeholder = "4";
	document.getElementById("txt_11_3").placeholder = "5";
	document.getElementById("txt_2_1").placeholder = "6";
	document.getElementById("txt_6_8").placeholder = "7";
	document.getElementById("txt_0_5").placeholder = "8";
	document.getElementById("txt_8_5").placeholder = "9";
	document.getElementById("txt_13_4").placeholder = "10";
	document.getElementById("txt_5_0").placeholder = "11";
	document.getElementById("txt_7_7").placeholder = "12";
	document.getElementById("txt_5_5").placeholder = "13";
	document.getElementById("txt_9_9").placeholder = "14";
	document.getElementById("txt_2_12").placeholder = "15";
	document.getElementById("txt_15_3").placeholder = "16";
}

//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
	currentTextInput = txtID123;
}
//Returns Array
function preparePuzzelArray(){
var items = [	[0, 0, 0, 0, 0, 'm', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 'c', 0, 'e', 0, 0, 0, 0, 0, 0, 0],
				[0, 'e', 'p', 'r', 'o', 'm', 0, 0, 0, 0, 0, 0, 'd'],
				[0, 0, 0, 'u', 0, 'o', 0, 0, 0, 0, 0, 0, 'u'],
				[0, 0, 0, 0, 0, 'r', 0, 0, 0, 0, 0, 0, 'a'],
				['a', 0, 0, 0, 0, 'i', '5', 0, 0, 0, 0, 0, 'l'],
				['d', 0, 0, 0, 0, 'a', 0, 0, 'f', 0, 0, 0, '-'],
				['r','a', 'm', 0, 0, '-', 0, 'd', 'l', 0, 0, 0, 'c'],
				['e', 0, 0, 0, 0, 'd', 'm', 'a', 'a', 0, 0, 0, 'o'],
				['s', 'e', 'r', 'o', 'd', 'a', 'r', 't', 's', 'i', 'g', 'e', 'r'],
				['s', 0, 0, 0, 0, '-', 0, 'a', 'h', '7', 0, 0, 'e'],
                ['-', 0, 0, 'r', 'o', 'm', 0, '-', 0, 0, 0, 0, 0],
                ['b', 0, 0, 0, 0, 'a', 0, 'b', 0, 0, 0, 0, 0],
                ['u', 'l', 'a', 0, 'c', 's', 0, 'u', 0, 0, 0, 0, 0],
                ['s', 0, 0, 0, 0, 's', 0, 's', 0, 0, 0, 0, 0],
                [0, 0, 0, 'q', 'u', 'a', 'd', '-', 'c', 'o', 'r', 'e', 0]
			];
return items;
}

//Clear All Button
function clearAllClicked(){
	currentTextInput = '';
	var puzzelTable = document.getElementById("puzzel");
	puzzelTable.innerHTML = '';
    initializeScreen();
}
//Check button
function checkClicked(){
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
				if(selectedInputTextElement.value != puzzelArrayData[i][j]){
					selectedInputTextElement.style.backgroundColor = 'red';
					
				}else{
					selectedInputTextElement.style.backgroundColor = 'white';
				}
			}
		}
	}
}
//Clue Button
function clueClicked(){
	if (currentTextInput != null){
		var temp1 = currentTextInput;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		document.getElementById(temp1).value = puzzelArrayData[row][column];
		//checkClicked();
	}
}
//Solve Button
function solveClicked(){
	if (currentTextInput != null){
		var temp1 = currentTextInput;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		
		// Print elements on top
		for(j = row; j >= 0; j--){
			if(puzzelArrayData[j][column] != 0){
				document.getElementById('txt' + '_' + j + '_' + column).value = puzzelArrayData[j][column];
				}else break;
		}
		// Print elements on right
		for(i = column; i< puzzelArrayData[row].length; i++){
			if(puzzelArrayData[row][i] != 0){
				document.getElementById('txt' + '_' + row + '_' + i).value = puzzelArrayData[row][i];
				}else break;
		}
		
		// Print elements below
		for(m = row; m< puzzelArrayData.length; m++){
			if(puzzelArrayData[m][column] != 0){
				document.getElementById('txt' + '_' + m + '_' + column).value = puzzelArrayData[m][column];
				}else break;
		}
		// Print elements on left
		for(k = column; k >= 0; k--){
			if(puzzelArrayData[row][k] != 0){
				document.getElementById('txt' + '_' + row + '_' + k).value = puzzelArrayData[row][k];
				}else break;
		}
		// Done!
		
	}
}
