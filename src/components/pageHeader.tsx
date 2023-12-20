import React from "react";
import Link from "next/link";

const PageHeader = () => {
    return ( 
        <header>
        <Link href="/">Home</Link> - 
        <Link href="List">Pokémon List</Link>
      </header>
    );
}
 
export default PageHeader;