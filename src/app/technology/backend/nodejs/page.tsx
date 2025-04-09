"use client";

import Hero from "./hero";
import List from "./list";
import Partner from "./Partner";
import Services from "./service";
import Expertise from "./expertise";
import Solution from "./solutions";
import Performance from "./performance";
import ExpertiseAcross from "./experianceacross";

export default function Node() {
    return (
        <main>
            <Hero />
            <Services />
            <Solution />
            <Expertise />
            <Performance />
            <List />
            <Partner />
            <ExpertiseAcross />
        </main>
    );
}
