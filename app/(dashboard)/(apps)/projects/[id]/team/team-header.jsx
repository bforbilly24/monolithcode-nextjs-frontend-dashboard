
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { LayoutGrid, Plus, Search } from "lucide-react";

const TeamHeader = () => {
  return (
    <>
      <div className="flex-1">
        <div className='text-lg font-medium text-default-900'>Team Members</div>
        <div className='text-sm font-medium text-default-600'>Total 58 assigned members in this project</div>
      </div>
      <div className="flex-none flex flex-wrap items-center gap-3">
        <Button
          type="button"
          size="icon"
          className="bg-transparent hover:bg-transparent border border-primary/70 p-0 h-9 w-9"
        >

          <LayoutGrid className="w-5 h-5 text-primary" />
        </Button>
        <Button
          type="button"
          size="icon"
          className="bg-transparent hover:bg-transparent border border-default-300 p-0 h-9 w-9"
        >
          <Icon icon="heroicons:list-bullet" className="w-6 h-6 text-primary" />
        </Button>
        <div className="relative">
          <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-2 text-default-400" />
          <Input type="search" className="pl-7" />
        </div>
        <div>
          <Button
            type="button"
            className="whitespace-nowrap"
          >
            <Plus className="w-4 h-4 mr-1" />
            Invite member
          </Button>
        </div>
      </div>
    </>
  );
};

export default TeamHeader;