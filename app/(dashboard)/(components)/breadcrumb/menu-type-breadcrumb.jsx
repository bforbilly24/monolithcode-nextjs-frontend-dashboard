import React, { useState } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const MenuTypeBreadcrumb = () => {
  const [currentPage, setCurrentPage] = useState("breadcrumb");
  return (
    <>
      <Breadcrumbs
        className="gap-2"
        separator={null}
        modifier="menu"
        onAction={(key) => setCurrentPage(key)}
        itemClasses="border px-4 py-1  rounded-md data-[state=active]:border-primary data-[state=active]:text-primary-foreground data-[state=active]:bg-primary "
      >
        <BreadcrumbItem
          key="home"
          isCurrent={currentPage === "home"}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </BreadcrumbItem>
        <BreadcrumbItem
          key="dashboard"
          isCurrent={currentPage === "dashboard"}
          onClick={() => setCurrentPage("dashboard")}
        >
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem
          key="advanced ui"
          isCurrent={currentPage === "advanced ui"}
          onClick={() => setCurrentPage("advanced ui")}
        >
          Advanced UI
        </BreadcrumbItem>
        <BreadcrumbItem
          key="component"
          isCurrent={currentPage === "component"}
          onClick={() => setCurrentPage("component")}
        >
          Component
        </BreadcrumbItem>
        <BreadcrumbItem
          key="breadcrumb"
          isCurrent={currentPage === "breadcrumb"}
          onClick={() => setCurrentPage("breadcrumb")}
        >
          Breadcrumb
        </BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
};

export default MenuTypeBreadcrumb;
