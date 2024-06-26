import { useEffect, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface TaskProps {
  icon: string;
  title: string;
  description: string;
  endDate?: string;
}

export const Task = ({ icon, title, description, endDate }: TaskProps) => {
  const [more, setMore] = useState<boolean>(false);
  const toggleMore = () => {
    setMore(!more);
  };

  const [checked, setChecked] = useState<boolean>(false);

  const checkTaskStatus = () => {
    const dataString = window.localStorage.getItem(`data-${title}`);
    if (dataString) {
      setChecked(true);
    }
  };

  useEffect(() => {
    checkTaskStatus();
  }, [checked]);

  const toggleChecked = () => {
    if (!checked) {
      const data = {
        title: title,
        status: true,
      };
      window.localStorage.setItem(`data-${title}`, JSON.stringify(data));
      setChecked(true);
    } else {
      setChecked(false);
      window.localStorage.removeItem(`data-${title}`);
    }
  };

  return (
    <>
      <div className="p-4 bg-primary rounded shadow-lg xl:w-full">
        <div className="flex gap-2 items-center">
          <img
            src={icon}
            alt="task icon"
            className="w-8 h-8 object-cover rounded-full"
          />
          <p className="mr-auto text-sm">{title}</p>
          <button className="text-xs" onClick={toggleMore}>
            {more ? "View Less" : "View More"}
          </button>
          <button onClick={toggleChecked}>
            {checked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          </button>
        </div>
        {more && (
          <>
            <p className="mt-4 text-xs bg-secondary p-2 rounded">
              {description}
            </p>
            <p className="text-sm mt-2">End Date: {endDate}</p>
          </>
        )}
      </div>
    </>
  );
};
