# Redux Counter

A project that shows how Redux Toolkit works. It has a counter you can change and toggle, and a fake login that shows and hides a user profile. All state lives in a typed Redux store.

## Highlights

- Counter with increment, decrement and "increase by 10" actions
- Button that shows and hides the counter value
- Login form that switches the page to a user profile (no real authentication)
- Navigation in the header appears only when you are logged in
- Two independent slices combined in one store
- Typed hooks, so state and dispatch are checked by TypeScript

## Built With

- React 18
- TypeScript
- Redux Toolkit and React Redux
- CSS Modules
- Create React App (`react-scripts`)
- Vercel for hosting

## How It Works

| Concept | Where | What it does |
|---|---|---|
| Slice | `counter.ts` | Holds `counter` and `showCounter`, with `increment`, `decrement`, `increase` and `toggleCounter` reducers |
| Slice | `auth.ts` | Holds `isAuthenticated`, with `login` and `logout` reducers |
| Store | `store/index.ts` | Combines both reducers and exports the `RootState` and `AppDispatch` types |
| Typed hooks | `store/hooks.ts` | `useAppDispatch` and `useAppSelector` with the store types applied |
| Payload action | `increase` | Receives the amount to add as a typed `PayloadAction<number>` |
| Provider | `index.tsx` | Makes the store available to every component |
| Conditional rendering | `App.tsx`, `Header.tsx` | Shows the login form or the profile, and the navigation, depending on `isAuthenticated` |

## Run Locally

You need Node.js 18 or newer and npm.

```
npm install
npm start
```

The app opens at http://localhost:3000.

## Deployment

1. Push the project to GitHub. Make sure `tsconfig.json` is committed, otherwise the build cannot find the `.tsx` files.
2. Import the repository in Vercel and use the Create React App preset: build command `npm run build`, output directory `build`.
3. Deploy. Every push to `main` redeploys the app.

No environment variables are needed.

## Project Layout

```
src/
  components/
    Auth.tsx              login form
    Counter.tsx           counter and its buttons
    Header.tsx            header with navigation and logout
    UserProfile.tsx       page shown after login
  store/
    index.ts              store and shared types
    counter.ts            counter slice
    auth.ts               auth slice
    hooks.ts              typed Redux hooks
  App.tsx                 root component
  index.tsx               entry point with the Provider
  index.css               global styles
public/
  index.html
tsconfig.json
```

## Limitations

- The login is only a demo: any input works, and nothing is checked or saved.
- State is kept in memory, so the counter and the login reset when the page is reloaded.
- The header links ("My Products", "My Sales") do not lead anywhere.
