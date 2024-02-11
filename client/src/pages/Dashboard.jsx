import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/dashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
    console.log(tabFromUrl);
  }, [location.search]);
  return (
    <div className=" min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* sideBar */} <DashSidebar />
      </div>
      {/* profile */}
      {tab === "profile" && <DashProfile />}
      {/* posts.... */}
      {tab === "posts" && <DashPosts />}
      {/* users.... */}
      {tab === "users" && <DashUsers />}
    </div>
  );
}
