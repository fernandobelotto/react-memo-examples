# React Memoization Examples

This project demonstrates various memoization patterns in React using `memo`, `useMemo`, and `useCallback` hooks. It provides practical examples of how different types of props affect component re-rendering.

## Overview

The project includes several examples showcasing memoization behavior with:

- Simple props (strings/numbers)
- Arrays
- Objects
- Object properties
- Functions
- Nested object properties

Each example demonstrates the difference between memoized and non-memoized components, helping developers understand when and how to effectively use React's memoization features.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/fernandobelotto/react-memo-examples.git
cd react-memo-examples
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

## Examples

The project includes the following examples:

### 1. Simple Props (`StringNumbers.tsx`)

Demonstrates memoization with primitive values (strings and numbers).

### 2. Arrays (`Arrays.tsx`)

Shows how array references affect memoization and re-rendering.

### 3. Functions (`Functions.tsx`)

Illustrates the use of `useCallback` with function props.

### 4. Objects (`Objects.tsx`)

Demonstrates object reference equality and memoization.

### 5. Object Properties (`ObjectProperties.tsx`)

Shows how passing individual object properties affects memoization.

### 6. Nested Object Properties (`ObjectPropertiesNested.tsx`)

Illustrates memoization behavior with nested data structures.

## Key Concepts

- Components wrapped with `memo` only re-render when their props change
- `useMemo` helps maintain reference equality for objects and arrays
- `useCallback` maintains function reference equality
- Primitive values (strings, numbers) don't require memoization
- Nested objects and arrays require special consideration for effective memoization

## Development

Each example component includes a counter button to trigger parent re-renders, helping visualize when child components re-render under different memoization strategies.
