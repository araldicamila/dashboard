import { ContainerCards, ContainerColumns } from "./styles";

import IconPlus from "../../assets/icons/icon-plus.png";

export const Columns = ({ theme, name, icon, total, children }) => {
  return (
    <ContainerColumns theme={theme}>
      <div className="header-columns">
        <img src={icon} alt={name} />
        <p>{name}</p>
        <p>{total}</p>
      </div>
      <ContainerCards>{children}</ContainerCards>

      <button>
        <img src={IconPlus} alt="Add tasks" />
      </button>
    </ContainerColumns>
  );
};
