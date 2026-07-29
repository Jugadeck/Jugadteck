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
        name: "Breadboard 830 Points",
        category: "Modules",
        price: 150,
        originalPrice: null,
        discount: false,
        image: "https://m.media-amazon.com/images/I/71S8hB+HPUL._SL1500_.jpg",
        description: "Solderless breadboard. 830 tie-points for prototyping."
    },
    {
        id: 12,
        name: "Jumper Wires Set (120pcs)",
        category: "Modules",
        price: 180,
        originalPrice: 220,
        discount: true,
        image: "https://m.media-amazon.com/images/I/81S8hB+HPUL._SL1500_.jpg",
        description: "Male-to-male, male-to-female, female-to-female jumper wires."
    }
];