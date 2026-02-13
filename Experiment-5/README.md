🧪 Experiment 1 – Component Lazy Loading
🎯 Aim

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

🧪 Experiment 2 – Route-Based Lazy Loading in SPA
🎯 Aim

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


<img width="1899" height="853" alt="Screenshot 2026-02-13 161238" src="https://github.com/user-attachments/assets/195da406-4ef1-4212-ac1a-8394b67ab9ae" />
<img width="1919" height="870" alt="Screenshot 2026-02-13 161155" src="https://github.com/user-attachments/assets/a022b423-a365-4ddf-8c77-8bdeaf66757d" />
<img width="1915" height="871" alt="Screenshot 2026-02-13 161258" src="https://github.com/user-attachments/assets/6386010a-59ff-4130-8b35-0b396840a074" />
<img width="1899" height="853" alt="Screenshot 2026-02-13 161238" src="https://github.com/user-attachments/assets/b59bdeb9-3f65-4d5b-a7dc-4777a65a521d" />

<img width="1919" height="859" alt="Screenshot 2026-02-13 161340" src="https://github.com/user-attachments/assets/52c85a6b-aadc-4b8d-80d3-579fd6265455" />
<img width="1918" height="856" alt="Screenshot 2026-02-13 161311" src="https://github.com/user-attachments/assets/c516cc97-bf62-4274-80c5-b1612956dbfd" />




