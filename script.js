const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.price');
	let total = 0;
	prices.forEach((i) => {
		total += Number(i.textContent)
	})
	const totRow = document.createElement("tr");
	const totCell = document.createElement("td");
	totCell.textContent = "Total";
	const totDat = document.createElement("td");
	totDat.textContent = total;
	totRow.appendChild(totCell);
	totRow.appendChild(totDat);
	document.getElementById('cart').appendChild(totRow);
	
};

getSumBtn.addEventListener("click", getSum);

