import { useEffect } from "react";

export default function VKWidget() {
  useEffect(() => {
    VK.Widgets.Group(
      "vk_groups",
      { mode: 0, width: "auto", height: "250" },
      154467839
    );
  }, []);
  return <div id="vk_groups">VK widget</div>;
}
