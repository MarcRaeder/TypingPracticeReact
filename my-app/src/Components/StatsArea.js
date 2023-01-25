import React from "react";
import { Button } from "./Button";
import { Stats } from "./Stats";

export function StatsArea() {
  return (
    <div className="stats-area">
      <h1 className="stats-area__header">Stats</h1>
      <div className="stats-area__title">Last Set</div>
      <Stats text="Time:" />
      <Stats text="CPM:" />
      <Stats text="Wrong Chars:" />
      <div className="stats-area__title">Today</div>
      <Stats text="Sets:" />
      <Stats text="Chars Typed:" />
      <Stats text="CPM:" />
      <Stats text="Time:" />
      <Stats text="Mistake Ratio:" />
      <div className="stats-area__title">Total</div>
      <Stats text="Sets:" />
      <Stats text="CPM:" />
      <Stats text="Time:" />
      <Stats text="Mistake Ratio:" />
      <div className="stats-area__buttonLine">
        <Button text="More Details" />
      </div>
    </div>
  );
}
