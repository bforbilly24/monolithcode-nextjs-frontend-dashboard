import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const SplitDropdown = () => {
  return (
    <>
      <div className="flex">
        <Button className=" rounded-tr-none rounded-br-none">Primary</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className=" rounded-l-none border-l border-primary-foreground/30 "
              size="icon"
            >
              <Icon icon="heroicons:chevron-down" className=" h-5 w-5  " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[196px]" align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <Button className=" rounded-tr-none rounded-br-none" color="success">
          Success
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="success"
              className=" rounded-l-none border-l border-success-foreground/30 "
              size="icon"
            >
              <Icon icon="heroicons:chevron-down" className=" h-5 w-5  " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[196px]" align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <Button className=" rounded-tr-none rounded-br-none" color="warning">
          Warning
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="warning"
              className=" rounded-l-none border-l border-warning-foreground/30 "
              size="icon"
            >
              <Icon icon="heroicons:chevron-down" className=" h-5 w-5  " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[196px]" align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <Button
          className=" rounded-tr-none rounded-br-none"
          color="destructive"
        >
          Danger
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="destructive"
              className=" rounded-l-none border-l border-destructive-foreground/30 "
              size="icon"
            >
              <Icon icon="heroicons:chevron-down" className=" h-5 w-5  " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[196px]" align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex">
        <Button className=" rounded-tr-none rounded-br-none" color="info">
          Info
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              color="info"
              className=" rounded-l-none border-l border-info-foreground/30 "
              size="icon"
            >
              <Icon icon="heroicons:chevron-down" className=" h-5 w-5  " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[196px]" align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default SplitDropdown;
