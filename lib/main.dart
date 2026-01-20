import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'screens/splash_screen.dart';

void main() {
  runApp(const AngelCoolApp());
}

class AngelCoolApp extends StatelessWidget {
  const AngelCoolApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Angel Cool - Expert Home Appliance Services',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: const Color(0xFF85C1E9),
        scaffoldBackgroundColor: Colors.white,
        textTheme: GoogleFonts.interTextTheme(),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF85C1E9),
          primary: const Color(0xFF85C1E9),
          secondary: const Color(0xFF00BCD4),
        ),
        useMaterial3: true,
      ),
      home: const SplashScreen(),
    );
  }
}
