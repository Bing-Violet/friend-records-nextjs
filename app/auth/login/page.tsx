"use client";

import NextLink from "next/link";
import { LoginForm } from "@/components/forms";
// import { SocialButtons } from '@/components/common';
import type { Metadata } from "next";
import { Heading, Center, Text, Flex, Link } from "@chakra-ui/react";
// export const metadata: Metadata = {
//   title: "Full Auth | Login",
//   description: "Full Auth login page",
// };

export default function Page() {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Heading textAlign={"center"}>Login</Heading>
        <LoginForm />
        <Text mt={"1rem"} textAlign={"center"}>
          Don&apos;t have an account?{" "}
          <Link
            as={NextLink}
            color={"#7e7eff"}
            href="/auth/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </Link>
        </Text>
      </Flex>
    </>
  );
}
