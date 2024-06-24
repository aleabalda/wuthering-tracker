import { Task } from "./Task";
import { TaskData } from "./TaskData";

export const Daily: React.FC = () => {
  const dailyTasks = TaskData.Daily;
  return (
    <section id="daily" className="flex flex-col gap-4 xl:w-full">
      <h2 className="text-xl font-twBold bg-primary w-fit p-2 rounded shadow-md">
        Daily
      </h2>
      {dailyTasks.map((val, key) => (
        <Task
          key={`daily-${key}`}
          icon={val.icon}
          title={val.title}
          description={val.description}
          endDate={val.endDate}
        />
      ))}
    </section>
  );
};
