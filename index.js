const beautifyGoals = (goalsList, htmlElement) => {
  // create fragment
  const fragment = document.createDocumentFragment();

  // create list
  const ul = document.createElement("ul");
  ul.classList.add("team-goals-list");

  goalsList.forEach((goal) => {
    if (!goal || !goal.length) return;

    const li = document.createElement("li");
    li.textContent = goal;

    ul.appendChild(li);
  });

  fragment.appendChild(ul);

  // replace html content by the beautify version
  htmlElement.innerHTML = "";
  htmlElement.appendChild(fragment);
};

const run = () => {
  console.warn("[Jira-Extension] Starting Jira Extension");

  const boardHEader = document.querySelector(
    '[data-testid="software-board.header.title.container"] + div'
  );

  if (boardHEader) {
    boardHEader.style.whiteSpace = "pre-line";
    boardHEader.classList.add("team-goal");

    // [OPTIONAL] - Beautify goals
    const allItems = boardHEader.innerHTML.split("- ");

    if (allItems.length) {
      beautifyGoals(allItems, boardHEader);
    }
    // ====
  } else {
    console.warn("[Jira-Extension] No header element found :(");
  }
};

setTimeout(() => {
  run();
}, 3000);
