import AudioGrid from "./grids/audio";
import DevelopmentGrid from "./grids/development";
import EnginesGrid from "./grids/engines";
import GamingGrid from "./grids/gaming";
import MiscGrid from "./grids/misc";
import MacGrid from "./grids/mac";
import VideoGrid from "./grids/video";
import NoteMakingGrid from "./grids/note-making";

export default function Gear() {
  return (
    <div className="min-h-screen flex flex-col gap-10">
      <EnginesGrid />
      <DevelopmentGrid />
      <MacGrid />
      <VideoGrid />
      <AudioGrid />
      <NoteMakingGrid />
      <GamingGrid />
      <MiscGrid />
    </div>
  );
}
