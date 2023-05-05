function parseBirthday(remarkString) {
    var regex = /(?:year(?<year>\d{4}))|(?:month(?<month>\d{1,2}))|(?:day(?<day>\d{1,2}))/gm;
  
    let m;
    let matchFound = false;
    let formattedDate = {
      year: '',
      month: '',
      day: '',
    };
  
    // Check if the regex matches the input string
    if (regex.test(remarkString)) {
      matchFound = true;
      regex.lastIndex = 0; // Reset lastIndex after using regex.test()
    }
  
    while (matchFound && (m = regex.exec(remarkString)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
  
      if (m.groups.year && !formattedDate.year) {
        formattedDate.year = m.groups.year;
      }
      if (m.groups.month && !formattedDate.month) {
        formattedDate.month = m.groups.month;
      }
      if (m.groups.day && !formattedDate.day) {
        formattedDate.day = m.groups.day;
      }
    }
  
    return formattedDate;
  }
  
  // Sample input
  const input = "Alice was born in the year1995, in the month05 and on the day13.";
  
  // Call the parseBirthday function
  const result = parseBirthday(input);
  
  // Sample output
  console.log(result); // { year: '1995', month: '05', day: '13' }
  