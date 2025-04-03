"use client";

import { LogOut } from "lucide-react";
import { useAppStore } from "../store/app";

export default function CurrentUser() {
  const currentUser = useAppStore((state) => state.loggedInUser);

  const handleLogoutClick = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  return (
    <div className="px-4 mb-5 py-5 bg-white rounded-lg shadow-sm border border-gray-200">
      {currentUser ? (
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-medium">
              {currentUser.name.charAt(0)}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              <span className="flex items-center gap-2">
                {currentUser.name}{" "}
                <LogOut
                  onClick={handleLogoutClick}
                  className="cursor-pointer"
                  size={18}
                />
              </span>
            </p>
            <p className="text-sm text-gray-500 truncate">
              {currentUser.email}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-500">No user logged in</p>
        </div>
      )}
    </div>
  );
}
