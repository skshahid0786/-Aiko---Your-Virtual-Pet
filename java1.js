// Aiko's Image List with Correct Expressions
const aikoImages = [
    // Casual Outfits
    "Casual/Aiko_Frown.png",
    "Casual/Aiko_Smile.png",
    "Casual/Aiko_Shout.png",
    "Casual/Aiko_Smile_Blush.png",
    "Casual/Aiko_Shout_Blush.png",

    // Gym Outfits
    "Gym/Aiko_Gym_Frown.png",
    "Gym/Aiko_Gym_Smile.png",
    "Gym/Aiko_Gym_Shout.png",
    "Gym/Aiko_Gym_Smile_Blush.png",
    "Gym/Aiko_Gym_Shout_Blush.png",

    // Summer Uniform
    "SummerUniform/Aiko_SummerUni_Frown.png",
    "SummerUniform/Aiko_SummerUni_Smile.png",
    "SummerUniform/Aiko_SummerUni_Shout.png",
    "SummerUniform/Aiko_SummerUni_Smile_Blush.png",
    "SummerUniform/Aiko_SummerUni_Shout_Blush.png",

    // Winter Uniform
    "WinterUniform/Aiko_WinterUni_Frown.png",
    "WinterUniform/Aiko_WinterUni_Smile.png",
    "WinterUniform/Aiko_WinterUni_Shout.png",
    "WinterUniform/Aiko_WinterUni_Smile_Blush.png",
    "WinterUniform/Aiko_WinterUni_Shout_Blush.png"
];

let aikoImageIndex = 0;

// Change Aiko's Image Every 5 Seconds
setInterval(() => {
    const aikoElement = document.getElementById("aiko-character");
    aikoImageIndex = (aikoImageIndex + 1) % aikoImages.length;
    aikoElement.src = aikoImages[aikoImageIndex];
}, 7000);
