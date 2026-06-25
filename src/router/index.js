import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UsersManag from "../pages/users-manag/index.jsx";
import ActivityManag from "../pages/activity-manag/index.jsx";
import ReportsManag from "../pages/reports-manag/index.jsx";
import PointsManag from "../pages/points-manag/index.jsx";
import NotificationsManag from "../pages/notifications-manag/index.jsx";
import AdminPermissions from "../pages/admin-permissions/index.jsx";

const Home = React.lazy(() => import("../pages/home/index.jsx"));
const LandinPage = React.lazy(() => import("../pages/landing-page/index.jsx"));
const Dashboard = React.lazy(() => import("../pages/dashboard/index.jsx"));

export const routs = [
  {
    path: "/",
    element: <LandinPage />,
    title: "تسجيل الدخول",
    hideInSidebar: true,
  },
  {
    path: "/Home",
    element: <Home />,
    title: "الصفحة الرئيسية",
    icon: <HomeIcon sx={{ fontSize: 30 }} />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    title: "لوحة التحكم",
    icon: <DashboardIcon sx={{ fontSize: 30 }} />,
  },
  {
    path: "/UsersManag",
    element: <UsersManag />,
    title: "إدارة المستخدمين",
    icon: <GroupIcon sx={{ fontSize: 30 }} />,
  },
  {
    path: "/activities",
    element: <ActivityManag />,
    title: "إدارة الأنشطة",
    icon: <AssignmentIcon sx={{ fontSize: 30 }} />,
  },

  {
    path: "/reports",
    element: <ReportsManag />,
    title: "تقارير واحصائيات",
    icon: <EqualizerIcon sx={{ fontSize: 30 }} />,
  },
  {
    path: "/points",
    element: <PointsManag />,
    title: "إدارة النقاط",
    icon: <OutlinedFlagIcon sx={{ fontSize: 30 }} />,
  },
  {
    path: "/notifications",
    element: <NotificationsManag />,
    title: "إدارة الإشعارات",
    icon: <NotificationsNoneIcon sx={{ fontSize: 30 }} />,
  },
  {
    path: "/permissions",
    element: <AdminPermissions />,
    title: "صلاحيات المسؤول",
    icon: <AdminPanelSettingsIcon sx={{ fontSize: 30 }} />,
  },
];
