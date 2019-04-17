# React Native Book

## Introduction

Facebook created React Native to build its mobile applications.
React that support new `render target` - native mobile UI widgets.

React Native uses a technique that makes asynchronous calls to the underlying mobile OS, which calls the native widget APIs. There's a JavaScript engine, and the React API is mostly the same as React for the Web. The difference is mostly with the target; instead of a DOM, there are asynchronous API calls.

1. The same React library that's used on the Web is used by React Native and runs in JavaScriptCore

2. Messages that are sent to native platform APIs are asynchronous and batched for performance purposes

3. React Native ships with components implemented for mobile platforms, instead of components that are HTML elements


The goal of React Native is React components everywhere, not write once run anywhere. 

## Core Components

React Native includes a few dozen core components which can be used out-of-the-box. More complex components can be built by combining the core components in interesting ways.

### View

Views are the most basic building block of React Native apps, much like how divs are the most basic building block of websites. Views are primarily used for styling and layout of children elements.

### Text

Text is used to render text. Unlike on the web, text must be wrapped in a Text component.

### ListView

 The React Native component you'll use to render lists is ListView. List views take a data source property, which must be a ListView.DataSource instance.