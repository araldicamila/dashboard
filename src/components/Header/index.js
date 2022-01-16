import { useLocation } from "react-router-dom";
import { ShowDate } from "../Date";

import { ContainerHeader } from "./styles";

import IconDashboard from "../../assets/icons/icon-dashboard.png";
import IconCalendar from "../../assets/icons/icon-calendar.png";
import IconTasks from "../../assets/icons/icon-tasks.png";

export const Header = () => {
  const location = useLocation();

  const getImage = (name) => {
    switch (name) {
      case "Tasks":
        return IconTasks;
      case "Events":
        return IconCalendar;
      default:
        return IconDashboard;
    }
  };

  return (
    <ContainerHeader>
      <div>
        <img
          src={getImage(location && location.state && location.state.name)}
          alt="Icon"
        />
        <p>
          {(location && location.state && location.state.name) || "Dashboard"}
        </p>
      </div>

      <ShowDate />
    </ContainerHeader>
  );
};
