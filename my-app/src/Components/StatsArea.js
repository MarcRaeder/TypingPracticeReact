import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Stats } from "./Stats";

export function StatsArea(props) {
  const [lastSetTime, setLastSetTime] = useState(0);
  const [lastSetClicksPerMinute, setLastSetClicksPerMinute] = useState(0);
  const [lastSetWrongChars, setLastSetWrongChars] = useState(0);
  const [todaySets, setTodaySets] = useState(0);
  const [todayCharsTyped, setTodayCharsTyped] = useState(0);
  const [todayClicksPerMinute, setTodayClicksPerMinute] = useState(0);
  const [todayClicks, setTodayClicks] = useState(0);
  const [todayTime, setTodayTime] = useState(0);
  const [todayMistakeRatio, setTodayMistakeRatio] = useState(0);
  const [todayWrongChars, setTodayWrongChars] = useState(0);
  const [totalSets, setTotalSets] = useState(0);
  const [totalClicksPerMinute, setTotalClicksPerMinute] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [totalMistakeRatio, setTotalMistakeRatio] = useState(0);
  const [totalWrongChars, setTotalWrongChars] = useState(0);
  const [totalCharsTyped, setTotalCharsTyped] = useState(0);

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
  }, [todayTime]);
  useEffect(() => {
    setTotalClicksPerMinute(Math.round(totalClicks / ((totalTime ? totalTime / 1000 : 1) / 60)));
    setTotalMistakeRatio(Math.round((totalWrongChars / (totalCharsTyped ? totalCharsTyped : 1)) * 100));
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
    setTodaySets(0);
    setTodayClicks(0);
    setTodayCharsTyped(0);
    setTodayTime(0);
    setTodayWrongChars(0);
    setTotalSets(0);
    setTotalClicks(0);
    setTotalCharsTyped(0);
    setTotalTime(0);
    setTotalWrongChars(0);
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
