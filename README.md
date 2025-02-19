# React Native useEffect Cleanup Error: Accessing State After Unmount

This repository demonstrates a common, yet often difficult to debug, error in React Native applications involving the `useEffect` hook and its cleanup function. The issue arises when the cleanup function tries to access or manipulate component state after the component has unmounted. This often results in cryptic error messages or unexpected behavior.

## Problem

The `bug.js` file contains a component that uses `setInterval` to update state.  The cleanup function attempts to log the state (`count`) after the interval is cleared.  If the component unmounts before the cleanup function executes, accessing `count` will lead to an error.

## Solution

The `bugSolution.js` demonstrates a corrected version where we add a check to ensure the component is still mounted before accessing or modifying state within the cleanup function.  This prevents the error from occurring.  This is done using a ref to check component mounted status. 

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the application (e.g., using Expo).
4. Navigate to the component. You may need to repeatedly mount/unmount the component quickly to trigger the error in `bug.js`.