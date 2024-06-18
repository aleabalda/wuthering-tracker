import { Task } from "./Task";
import { TaskData } from "./TaskData";

export const Weekly: React.FC = () => {
  const weeklyTasks = TaskData.Weekly;
  return (
    <section id="weekly" className="flex flex-col gap-4">
      <h2 className="text-xl">Weekly</h2>
      {weeklyTasks.map((val, key) => (
        <Task
          key={`weekly-${key}`}
          icon={val.icon}
          title={val.title}
          description={val.description}
        />
      ))}
    </section>
  );
};
