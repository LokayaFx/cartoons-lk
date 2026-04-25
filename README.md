# 📺 CartoonsLK — සිංහල කාටූන් Archive

A professional, dark-themed Video Directory Website for classic Sri Lankan Sinhala-dubbed cartoons.  
Built with **HTML + Vanilla JS + Tailwind CSS + Firebase** — no backend server required.

---

## 🗂 Project Structure

```
cartoons-lk/
├── index.html             # Public homepage — card grid + instant search
├── login.html             # Firebase login (Google + Email/Password)
├── admin.html             # Protected admin dashboard (CRUD)
├── firestore.rules        # Firestore security rules (copy to Firebase Console)
├── css/
│   └── style.css          # Shared custom styles
└── js/
    ├── firebase-config.js # Firebase init + admin email config
    ├── app.js             # Homepage logic (load + search)
    ├── auth.js            # Login page logic
    └── admin.js           # Admin dashboard logic (Firestore CRUD)
```

---

## ⚙️ Setup Instructions

### Step 1 — Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Open your project (or create one)
3. Enable **Authentication** → Sign-in Methods → **Google** + **Email/Password**
4. Add your admin email under **Authentication → Users** (if using Email/Password)

### Step 2 — Enable Firestore

1. Firebase Console → **Firestore Database** → **Create database**
2. Choose **Start in test mode** (we'll add proper rules next)
3. Pick a server location close to Sri Lanka (e.g. `asia-south1`)

### Step 3 — Set Firestore Security Rules

1. Go to **Firestore Database → Rules** tab
2. Copy the contents of `firestore.rules` and paste it there
3. Click **Publish**

### Step 4 — Add Authorized Domain

1. **Authentication → Settings → Authorized domains**
2. Add your hosting domain (e.g. `your-site.netlify.app` or `username.github.io`)

---

## 🌐 Free Hosting Options

Since this is a **fully static site** (no PHP, no server), you can host it for free:

### Option A — GitHub Pages (Recommended)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USER/cartoons-lk.git
git push -u origin main
```
Then: **Repository Settings → Pages → Deploy from main branch**

### Option B — Netlify
1. Go to [netlify.com](https://netlify.com) → drag & drop the project folder
2. Done! Gets a free `.netlify.app` subdomain

### Option C — Vercel
```bash
npx vercel --prod
```

> **Important:** After deploying, add your live domain to Firebase **Authorized domains**!

---

## 🔐 How Authentication Works

```
Browser                              Firebase
  │                                     │
  │── Sign in (Google / Email+PW) ─────→│
  │←── Auth token ──────────────────────│
  │                                     │
  │── Check: email === ADMIN_EMAIL?     │
  │── If yes → show admin.html          │
  │── If no  → sign out + show error    │
  │                                     │
  │── Firestore write ─────────────────→│
  │   (rules verify auth.token.email)   │
  │←── Success / Denied ────────────────│
```

Security is enforced at **two levels**:
1. **Client-side** — `admin.js` checks `auth.currentUser.email`
2. **Server-side** — Firestore rules reject writes from non-admin emails

---

## 📦 Firestore Data Schema

Collection: `cartoons`

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Cartoon title (Sinhala or English) |
| `thumbnail_url` | string | YouTube thumbnail or image URL |
| `redirect_url` | string | Link to YouTube/Dailymotion/Archive.org |
| `createdAt` | timestamp | Auto-set on creation (used for sorting) |

---

## 🚀 Features

| Feature | Details |
|---------|---------|
| **No backend needed** | Pure HTML/JS — host anywhere for free |
| **Instant search** | Vanilla JS real-time filtering |
| **Click → new tab** | Opens video link externally (no embedding) |
| **Firebase Auth** | Google popup + Email/Password |
| **Firestore CRUD** | Add, Edit, Delete with live preview |
| **Retro TV aesthetic** | CRT scanline overlay, orange glow, dark mode |
| **Mobile responsive** | Works on all screen sizes |
| **Skeleton loaders** | Smooth loading states |

---

*© CartoonsLK. All trademarks belong to their respective owners.*
