import { Heading } from "@chakra-ui/react";
import Logo from "@components/Layout/Logo";
import Head from "next/head";

const Custom500 = () => {
  return (
    <>
      <Head>
        <title>Erro no servidor • CEOS</title>
        <meta name="description" content="CEOS Capacitacao" />
      </Head>
      <div className="flex h-screen flex-col items-center justify-center gap-8">
        <Logo className="h-1/3 w-1/4 text-primary" />
        <Heading>500 - Um erro no servidor ocorreu</Heading>
      </div>
    </>
  );
};

export default Custom500;
