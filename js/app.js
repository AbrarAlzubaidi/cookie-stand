'use strict';
let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily total']; //time array
let loca = [];
let dailytotal = [];


let tableElement = document.getElementById('salesPage');
let formElement = document.getElementById('cookieForm');
let newLocation;
function Locations(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.customerNumbre = 0;
  this.cookieNumber = [];
  this.locationTotal = 0;
  loca.push(this);

}

Locations.prototype.randomCookiesNumber = function () {

  for (let i = 0; i < time.length - 1; i++) {
    this.customerNumbre = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    this.cookieNumber[i] = Math.floor(this.customerNumbre * this.avg);
    this.locationTotal = this.locationTotal + this.cookieNumber[i];
  }
  this.cookieNumber[time.length - 1] = this.locationTotal;
  return this.cookieNumber;
};

Locations.prototype.render = function () {

  this.randomCookiesNumber();
  //console.log(newLocation.randomCookiesNumber);
  let bodyRows = document.createElement('tr'); //create body's rows
  tableElement.appendChild(bodyRows);

  let tdBodyRows = document.createElement('td');
  tdBodyRows.textContent = this.name;
  bodyRows.appendChild(tdBodyRows);

  for (let i = 0; i < time.length; i++) {
    let tdBodyRows = document.createElement('td');
    tdBodyRows.textContent = this.cookieNumber[i];
    bodyRows.appendChild(tdBodyRows);
  }


};

function tableHeader() {
  let headRow = document.createElement('tr');// create header row
  tableElement.appendChild(headRow);

  let thEmptyCell = document.createElement('th');
  thEmptyCell.textContent = '  ';

  headRow.appendChild(thEmptyCell);
  for (let i = 0; i < time.length; i++) {
    let th = document.createElement('th');
    th.textContent = time[i];
    headRow.appendChild(th);
  }

}

function tableFooter() {

  let footerRow = document.createElement('tr');
  tableElement.appendChild(footerRow);

  let totalCell = document.createElement('th');
  totalCell.textContent = 'total';
  footerRow.appendChild(totalCell);

  dailytotal = seattle.cookieNumber;

  console.log('seattle cookie before adding: ' + dailytotal);
  for (let i = 0; i < time.length; i++) {
    for (let j = 1; j < loca.length; j++) {
      let num = loca[j].cookieNumber[i];
      dailytotal[i] = dailytotal[i] + num;
    }
    let footerElement = document.createElement('th');
    console.log(footerElement.textContent = dailytotal[i]);
    footerRow.appendChild(footerElement);
  }

}

formElement.addEventListener('submit', submitAction);
console.log(formElement);
function submitAction(event) {
  event.preventDefault();
  let name = event.target.location.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let avg = event.target.avg.value;

  if (!name || !min || !max || !avg || min > max) {
    alert('you seems entered something wrong: minimum number bigger than maximunm number OR you did not enter anything');
  }

  else {
    document.getElementById('salesPage').deleteRow(loca.length + 1);

    console.log('total cookie after adding: ', this.dailytotal);
    newLocation = new Locations(name, parseInt(min), parseInt(max), parseFloat(avg));
    console.log('locations after adding: ' + loca.length);
    newLocation.render();
    tableFooter();
    console.log('seattle cookie after adding: ' + (dailytotal - seattle.cookieNumber));
  }

}



let seattle = new Locations('seattle', 23, 65, 6.3);
let tokyo = new Locations('tokyo', 3, 24, 1.2);
let dubai = new Locations('dubai', 11, 38, 3.7);
let paris = new Locations('paris', 20, 38, 2.3);
let lima = new Locations('lima', 2, 16, 4.6);

console.log('locations before adding: ' + loca.length);

tableHeader();
for (let i = 0; i < loca.length; i++) {
  console.log(loca[i]);
  loca[i].render();
}
tableFooter();











