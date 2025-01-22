import AudioGrid from "./grids/audio";
import DevelopmentGrid from "./grids/development";
import EnginesGrid from "./grids/engines";
import MiscGrid from "./grids/misc";

export default function Gear() {
  return (
    <div className="min-h-screen flex flex-col gap-10">
      <DevelopmentGrid />
      <AudioGrid />
      <EnginesGrid />
      <MiscGrid />
    </div>
  );
}
