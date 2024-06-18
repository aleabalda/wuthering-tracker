import { Task } from "./Task";
import { TaskData } from "./TaskData";

export const Events: React.FC = () => {
  const eventTasks = TaskData.Events;
  return (
    <section id="events" className="flex flex-col gap-4">
      <h2 className="text-xl">Events</h2>
      {eventTasks.map((val, key) => (
        <Task
          key={`event-${key}`}
          icon={val.icon}
          title={val.title}
          description={val.description}
        />
      ))}
    </section>
  );
};
