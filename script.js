function insert_Row() {
    //Write your code here
	const table = document.getElementById("sampleTable");
	var new_row = table.insertRow(0);
	var first = new_row.insertCell(0);
	first.innerText = "New Cell1";
	var second = new_row.insertCell(1);
	second.innerText = "New Cell2";
}