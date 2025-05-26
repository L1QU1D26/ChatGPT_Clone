# 🤖 ChatGPT Clone with Gemini API

A feature-rich ChatGPT clone powered by Google Gemini API and Firebase Firestore, built with Next.js 14 and TypeScript. ✨

![Next.js](https://img.shields.io/badge/.io/badge/TypeScript-blue?style=flat-square&logo=typescriptke UI/UX** with real-time messaging
- 🧠 **Google Gemini Pro/Flash** AI responses
- 📚 **Persistent chat history** with Firestore
- 🔐 **NextAuth authentication** (Google & GitHub)
- 🎛️ **Model selection** and conversation threading
- 📱 **Responsive design** with modern UI
- 🌙 **Dark/Light mode** support
- ⚡ **Real-time updates** and notifications
- 🔄 **Auto-sync** across devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Google Gemini API, Firebase Firestore
- **Authentication**: NextAuth.js
- **Database**: Firebase Firestore
- **Deployment**: Vercel
- **Styling**: Tailwind CSS + shadcn/ui

## 📦 Key Dependencies

- `@google/generative-ai` - Official Gemini SDK
- `firebase-admin` - Firestore server-side access
- `next-auth` - Authentication
- `react-firebase-hooks` - Real-time Firestore listeners
- `react-hot-toast` - Notifications
- `swr` - Data fetching

## 🚀 Setup Instructions

### 1. **Clone Repository**
```bash
git clone https://github.com/your-username/chatgpt-clone-gemini.git
cd chatgpt-clone-gemini
```

### 2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

### 3. **Configure Environment Variables**
Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000

# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Firebase Configuration
FIREBASE_SERVICE_ACCOUNT_KEY=your_firebase_service_account_json

# OAuth Providers
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret
```

### 4. **Firebase Setup** 🔥
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Set up Authentication (Google & GitHub providers)
4. Download service account key and add to `.env.local`

### 5. **Google Gemini API Setup** 🤖
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Create a new API key
3. Add the key to your `.env.local` file

### 6. **Run Development Server**
```bash
npm run dev
# or
yarn dev
```

### 7. **Open Application** 🌐
Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                   # Next.js 14 App Router
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth configuration
│   │   ├── askchat/       # Gemini API handler
│   │   └── engines/       # Model configuration
│   ├── chat/[id]/         # Dynamic chat pages
│   ├── signin/            # Authentication page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── Chat.tsx           # Chat interface
│   ├── ChatInput.tsx      # Message input
│   ├── Message.tsx        # Message bubbles
│   ├── SideBar.tsx        # Navigation sidebar
│   └── Header.tsx         # Top navigation
├── lib/                   # Utility functions
└── types/                 # TypeScript definitions
```

## 🎯 Key Features Explained

### 🔐 Authentication Flow
- **OAuth Integration**: Seamless login with Google & GitHub
- **Session Management**: Persistent user sessions with NextAuth
- **Protected Routes**: Secure access to chat functionality

### 💬 Real-time Chat
- **Instant Messaging**: Real-time message synchronization
- **Persistent History**: All conversations saved to Firestore
- **Multi-device Sync**: Access chats from any device

### 🧠 AI Integration
- **Gemini 1.5-Flash**: Fast, intelligent responses
- **Model Selection**: Switch between different Gemini models
- **Safety Settings**: Built-in content filtering
- **Error Handling**: Robust fallback mechanisms

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables

## 🔧 Configuration

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/chats/{chatId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.token.email == userId;
    }
  }
}
```

### Next.js Configuration
```javascript
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      }
    ],
  },
};
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini API** for powerful AI capabilities
- **Firebase** for real-time database and authentication
- **Next.js** for the amazing full-stack framework
- **Vercel** for seamless deployment

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me at [your-email@example.com]
- Connect with me on [LinkedIn](https://linkedin.com/in/your-profile)

---

**Built with ❤️ using Next.js, TypeScript, and Google Gemini API**

⭐ **Star this repository if you found it helpful!**

[](https://vercel.com/new/clone?repository-url=https://github.com/



---
