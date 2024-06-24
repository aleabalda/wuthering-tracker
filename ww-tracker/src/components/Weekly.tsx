import { Task } from "./Task";
import { TaskData } from "./TaskData";

export const Weekly: React.FC = () => {
  const weeklyTasks = TaskData.Weekly;
  return (
    <section id="weekly" className="flex flex-col gap-4 xl:w-full">
      <h2 className="text-xl font-twBold bg-primary w-fit p-2 rounded shadow-md">
        Weekly
      </h2>
      {weeklyTasks.map((val, key) => (
        <Task
          key={`weekly-${key}`}
          icon={val.icon}
          title={val.title}
          description={val.description}
          endDate={val.endDate}
        />
      ))}
    </section>
  );
};
