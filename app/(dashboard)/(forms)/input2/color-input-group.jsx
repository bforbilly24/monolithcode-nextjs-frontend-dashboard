"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupButton,
  InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@iconify/react";

const ColorInputGroup = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText color="primary">
          <Icon icon="heroicons:at-symbol" />
        </InputGroupText>
        <Input type="text" color="primary" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <Input type="text" color="info" placeholder="Search.." />
        <InputGroupText color="info">
          <Icon icon="heroicons:at-symbol" />
        </InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupButton>
          <Button disabled variant="outline" size="sm" color="secondary">
            <Icon icon="heroicons:at-symbol" />
          </Button>
        </InputGroupButton>
        <Input disabled type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <InputGroupText color="warning">
          <Icon icon="heroicons:at-symbol" />
        </InputGroupText>
        <Input color="warning" readOnly type="text" placeholder="Search.." />
      </InputGroup>
      <div>
        <Label className="mb-3" htmlFor="username4">
          Password
        </Label>
        <InputGroup>
          <Input
            color="destructive"
            type="password"
            placeholder="Password"
            id="username4"
            required
          />
        </InputGroup>
      </div>
      <InputGroup>
        <Input type="text" color="success" placeholder="Recient’s username" />
        <InputGroupText color="success">@example.com</InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText color="primary">
          https://example.com/users/
        </InputGroupText>
        <Input
          type="text"
          variant="flat"
          color="primary"
          placeholder="Recient’s username"
        />
      </InputGroup>
      <InputGroup>
        <InputGroupText color="success">$10</InputGroupText>
        <Input type="text" variant="flat" color="success" placeholder="100" />
        <InputGroupText color="success">00.</InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText variant="flat" color="warning">
          With textarea
        </InputGroupText>
        <Textarea color="warning" type="text" placeholder="Comments" />
      </InputGroup>
    </>
  );
};

export default ColorInputGroup;
