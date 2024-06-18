import { Task } from "./Task";
import { TaskData } from "./TaskData";

export const Daily: React.FC = () => {
  const dailyTasks = TaskData.Daily;
  return (
    <section id="daily" className="flex flex-col gap-4">
      <h2 className="text-xl">Daily</h2>
      {dailyTasks.map((val, key) => (
        <Task
          key={`daily-${key}`}
          icon={val.icon}
          title={val.title}
          description={val.description}
        />
      ))}
    </section>
  );
};
