---
title: "Introduction to React Hooks"
author: "Bikash Pokhrel"
date: 2024-10-10
tags: ["React", "Hooks", "Frontend-Development", "Web-Development"]
summary: "An introductory guide to using hooks in React."
coverImageUrl: "cover-image.png"
authorImageUrl: "bikash.jpeg"
slug: "introduction-to-react-hooks"
---

React Hooks are functions that let you use state and other React features without writing a class. This post will introduce you to the basic hooks and how to use them in your functional components.

### Basic Hooks

The most commonly used hooks are `useState` and `useEffect`.

#### Using useState

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
