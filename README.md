# Running the app

Tools:
- [node](https://nodejs.org/)
- [yarn](https://yarnpkg.com/)
  

1. Clone the repository
   
   ```bash
   git clone https://github.com/michalsuchorski/frontend-task
   ```
2. Navigate to the project directory
   
   ```bash
   cd frontend-task
   ```
3. Install dependencies
   
   ```bash
   yarn install
   ```
4. Start development server

   ```bash
   yarn dev
   ```

5. App will be available at: [http://localhost:5173](http://localhost:5173)

  # Building final files
  ```bash
  yarn build
  ```

  - This will generate `bundle.js`, `style.css`, and `index.html` in the dist/ folder.

  ## Running the build

  ```bash
  yarn preview
  ```
  App preview will be available at: [http://localhost:4173](http://localhost:4173)

# Architectural decisions

  I structured the code into three main areas: 
  - scenes,
  - styles, which are divided into components to ensure easy modifications when needed, 
  - utils,
    
  This organization ensures that the project is clear and easy to navigate for someone seeing the code for the first time.
  It also helps scale the project and improves team collaboration by allowing developers to work on separate parts without conflicts.

# Technological decisions
  - [Vite](https://vite.dev/) as the build tool for its fast development server and optimized build process, which enhances overall productivity
  - JavaScript for all application logic due to its modern features and wide browser support
  - For animations I used [GSAP](https://gsap.com) - although it was my first time working with this library, I found it very simple to use. It’s lightweight and can be powerful
  - [SASS](https://sass-lang.com/) as a CSS extension, because it significantly improves writing and scaling styles by allowing nesting, variables and more
  - I integrated [Swiper.js](https://swiperjs.com/) to create a gallery with minimal setup. It was my first time using this library, and I found it enjoyable to work with

  

  
   
