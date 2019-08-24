warsawjs-workshop-35-legacy-code
================================

A **legacy code** application to work on at [WarsawJS Workshop #35](https://warsawjs.com/workshops).

## Prerequisites

- Installed `git` (version >= 2.x.x)
- Installed `node.js` (version >= 10.x.x).
- Installed `npm` (version >= 6.x.x)

## Preparation

1. **Fork** this repository on GitHub. ([How to fork a repo on GitHub?](https://help.github.com/en/articles/fork-a-repo))

2. **Clone** your fork of the repository. ([How to clone a repo from GitHub?](https://help.github.com/en/articles/cloning-a-repository))

## Workshop scenario

Imagine you are about to start working on a **report-printing** module, that is a part of a **habit-tracking** application.

It happens to be a legacy application, with codebase far from being perfect. You've heard that the previous developers complained about the code being hard to understand and maintain. Also, there have been a number of bugs reported, still waiting to be fixed. To make matters worse, there are no automated tests to cover the application.

So far the module printed the reports to the terminal in text format, but now your boss would like it to provide report data to be displayed on a web page, too.

Fortunately, your boss understands what legacy code is and that good code quality will be beneficial in the long run. That's why you are now free to focus on improving the codebase state and preparing it for further development.

#### Main objectives

- The app is bug free.
- The app can generate data to be later displayed on a web page.
- The app is easy to maintain and extend.

#### Reported bugs

1. The name of the last reported habit is not displayed.
2. The best- and current-streak bars are not aligned properly.
3. The counter of streak lengths shows incorrect values.
4. There is a newly added habit "No chocolate, no cookies", but only a part of its name is displayed.
5. "Morning exercise" habit's best streak is 14 days, but the application only shows 9.
6. In the last-7-days report the bars are not displayed in the same row as the habit name.

## Running the app

- Best streaks report: `npm run best-streaks`
- Current streaks report: `npm run current-streaks`
- Last 7 days report: `npm run last-7-days`
