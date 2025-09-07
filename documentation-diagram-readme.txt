# Formal Engineering Documentation & Diagrams

## 1. SDLC Methods Followed

**Software Development Life Cycle (SDLC) Approach:**
- Requirement Analysis
- System Design
- Implementation (Coding)
- Testing
- Deployment
- Maintenance

**Methodology:**
- Agile (Iterative development, regular feedback, incremental releases)
- Version control via Git (feature branches, pull requests, code reviews)

---

## 2. System Architecture Diagram

```
[User] 
   |
   v
[React Frontend] <----> [Express Backend API] <----> [MongoDB Database]
```

- Frontend communicates with backend via RESTful API.
- Backend handles authentication, business logic, and data storage.
- Database stores users, products, orders, etc.

---

## 3. Flowchart: User Authentication

```
[User submits login/signup form]
        |
        v
[Frontend sends API request]
        |
        v
[Backend receives request]
        |
        v
[Validate credentials]
   |         |
   v         v
[Success] [Failure]
   |         |
   v         v
[Issue JWT] [Return error]
   |
   v
[Frontend stores token, updates UI]
```

---

## 4. Class Diagram (Backend Example)

```
+-------------------+
|     User          |
+-------------------+
| - _id: ObjectId   |
| - name: String    |
| - email: String   |
| - password: String|
+-------------------+
| +comparePassword()|
+-------------------+

+-------------------+
|   Product         |
+-------------------+
| - _id: ObjectId   |
| - name: String    |
| - price: Number   |
| - image: String   |
| - category: String|
+-------------------+
| +getDiscounted()  |
+-------------------+
```

---

## 5. Development Planning Diagram

**Agile Sprint Board Example:**

```
[Backlog] -> [To Do] -> [In Progress] -> [Code Review] -> [Done]
```

- Tasks move through columns as development progresses.

---

## 6. How to Create Diagrams

- Use draw.io, Lucidchart, or VS Code extensions for diagrams.
- For markdown, use Mermaid syntax for flowcharts and class diagrams.

**Example Mermaid Flowchart:**

```mermaid
flowchart TD
    A[User] --> B[Frontend]
    B --> C[Backend API]
    C --> D[MongoDB]
```

**Example Mermaid Class Diagram:**

```mermaid
classDiagram
    class User {
        +ObjectId _id
        +String name
        +String email
        +String password
        +comparePassword()
    }
    class Product {
        +ObjectId _id
        +String name
        +Number price
        +String image
        +String category
        +getDiscounted()
    }
```

---

## 7. Documentation Planning

- Include SDLC methodology and rationale.
- Add architecture and flow diagrams.
- Document key classes and their relationships.
- Use diagrams to clarify user flows (e.g., authentication, cart management).
- Maintain a changelog and sprint summaries.

---

Let this file serve as a template for formal engineering documentation, planning, and diagramming for your MERN project. You can use these sections and diagrams in markdown, Mermaid, or export to image formats for reports and presentations.
