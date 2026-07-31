// Product Database
// Admin: Edit this file to update products on the website
const PRODUCTS = [
    {
        "id": 1,
        "name": "Arduino Uno R3",
        "category": "Arduino",
        "price": 299,
        "originalPrice": 399,
        "discount": true,
        "image": "https://i.ibb.co/B5TT6TLv/aurduno.webp",
        "description": "The Arduino UNO R3 SMD Development Board is a powerful and reliable microcontroller designed for beginners, students, and professionals working on electronics, robotics, and IoT projects."
    },
    {
        "id": 2,
        "name": "ESP32 Dev Kit",
        "category": "ESP32",
        "price": 349,
        "originalPrice": 399,
        "discount": true,
        "image": "https://i.ibb.co/zV2vb76H/esp32.webp",
        "description": "Dual-core Wi-Fi + Bluetooth microcontroller. Perfect for IoT projects.\nESP32 Dev Board 30 Pin CP2102 USB-UART, WiFi, BLE, Dual-Core Power MCU"
    },
    {
        "id": 3,
        "name": "Ultrasonic Sensor US-015",
        "category": "Sensors",
        "price": 249,
        "originalPrice": 289,
        "discount": true,
        "image": "https://i.ibb.co/B5wJBj0m/us015-ultrasonic-sensor-front-2048x2048.jpg",
        "description": "Distance Measuring Range: 2cm – 400cm\nOperating Temperature: 0°C to 70°C\nOperating Voltage: 5VDC\nSensing Angle: 15°\nStatic Current:3mA\nDimensions: 44 x 20 x 15 mm (L x W x H)\nUS-015 Ultrasonic Distance Measuring Transducer Sensor\nThe US-015 sensor is a reliable ultrasonic module designed for accurate distance measurement and object detection. This module unit performs consistently in robotics, automation, and DIY prototyping, while also fitting smoothly into ultrasonic detector arduino projects that require stable output. Because it works well as an ultrasonic proximity sensor, makers and engineers use it for precision ranging from 2 cm to 400 cm with excellent repeatability.\n\nMore accurate than the popular HC-SR04, the US-015 sensor provides precise readings with accuracy up to 1 mm. It needs only two digital I/O pins for operation, making integration simple when developing ultrasonic detector arduino applications or refining ultrasonic proximity sensor measurements in embedded systems.\n\nThanks to its small form factor and low static current, the US-015 sensor suits battery-powered projects requiring dependable and consistent distance feedback. Whether you are building compact sonar units, robotic distance sensing modules, or fluid level monitors, this module delivers trustworthy and stable performance.\nTechnical Details\nDistance Measuring Range: 2cm – 400cm\nOperating Temperature: 0°C to 70°C\nOperating Voltage: 5VDC\nSensing Angle: 15°\nStatic Current:3mA\nDimensions: 44 x 20 x 15 mm (L x W x H)\nFeatures\nMore accurate than HCSR04.\nIt has a large measuring range.\nIt detects distances from 2 cm to 400 cm.\nThe static power consumption is less than 3mA.\nApplications :\nDistance Measurement: Provides accurate ranging for robotics and automation using this ultrasonic module.\nObstacle Detection: Helps autonomous robots and drones navigate safely and aligns well with ultrasonic detector arduino setups.\nLiquid Level Monitoring: Measures fluid levels in tanks and reservoirs using an ultrasonic proximity sensor approach.\nSecurity Systems: Used for motion detection in alarm and surveillance systems.\nPhysical Attributes\nSensor Cover Dia. (mm) : 16\nL x W X H mm: 44 X 20X 15\nWeight (gm): 7\nPackage Includes\n1 x US-015 Ultrasonic Distance Measuring Transducer Sensor"
    },
    {
        "id": 4,
        "name": "RCWL-1604 Ultrasonic sensor",
        "category": "Modules",
        "price": 99,
        "originalPrice": 99,
        "discount": true,
        "image": "https://i.ibb.co/YTLn50LF/rcwl-1604-ultrasonic-sensor-module-2048x2048.jpg",
        "description": "Model: RCWL-1604\nOperating Voltage (VDC): 5\nFrequency: 40 kHz\nMeasurement Range: 2 cm to 4 m\nResolution: 0.3 cm\nConnection Type: 4-pin (GND, Echo, Trig, VCC)\nRCWL-1604 Ultrasonic Distance Sensor Module\nThe RCWL-1604 ultrasonic sensor range is a versatile and widely used component in the field of electronics and robotics, offering excellent distance measurement and object detection capabilities right out of the box. With its 40 kHz transmitter/receiver pair, it delivers a reliable measurement performance for automation, robotics and embedded projects where an efficient sonar sensor price and high-accuracy solution matter.\nTechnical Details\nModel: RCWL-1604\nOperating Voltage (VDC): 5\nFrequency: 40 kHz\nMeasurement Range: 2 cm to 4 m\nResolution: 0.3 cm\nConnection Type: 4-pin (GND, Echo, Trig, VCC)\nFeatures\nHigh accuracy\nWide detection range\nCompact and lightweight\nLow power consumption\nSimple interface\nReal-time feedback\nPin Description:\nGND: Ground connection\nECHO: Echo pin for receiving measurement signal\nTRIG: Trigger pin for initiating measurement\nVCC: Power input (+5 V or +3.3 V)\nApplications :\nDistance Measurement: Accurately measures the distance between the sensor and an object, which is useful in various automation and control systems.\nObstacle Avoidance: Used in robotics to detect and avoid obstacles, ensuring smooth navigation.\nObject Detection: Ideal for security systems, automated doors, and other systems requiring object presence detection.\nLevel Measurement: Measures liquid or material levels in containers, useful in industrial and agricultural settings.\nIntegration with Arduino ultrasonic Sensor"
    },
    {
        "id": 5,
        "name": "HY-SRF05 ultrasonic sensor ",
        "category": "Sensors",
        "price": 149,
        "originalPrice": 199,
        "discount": true,
        "image": "https://i.ibb.co/dskBHV6S/hy-srf05-ultrasonic-sensor-front-2048x2048.jpg",
        "description": "Operating Voltage: 5V\nSensor Angle: Not less than 15 Degree\nDetection Distance: 2cm to 450cm\nHigh Precision: up to 0.3 cm\nInput Trigger Signal: 10uS TTL Pulse\nEcho Signal: TTL PWL Signa\nThe HY-SRF05 ultrasonic sensor is a high-precision 5-pin ranging module that uses ultrasonic waves to detect objects and measure distance. As an arduino sonar sensor, it delivers a dependable ultrasonic distance sensor range from 2 cm to 450 cm, so it fits robotics, obstacle avoidance, and smart automation projects.\n\nBuilt around a 40 kHz sound burst, the HY-SRF05 provides stable, repeatable readings even in noisy environments. Because of its compact footprint and simple TTL interface, this arduino sonar sensor integrates quickly into DIY or professional builds without extra conditioning. \n\nPower efficiency is another win: the ultrasonic sensor draws very little current, making it suitable for battery projects. Whether you’re adding an ultrasonic distance sensor to a mobile robot, a tank-level monitor, or a security trigger, you can trust this module for consistent performance.\n\nIt is compatible with popular platforms like Arduino and Raspberry Pi. With clear Vcc/Trig/Echo/OUT/GND pins, arduino sonar sensor wiring stays straightforward, and calibrating the ultrasonic distance sensor output in code is easy. For clean measurements across the full span, the HY-SRF05 ultrasonic sensor includes temperature-stable timing and reliable echo capture.\n\nIf you need a drop-in replacement for SRF04/SR04 boards, the HY-SRF05 ultrasonic sensor gives you extra flexibility thanks to its dedicated OUT pin."
    },
    {
        "id": 6,
        "name": "Weather Station Project",
        "category": "Projects",
        "price": 1200,
        "originalPrice": null,
        "discount": false,
        "image": "https://m.media-amazon.com/images/I/71qS7vGqP+L._SL1500_.jpg",
        "description": "Ready-made weather station with temperature, humidity, and display."
    }
];
