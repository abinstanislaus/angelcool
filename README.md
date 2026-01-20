# Angel Cool - Premium Home Appliance Services

A beautiful, modern Flutter application for Angel Cool - your reliable neighborhood expert for AC, Refrigerator, and Washing Machine maintenance services.

## 🎨 Design Features

### Color Theme
- **Primary Gradient**: Purple to Cyan (`#7B68EE → #5B9BD5 → #00BCD4`)
- **Light Blue Header**: `#5DADE2`
- **Dark Navy Footer**: `#2C3E50` and `#1A252F`

### UI/UX Highlights
✨ **Premium Design** - Modern, professional "Urban Company-level" experience
✨ **Smooth Animations** - Hover effects, scale transforms, and transitions
✨ **Responsive Layout** - Works beautifully on desktop, tablet, and mobile
✨ **Gradient Text** - Eye-catching gradient effects on hero title
✨ **Interactive Cards** - Service cards with elevation and hover animations
✨ **Wave Clipper** - Custom wave shape at hero section bottom

## 📱 Sections

1. **Navigation Bar**
   - Fixed header with logo
   - Navigation links (Home, Services, Booking, Contact, Cart)
   - Scroll-based transparency effect
   - Responsive mobile menu

2. **Hero Section**
   - Large gradient background
   - Compelling headline with gradient text
   - Professional hero image
   - Call-to-action button with hover effects
   - Custom wave clipper at bottom

3. **Services Section**
   - Three service cards:
     - AC Repair & Installation
     - Washing Machine Repair
     - Preventative Maintenance
   - Animated hover effects
   - Scale animations on icons
   - "Learn More" buttons

4. **Why Choose Us Section**
   - Dark navy background
   - Five key benefits:
     - Experienced Technicians
     - Timely Service
     - Affordable Prices
     - Best Rates
     - Customer Satisfaction
   - Decorative gradient circle
   - Icon animations on hover

5. **Footer Section**
   - Company logo and info
   - Contact details
   - Newsletter subscription form
   - Social media links
   - Copyright notice

## 🚀 Getting Started

### Prerequisites
- Flutter SDK (3.8.1 or higher)
- Dart SDK
- Windows/macOS/Linux development environment

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd C:/projects/angelcool
   ```

2. **Install dependencies**
   ```bash
   flutter pub get
   ```

3. **Run the app**
   ```bash
   # For Windows
   flutter run -d windows
   
   # For Web
   flutter run -d chrome
   
   # For Android
   flutter run -d android
   
   # For iOS
   flutter run -d ios
   ```

## 📦 Dependencies

- `flutter`: SDK
- `google_fonts`: ^6.1.0 - Premium typography (Inter & Outfit fonts)
- `cupertino_icons`: ^1.0.8 - iOS-style icons

## 📁 Project Structure

```
lib/
├── main.dart                          # App entry point
├── screens/
│   └── home_screen.dart              # Main home screen with scroll controller
├── widgets/
│   ├── custom_navbar.dart            # Navigation bar with scroll effects
│   ├── hero_section.dart             # Hero section with gradient text
│   ├── services_section.dart         # Services cards with animations
│   ├── why_choose_us_section.dart    # Benefits section
│   └── footer_section.dart           # Footer with newsletter form
└── utils/
    └── colors.dart                    # Color constants and gradients

assets/
├── logo.png                           # Angel Cool logo
└── hero_image.jpg                     # Hero section image
```

## 🎯 Key Features

### Animations
- **Hover Effects**: All interactive elements respond to mouse hover
- **Scale Animations**: Icons and cards scale smoothly on interaction
- **Transform Animations**: Cards translate vertically on hover
- **Gradient Animations**: Smooth color transitions
- **Scroll Effects**: Navbar changes opacity based on scroll position

### Responsive Design
- **Desktop**: Full-width layout with side-by-side content
- **Tablet**: Adjusted spacing and grid layouts
- **Mobile**: Stacked layout with mobile menu

### Typography
- **Headings**: Outfit font family (bold, modern)
- **Body Text**: Inter font family (clean, readable)
- **Gradient Text**: Shader mask for hero title

## 🎨 Customization

### Colors
Edit `lib/utils/colors.dart` to change the color scheme:
```dart
static const Color primaryPurple = Color(0xFF7B68EE);
static const Color primaryBlue = Color(0xFF5B9BD5);
static const Color primaryCyan = Color(0xFF00BCD4);
```

### Fonts
Fonts are managed through Google Fonts. Change in `lib/main.dart`:
```dart
textTheme: GoogleFonts.interTextTheme(),
```

### Assets
Replace images in the `assets/` folder:
- `logo.png` - Company logo
- `hero_image.jpg` - Hero section background image

## 🔧 Development

### Hot Reload
Press `r` in the terminal to hot reload changes while the app is running.

### Hot Restart
Press `R` in the terminal to hot restart the app.

### Build for Production

```bash
# Windows
flutter build windows

# Web
flutter build web

# Android
flutter build apk

# iOS
flutter build ios
```

## 📱 Platform Support

- ✅ Windows
- ✅ Web
- ✅ Android
- ✅ iOS
- ✅ macOS
- ✅ Linux

## 🌟 Brand Identity

**Angel Cool** positions itself as:
- **Reliable Neighborhood Expert** - Trustworthy and local
- **Premium Service Provider** - Professional, high-quality service
- **Urban Company-level Experience** - Modern, digital-first approach
- **Specialized Expertise** - Focus on AC, Refrigerator, and Washing Machine services

## 📞 Contact Information

- 📍 Kochi Ernakulam
- 📍 Address 60 Hillcrest
- 📞 (0481) 6360 11021
- 📱 06 1293 2183 7388
- 📧 6000+ Trusted Customers

## 📄 License

This project is private and proprietary to Angel Cool.

---

**Built with ❤️ using Flutter**
