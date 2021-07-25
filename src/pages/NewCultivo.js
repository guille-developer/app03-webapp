import React from "react";
import NewCultureForm from "src/components/NewCultureForm";
import RiegoComponentsList from "src/components/Riego";
import SeedsCollection from "src/components/SeedsColection";

const NewCulture = () => {
    return (
        <>
            {/* Hero section */}
            <section className="">
                {/* Headlines */}
                <h1 className="text-center text-green-800 text-4xl	">New Culture</h1>
        <SeedsCollection/>

                <NewCultureForm />

            </section>
        </>
    );
};

export default NewCulture;
