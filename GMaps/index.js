let hoursText = document.querySelector(".OqCZI div[aria-label]").ariaLabel;
console.log("hours:", hoursText);

let name = document.querySelector(".fontHeadlineLarge").innerText;
console.log("name:", name);

let category = document.querySelector(".DkEaL").innerText;
console.log("category:", category);

let address = document.querySelector(".Io6YTe").innerText;
console.log("address:", address);


parseGMHours(hoursText);

const parseGMHours = (hoursText) => {
  let hoursTextArr = hoursText.split(";");
  let resultFull = "";
  let dayRegex = /^(mo|tu|we|th|fr|sa|su)/i;
  let timeRegex = /\d+/;

  function convertTo24Hour(time) {
    console.log("time:", time);
    let hours = parseInt(time.match(/^(\d+)/));

    let matchMinutes = time.match(/:(\d+)/);
    let minutes = matchMinutes ? matchMinutes[1] : 0;
    const ampm = time.slice(-2);
    if (ampm === "pm" && hours < 12) hours = hours + 12;
    if (ampm === "am" && hours === 12) hours = hours - 12;
    let sHours = hours.toString();
    let sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;
    return sHours + ":" + sMinutes;
  }

  for (let i = 0; i < hoursTextArr.length; i++) {
    let shortDay = "";
    let fullHours = [];
    let textHours = hoursTextArr[i].trim().toLowerCase();

    if (dayRegex.test(textHours) && timeRegex.test(textHours)) {
      shortDay = textHours.slice(0, 2);
      let firstDigitInd = textHours.indexOf(textHours.match(/[0-9]/));
      let lastDigitInd = Math.max(textHours.lastIndexOf("am"), textHours.lastIndexOf("pm")) + 2;
      let hoursStr = textHours.slice(firstDigitInd, lastDigitInd);
      let hoursStrArr = hoursStr.split(",");
      // console.log("hoursStrArr:", hoursStrArr);


      hoursStrArr.forEach(hoursStr => {
        let [startTimeFull, endTimeFull] = hoursStr.split("to");
        let startTime = startTimeFull.replaceAll(" ", "").replaceAll("\u202F", "");
        let endTime = endTimeFull.replaceAll(" ", "").replaceAll("\u202F", "");

        // console.log("startTimeFull", startTimeFull);
        // console.log("endTimeFull", endTimeFull);

        if (/^\d+$/.test(startTime) && /[a-zA-Z]/.test(endTime)) {
          startTime += endTime.match(/[a-zA-Z]+/)[0];
        }

        let converted24StartTime = convertTo24Hour(startTime);
        let converted24EndTime = convertTo24Hour(endTime);

        // console.log("converted24StartTime:", converted24StartTime);
        // console.log("converted24EndTime:", converted24EndTime);

        let timePeriod = `${converted24StartTime}-${converted24EndTime}`

        // console.log("result:", result);

        fullHours.push(timePeriod)
      }
      );
      console.log("fullHours:", fullHours)

      let oneDayInfo = `${shortDay} ${[...fullHours]}; `;
      resultFull += oneDayInfo;
    }
  }

  resultFull = resultFull.trim();
  return resultFull;
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// let arr = [  
// "sa 10:00-20:00",
// "mo 10:00-18:00",
// "tu 10:00-18:00", 
// "we 10:00-18:00",
// "th 10:00-20:00",
// "fr 10:00-20:00"
// ]






//   hoursTextObj[dayParsed] = hoursParsed.replaceAll("to", "-").replaceAll(" ", "");
// // }
// // 

// console.log("hoursTextObj:", hoursTextObj);
// // let arrFromObj = [hoursTextObj];
// // console.log(arrFromObj);

// let keysArray = [];
// let valueArray = [];

// // value = hoursTextObj[key]; // значение ключа key


// if (hoursTextObj.hasOwnProperty("mo")) {
//   keysArray.push("mo");
//   valueArray.push(hoursTextObj["mo"]);
// }
// if (hoursTextObj.hasOwnProperty("tu")) {
//   keysArray.push("tu");
//   valueArray.push(hoursTextObj["tu"]);
// }
// if (hoursTextObj.hasOwnProperty("we")) {
//   keysArray.push("we");
//   valueArray.push(hoursTextObj["we"]);
// }
// if (hoursTextObj.hasOwnProperty("th")) {
//   keysArray.push("th");
//   valueArray.push(hoursTextObj["th"]);
// }
// if (hoursTextObj.hasOwnProperty("fr")) {
//   keysArray.push("fr");
//   valueArray.push(hoursTextObj["fr"]);
// }
// if (hoursTextObj.hasOwnProperty("sa")) {
//   keysArray.push("sa");
//   valueArray.push(hoursTextObj["sa"]);
// }
// if (hoursTextObj.hasOwnProperty("su")) {
//   keysArray.push("su");
//   valueArray.push(hoursTextObj["su"]);
// }

// let result = `${keysArray[0]}`;
// for (let i = 0; i < valueArray.length; i++) {
//   if (valueArray[i] === valueArray[i+1]) {
//     result += `${keysArray[i+1]}`
//   } 

// }


// console.log(result);
// console.log(keysArray);
// console.log(valueArray);



// console.log(Object.keys(hoursTextObj).length);

// for (let key in hoursTextObj) {
//   if (Object.hasOwnProperty.call(hoursTextObj, key)) {
//     let value = hoursTextObj[key];
//     console.log(key, value);
//   }
// }


  ///////////////////////////////////////////////////////
  // https://goo.gl/maps/ZkJDE5p42x9Lvdmp8
  // https://g.page/woodchucksfurniture?share
  // https://goo.gl/maps/1AHE6PgRJFHMs6qf9
  // https://g.page/fblinen?share
  // https://goo.gl/maps/4tAEVykgZ5P8nCko9
  // https://goo.gl/maps/TvXXvzugCrzm3qPt6
  // https://goo.gl/maps/RpNEpMpRcJDTNo3n7
  // https://goo.gl/maps/Bt9yd8tWNBuPaRpS9
  // https://goo.gl/maps/wxHLgTqwvmQ4A5YTA


// function E(){
//   this.blur();
//   let r=[],o=[];
//   let e=utilOpeningHoursToString(utilFixTimeOverlapping(p.filter(function(t,e){let n=" (Row ".concat(e+1,")");
//   return!!(t.day||t.time.start||t.time.end)&&utilIsValidOperatingHourData(t,function(e){r.push(e+n),f.add(t.id)},function(e){o.push(e+n),g.add(t.id)})}),function(e){r.push(e)})),t={"opening_hours:pl":e};
//   o.length||r.length?(s.container().call(n,o,r,e,L),S()):L(t)}



  // let dayParsed = textHours.slice(0, textHours.indexOf(",")).match(/[A-Za-z]/g);
  //   dayParsed = dayParsed.join(",").replaceAll(",", "").slice(0, 2).toLowerCase();
  //   console.log("dayParsed: ", dayParsed);

  //   //// parse hours
  //   let firstDigitInd = textHours.indexOf(textHours.match(/[0-9]/));
  //   console.log("firstDigitInd: ", firstDigitInd);

  //   let lastDigitIndPlusAMPM = textHours.lastIndexOf(textHours.match(/[0-9]/) + 3);
  //   console.log("lastDigitIndPlusAMPM: ", lastDigitIndPlusAMPM);

// let array = [1, 2, 3];
// let object = {a:1, b:2, c:3};

// for (let i = 0; i < array.length; i++) {
//   console.log(array);
// }

// for (let key in object) {
//   console.log("object");
//   console.log(key);
//   console.log(object[key]);
// }

// for (let item of array) {
//   console.log(array);
//   console.log("item: ", item);
//   console.log("array[item]:", array[item]);
// }
// let user = {
//   id:1,
//   name: "Tom",
//   age: 27,
//   city: "New"
// }

// let {name, ...data} = user;
// console.log(data);

// let rr = document.body.firstElementChild;
// vonsole.dir(rr)




//////////////////////////

// Friday, 8:30 AM to 4 PM; 
// Saturday, Closed; 
// Sunday, Closed; 
// Monday (Washington's Birthday), 8:30 AM to 4 PM, Hours might differ; 
// Tuesday, 8:30 AM to 4 PM; 
// Wednesday, 8:30 AM to 4 PM; 
// Thursday, 8:30 AM to 4 PM. Hide open hours for the week




//////////////////////////Friday
// 8:30 AM–4 PM

// Saturday
// Closed

// Sunday
// Closed

// Monday
// (Washington's Birthday)
// 8:30 AM–4 PM
// Hours might differ

// Tuesday
// 8:30 AM–4 PM

// Wednesday
// 8:30 AM–4 PM

// Thursday
// 8:30 AM–4 PM

///////////////////////////////

// Saturday
// 8 AM–12 PM
// 1–5 PM

// Sunday
// 8 AM–12 PM
// 1–5 PM

// Monday
// (Washington's Birthday)
// 8 AM–5 PM
// Hours might differ

// Tuesday
// 8 AM–5 PM

// Wednesday
// 8 AM–5 PM

// Thursday
// 8 AM–5 PM

// Friday
// 8 AM–5 PM