import React from "react";
import { APP } from "../constants/contants";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="mt-8 border-gray-300 border-t pt-8 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} {APP.NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
