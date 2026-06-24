# Dynamic Sports Scoreboard

A clean, robust, and responsive scoreboard application built with HTML, CSS, and vanilla JavaScript. 

While initially a simple counter, this project has been upgraded to handle the complex scoring edge cases of various racquet and net sports, including win-by-two (deuce) scenarios and hard point ceilings.

## 🚀 Features

* **Multi-Sport Support:** Built-in presets for Badminton, Table Tennis, and Volleyball.
* **Dynamic Rule Enforcement:** Automatically calculates standard win conditions, 2-point lead requirements (deuce), and maximum score caps (e.g., the 30-point cap in Badminton).
* **Custom Game Mode:** Allows users to input a custom target score for non-standard games.
* **Real-time State Management:** Prevents further scoring once a win condition or cap is met, clearly indicating the winner.
* **Clean UI:** Minimalist interface focused purely on functionality and readability.

## 🛠️ Technologies Used

* **HTML5:** Semantic structure.
* **CSS3:** Styling and state-based visual cues (e.g., highlighting the winner).
* **JavaScript (ES6):** DOM manipulation and game logic.

## 🎮 How to Use

1.  Clone the repository or download the source files.
2.  Open `scoreboard.html` in your web browser.
3.  Use the dropdown menu to select a preset sport (Badminton, Table Tennis, Volleyball) or select "Custom Win Score".
4.  If "Custom" is selected, enter your target score in the input field and click **Set**.
5.  Click the **+1 PLAYER 1** or **+1 PLAYER 2** buttons to increment scores.
6.  The application will automatically announce the winner and lock the buttons once a valid win condition is met.
7.  Click **RESET** to clear the board and start a new game.

## 🧠 Core Logic & Extensibility 

The scoreboard relies on a centralized `rules` dictionary in `scoreboard.js` to manage the edge cases of different sports. 

```javascript
const rules = {
    badminton: { baseScore: 21, winByTwo: true, cap: 30 },
    tt: { baseScore: 11, winByTwo: true, cap: Infinity },
    volleyball: { baseScore: 25, winByTwo: true, cap: Infinity },
    custom: { baseScore: 0, winByTwo: false, cap: Infinity }
};