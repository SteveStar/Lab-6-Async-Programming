function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

// if youve been checking out the last 4 scripts, youre about up to date on the formatting. Go below to the new/last lab request

async function obtainProfiles() {
    console.log("Fetching User Profiles. . .");
    return delay(5000).then(() => {
        console.log("User profiles obtained.");
        return "~~User Profile Data~~\n";
    });
}

async function fetchPosts() {
    console.log("Finding Posts. . .");
    return delay(2000).then(() => {
        console.log("Posts loaded.");
        return "~~Posts Data~~\n";
    });
}

async function fetchComments() {
    console.log("Loading Comments. . .");
    return delay(3000).then(() => {
        console.log("Comments posted.");
        return "~~Comments Data~~\n";
    });
}

async function getUserContent() { // the async function to grab everything together
    try {
        const profiles = await obtainProfiles();
        //console.log("Profiles Data: ", profiles);

        const posts = await fetchPosts();
        //console.log("Posts Data, ", posts);

        const comments = await fetchComments();
        //console.log("Comments Data, ", comments);

        const totalData = { profiles, posts, comments };
        console.log("All data fetched:", totalData); // grabs it all together and throws them into one

    } catch (error) {
        console.error("An error Occured:", error);
    }
}

getUserContent();