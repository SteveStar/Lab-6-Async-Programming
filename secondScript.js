// sequential fetching
console.log("~~Sequential Fetching~~\n");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms)); // universal time handler
}

// async functions follow the same scheme so ill comment only for one [2]

async function obtainProfiles() { // handles profiles
    console.log("Fetching User Profiles. . ."); // fetching profiles
    return delay(5000).then(() => { // simulates delay
        console.log("User profiles obtained."); // gets profiles
        return "~~User Profile Data~~\n"; // returns information
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

// similar to the first one because it was sequential, parallel is below

function fetchSequentially() {
    obtainProfiles()
        .then(profiles => { 
         console.log("Profiles Data:" ,profiles);
            return fetchPosts();
        })
        .then(posts => {
            console.log("Posts Data:", posts);
            return fetchComments();
        })
        .then(comments => {
            console.log("Comments Data:", comments);
            console.log("End of script");
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
}

fetchSequentially();

///////////////////////////// parallel version

/*
function fetchParallel() {
    console.log("~~Parallel Fetching~~\n");
    return Promise.all([obtainProfiles(), fetchPosts(), fetchComments()])
        .then(([profiles, posts, comments]) => {
            console.log("Profiles Data: ", profiles);
            console.log("Posts Data: ", posts);
            console.log("Comments Data: ", comments);
            console.log("End of script.");
        })
        .catch(error => {
            console.error("An error occurred: ", error);
        });
}
*/