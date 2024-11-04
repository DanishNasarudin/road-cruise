"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SlidersHorizontalIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex gap-4 px-4">
      <Input
        onChange={(e) => setSearch(e.currentTarget.value)}
        className={"rounded-lg w-full text-base"}
        isSearch={true}
        placeholder={"Search for roads.."}
      />
      <Button
        size={"icon"}
        asChild
        variant={"ghost"}
        className="hover:bg-transparent w-[24px] mx-2"
      >
        <SlidersHorizontalIcon className="text-zinc-500 hover:text-zinc-500" />
      </Button>
    </div>
  );
};

export default SearchBar;
