import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../utils/colors.dart';

class ServicesSection extends StatelessWidget {
  const ServicesSection({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isDesktop = size.width > 968;
    final isTablet = size.width > 600 && size.width <= 968;
    final isMobile = size.width <= 600;

    return Container(
      width: double.infinity,
      color: Colors.white,
      padding: EdgeInsets.symmetric(
        horizontal: isMobile ? 16 : (isTablet ? 40 : 80),
        vertical: isMobile ? 40 : (isTablet ? 60 : 80),
      ),
      child: Column(
        children: [
          _SectionTitle(title: 'Our Services'),
          SizedBox(height: isMobile ? 40 : 60),
          Wrap(
            spacing: isMobile ? 16 : 32,
            runSpacing: isMobile ? 16 : 32,
            alignment: WrapAlignment.center,
            children: [
              ServiceCard(
                icon: Icons.ac_unit,
                title: 'AC Repair & Installation',
                description:
                    'Professional air conditioning repair, installation, and maintenance services for all brands.',
                isMobile: isMobile,
              ),
              ServiceCard(
                icon: Icons.local_laundry_service,
                title: 'Washing Machine Repair',
                description:
                    'Expert washing machine repair and maintenance for top-load and front-load machines.',
                isMobile: isMobile,
              ),
              ServiceCard(
                icon: Icons.schedule,
                title: 'Preventative Maintenance',
                description:
                    'Regular maintenance plans to keep your appliances running efficiently year-round.',
                isMobile: isMobile,
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _SectionTitle extends StatelessWidget {
  final String title;

  const _SectionTitle({required this.title});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          title,
          style: GoogleFonts.outfit(
            fontSize: 40,
            fontWeight: FontWeight.w700,
            color: AppColors.textDark,
          ),
        ),
        const SizedBox(height: 16),
        Container(
          height: 4,
          width: 80,
          decoration: BoxDecoration(
            gradient: AppColors.primaryGradient,
            borderRadius: BorderRadius.circular(2),
          ),
        ),
      ],
    );
  }
}

class ServiceCard extends StatefulWidget {
  final IconData icon;
  final String title;
  final String description;
  final bool isMobile;

  const ServiceCard({
    super.key,
    required this.icon,
    required this.title,
    required this.description,
    this.isMobile = false,
  });

  @override
  State<ServiceCard> createState() => _ServiceCardState();
}

class _ServiceCardState extends State<ServiceCard>
    with SingleTickerProviderStateMixin {
  bool _isHovered = false;
  late AnimationController _controller;
  late Animation<double> _scaleAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(milliseconds: 300),
      vsync: this,
    );
    _scaleAnimation = Tween<double>(begin: 1.0, end: 1.1).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final cardWidth = widget.isMobile 
        ? (screenWidth - 48) // Full width minus padding on mobile
        : (screenWidth > 600 && screenWidth <= 968 
            ? (screenWidth - 120) / 2 // Two columns on tablet
            : 350.0); // Fixed width on desktop

    return MouseRegion(
      onEnter: (_) {
        setState(() => _isHovered = true);
        _controller.forward();
      },
      onExit: (_) {
        setState(() => _isHovered = false);
        _controller.reverse();
      },
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        transform: Matrix4.translationValues(0, _isHovered ? -10 : 0, 0),
        width: cardWidth,
        child: Container(
          padding: EdgeInsets.all(widget.isMobile ? 24 : 32),
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(
              color: _isHovered ? AppColors.primaryCyan : AppColors.lightBlue,
              width: 2,
            ),
            borderRadius: BorderRadius.circular(20),
            boxShadow: _isHovered
                ? [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.15),
                      blurRadius: 40,
                      offset: const Offset(0, 20),
                    ),
                  ]
                : [],
          ),
          child: Column(
            children: [
              ScaleTransition(
                scale: _scaleAnimation,
                child: Container(
                  width: widget.isMobile ? 70 : 80,
                  height: widget.isMobile ? 70 : 80,
                  decoration: BoxDecoration(
                    color: _isHovered
                        ? AppColors.primaryCyan.withOpacity(0.1)
                        : AppColors.lightBlue.withOpacity(0.1),
                    borderRadius: BorderRadius.circular(widget.isMobile ? 35 : 40),
                  ),
                  child: Icon(
                    widget.icon,
                    size: widget.isMobile ? 35 : 40,
                    color: _isHovered
                        ? AppColors.primaryCyan
                        : AppColors.lightBlue,
                  ),
                ),
              ),
              SizedBox(height: widget.isMobile ? 16 : 24),
              Text(
                widget.title,
                textAlign: TextAlign.center,
                style: GoogleFonts.outfit(
                  fontSize: widget.isMobile ? 20 : 24,
                  fontWeight: FontWeight.w600,
                  color: AppColors.textDark,
                ),
              ),
              SizedBox(height: widget.isMobile ? 12 : 16),
              Text(
                widget.description,
                textAlign: TextAlign.center,
                style: GoogleFonts.inter(
                  fontSize: widget.isMobile ? 14 : 16,
                  color: AppColors.textLight,
                  height: 1.6,
                ),
              ),
              SizedBox(height: widget.isMobile ? 20 : 24),
              ElevatedButton(
                onPressed: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text(
                        '${widget.title}: ${widget.description}',
                        style: GoogleFonts.inter(fontSize: 14),
                      ),
                      backgroundColor: AppColors.primaryCyan,
                      duration: const Duration(seconds: 4),
                      behavior: SnackBarBehavior.floating,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                      action: SnackBarAction(
                        label: 'Book Now',
                        textColor: Colors.white,
                        onPressed: () {
                          // Booking action
                        },
                      ),
                    ),
                  );
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: _isHovered
                      ? AppColors.primaryCyan
                      : AppColors.lightBlue,
                  foregroundColor: Colors.white,
                  padding:
                      const EdgeInsets.symmetric(horizontal: 32, vertical: 12),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(50),
                  ),
                  elevation: 0,
                ),
                child: Text(
                  'Learn More',
                  style: GoogleFonts.inter(
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
