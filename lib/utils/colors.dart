import 'package:flutter/material.dart';

class AppColors {
  // Primary Color Theme - Purple to Cyan Gradient
  static const Color primaryPurple = Color(0xFF7B68EE);
  static const Color primaryBlue = Color(0xFF5B9BD5);
  static const Color primaryCyan = Color(0xFF00BCD4);
  static const Color lightBlue = Color(0xFF85C1E9);
  static const Color darkNavy = Color(0xFF2C3E50);
  static const Color darkerNavy = Color(0xFF1A252F);
  
  // Neutral Colors
  static const Color white = Color(0xFFFFFFFF);
  static const Color lightGray = Color(0xFFF8F9FA);
  static const Color mediumGray = Color(0xFFE9ECEF);
  static const Color textDark = Color(0xFF2C3E50);
  static const Color textLight = Color(0xFF6C757D);
  
  // Gradients
  static const LinearGradient primaryGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [primaryPurple, primaryBlue, primaryCyan],
  );
  
  static const LinearGradient heroGradient = LinearGradient(
    begin: Alignment.centerLeft,
    end: Alignment.centerRight,
    colors: [
      Color(0x1A7B68EE),
      Color(0x1A00BCD4),
    ],
  );
}
