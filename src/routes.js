import { Dashboard } from "./pages/Dashboard";
import { Tasks } from "./pages/Tasks";
import { Events } from "./pages/Events";

import IconDashboard from "./assets/icons/icon-dashboard-menu.png";
import IconCalendar from "./assets/icons/icon-calendar.png";
import IconTasks from "./assets/icons/icon-tasks.png";
import { Route, Switch } from "react-router-dom";

export const routes = [
  {
    name: "Dashboard",
    path: "/",
    component: <Dashboard />,
    icon: IconDashboard,
  },
  {
    name: "Tasks",
    path: "/tasks",
    component: <Tasks />,
    icon: IconTasks,
  },
  {
    name: "Events",
    path: "/events",
    component: <Events />,
    icon: IconCalendar,
  },
];

export const RoutesComponent = () => {
  return (
    <Switch>
      {routes &&
        routes.map((item) => (
          <Route
            path={item.path}
            element={item.component}
            exact
            key={item.path}
            location={{ state: { name: item.name, icon: item.icon } }}
          />
        ))}
    </Switch>
  );
};
