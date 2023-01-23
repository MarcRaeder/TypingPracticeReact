import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Stats } from "./Stats";

export function StatsArea(props) {
  const [lastSetTime, setLastSetTime] = useState(0);
  const [lastSetClicksPerMinute, setLastSetClicksPerMinute] = useState(0);
  const [lastSetWrongChars, setLastSetWrongChars] = useState(0);
  const [todaySets, setTodaySets] = useState(parseInt(localStorage.getItem("todaySets") ?? 0));
  const [todayCharsTyped, setTodayCharsTyped] = useState(parseInt(localStorage.getItem("todayCharsTyped") ?? 0));
  const [todayClicksPerMinute, setTodayClicksPerMinute] = useState(
    parseInt(localStorage.getItem("todayClicksPerMinute") ?? 0)
  );
  const [todayClicks, setTodayClicks] = useState(parseInt(localStorage.getItem("todayClicks") ?? 0));
  const [todayTime, setTodayTime] = useState(parseInt(localStorage.getItem("todayTime") ?? 0));
  const [todayWrongChars, setTodayWrongChars] = useState(parseInt(localStorage.getItem("todayWrongChars") ?? 0));
  const [todayMistakeRatio, setTodayMistakeRatio] = useState(0);
  const [totalSets, setTotalSets] = useState(parseInt(localStorage.getItem("totalSets") ?? 0));
  const [totalClicksPerMinute, setTotalClicksPerMinute] = useState(0);
  const [totalClicks, setTotalClicks] = useState(parseInt(localStorage.getItem("totalClicks") ?? 0));
  const [totalTime, setTotalTime] = useState(parseInt(localStorage.getItem("totalTime") ?? 0));
  const [totalMistakeRatio, setTotalMistakeRatio] = useState(0);
  const [totalWrongChars, setTotalWrongChars] = useState(parseInt(localStorage.getItem("totalWrongChars") ?? 0));
  const [totalCharsTyped, setTotalCharsTyped] = useState(parseInt(localStorage.getItem("totalCharsTyped") ?? 0));

  const [day, setDay] = useState(parseInt(localStorage.getItem("day") ?? 0));
  const [month, setMonth] = useState(parseInt(localStorage.getItem("month") ?? 0));
  const [year, setYear] = useState(parseInt(localStorage.getItem("year") ?? 0));
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const checkDateIsCurrent = currentDay === day && currentMonth === month && currentYear === year;

  useEffect(() => setLastSetTime(props.endTime - props.startTime), [props.endTime]);
  useEffect(() => {
    setLastSetClicksPerMinute(Math.round(props.clicks / ((lastSetTime ? lastSetTime / 1000 : 1) / 60)));
    setLastSetWrongChars(props.wrongChars);
    setTodaySets(todaySets + props.sets);
    setTodayCharsTyped(todayCharsTyped + props.charsTyped);
    setTodayClicks(todayClicks + props.clicks);
    setTodayTime(todayTime + lastSetTime);
    setTodayWrongChars(todayWrongChars + props.wrongChars);
    setTotalSets(totalSets + props.sets);
    setTotalClicks(totalClicks + props.clicks);
    setTotalTime(totalTime + lastSetTime);
    setTotalCharsTyped(totalCharsTyped + props.charsTyped);
    setTotalWrongChars(totalWrongChars + props.wrongChars);
  }, [lastSetTime]);
  useEffect(() => {
    setTodayClicksPerMinute(Math.round(todayClicks / ((todayTime ? todayTime / 1000 : 1) / 60)));
    setTodayMistakeRatio(Math.round((todayWrongChars / (todayCharsTyped ? todayCharsTyped : 1)) * 100));
    localStorage.setItem("todaySets", todaySets);
    localStorage.setItem("todayCharsTyped", todayCharsTyped);
    localStorage.setItem("todayClicks", todayClicks);
    localStorage.setItem("todayTime", todayTime);
    localStorage.setItem("todayWrongChars", todayWrongChars);
  }, [todayTime]);
  useEffect(() => {
    setTotalClicksPerMinute(Math.round(totalClicks / ((totalTime ? totalTime / 1000 : 1) / 60)));
    setTotalMistakeRatio(Math.round((totalWrongChars / (totalCharsTyped ? totalCharsTyped : 1)) * 100));
    localStorage.setItem("totalSets", totalSets);
    localStorage.setItem("totalCharsTyped", totalCharsTyped);
    localStorage.setItem("totalClicks", totalClicks);
    localStorage.setItem("totalTime", totalTime);
    localStorage.setItem("totalWrongChars", totalWrongChars);
  }, [totalTime]);
  useEffect(() => {
    props.setSets(0);
    props.setClicks(0);
    props.setWrongChars(0);
    props.setCharsTyped(0);
  }, [lastSetClicksPerMinute]);

  function deleteTodayStats() {
    setTodaySets(0);
    setTodayCharsTyped(0);
    setTodayClicks(0);
    setTodayTime(0);
    setTodayWrongChars(0);
  }

  function deleteAllStats() {
    setLastSetTime(0);
    setLastSetClicksPerMinute(0);
    setLastSetWrongChars(0);
    deleteTodayStats();
    setTotalSets(0);
    setTotalClicks(0);
    setTotalCharsTyped(0);
    setTotalTime(0);
    setTotalWrongChars(0);
  }

  function setDate() {
    setDay(new Date().getDate());
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
    localStorage.setItem("day", day);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);
  }

  if (day === 0) {
    setDate();
  }

  if (!checkDateIsCurrent) {
    deleteTodayStats();
    setDate();
  }

  return (
    <div className="StatsArea">
      <h1 className="StatsArea__Header">Stats</h1>
      <div className="StatsArea__Title">Last Set</div>
      <Stats text={"Time: " + Math.round(lastSetTime / 1000)} />
      <Stats text={"CPM:" + lastSetClicksPerMinute} />
      <Stats text={"Wrong Chars:" + lastSetWrongChars} />
      <div className="StatsArea__Title">Today</div>
      <Stats text={"Sets:" + todaySets} />
      <Stats text={"Chars Typed:" + todayCharsTyped} />
      <Stats text={"CPM:" + todayClicksPerMinute} />
      <Stats text={"Time:" + Math.round(todayTime / 1000)} />
      <Stats text={"Mistake Ratio:" + todayMistakeRatio} />
      <div className="StatsArea__Title">Total</div>
      <Stats text={"Sets:" + totalSets} />
      <Stats text={"CPM:" + totalClicksPerMinute} />
      <Stats text={"Time:" + Math.round(totalTime / 1000)} />
      <Stats text={"Mistake Ratio:" + totalMistakeRatio} />
      <div className="StatsArea__ButtonLine">
        <Button text="More Details" />
        <Button text="Delete Todays Data" onClick={() => deleteTodayStats()} />
        <Button text="Delete All Data" onClick={() => deleteAllStats()} />
      </div>
    </div>
  );
}
