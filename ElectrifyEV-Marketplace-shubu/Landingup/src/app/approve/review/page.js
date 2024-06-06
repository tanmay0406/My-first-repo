import React from "react";

const ReviewPage = () => {
    // Retrieve the name from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    return (
        <div className="container mx-auto pt-16">
            <h1 className="text-2xl text-center mb-4">Review Page</h1>
            <p className="text-center">Hey! {name} Sit back and relax! We will review your EV.</p>
        </div>
    );
};

export default ReviewPage;
