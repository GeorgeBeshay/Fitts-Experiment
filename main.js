let width = 400;
let dist = 5;

var button1 = document.getElementById("B1");
var button2 = document.getElementById("B2");
var button = document.getElementById("C");
var EX = document.getElementById("EX");
let flag = false;
let X;
let Y;
let Start;
let TimeRecord = [];
let WRecord = [];
let DRecord = [];

button1.style.width = `${width}px`;
button2.style.width = `${width}px`;
button1.style.marginRight = `${dist}px`;
button2.style.marginLeft = `${dist}px`;

button.onclick = function () {
	if ((width >= 20) & (dist <= 1000) & flag) {
		width -= 13;
		dist += 20;
		button1.style.width = `${width}px`;
		button2.style.width = `${width}px`;
		button1.style.marginRight = `${dist}px`;
		button2.style.marginLeft = `${dist}px`;
	}
	Start = Date.now();
};

button1.onclick = function () {
	X = Date.now() - Start;
	flag = true;
	TimeRecord.push((X + Y) / 2);
	WRecord.push(width + 2);
	DRecord.push(dist);
};

button2.onclick = function () {
	Y = Date.now() - Start;
	flag = false;
};

EX.onclick = function () {
	console.log(`Time(mS)	Width(px)	Distance(px)`);
	for (i = 0; i < TimeRecord.length; i++) {
		console.log(`${TimeRecord[i]}	${WRecord[i]}	${DRecord[i]}`);
	}
};
