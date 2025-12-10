# Training center – React web application for workouts

Training center is a web application developed with **React** that allows users to create, view and share workouts.

## Основни функции

- **Register and login** – every user have own account
- **Create workout** – adding custom workouts
- **Catalog** – list of all uploaded workouts
- **My workouts** – personal page with your workouts
- **Workout details** – detailed description of selected workout
- **Edit** - if you are the creator of the workout, you can edit it
- **Delete** - if you are the creator of the workout, you can delete it

---

## Технологии

- **Frontend:** React 19.2.0
- **API:** SoftUni REST API

---

## 🚀 Започване

### Предпоставки

- Node.js >= 20
- React:
  ```bash
  npm create vite
  ```

Инсталирай зависимости:

```bash
  npm install
```

Стартиране (Dev)

```bash
npm run dev
```

---

### Structure

```text
src/
├─ assets/      # Header and footer components
├─ components/  # All components used in the application
├─ context/     # User and Training context files
├─ styles/      # CSS files for every component
└─ utils/       # Utils used in application
```

---

### Navigation and routes

```text
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<NotLoggedGuard />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/catalog">
          <Route index element={<Catalog />} />
          <Route path="details/:_id" element={<Details />} />
          <Route element={<LoggedGuard />}>
            <Route path="details/:_id/delete" element={<Delete />} />
            <Route path="details/:_id/edit" element={<Edit />} />
          </Route>
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route element={<LoggedGuard />}>
          <Route path="create" element={<Create />} />
          <Route path="mytrainings" element={<Mytrainings />} />
        </Route>
        <Route path="/search" element={<Search />} />
      </Routes>
```

**NotLoggedGuard** - you can if you are **NOT** logged  
**LoggedGuard** -you can if you are logged

---

### Access and roles

- **Guest:** sees the catalog and details without creating. -
- **User:** can create, like, see "My Workouts".
- **Workout Creator:** you can edit and delete your own workouts.
