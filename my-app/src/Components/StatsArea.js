import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Stats } from "./Stats";

export function StatsArea(props) {
  const [lastSetTime, setLastSetTime] = useState(0);
  const [lastSetClicksPerMinute, setLastSetClicksPerMinute] = useState(0);
  const [lastSetWrongChars, setLastSetWrongChars] = useState(0);

  useEffect(() => setLastSetTime(props.endTime - props.startTime), [props.endTime]);
  useEffect(() => {
    setLastSetClicksPerMinute(Math.round(props.clicks / ((lastSetTime ? lastSetTime / 1000 : 1) / 60)));
    setLastSetWrongChars(props.wrongChars);
  }, [lastSetTime]);
  useEffect(() => {
    props.setClicks(0);
    props.setWrongChars(0);
  }, [lastSetClicksPerMinute]);

  return (
    <div className="StatsArea">
      <h1 className="StatsArea__Header">Stats</h1>
      <div className="StatsArea__Title">Last Set</div>
      <Stats text={"Time: " + Math.round(lastSetTime / 1000)} />
      <Stats text={"CPM:" + lastSetClicksPerMinute} />
      <Stats text={"Wrong Chars:" + lastSetWrongChars} />
      <div className="StatsArea__Title">Today</div>
      <Stats text="Sets:" />
      <Stats text="Chars Typed:" />
      <Stats text="CPM:" />
      <Stats text="Time:" />
      <Stats text="Mistake Ratio:" />
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
