"use client";

import { Center, Box } from "@chakra-ui/react";
import { useAppSelector } from "@/redux/hooks";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return (
    <Center w={"100%"}>
      <Box w={isAuthenticated ? "600px" : "100%"}>{children}</Box>
    </Center>
  );
}
