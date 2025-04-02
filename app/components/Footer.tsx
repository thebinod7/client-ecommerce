import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} MINIMAL. All rights reserved.</p>
      </div>
    </footer>
  );
}
