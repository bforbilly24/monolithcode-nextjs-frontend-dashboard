"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const DropdownMenuCheckboxItemColor = () => {
  const [showStatusBar1, setShowStatusBar1] = useState(false);
  const [showStatusBar2, setShowStatusBar2] = useState(false);
  const [showStatusBar3, setShowStatusBar3] = useState(false);
  const [showStatusBar4, setShowStatusBar4] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Primary
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px] " align="start">
          <DropdownMenuLabel className="text-primary">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <DropdownMenuCheckboxItem  checked={showStatusBar1}
            onCheckedChange={setShowStatusBar1} className=" focus:bg-primary/10 focus:text-primary cursor-pointer data-[state=checked]:text-primary">
            Profile
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar2}
            onCheckedChange={setShowStatusBar2} className=" focus:bg-primary/10 focus:text-primary cursor-pointer data-[state=checked]:text-primary">
            Billing
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar3}
            onCheckedChange={setShowStatusBar3} className=" focus:bg-primary/10 focus:text-primary cursor-pointer data-[state=checked]:text-primary">
            Team
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar4}
            onCheckedChange={setShowStatusBar4} className=" focus:bg-primary/10 focus:text-primary cursor-pointer data-[state=checked]:text-primary">
            Subscription
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="success">
            Success
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel className="text-success">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem  checked={showStatusBar1}
            onCheckedChange={setShowStatusBar1} className=" focus:bg-success/10 focus:text-success cursor-pointer data-[state=checked]:text-success">
            Profile
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar2}
            onCheckedChange={setShowStatusBar2} className=" focus:bg-success/10 focus:text-success cursor-pointer data-[state=checked]:text-success">
            Billing
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar3}
            onCheckedChange={setShowStatusBar3} className=" focus:bg-success/10 focus:text-success cursor-pointer data-[state=checked]:text-success">
            Team
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar4}
            onCheckedChange={setShowStatusBar4} className=" focus:bg-success/10 focus:text-success cursor-pointer data-[state=checked]:text-success">
            Subscription
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="warning">
            warning
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel className="text-warning">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem  checked={showStatusBar1}
            onCheckedChange={setShowStatusBar1} className=" focus:bg-warning/10 focus:text-warning cursor-pointer data-[state=checked]:text-warning">
            Profile
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar2}
            onCheckedChange={setShowStatusBar2} className=" focus:bg-warning/10 focus:text-warning cursor-pointer data-[state=checked]:text-warning">
            Billing
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar3}
            onCheckedChange={setShowStatusBar3} className=" focus:bg-warning/10 focus:text-warning cursor-pointer data-[state=checked]:text-warning">
            Team
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar4}
            onCheckedChange={setShowStatusBar4} className=" focus:bg-warning/10 focus:text-warning cursor-pointer data-[state=checked]:text-warning">
            Subscription
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="destructive">
            Danger
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel className="text-destructive">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem  checked={showStatusBar1}
            onCheckedChange={setShowStatusBar1} className=" focus:bg-destructive/10 focus:text-destructive cursor-pointer data-[state=checked]:text-destructive">
            Profile
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar2}
            onCheckedChange={setShowStatusBar2} className=" focus:bg-destructive/10 focus:text-destructive cursor-pointer data-[state=checked]:text-destructive">
            Billing
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar3}
            onCheckedChange={setShowStatusBar3} className=" focus:bg-destructive/10 focus:text-destructive cursor-pointer data-[state=checked]:text-destructive">
            Team
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar4}
            onCheckedChange={setShowStatusBar4} className=" focus:bg-destructive/10 focus:text-destructive cursor-pointer data-[state=checked]:text-destructive">
            Subscription
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button color="info">
            info
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel className="text-info">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem  checked={showStatusBar1}
            onCheckedChange={setShowStatusBar1} className=" focus:bg-info/10 focus:text-info cursor-pointer data-[state=checked]:text-info">
            Profile
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar2}
            onCheckedChange={setShowStatusBar2} className=" focus:bg-info/10 focus:text-info cursor-pointer data-[state=checked]:text-info">
            Billing
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar3}
            onCheckedChange={setShowStatusBar3} className=" focus:bg-info/10 focus:text-info cursor-pointer data-[state=checked]:text-info">
            Team
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  checked={showStatusBar4}
            onCheckedChange={setShowStatusBar4} className=" focus:bg-info/10 focus:text-info cursor-pointer data-[state=checked]:text-info">
            Subscription
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropdownMenuCheckboxItemColor;
