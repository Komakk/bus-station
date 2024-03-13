interface NavListItemProps {
  title: string;
  src: string;
  innerList?: { title: string; src: string }[];
}

export default function NavListItem({
  title,
  src,
  innerList,
}: NavListItemProps) {
  return (
    <li className=" group px-2 py-5 inline-block text-sm text-gray-400">
      <a className="uppercase hover:underline" href={src}>
        {title}
      </a>
      {innerList && (
        <ul className=" hidden group-hover:block absolute top-14 bg-gray-100 text-gray-500 min-w-28">
          {innerList.map((item) => (
            <li key={item.title} className=" hover:bg-gray-300 ">
              <a className=" px-3 leading-9 text-base" href={item.src}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
