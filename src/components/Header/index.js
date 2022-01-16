import { useLocation } from "react-router-dom";
import { ShowDate } from "../Date";

import { ContainerHeader } from "./styles";

export const Header = () => {
  const location = useLocation();

  return (
    <ContainerHeader>
      <p>
        {(location && location.state && location.state.name) || "Dashboard"}
      </p>

      <ShowDate />
    </ContainerHeader>
  );
};
