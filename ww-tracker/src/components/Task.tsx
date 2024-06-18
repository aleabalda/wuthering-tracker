interface TaskProps {
  icon: string;
  title: string;
  description: string;
  endDate?: string;
}

export const Task = ({ icon, title, description, endDate }: TaskProps) => {
  return (
    <div className="flex gap-4 items-center bg-[#e0e0e0] p-4 rounded">
      {icon === "" ? (
        <p>icon</p>
      ) : (
        <img src={icon} alt="task icon" className="w-10 object-contain" />
      )}
      <p className="mr-auto text-lg">{title}</p>
      <p className="">{description}</p>
      <p>{endDate}</p>
      <input type="checkbox" className="w-6 h-6" />
    </div>
  );
};
