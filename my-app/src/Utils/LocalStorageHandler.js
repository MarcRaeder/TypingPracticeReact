export class LocalStorageHandler {
  constructor() {}
  saveTodayStats(todaySets, todayCharsTyped, todayClicks, todayTime, todayWrongChars) {
    localStorage.setItem("todaySets", todaySets);
    localStorage.setItem("todayCharsTyped", todayCharsTyped);
    localStorage.setItem("todayClicks", todayClicks);
    localStorage.setItem("todayTime", todayTime);
    localStorage.setItem("todayWrongChars", todayWrongChars);
  }

  saveTotalStats(totalSets, totalCharsTyped, totalClicks, totalTime, totalWrongChars, letters) {
    localStorage.setItem("totalSets", totalSets);
    localStorage.setItem("totalCharsTyped", totalCharsTyped);
    localStorage.setItem("totalClicks", totalClicks);
    localStorage.setItem("totalTime", totalTime);
    localStorage.setItem("totalWrongChars", totalWrongChars);
    localStorage.setItem("letters", JSON.stringify(letters));
  }

  saveDate(day, month, year) {
    localStorage.setItem("day", day);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);
  }
}
