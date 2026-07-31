const PRODUCTS = [
    {
        id: 1,
        name: "Arduino Uno R3",
        category: "Arduino",
        price: 450,
        originalPrice: 550,
        discount: true,
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80",
        description: "The classic Arduino board perfect for beginners and prototyping. ATmega328P microcontroller.",
        specifications: "• Microcontroller: ATmega328P\n• Operating Voltage: 5V\n• Input Voltage (recommended): 7-12V\n• Digital I/O Pins: 14 (of which 6 provide PWM output)\n• Analog Input Pins: 6\n• DC Current per I/O Pin: 20 mA"
    },
    {
        id: 2,
        name: "ESP32 Development Board",
        category: "ESP32",
        price: 550,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
        description: "Dual-core Wi-Fi + Bluetooth microcontroller. Perfect for IoT projects.",
        specifications: "• CPU: Dual-core Tensilica LX6 microprocessor\n• Clock Speed: up to 240 MHz\n• Wi-Fi: 802.11 b/g/n\n• Bluetooth: v4.2 BR/EDR and BLE\n• Flash Memory: 4MB\n• GPIO Pins: 30+"
    },
    {
        id: 3,
        name: "Raspberry Pi 4 Model B (4GB)",
        category: "Modules",
        price: 5500,
        originalPrice: 6000,
        discount: true,
        image: "https://images.unsplash.com/photo-1629814484931-41720743d321?auto=format&fit=crop&w=500&q=80",
        description: "Powerful single-board computer with 4GB RAM. Quad-core ARM Cortex-A72.",
        specifications: "• Processor: Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz\n• Memory: 4GB LPDDR4-3200 SDRAM\n• Connectivity: 2.4 GHz and 5.0 GHz IEEE 802.11ac wireless, Bluetooth 5.0, BLE\n• Ports: 2 × USB 3.0, 2 × USB 2.0, Gigabit Ethernet"
    },
    {
        id: 4,
        name: "Ultrasonic Sensor HC-SR04",
        category: "Sensors",
        price: 120,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=500&q=80",
        description: "Distance measuring sensor. Range: 2cm to 400cm. Accuracy: 3mm.",
        specifications: "• Operating Voltage: 5V DC\n• Quiescent Current: <2mA\n• Working Current: 15mA\n• Effectual Angle: <15°\n• Ranging Distance: 2cm – 400 cm / 1\" – 13ft\n• Resolution: 0.3 cm"
    },
    {
        id: 5,
        name: "NodeMCU ESP8266",
        category: "ESP32",
        price: 350,
        originalPrice: 400,
        discount: true,
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80",
        description: "Low-cost Wi-Fi microcontroller with Lua scripting support.",
        specifications: "• Microcontroller: Tensilica 32-bit RISC CPU Xtensa LX106\n• Operating Voltage: 3.3V\n• Input Voltage: 7-12V\n• Digital I/O Pins: 11\n• Analog Input Pins: 1 (Max input: 3.3V)\n• Wi-Fi: 802.11 b/g/n"
    },
    {
        id: 6,
        name: "L298N Motor Driver",
        category: "Modules",
        price: 250,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886571?auto=format&fit=crop&w=500&q=80",
        description: "Dual H-Bridge motor driver. Control 2 DC motors or 1 stepper motor.",
        specifications: "• Driver: L298N Integrated Circuit\n• Logical Voltage: 5V\n• Drive Voltage: 5V-35V\n• Logical Current: 0mA-36mA\n• Drive Current: 2A (MAX single bridge)\n• Max Power: 25W"
    },
    {
        id: 7,
        name: "DHT22 Temperature Sensor",
        category: "Sensors",
        price: 280,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80",
        description: "Digital temperature and humidity sensor. High accuracy and reliability.",
        specifications: "• Operating Voltage: 3.3V to 5V\n• Temperature Range: -40 to 80°C (±0.5°C)\n• Humidity Range: 0 to 100% (±2%)\n• Sampling Period: 2 seconds\n• Output: Digital single-bus"
    },
    {
        id: 8,
        name: "Arduino Nano",
        category: "Arduino",
        price: 300,
        originalPrice: 350,
        discount: true,
        image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=500&q=80",
        description: "Compact Arduino board. ATmega328P. Perfect for small projects.",
        specifications: "• Microcontroller: ATmega328\n• Architecture: AVR\n• Operating Voltage: 5V\n• Flash Memory: 32 KB (of which 2 KB used by bootloader)\n• SRAM: 2 KB\n• EEPROM: 1 KB"
    },
    {
        id: 9,
        name: "16x2 LCD Display with I2C",
        category: "Modules",
        price: 250,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80",
        description: "16x2 character LCD with I2C interface. Blue backlight.",
        specifications: "• Display Type: Character LCD\n• Characters: 16x2 (32 characters total)\n• Interface: I2C (only 2 wires needed)\n• Backlight: Blue with White characters\n• Operating Voltage: 5V"
    },
    {
        id: 10,
        name: "Relay Module 4-Channel",
        category: "Modules",
        price: 350,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=500&q=80",
        description: "4-channel relay module. Control high voltage devices with microcontroller.",
        specifications: "• Number of Channels: 4\n• Control Signal: TTL (3.3V or 5V)\n• Load Capacity: 10A 250VAC / 10A 30VDC\n• Optocoupler Isolation: Yes\n• Indicator LEDs: Yes (for each channel)"
    },
    {
        id: 11,
        name: "Smart Home Automation Kit",
        category: "Project Kit",
        price: 1500,
        originalPrice: 2000,
        discount: true,
        image: "https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&w=500&q=80",
        description: "Complete kit for home automation with ESP32, relays, and sensors.",
        specifications: "• Main Controller: ESP32 Dev Board\n• Relays: 4-Channel 5V Relay Module\n• Sensors: DHT22, LDR, PIR Motion Sensor\n• Power Supply: 5V 2A Adapter included\n• Jumper Wires & Breadboard included"
    },
    {
        id: 12,
        name: "Weather Station Project",
        category: "Projects",
        price: 1200,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=80",
        description: "Ready-made weather station with temperature, humidity, and display.",
        specifications: "• Display: 16x2 I2C LCD\n• Sensors: DHT22 (Temp & Humidity), BMP180 (Pressure)\n• Controller: Arduino Nano\n• Enclosure: 3D Printed Weather-proof box\n• Power: 9V Battery or USB"
    },
    {
        id: 13,
        name: "Smart Irrigation System",
        category: "Projects",
        price: 1800,
        originalPrice: 2200,
        discount: true,
        image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=500&q=80",
        description: "Automated irrigation system with soil moisture sensor and mobile app control.",
        specifications: "• Controller: NodeMCU ESP8266 (Wi-Fi)\n• Sensor: Soil Moisture Sensor Module\n• Actuator: 5V Water Pump with Relay\n• App Control: Blynk / Custom Web Dashboard\n• Power: 12V Adapter for pump, USB for NodeMCU"
    },
    {
        id: 14,
        name: "Robotics Car Kit",
        category: "Project Kit",
        price: 2500,
        originalPrice: null,
        discount: false,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80",
        description: "Complete robotics car kit with motors, chassis, and Arduino compatibility.",
        specifications: "• Chassis: 2WD Acrylic Chassis\n• Motors: 2x TT DC Gear Motors\n• Driver: L298N Motor Driver\n• Controller: Arduino Uno (Not included, use your own)\n• Battery Holder: 2x 18650 Battery Holder\n• Wheels: 2x Rubber Wheels + 1 Caster Wheel"
    }
];
