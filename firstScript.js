function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms)); // my universal handler for time that ill likely use throughout here
}

// async functions follow the same scheme so ill comment only for one

async function obtainProfiles() { //begins the promise for obtaining the profiles
    console.log("Fetching User Profiles. . .");
    return delay(5000).then(() => { // delay to simulate loading time
        console.log("User profiles obtained."); // confirmation
        return "~~User Profile Data~~\n"; // return
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

obtainProfiles() // begins with profiles
    .then(profiles => {
        console.log("Profiles Data:" ,profiles);
        return fetchPosts();
    })
    .then(posts => { // then posts
        console.log("Posts Data:", posts);
        return fetchComments();
    })
    .then(comments => { // then comments
        console.log("Comments Data:", comments);
    })
    .catch(error => { //if anything goes wrong, error to catch
        console.error("An error occurred:", error);
    });
