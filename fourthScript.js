function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

// this is generally the same as before, but this time ive added a simulated error below.

async function obtainProfiles() {
    try {
    console.log("Fetching User Profiles. . .");
    await delay(5000);
        console.log("User profiles obtained.");
        return "~~User Profile Data~~";
    } catch (error) {
        console.error("Failed to fetch user profiles: ", error);
        throw error;
    }
}

async function fetchPosts() {
    try {
    console.log("Finding Posts. . .");
    await delay(2000);
        console.log("Posts loaded.");
        return "~~Posts Data~~";
    } catch (error) {
        console.error("Failed to fetch user profiles: ", error);
        throw error;
    }
}

async function fetchComments() {
    try {
    console.log("Loading Comments. . .");
    await delay(3000);


        if (Math.random() < 0.2) {
            throw new Error("Failed to fetch comments");  // if it meets that 20% chance, creates a new error
        }
        /*simulated error, just a random number between 0 and 1, in a 20% chance itll fail */

        console.log("Comments posted.");
        return "~~Comments Data~~";
    } catch (error) {
        console.log("Failed to fetch comments ", error);
        return null; //fills the space will null, creating the error
    }
}

async function dataFetch() {
    try {
    const [profiles, posts, comments] = await Promise.all([
        obtainProfiles(),
        fetchPosts(),
        fetchComments()
    ]);

    if (comments === null) { //checks if null was found during the run
        console.log("Some data could not be fetched. Comments were skipped.");
    }

        console.log("All data fetched:", { profiles, posts, comments });
    } catch (error) {
        console.error("An error occured during fetching: ", error);
    }
}

dataFetch();