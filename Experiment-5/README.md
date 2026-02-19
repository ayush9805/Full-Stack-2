## 🧪 Experiment 1 – Component Lazy Loading

## 🎯 Aim

To optimize frontend performance by implementing lazy loading of components in a React Single Page Application using React.lazy() and Suspense.

📖 Description

In this experiment, lazy loading is applied at the component level. Instead of loading all components during the initial application render, selected components are loaded dynamically only when they are needed.

React’s built-in lazy loading mechanism allows dynamic importing of components, while Suspense provides a fallback UI during loading.

🔍 What Was Implemented

Created multiple React components.

Applied dynamic component loading.

Used fallback UI during component loading.

Observed improved initial load performance.

✅ Outcome

Reduced initial bundle size.

Faster application startup.

Improved user experience with loading indicators.

<img width="1919" height="866" alt="Screenshot 2026-02-13 161125" src="https://github.com/user-attachments/assets/586428c1-cc38-4c89-ad9a-4dfd7142b834" />

<img width="1919" height="870" alt="Screenshot 2026-02-13 161155" src="https://github.com/user-attachments/assets/ec5f559e-67c9-43fe-b435-0ea18691402e" />

## 🧪 Experiment 2 – Route-Based Lazy Loading in SPA
## 🎯 Aim

To implement route-based lazy loading to improve performance in a React Single Page Application.

📖 Description

In this experiment, lazy loading is applied to route components. Each route’s component is loaded only when the user navigates to that specific route.

This approach ensures that only the required resources are loaded during navigation, making the application more scalable and efficient.

🔍 What Was Implemented

Configured routing for multiple pages.

Applied lazy loading to route components.

Wrapped routes with loading fallback handling.

Tested navigation behavior to verify dynamic loading.

✅ Outcome

Faster initial page load.

Optimized memory usage.

Efficient loading of route-specific components.

🛠 Technologies Used

React

React Router DOM

JavaScript (ES6+)

Node.js

Vite / Create React App (based on setup)


📈 Key Learnings

Understanding of performance optimization in React applications.

Practical implementation of lazy loading techniques.

Difference between component-level and route-level lazy loading.

Importance of reducing initial bundle size in SPAs.

<img width="1890" height="859" alt="Screenshot 2026-02-19 105153" src="https://github.com/user-attachments/assets/b0f56aa6-5d18-4c46-9c9b-1c66ea67ea1f" />
<img width="1903" height="866" alt="Screenshot 2026-02-19 105239" src="https://github.com/user-attachments/assets/94fe345e-2356-4ebe-8575-d36d9e56e0c4" />
<img width="1891" height="874" alt="Screenshot 2026-02-19 105220" src="https://github.com/user-attachments/assets/7779efcb-a0df-4905-a276-a27000ea9f00" />
<img width="1903" height="866" alt="Screenshot 2026-02-19 105239" src="https://github.com/user-attachments/assets/8d2a27e8-0e0a-477d-a223-e9ad3b58139b" />
<img width="1897" height="865" alt="Screenshot 2026-02-19 105206" src="https://github.com/user-attachments/assets/749addc1-9677-43f8-a71a-53284ac438f5" />



