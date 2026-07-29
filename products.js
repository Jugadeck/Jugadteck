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
        image: "https://m.media-amazon.com/images/I/71S1L6F4SQL._SL1500_.jpg",
        description: "The classic Arduino board perfect for beginners and prototyping. ATmega328P microcontroller."
    },
    {
        id: 2,
        name: "ESP32 Development Board",
        category: "ESP32",
        price: 550,
        originalPrice: null,
        discount: false,
        image: "https://m.media-amazon.com/images/I/61DBLwI7BoL._SL1500_.jpg",
        description: "Dual-core Wi-Fi + Bluetooth microcontroller. Perfect for IoT projects."
    },
    {
        id: 3,
        name: "Raspberry Pi 4 Model B (4GB)",
        category: "Modules",
        price: 5500,
        originalPrice: 6000,
        discount: true,
        image: "https://m.media-amazon.com/images/I/61cwbLzRiIL._SL1500_.jpg",
        description: "Powerful single-board computer with 4GB RAM. Quad-core ARM Cortex-A72."
    },
    {
        id: 4,
        name: "Ultrasonic Sensor HC-SR04",
        category: "Sensors",
        price: 120,
        originalPrice: null,
        discount: false,
        image: "https://m.media-amazon.com/images/I/51tIz-s8R+L._SL1000_.jpg",
        description: "Distance measuring sensor. Range: 2cm to 400cm. Accuracy: 3mm."
    },
    {
        id: 5,
        name: "NodeMCU ESP8266",
        category: "ESP32",
        price: 350,
        originalPrice: 400,
        discount: true,
        image: "https://m.media-amazon.com/images/I/51p2VqPLURL._SL1000_.jpg",
        description: "Low-cost Wi-Fi microcontroller with Lua scripting support."
    },
    {
        id: 6,
        name: "L298N Motor Driver",
        category: "Modules",
        price: 250,
        originalPrice: null,
        discount: false,
        image: "https://m.media-amazon.com/images/I/61S3YqAGURL._SL1500_.jpg",
        description: "Dual H-Bridge motor driver. Control 2 DC motors or 1 stepper motor."
    },
    {
        id: 7,
        name: "DHT22 Temperature & Humidity Sensor",
        category: "Sensors",
        price: 280,
        originalPrice: null,
        discount: false,
        image: "https://m.media-amazon.com/images/I/51S+vGqPURL._SL1000_.jpg",
        description: "Digital temperature and humidity sensor. High accuracy and reliability."
    },
    {
        id: 8,
        name: "Arduino Nano",
        category: "Arduino",
        price: 300,
        originalPrice: 350,
        discount: true,
        image: "https://m.media-amazon.com/images/I/61SjUMdSURL._SL1500_.jpg",
        description: "Compact Arduino board. ATmega328P. Perfect for small projects."
    },
    {
        id: 9,
        name: "16x2 LCD Display with I2C",
        category: "Modules",
        price: 250,
        originalPrice: null,
        discount: false,
        image: "https://m.media-amazon.com/images/I/71S8hB+HPUL._SL1500_.jpg",
        description: "16x2 character LCD with I2C interface. Blue backlight."
    },
    {
        id: 10,
        name: "Relay Module 4-Channel",
        category: "Modules",
        price: 350,
        originalPrice: null,
        discount: false,
        image: "https://m.media-amazon.com/images/I/71qS7vGqP+L._SL1500_.jpg",
        description: "4-channel relay module. Control high voltage devices with microcontroller."
    },
    {
        id: 11,
        name: "Smart Home Automation Kit",
        category: "Project Kit",
        price: 1500,
        originalPrice: 2000,
        discount: true,
        image: "https://m.media-amazon.com/images/I/61S3YqAGURL._SL1500_.jpg",
        description: "Complete kit for home automation with ESP32, relays, and sensors."
    },
    {
        id: 12,
        name: "Weather Station Project",
        category: "Projects",
        price: 1200,
        originalPrice: null,
        discount: false,
        image: "https://m.media-amazon.com/images/I/71qS7vGqP+L._SL1500_.jpg",
        description: "Ready-made weather station with temperature, humidity, and display."
    },
    {
        id: 13,
        name: "IoT Based Smart Irrigation System",
        category: "Projects",
        price: 1800,
        originalPrice: 2200,
        discount: true,
        image: "https://m.media-amazon.com/images/I/81S8hB+HPUL._SL1500_.jpg",
        description: "Automated irrigation system with soil moisture sensor and mobile app control."
    },
    {
        id: 14,
        name: "Robotics Car Kit",
        category: "Project Kit",
        price: 2500,
        originalPrice: null,
        discount: false,
        image: "https://m.media-amazon.com/images/I/71S8hB+HPUL._SL1500_.jpg",
        description: "Complete robotics car kit with motors, chassis, and Arduino compatibility."
    }
];