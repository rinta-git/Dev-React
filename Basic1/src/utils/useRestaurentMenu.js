import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
//customhook defenition
const useRestaurentMenu = (resId) => {
  const [restaurentMenu, setRestaurentMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestaurentMenu(json.data);
  };

  return restaurentMenu;
};

export default useRestaurentMenu;
