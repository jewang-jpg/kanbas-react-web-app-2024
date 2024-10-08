import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons() {
  return (
    <div className="float-end text-secondary">
      <GreenCheckmark />
      <IoEllipsisVertical className="ms-2 fs-4" />
    </div>
  );
}
