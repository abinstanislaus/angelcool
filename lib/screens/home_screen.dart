import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../utils/colors.dart';
import '../widgets/custom_navbar.dart';
import '../widgets/hero_section.dart';
import '../widgets/services_section.dart';
import '../widgets/why_choose_us_section.dart';
import '../widgets/footer_section.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final ScrollController _scrollController = ScrollController();
  bool _isScrolled = false;

  // Global keys for sections
  final GlobalKey _homeKey = GlobalKey();
  final GlobalKey _servicesKey = GlobalKey();
  final GlobalKey _bookingKey = GlobalKey();
  final GlobalKey _contactKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_onScroll);
  }

  void _onScroll() {
    if (_scrollController.offset > 100 && !_isScrolled) {
      setState(() => _isScrolled = true);
    } else if (_scrollController.offset <= 100 && _isScrolled) {
      setState(() => _isScrolled = false);
    }
  }

  void scrollToSection(GlobalKey key) {
    final context = key.currentContext;
    if (context != null) {
      Scrollable.ensureVisible(
        context,
        duration: const Duration(milliseconds: 800),
        curve: Curves.easeInOut,
        alignment: 0.0,
      );
    }
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Main Content
          SingleChildScrollView(
            controller: _scrollController,
            child: Column(
              children: [
                const SizedBox(height: 100), // Space for fixed navbar
                Container(
                  key: _homeKey,
                  child: const HeroSection(),
                ),
                Container(
                  key: _servicesKey,
                  child: const ServicesSection(),
                ),
                Container(
                  key: _bookingKey,
                  child: const WhyChooseUsSection(),
                ),
                Container(
                  key: _contactKey,
                  child: const FooterSection(),
                ),
              ],
            ),
          ),
          // Fixed Navbar
          CustomNavbar(
            isScrolled: _isScrolled,
            onHomePressed: () => scrollToSection(_homeKey),
            onServicesPressed: () => scrollToSection(_servicesKey),
            onBookingPressed: () => scrollToSection(_bookingKey),
            onContactPressed: () => scrollToSection(_contactKey),
          ),
        ],
      ),
    );
  }
}
