import { useState } from "react";

interface SidebarListItemProps {
  title: string;
  src: string;
  innerList?: { title: string; src: string }[];
}

export default function SidebarListItem({
  title,
  src,
  innerList,
}: SidebarListItemProps) {
  const [isInnerListHidden, setIsInnerListHidden] = useState(true);
  const innerListStyle = isInnerListHidden ? "px-5 hidden" : "px-5 block";
  return (
    <li>
      <a
        href={src}
        className=" flex relative justify-between items-center cursor-pointer mb-4"
        onClick={() => setIsInnerListHidden(!isInnerListHidden)}
      >
        <span>{title}</span>
        {innerList && (
          <span className=" absolute right-0 text-2xl">
            {isInnerListHidden ? "\u229E" : "\u229F"}
          </span>
        )}
      </a>
      <ul className={innerListStyle}>
        {innerList &&
          innerList.map((item) => (
            <li key={item.title}>
              <a className=" mb-4 block" href={item.src}>
                {item.title}
              </a>
            </li>
          ))}
      </ul>
    </li>
  );
}
