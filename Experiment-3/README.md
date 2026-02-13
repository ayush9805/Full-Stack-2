# Experiment 1: Basic Client-Side Routing Using React Router

## 📌 Aim
To implement basic client-side routing in a Single Page Application (SPA) using React Router.

## ⚙️ Software Requirements
* **Node.js**
* **React** (Vite or Create React App)
* **React Router DOM** (Library)
* **Web Browser** (Chrome/Edge/Firefox)

## 📖 Theory
Routing in a Single Page Application (SPA) allows navigation between different views or components without reloading the entire page. 

**React Router** is the standard library for routing in React. It enables the implementation of dynamic routing using key components:
* **`<BrowserRouter>`**: Wraps the application to enable routing context.
* **`<Routes>`**: A container for all the individual route definitions.
* **`<Route>`**: Defines the mapping between a specific URL path and a Component.
<img width="1919" height="874" alt="image" src="https://github.com/user-attachments/assets/e2161000-b5c9-476d-9e81-e7fec05143e3" />
<img width="1916" height="859" alt="image" src="https://github.com/user-attachments/assets/e6a3c8b5-f2a8-4e26-9e59-56a3179fe471" />
<img width="1919" height="863" alt="image" src="https://github.com/user-attachments/assets/225e9784-3302-4568-bc2b-a056040a16fc" />

# Experiment 2: Navigation Using Link Component

## 📌 Aim
To implement navigation links in a Single Page Application (SPA) using the React Router `Link` component.

## ⚙️ Software Requirements
* **Node.js**
* **React**
* **React Router DOM**
* **Web Browser**

## 📖 Theory
In standard HTML, navigation is performed using the anchor `<a>` tag, which causes the browser to refresh the page and reload all resources.

In a React Single Page Application (SPA), we want to change the view **without** reloading the page. The **`Link`** component from `react-router-dom` is used to create links that update the URL and render the new component instantly.

<img width="1918" height="867" alt="image" src="https://github.com/user-attachments/assets/c716e68b-04df-49a9-a463-67e11611c60b" />
<img width="1919" height="926" alt="image" src="https://github.com/user-attachments/assets/67e5a6a9-17cf-47fc-9ed8-b87f996c05ee" />
<img width="1912" height="857" alt="image" src="https://github.com/user-attachments/assets/b2a87451-99e4-4f6c-8bf5-518e556e2717" />
<img width="1918" height="876" alt="image" src="https://github.com/user-attachments/assets/b9f41e8a-5713-4072-bf47-19901f1e508d" />
# Experiment 3: Multi-Page SPA Using Routing

## 📌 Aim
To create a multi-page Single Page Application (SPA) using client-side routing.

## ⚙️ Software Requirements
* **Node.js**
* **React**
* **React Router DOM**
* **Web Browser**

## 📖 Theory
A **Multi-Page SPA** behaves like a traditional multi-page website to the user (with distinct URLs and views), but it is technically a single HTML page that dynamically updates its content. 

By mapping specific components to distinct URL paths (routes), we can create the illusion of navigating between different pages (like Home, About, Contact, Services) without the performance cost of refreshing the page for every click. This results in a faster, more fluid user experience.

<img width="1896" height="850" alt="image" src="https://github.com/user-attachments/assets/448d33ed-4094-4957-8db8-a6aa5f35edce" />
<img width="1917" height="863" alt="image" src="https://github.com/user-attachments/assets/1aa92fd7-eda4-46a3-a70a-46fadafe53a5" />
