import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentsControlButtons() {
  return (
    <div className="float-end text-secondary">
      <span className="border rounded-pill px-2 py-1 border-secondary fs-6">40% of Total</span>
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
