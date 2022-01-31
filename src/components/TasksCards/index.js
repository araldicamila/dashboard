import {
  ContainerAvatar,
  ContainerTasksCards,
  FooterCards,
  OptionsCards,
} from "./styles";

import IconEdit from "../../assets/icons/icon-update.png";
import { Tooltip } from "../Tooltip";
import { useState } from "react";

export const TasksCards = () => {
  const [open, setOpen] = useState(false);

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
          <ContainerAvatar>CA</ContainerAvatar>

          <OptionsCards>
            <button onClick={() => setOpen(!open)}>
              <img src={IconEdit} alt="Edição" />
            </button>
            {open ? (
              <Tooltip>
                <button>Edit</button>
                <button>Delete</button>
              </Tooltip>
            ) : null}
          </OptionsCards>
        </div>
      </FooterCards>
    </ContainerTasksCards>
  );
};
