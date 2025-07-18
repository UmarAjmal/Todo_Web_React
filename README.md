# Todo Web React

This project is a simple and modern Todo List web application built using React and Bootstrap. It allows users to add, view, and manage daily tasks with a clean and responsive interface.

## Recent Updates
- The todo list is now fully dynamic: users can add new tasks with a name and due date, and these are immediately displayed in the list.
- Tasks can be deleted individually, and the list updates in real time.
- When there are no tasks, a custom welcome message is shown to the user.
- Improved state management: the todo list is now managed entirely with React state, and the initial list is empty for a more realistic user experience.
- All components and props have been refactored for clarity and maintainability.
- Fixed various bugs related to state updates, prop passing, and component exports.

## Features
- **Add Tasks:** Users can add new tasks with a description and a due date.
- **View Tasks:** All tasks are displayed in a structured list with clear separation and styling.
- **Delete Tasks:** Users can remove tasks from the list when completed or no longer needed.
- **Responsive Design:** The layout adapts to different screen sizes for a seamless experience on desktop and mobile devices.
- **Consistent Styling:** Utilizes Bootstrap for layout and buttons, with custom CSS for enhanced appearance and spacing.

## Technologies Used
- [React](https://react.dev/) (Functional Components)
- [Bootstrap 5](https://getbootstrap.com/) (for grid and UI elements)
- Custom CSS for additional styling and responsiveness

## Project Structure
- `src/App.jsx`: Main application component, renders the overall layout.
- `src/components/Name.jsx`: Displays the app name or header.
- `src/components/Add_Todo.jsx`: Input form for adding new tasks.
- `src/components/TodoItems.jsx`: Renders the list of todo items.
- `src/components/TodoItem.jsx`: Displays a single todo item with delete functionality.
- `src/components/WelcomeMessage.jsx`: Shows a welcome message when the todo list is empty.
- `src/App.css`: Contains all custom styles for layout, spacing, and appearance.

## How to Run
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Customization
- You can add more features such as editing tasks, marking as complete, or saving to local storage.
- The design can be further customized by editing `src/App.css` or updating Bootstrap classes in the components.

## Screenshots


---

This project is intended for learning and demonstration purposes, showcasing basic React concepts and Bootstrap integration in a real-world scenario.
