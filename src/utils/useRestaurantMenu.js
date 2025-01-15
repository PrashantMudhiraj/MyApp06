import { useEffect, useState } from "react";
import axios from "axios";

import { CORS_PROXY, MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [restroData, setRestroData] = useState(null);
    // console.log(resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await axios.get(CORS_PROXY + MENU_URL(resId));
        setRestroData(response.data);
    };

    return restroData;
};

export default useRestaurantMenu;
