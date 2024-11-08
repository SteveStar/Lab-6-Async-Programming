function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms)); // universal time handler
}

// again ill just be commenting on one of these because although info is different, concept is the same.

async function obtainProfiles() {
    try {
    console.log("Fetching User Profiles. . ."); // gets the user profiles
    await delay(5000); // simulating delay
        console.log("User profiles obtained.");
        return "~~User Profile Data~~"; // returns information
    } catch (error) {
        console.error("Failed to fetch user profiles: ", error); // here to have individual error messages to each one
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
        console.log("Comments posted.");
        return "~~Comments Data~~";
    } catch (error) {
        console.log("Failed to fetch comments ", error);
        throw error;
    }
}

async function dataFetch() {
    try {
    const [profiles, posts, comments] = await Promise.all([ //stacks everything in an array
        obtainProfiles(),
        fetchPosts(),
        fetchComments()
    ]);
    console.log("All data fetched:", { profiles, posts, comments }); // drops everything at once
    } catch (error) {
        console.error("An error occured during fetching: ", error); //if there was an error at anypoint, its dropped here
    }
}

dataFetch();