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

  useEffect(() => setLastSetTime(props.endTime - props.startTime), [props.endTime]);
  useEffect(() => {
    setLastSetClicksPerMinute(Math.round(props.clicks / ((lastSetTime ? lastSetTime / 1000 : 1) / 60)));
    setLastSetWrongChars(props.wrongChars);
    setTodaySets(props.sets);
    setTodayCharsTyped(todayCharsTyped + props.charsTyped);
    setTodayClicks(todayClicks + props.clicks);
    setTodayTime(todayTime + lastSetTime);
    setTodayWrongChars(todayWrongChars + props.wrongChars);
  }, [lastSetTime]);
  useEffect(() => {
    setTodayClicksPerMinute(Math.round(todayClicks / ((todayTime ? todayTime / 1000 : 1) / 60)));
    setTodayMistakeRatio(Math.round((todayWrongChars / todayCharsTyped) * 100));
  }, [todayTime]);
  useEffect(() => {
    props.setClicks(0);
    props.setWrongChars(0);
    props.setCharsTyped(0);
  }, [lastSetClicksPerMinute]);

  console.log({ todayCharsTyped, todayWrongChars });

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
      <Stats text="Sets:" />
      <Stats text="CPM:" />
      <Stats text="Time:" />
      <Stats text="Mistake Ratio:" />
      <div className="StatsArea__ButtonLine">
        <Button text="More Details" />
        <Button text="Delete Todays Data" />
        <Button text="Delete All Data" />
      </div>
    </div>
  );
}
