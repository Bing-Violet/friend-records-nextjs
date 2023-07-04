import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
  Button,
  useBoolean,
  useDisclosure,
} from "@chakra-ui/react";
import { PopoverCloseContext } from "@/contexts";
import React from "react";

interface Style {
  color: string;
  bg: string;
  border: string;
}
interface PopoverProps {
  trigger: JSX.Element;
  body: JSX.Element;
  switchableButton?: boolean;
  header?: string;
  style?: Style;
}

export default function CustomPopover({
  trigger,
  body,
  header,
  switchableButton,
  style,
}: PopoverProps) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [isEditing, setIsEditing] = useBoolean();

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <PopoverCloseContext.Provider
          value={switchableButton ? { close, isEditing } : onClose}
        >
          {switchableButton ? (
            <>
              <Popover
                isOpen={isEditing}
                onOpen={setIsEditing.on}
                onClose={setIsEditing.off}
                closeOnBlur={false}
              >
                {children}
              </Popover>
            </>
          ) : (
            <>
              <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                {children}
              </Popover>
            </>
          )}
        </PopoverCloseContext.Provider>
      </>
    );
  };
  return (
    <>
      <Wrapper>
        <PopoverTrigger>
          <Box>{trigger}</Box>
        </PopoverTrigger>
        <PopoverContent {...style}>
          {typeof style === "undefined" && <PopoverArrow />}
          <PopoverCloseButton />
          {header && <PopoverHeader>{header}</PopoverHeader>}
          <PopoverBody>{body}</PopoverBody>
        </PopoverContent>
      </Wrapper>
    </>
  );
}
