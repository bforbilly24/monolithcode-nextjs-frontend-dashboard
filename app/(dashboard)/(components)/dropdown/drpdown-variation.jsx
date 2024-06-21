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

const DropdownVariation = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Hidden Arrow</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Hover
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <Icon icon="heroicons:home-solid" className=" h-5 w-5 mr-2 " />
            Hover
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <Icon
              icon="heroicons:ellipsis-vertical-20-solid"
              className=" h-5 w-5"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary/10 focus:text-primary">
            Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropdownVariation;
