# Lab 3 — React Props and Movie Data

A React single-page application completing the exercises in the [Lab 3 brief](https://github.com/Data-Rep-MERN-Application/lab_three/blob/main/README.md), built on the Lab 2 Vite, Bootstrap, and React Router foundation.

## Run the app

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local address printed by Vite. Run `npm run build` to verify the production build and `npm run lint` to lint the application source.

## Exercise checklist

1. **Function components and props** — the navigation links to separate `Read` and `Create` components. Each renders an `h3` greeting. `Read` stores the supplied movie JSON and passes it to `Movies` as `myMovies`.
2. **Reusable movie components and effects** — `Movies` maps the JSON array to `MovieItem` components, passing each movie through the `mymovie` prop. `MovieItem` uses `useEffect` to log its movie prop when it mounts or changes.
3. **Bootstrap Cards** — every movie is rendered in a React-Bootstrap Card with the title in its header, poster in its body, and year in its footer.
4. **Git repository** — this folder is its own Git repository on `main`; the completed work is committed and pushed to the GitHub repository linked below.

## Where the exercise comments are

The source comments label the exercise tasks beside the implementation: routing in `src/App.jsx`, the JSON and `Read` component in `src/pages/Read.jsx`, array mapping in `src/components/Movies.jsx`, the effect and Bootstrap Card in `src/components/MovieItem.jsx`, and the `Create` component in `src/pages/Create.jsx`.

## Repository

[github.com/LUECHIAGYOH-STUDENT/lab3](https://github.com/LUECHIAGYOH-STUDENT/lab3)
