# How to run the application.

The website is hosted using GitHub Pages: \
https://startbit96.github.io/audio-analyzer/

# How to run the application locally.

1. Clone the repository. \
   `git clone git@github.com:startbit96/audio-analyzer.git`
2. Change into the project directory and install the dependencies. \
   `cd audio-analyzer` \
   `npm install`
3. Build the Rust-files. \
   `npm run wasm` \
   or manually: \
   `cd audio-analyzer-lib` \
   `wasm-pack build --target web`
4. Change back into the project-root-directory and start the application. \
   `npm run dev`
