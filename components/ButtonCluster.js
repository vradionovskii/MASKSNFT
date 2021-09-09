import ToggleGroup from "../components/ToggleGroup";
import ButtonGroup from "../components/ButtonGroup";

export default function ButtonCluster() {
  return (
    <div className="absolute flex justify-between w-full p-3 md:bottom-0">
      <div className="w-10 h-10 md:hidden" />
      <ToggleGroup />
      <ButtonGroup />
    </div>
  );
}
