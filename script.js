// Explicit image mapping for all outfits and moods
const imageMap = {
    Casual: {
        neutral: "Casual/Aiko_Frown.png",
        happy: "Casual/Aiko_Smile.png",
        angry: "Casual/Aiko_Shout.png",
        talk: "Casual/Aiko_Smile_Blush.png",
        touch: "Casual/Aiko_Shout_Blush.png"
    },
    Gym: {
        neutral: "Gym/Aiko_Gym_Frown.png",
        happy: "Gym/Aiko_Gym_Smile.png",
        angry: "Gym/Aiko_Gym_Shout.png",
        talk: "Gym/Aiko_Gym_Smile_Blush.png",
        touch: "Gym/Aiko_Gym_Shout_Blush.png"
    },
    
};

// Background mapping based on interactions
const bgMap = {
    default: "Living.png",
    play: "Playground.png",
    feed: "Kitchen.png",
    talk: "Living.png",
    angry: "living2.png",
    touch: "Bedroom.png"
};

// Default outfit and mood
let currentOutfit = "Casual";
let currentMood = "neutral";

// Get elements
const aikoImg = document.getElementById("aiko-img");
const outfitSelect = document.getElementById("outfit-select");

// Idle timeout
let idleTimer;

// Function to reset idle timer
function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
        setMood("angry");
        changeBackground("angry");
    }, 20000);
}

// Function to change outfit
function changeOutfit() {
    currentOutfit = outfitSelect.value;
    setMood("neutral");
    changeBackground("default");
    resetIdleTimer();
}

// Function to handle user interactions
function interact(action) {
    resetIdleTimer();
    let mood = "neutral"; 

    if (action === "feed") {
        mood = "happy";
        playAnimation("eating");
        showDialogue(foodDialogues);
    } else if (action === "talk") {
        mood = "talk";
        playAnimation("talking");
        showDialogue(dialogues);
    } else if (action === "play") {
        mood = "neutral";
    }

    setMood(mood);
    changeBackground(action);
}

// Function to handle touching Aiko
function touchAiko() {
    setMood("touch");
    changeBackground("touch");
    resetIdleTimer();
}

// Function to update image based on current outfit and mood
function setMood(mood) {
    currentMood = mood;
    aikoImg.src = imageMap[currentOutfit][mood];
}

// Function to update background based on action
function changeBackground(action) {
    document.body.style.backgroundImage = `url('${bgMap[action] || bgMap.default}')`;
}

// Function to play animations
function playAnimation(type) {
    if (type === "eating") {
        aikoImg.classList.add("eating-animation");
        setTimeout(() => {
            aikoImg.classList.remove("eating-animation");
        }, 2000);
    } else if (type === "talking") {
        aikoImg.classList.add("talking-animation");
        setTimeout(() => {
            aikoImg.classList.remove("talking-animation");
        }, 1500);
    }
}

// Start idle timer when page loads
resetIdleTimer();

// List of dialogues and their matching audio files
const dialogues = [
    { text: "Hello! How are you? 😊", audio: "hello.wav" },
    { text: "You're my best friend! 💖", audio: "bestfriend.wav" },
    { text: "Let's play together! 🎮", audio: "play.wav" },
    { text: "Yay! Talking to you is fun! ✨", audio: "fun.wav" },
    { text: "What should we do next? 🤔", audio: "next.wav" }
];

// List of food-related dialogues
const foodDialogues = [
   { text: "So delicious and crunchy! 🍽️", audio: "chew.wav" },
    { text: "Mmm... So tasty! 🤤", audio: "munch.wav" },
    { text: "Wow! So juicy and fresh! 🍏", audio: "bite.wav" }
];

// Function to show Aiko speaking with voice
function showDialogue(dialogueList) {
    const speechBox = document.getElementById("speech-box");

    // Pick a random dialogue
    let randomIndex = Math.floor(Math.random() * dialogueList.length);
    let selectedDialogue = dialogueList[randomIndex];

    // Set text
    speechBox.innerText = selectedDialogue.text;
    speechBox.style.display = "block";

    // Play voice
    let audio = new Audio(selectedDialogue.audio);
    audio.play();

    // Hide speech after 3 seconds
    setTimeout(() => {
        speechBox.style.display = "none";
    }, 3000);
}

function playGame() {
    window.open("game.html", "_blank");
}




