# Credio AI - Landing Page

A professional Next.js landing page for Credio AI, an AI-powered lending-as-a-service platform. This landing page showcases the comprehensive AI lending platform with direct links to live demos of each feature.

## 🚀 Features

- **Modern Design**: Professional fintech-inspired design with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Live Demo Integration**: Direct links to the Streamlit AI lending platform
- **Interactive Elements**: Hover effects, smooth scrolling, and animated backgrounds
- **Performance Optimized**: Built with Next.js 15 and Tailwind CSS

## 🎯 Demo Links

The landing page includes "See Demo" buttons that link directly to different sections of the AI lending platform:

- **KYC/KYB Verification**: `/Onboarding_KYC_KYB`
- **Credit Scoring**: `/Credit_Scoring`
- **AI Marketing**: `/Marketing`
- **Customer Service**: `/Customer_Service`
- **Collections**: `/Collections`
- **Database Chat**: `/Database_Chat`

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.0
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel, Render, or any Node.js hosting

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd credio-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Select framework: Next.js
   - Configure build settings (auto-detected)

4. **Custom Domain (Optional)**
   ```bash
   vercel domains add yourdomain.com
   ```

### Deploy to Render

1. **Connect Repository**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Build Settings**
   ```
   Build Command: npm run build
   Start Command: npm start
   Environment: Node
   ```

3. **Environment Variables**
   ```
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to Netlify
   - Or connect GitHub repository for automatic deployments

### Deploy to Railway

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and deploy**
   ```bash
   railway login
   railway init
   railway up
   ```

### Deploy to DigitalOcean App Platform

1. **Create App**
   - Go to DigitalOcean App Platform
   - Create new app from GitHub repository

2. **Configure**
   ```
   Build Command: npm run build
   Run Command: npm start
   Environment Variables: NODE_ENV=production
   ```

## 🔧 Configuration

### Update Demo URLs

To change the Streamlit demo URLs, edit the `demoUrl` constant in `src/app/page.tsx`:

```typescript
const demoUrl = "https://your-streamlit-app-url.com";
```

### Customize Styling

- **Colors**: Edit Tailwind classes in components
- **Animations**: Modify CSS animations in `src/app/globals.css`
- **Layout**: Update component structure in `src/app/page.tsx`

### Add New Sections

1. Create new section component
2. Add to main page layout
3. Update navigation links if needed

## 📁 Project Structure

```
credio-ai/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main landing page
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🎨 Customization

### Brand Colors

Update the color scheme by modifying Tailwind classes:

```typescript
// Primary brand colors
className="bg-blue-600 text-white"           // Primary buttons
className="text-blue-600"                    // Links and accents
className="bg-gradient-to-r from-blue-600 to-purple-600"  // Gradients
```

### Typography

Customize fonts in `tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Your Font', 'sans-serif'],
      }
    }
  }
}
```

### Animations

Add custom animations in `src/app/globals.css`:

```css
@keyframes yourAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.your-animation {
  animation: yourAnimation 2s infinite;
}
```

## 🔗 Integration

### Analytics

Add Google Analytics or other tracking:

```typescript
// In layout.tsx or page.tsx
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### Contact Forms

Integrate with form services like Formspree or Netlify Forms:

```typescript
<form action="https://formspree.io/f/your-form-id" method="POST">
  <input type="email" name="email" required />
  <button type="submit">Submit</button>
</form>
```

## 📱 Mobile Optimization

The landing page is fully responsive with:

- **Mobile-first design**: Tailwind's responsive utilities
- **Touch-friendly buttons**: Adequate spacing and sizing
- **Optimized images**: Next.js Image component with lazy loading
- **Fast loading**: Optimized bundle size and code splitting

## 🔒 Security

- **No sensitive data**: All demo URLs are public
- **HTTPS ready**: Works with SSL certificates
- **CSP compatible**: Content Security Policy friendly
- **XSS protection**: React's built-in protections

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for Google's standards
- **Bundle Size**: Minimized with Next.js optimization
- **Loading Speed**: Fast initial page load and navigation

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear cache and reinstall
   rm -rf .next node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Styling Issues**
   ```bash
   # Rebuild Tailwind
   npm run build
   ```

3. **Deployment Issues**
   - Check Node.js version compatibility
   - Verify environment variables
   - Review build logs for errors

### Support

For issues related to:
- **Landing Page**: Check this README and Next.js documentation
- **AI Platform**: Refer to the Streamlit application repository
- **Deployment**: Consult your hosting provider's documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions or support:
- **Email**: support@credio.ai
- **Website**: https://credio.ai
- **Documentation**: https://docs.credio.ai

---

**Built with ❤️ using Next.js and Tailwind CSS**
