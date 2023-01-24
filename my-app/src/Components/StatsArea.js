import { Button } from "./Button";
import { Stats } from "./Stats";

export function StatsArea() {
  return (
    <div className="StatsArea">
      <h1 className="StatsArea__Header">Stats</h1>
      <div class="StatsArea__Title">Last Set</div>
      <Stats text="Time:" />
      <Stats text="CPM:" />
      <Stats text="Wrong Chars:" />
      <div class="StatsArea__Title">Today</div>
      <Stats text="Sets:" />
      <Stats text="Chars Typed:" />
      <Stats text="CPM:" />
      <Stats text="Time:" />
      <Stats text="Mistake Ratio:" />
      <div class="StatsArea__Title">Total</div>
      <Stats text="Sets:" />
      <Stats text="CPM:" />
      <Stats text="Time:" />
      <Stats text="Mistake Ratio:" />
      <div className="StatsArea__ButtonLine">
        <Button text="More Details" />
      </div>
    </div>
  );
}
