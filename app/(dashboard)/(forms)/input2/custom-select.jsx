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

const CustomSelect = () => {
  return (
    <>
      <InputGroup className="flex">
        <InputGroupText>Option</InputGroupText>
        <div className="flex-1">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose.." />
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
      <InputGroup className="flex">
        <div className="flex-1">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose.." />
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
        <InputGroupText>Option</InputGroupText>
      </InputGroup>
      <InputGroup className="flex">
        <InputGroupButton>
          <Button color="secondary" variant="outline" size="lg">
            Success
          </Button>
        </InputGroupButton>
        <div className="flex-1">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose.." />
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
      <InputGroup className="flex">
        <div className="flex-1">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose.." />
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
        <InputGroupButton>
          <Button color="secondary" variant="outline" size="lg">
            Success
          </Button>
        </InputGroupButton>
      </InputGroup>
    </>
  );
};

export default CustomSelect;
