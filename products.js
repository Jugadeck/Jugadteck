// Product Database
// Admin: Edit this file to update products on the website
const PRODUCTS = [
    {
        id: 1,
        name: "Arduino Uno R3",
        category: "Arduino",
        price: 450,
        originalPrice: 550,
        discount: true,
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80",
        description: "The classic Arduino board perfect for beginners and prototyping. ATmega328P microcontroller."
    },
    {
        id: 2,
        name: "ESP32 Development Board",
        category: "ESP32",
        price: 550,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
        description: "Dual-core Wi-Fi + Bluetooth microcontroller. Perfect for IoT projects."
    },
    {
        id: 3,
        name: "Raspberry Pi 4 Model B (4GB)",
        category: "Modules",
        price: 5500,
        originalPrice: 6000,
        discount: true,
        image: "https://images.unsplash.com/photo-1629814484931-41720743d321?auto=format&fit=crop&w=500&q=80",
        description: "Powerful single-board computer with 4GB RAM. Quad-core ARM Cortex-A72."
    },
    {
        id: 4,
        name: "Ultrasonic Sensor HC-SR04",
        category: "Sensors",
        price: 120,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=500&q=80",
        description: "Distance measuring sensor. Range: 2cm to 400cm. Accuracy: 3mm."
    },
    {
        id: 5,
        name: "NodeMCU ESP8266",
        category: "ESP32",
        price: 350,
        originalPrice: 400,
        discount: true,
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80",
        description: "Low-cost Wi-Fi microcontroller with Lua scripting support."
    },
    {
        id: 6,
        name: "L298N Motor Driver",
        category: "Modules",
        price: 250,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886571?auto=format&fit=crop&w=500&q=80",
        description: "Dual H-Bridge motor driver. Control 2 DC motors or 1 stepper motor."
    },
    {
        id: 7,
        name: "DHT22 Temperature Sensor",
        category: "Sensors",
        price: 280,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80",
        description: "Digital temperature and humidity sensor. High accuracy and reliability."
    },
    {
        id: 8,
        name: "Arduino Nano",
        category: "Arduino",
        price: 300,
        originalPrice: 350,
        discount: true,
        image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=500&q=80",
        description: "Compact Arduino board. ATmega328P. Perfect for small projects."
    },
    {
        id: 9,
        name: "16x2 LCD Display with I2C",
        category: "Modules",
        price: 250,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80",
        description: "16x2 character LCD with I2C interface. Blue backlight."
    },
    {
        id: 10,
        name: "Relay Module 4-Channel",
        category: "Modules",
        price: 350,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=500&q=80",
        description: "4-channel relay module. Control high voltage devices with microcontroller."
    },
    {
        id: 11,
        name: "Smart Home Automation Kit",
        category: "Project Kit",
        price: 1500,
        originalPrice: 2000,
        discount: true,
        image: "https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&w=500&q=80",
        description: "Complete kit for home automation with ESP32, relays, and sensors."
    },
    {
        id: 12,
        name: "Weather Station Project",
        category: "Projects",
        price: 1200,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=80",
        description: "Ready-made weather station with temperature, humidity, and display."
    },
    {
        id: 13,
        name: "Smart Irrigation System",
        category: "Projects",
        price: 1800,
        originalPrice: 2200,
        discount: true,
        image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=500&q=80",
        description: "Automated irrigation system with soil moisture sensor and mobile app control."
    },
    {
        id: 14,
        name: "Robotics Car Kit",
        category: "Project Kit",
        price: 2500,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80",
        description: "Complete robotics car kit with motors, chassis, and Arduino compatibility."
    }
];
