# 🧱 Sokoban in Phaser Editor – Course Source Code

This repository contains the full source code for the **“Build a Sokoban Game with Phaser Editor”** YouTube course.

You’ll learn how to build a complete Sokoban-style puzzle game using **Phaser 3** and **Phaser Editor 2D**, including tilemaps, prefabs, scene transitions, and a clean separation between game logic and rendering.

📺 **Watch the full course playlist:**  
<a href="https://www.youtube.com/playlist?list=PLmcXe0-sfoShsedoTMWR-vMyLNk9d6JXw" target="_blank">
▶️ Build a Sokoban Game in Phaser Editor – Full Free Course
</a>

🎮 **Play the game demo:**  
<a href="https://galemius.itch.io/dungeon-sokoban" target="_blank">
🕹️ Dungeon Sokoban on itch.io
</a>

---

## 🚀 About This Project

Over the series, we build a small but complete Sokoban game with:

- Modular project structure  
- Custom Sokoban logic written in pure JavaScript  
- Tilemap-based level design  
- Player, box, and goal prefabs  
- Smooth fade transitions between scenes  
- Multiple fully playable levels  
- Clean scene flow architecture  

This repository includes:

- **Starting project files**  
- **One snapshot per video** (via tags)  
- **Completed version of the free course**  
- **All assets used in the project**  

If you're following along with the series, this repo is your reference point for every step.

---

## 📁 Repository Structure

```
/assets                        → Images, spritesheets, fonts, and asset packs
/phaserjs_editor_scripts_base  → Core script node libraries
/src
  /components                  → Component configuration in Phaser Editor
  /lib                         → Sokoban core engine (pure JS)
  /prefabs                     → Reusable blocks for text and other game objects
  /scenes                      → Boot, Preload, Title, and Level layouts & tilemap data
  /scripts                     → Script nodes for game manager and scene transitions
  /config.js                   → Common game code
  /main.js                     → Game configuration and creation
/index.html                    → Web app entry point
```

---

## 🏁 Getting Started

### 1️⃣ Install Phaser Editor 2D

This project uses **Phaser Editor 2D**, which includes its own development server and scene editor.

Download it here:

<a href="https://phaser.io/editor" target="_blank">Phaser Editor</a>

---

### 2️⃣ Open the Project

1. Open **Phaser Editor 2D**
2. Select **File → Open Project**
3. Choose this repository’s folder

---

### 3️⃣ Run the Game

Click the **Play** button inside Phaser Editor.

You should see the title screen and be able to start Level 1.

---

## 🧠 Course Roadmap

Each lesson builds on the last.

1. <a href="https://youtu.be/K2oj1JEI8qQ" target="_blank">Introduction & Full Game Demo</a>
2. <a href="https://youtu.be/k7j_gMQKuNU" target="_blank">Project Overview & Architecture Explained</a>
3. <a href="https://youtu.be/dHXSqUVsL6I" target="_blank">Setting Up Your Project in Phaser Editor</a>
4. <a href="https://youtu.be/1kSG1eRjOmg" target="_blank">Creating the Title Scene</a>
5. <a href="https://youtu.be/02nckm7XrKw" target="_blank">Understanding Prefabs in Phaser Editor</a> 
6. <a href="https://youtu.be/qZ6HZpx3cMc" target="_blank">Setting Up a Boot Scene (Loading Fonts & UI Assets)</a>  
7. <a href="https://youtu.be/4dyEsOezsuk" target="_blank">Building the Level Layout with Tilemaps</a>
8. <a href="https://youtu.be/vZdQUmqE9zM" target="_blank">Creating Player & Box Prefabs</a>  
9. <a href="https://youtu.be/JDXBQk1bfVE" target="_blank">Coding the Core Logic (Part 1)</a> 
10. <a href="https://youtu.be/GgJUZhsvmsI" target="_blank">Coding the Core Logic (Part 2)</a> 
11. <a href="https://youtu.be/LrTWUDF_Gx4" target="_blank">Testing the Sokoban Logic Engine</a> 
12. <a href="https://youtu.be/9kgGhp153gc" target="_blank">Building the Game Manager Script</a>
13. <a href="https://youtu.be/lrTxb29NDaY" target="_blank">Parsing Tilemap Data for Gameplay</a>  
14. <a href="https://youtu.be/2VCqyq6i6Vs" target="_blank">Connecting Logic to Phaser</a> 
15. <a href="https://youtu.be/VSEOO_JAP3o" target="_blank">Handling Input & Updating Sprites</a>
16. <a href="https://youtu.be/mMu3TjdT_lI" target="_blank">Adding More Levels to the Game</a>  
17. <a href="https://youtu.be/o_2l8njxXAk" target="_blank">Level Transitions & Next-Level Flow</a>
18. <a href="https://youtu.be/2o680jF0a5M" target="_blank">Final Polish & Improvements</a>
19. <a href="https://youtu.be/v_3f2AgA3sY" target="_blank">Wrap-Up & Next Steps</a>

---

## 🏷️ Versioning (Branches / Tags)

Each video has a corresponding project snapshot (via a tag).

Tags for each video:

```
v00-base
v03-setup
v04-main-menu
v05-prefabs
v06-boot-scene
v07-level-layout
v08-player-prefab
v09-core-logic-1
v10-core-logic-2
v12-game-manager
v13-parse-tilemap
v14-connect-logic
v15-input
v16-more-levels
v17-level-flow
v18-polish
v19-finished
```

To check out a snapshot:

```bash
git checkout v05-prefabs
```

---

## 🎁 Free Asset Pack + Project Files

You can download a **free asset pack**, **full source ZIP**, and **per-video project bundles** from Gumroad.

👉 Free download (Pay What You Want):

<a href="https://scottwestover.gumroad.com/l/sokoban-course" target="_blank">https://scottwestover.gumroad.com/l/sokoban-course</a>

---

## 🌟 Premium Version (Optional Upgrade)

A premium extended course includes:

- Move counter & scoring  
- Undo moves (Command Pattern)  
- Animated title scene  
- Sound effects & background music  
- Celebration effects  
- Level select scene 

👉 Premium course:

<a href="https://scottwestover.gumroad.com/l/sokoban-course" target="_blank">https://scottwestover.gumroad.com/l/sokoban-course</a>

---

## 🖼️ Screenshots

![Game play demo 1](/docs/demo1.gif?raw=true 'Demo 1')

![Game play demo 2](/docs/demo2.gif?raw=true 'Demo 2')

![Screen shot 4](/docs/screenshot4.png?raw=true 'Screenshot 4')

---

## 📝 Credits

- Game Engine: Phaser 3  
- Editor: Phaser Editor 2D  
- Course Creator: Scott Westover  
- Art Assets: Included in `/assets`
  - Press Start 2P font created by CodeMan38: <a href="https://fonts.google.com/specimen/Press+Start+2P" target="_blank">https://fonts.google.com/specimen/Press+Start+2P</a>
  - Dungeon Pack and UI Pack created by Toadzillart: <a href="https://toadzillart.itch.io/" target="_blank">https://toadzillart.itch.io/</a>

---

## ❤️ Support the Project

If you found this course helpful:

- ⭐ Star this repository  
- 🔔 Subscribe on YouTube  
- 💬 Leave a comment  
- ❤️ Support the project on Gumroad  

---

## 📬 Contact

- YouTube: <a href="https://www.youtube.com/@swestover" target="_blank">https://www.youtube.com/@swestover</a>
- X/Twitter: <a href="https://x.com/_scottwestover" target="_blank">https://x.com/_scottwestover</a>
- Bluesky: <a href="https://bsky.app/profile/scottwestover.dev" target="_blank">https://bsky.app/profile/scottwestover.dev</a>
- Linkedin: <a href="https://www.linkedin.com/in/scott-westover-77393a97" target="_blank">https://www.linkedin.com/in/scott-westover-77393a97</a>
- Blog: <a href="https://scottwestover.dev" target="_blank">https://scottwestover.dev</a>
