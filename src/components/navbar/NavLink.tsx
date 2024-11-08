"use client";

import Link from "next/link";
import React from "react";

const NavLink = ({ name, slug }: { name: string; slug: string }) => {
  return (
    <Link
      href={slug || "/"}
      className="text-lg font-medium ring-secondary hover:text-primary hover:underline rounded-lg duration-300 px-3 py-1"
    >
      {name}
    </Link>
  );
};

export default NavLink;
