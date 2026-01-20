import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../utils/colors.dart';

class CustomNavbar extends StatelessWidget {
  final bool isScrolled;
  final VoidCallback onHomePressed;
  final VoidCallback onServicesPressed;
  final VoidCallback onBookingPressed;
  final VoidCallback onContactPressed;

  const CustomNavbar({
    super.key,
    required this.isScrolled,
    required this.onHomePressed,
    required this.onServicesPressed,
    required this.onBookingPressed,
    required this.onContactPressed,
  });

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width <= 600;
    final isTablet = size.width > 600 && size.width <= 968;

    return AnimatedContainer(
      duration: const Duration(milliseconds: 300),
      height: isMobile ? 70 : (isTablet ? 85 : 100),
      decoration: BoxDecoration(
        color: isScrolled
            ? AppColors.lightBlue.withOpacity(0.95)
            : AppColors.lightBlue,
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 10,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: isMobile ? 16 : (isTablet ? 24 : 40)),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            // Logo - Responsive sizing
            GestureDetector(
              onTap: onHomePressed,
              child: MouseRegion(
                cursor: SystemMouseCursors.click,
                child: Row(
                  children: [
                    Image.asset(
                      'assets/logo.png',
                      height: isMobile ? 45 : (isTablet ? 55 : 70),
                    ),
                  ],
                ),
              ),
            ),
            // Navigation Links
            if (size.width > 768)
              Row(
                children: [
                  _NavLink(
                    text: 'Home',
                    isActive: true,
                    onPressed: onHomePressed,
                  ),
                  const SizedBox(width: 32),
                  _NavLink(
                    text: 'Services',
                    onPressed: onServicesPressed,
                  ),
                  const SizedBox(width: 32),
                  _NavLink(
                    text: 'Booking',
                    onPressed: onBookingPressed,
                  ),
                  const SizedBox(width: 32),
                  _NavLink(
                    text: 'Contact',
                    onPressed: onContactPressed,
                  ),
                  const SizedBox(width: 32),
                  IconButton(
                    icon: const Icon(Icons.shopping_cart, color: Colors.white),
                    onPressed: () {
                      // Cart functionality
                    },
                  ),
                ],
              )
            else
              IconButton(
                icon: const Icon(Icons.menu, color: Colors.white, size: 28),
                onPressed: () {
                  // Mobile menu
                },
              ),
          ],
        ),
      ),
    );
  }
}

class _NavLink extends StatefulWidget {
  final String text;
  final bool isActive;
  final VoidCallback onPressed;

  const _NavLink({
    required this.text,
    this.isActive = false,
    required this.onPressed,
  });

  @override
  State<_NavLink> createState() => _NavLinkState();
}

class _NavLinkState extends State<_NavLink> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      cursor: SystemMouseCursors.click,
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: GestureDetector(
        onTap: widget.onPressed,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          decoration: BoxDecoration(
            color: _isHovered
                ? Colors.white.withOpacity(0.1)
                : Colors.transparent,
            borderRadius: BorderRadius.circular(8),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                widget.text,
                style: GoogleFonts.inter(
                  color: Colors.white,
                  fontSize: 16,
                  fontWeight: FontWeight.w500,
                ),
              ),
              const SizedBox(height: 4),
              AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                height: 2,
                width: (_isHovered || widget.isActive) ? 40 : 0,
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(1),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
