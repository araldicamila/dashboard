import { ContainerAvatar, ContainerTasksCards, FooterCards } from "./styles";

import IconEdit from "../../assets/icons/icon-update.png";

export const TasksCards = () => {
  return (
    <ContainerTasksCards>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
      <p>
        Sed vitae lobortis nulla, ut vulputate augue. Nullam mollis non ante et
        consequat. Cras quis dapibus augue. Phasellus nec fermentum mauris.
        Aenean et eros ut erat gravida rhoncus a et velit.
      </p>
      <FooterCards>
        <time>19/01/2022</time>

        <div>
          <ContainerAvatar />

          <img src={IconEdit} alt="Edição" />
        </div>
      </FooterCards>
    </ContainerTasksCards>
  );
};
