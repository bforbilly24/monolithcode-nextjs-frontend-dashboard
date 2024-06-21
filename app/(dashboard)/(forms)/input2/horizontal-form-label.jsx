"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";

const HorizontalFormLabel = () => {
  return (
    <>
      <Label htmlFor="userName3" className="flex-none md:w-[100px]">
        Username
      </Label>
      <InputGroup>
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
        <Input type="text" placeholder="Username" id="userName3" />
      </InputGroup>
    </>
  );
};

export default HorizontalFormLabel;
