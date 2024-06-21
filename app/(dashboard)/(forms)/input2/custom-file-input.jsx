"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  InputGroup,
  InputGroupButton,
  InputGroupText,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CustomFileInput = () => {
  return (
    <>
      <InputGroup className="flex">
        <InputGroupText>Option</InputGroupText>
        <InputGroupText>Choose File</InputGroupText>
        <div className="flex-1">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="No File Chosen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="Mathmatics">Mathmatics</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="biology">Biology</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </InputGroup>
      <InputGroup>
        <Input type="file" placeholder="No file chosen" />
      </InputGroup>
      <InputGroup className="flex">
        <InputGroupButton>
          <Button color="secondary" variant="outline" size="lg">
            Success
          </Button>
        </InputGroupButton>
        <InputGroupText>Choose File</InputGroupText>
        <div className="flex-1">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="No File Chosen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="Mathmatics">Mathmatics</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="biology">Biology</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </InputGroup>
      <InputGroup>
        <InputGroupText>Choose File</InputGroupText>
        <Input type="file" placeholder="No file chosen" />
        <InputGroupButton>
          <Button color="secondary" variant="outline" size="sm">
            Success
          </Button>
        </InputGroupButton>
      </InputGroup>
    </>
  );
};

export default CustomFileInput;
