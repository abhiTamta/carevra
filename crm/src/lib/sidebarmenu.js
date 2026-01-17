const { LayoutDashboard, ShieldUser } = require("lucide-react");

const data = {
  masterAdminMenu: [
    {
      id : "1",
      title: "Dashboard",
      icon: <LayoutDashboard />,
      subMenuItem : [
        {
          title : "Overview",
          url: "/dashboard",
          icon : ""
        },
        {
          title : "Live Bookings",
          url: "/dashboard",
          icon : ""
        },
        {
          title : "Today Summary",
          url: "/dashboard",
          icon : ""
        },
        {
          title : "Revenue Snapshot",
          url: "/dashboard",
          icon : ""
        }
      ]
    },
    {
      id: "2",
      title: "User Management",
      icon : <ShieldUser />,
      subMenuItem : [
        {
          title: "Manage Users",
          url: "/dashboard/userManagement/manageUsers",
          icon: ""
        },
        {
          title: "Roles & Permissions",
          url: "/dashboard/userManagement/rolesPermissions",
          icon: ""
        },
        {
          title: "Delete Account Request",
          url: "/dashboard/userManagement/deleteRequest",
          icon: ""
        }
      ]
    },
    {
      id:"3",
      title: "User",
      icon : "",
      subMenuItem : [
        {
          title: "Manage Users152",
          url: "/dashboard/userManagement/manageUsers",
          icon: ""
        }
      ]
    }
  ],
};

export default data