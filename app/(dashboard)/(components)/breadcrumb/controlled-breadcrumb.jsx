import React, { useState } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const ControlledBreadcrumb = () => {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      <Breadcrumbs underline="active" onAction={(key) => setCurrentPage(key)}>
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

export default ControlledBreadcrumb;
