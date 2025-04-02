import React from "react";
import { APP } from "../constants/contants";

export default function Footer() {
  return (
    <footer className="bg-white pb-5">
      <div className="border-gray-300 border-t text-center text-sm text-gray-600">
        <p className="mt-5">
          © {new Date().getFullYear()} {APP.NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
