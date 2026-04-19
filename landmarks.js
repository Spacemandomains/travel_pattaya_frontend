const categories = {
    restaurant: {
        name: "Restaurant",
        subcategories: {
            breakfast: "Breakfast",
            lunch: "Lunch",
            dinner: "Dinner"
        }
    },
    drinks: {
        name: "Drinks",
        subcategories: {
            bars: "Bars",
            cafes: "Cafes",
            clubs: "Clubs"
        }
    },
    snacks: {
        name: "Snacks",
        subcategories: {
            streetFood: "Street Food",
            desserts: "Desserts",
            quickBites: "Quick Bites"
        }
    },
    entertainment: {
        name: "Entertainment",
        subcategories: {
            nightlife: "Nightlife",
            shopping: "Shopping",
            culture: "Culture"
        }
    },
    adventure: {
        name: "Adventure",
        subcategories: {
            outdoor: "Outdoor",
            sports: "Sports",
            waterActivities: "Water Activities"
        }
    },
    transportation: {
        name: "Transportation",
        subcategories: {
            airport: "Airport",
            bus: "Bus",
            taxi: "Taxi"
        }
    }
};

const translations = {
    en: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        closed: 'Closed',
        getDirections: 'Get Directions',
        currentRecommendation: 'Current Recommendation',
        type: 'Type',
        why: 'Why',
        recommendations: {
            treeTime: 'Perfect spot for a relaxed atmosphere and unique experience',
            qulture: 'Stylish dining experience with great ambiance',
            kickinChicken: 'Best chicken dishes in town',
            soulBistro: 'Refined dining with exceptional service',
            playersClub: 'Vibrant entertainment and great drinks',
            majuBar: 'Popular local hangout with friendly atmosphere'
        },
        contact: 'Contact',
        openingHours: 'Opening Hours',
        phone: 'Phone',
        landmarks: {
            jomtienBusStation: {
                name: "Jomtien-Suvarnabhumi Airport Bus Station",
                description: "Bus station for transport between Pattaya and Bangkok Suvarnabhumi Airport"
            },
            qulture: {
                name: "Qulture Lounge and Cafe Pattaya",
                description: "Contemporary cafe & lounge offering a stylish dining experience in Jomtien"
            },
            treeTime: {
                name: "Tree Time Cafe and Dispensary",
                description: "Unique cafe and dispensary offering a relaxed atmosphere in Pattaya City"
            },
            kickinChicken: {
                name: "Kickin Chicken",
                description: "Popular spot known for delicious chicken dishes in Pattaya City"
            },
            soulBistro: {
                name: "Soul Bistro Restaurant & Lounge",
                description: "Stylish dining venue in Pattaya City offering a refined culinary experience"
            },
            playersClub: {
                name: "The Players Club",
                description: "Vibrant bar and entertainment venue in Pattaya City"
            },
            majuBar: {
                name: "Maju Bar",
                description: "Popular bar located in the heart of Soi Buakhao"
            }
        },
        categories: {
            restaurant: 'Restaurant',
            drinks: 'Drinks',
            snacks: 'Snacks',
            entertainment: 'Entertainment',
            adventure: 'Adventure',
            transportation: 'Transportation'
        },
        subcategories: {
            breakfast: 'Breakfast',
            lunch: 'Lunch',
            dinner: 'Dinner',
            bars: 'Bars',
            cafes: 'Cafes',
            clubs: 'Clubs',
            streetFood: 'Street Food',
            desserts: 'Desserts',
            quickBites: 'Quick Bites',
            nightlife: 'Nightlife',
            shopping: 'Shopping',
            culture: 'Culture',
            outdoor: 'Outdoor',
            sports: 'Sports',
            waterActivities: 'Water Activities',
            airport: 'Airport',
            bus: 'Bus',
            taxi: 'Taxi'
        }
    },
    th: {
        days: ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'],
        closed: 'ปิด',
        getDirections: 'นำทาง',
        currentRecommendation: 'คำแนะนำในขณะนี้',
        type: 'ประเภท',
        why: 'เหตุผล',
        recommendations: {
            treeTime: 'สถานที่ที่เหมาะสำหรับบรรยากาศที่ผ่อนคลายและประสบการณ์ที่ไม่เหมือนใคร',
            qulture: 'ประสบการณ์การรับประทานอาหารที่มีสไตล์พร้อมบรรยากาศที่ยอดเยี่ยม',
            kickinChicken: 'อาหารไก่ที่อร่อยที่สุดในเมือง',
            soulBistro: 'อาหารระดับพรีเมียมพร้อมบริการที่ยอดเยี่ยม',
            playersClub: 'ความบันเทิงที่มีชีวิตชีวาและเครื่องดื่มที่ยอดเยี่ยม',
            majuBar: 'สถานที่ยอดนิยมในท้องถิ่นพร้อมบรรยากาศที่เป็นกันเอง'
        },
        contact: 'ติดต่อ',
        openingHours: 'เวลาทำการ',
        phone: 'โทรศัพท์',
        landmarks: {
            qulture: {
                name: "คัลเจอร์ เลานจ์ แอนด์ คาเฟ่ พัทยา",
                description: "คาเฟ่และเลานจ์ร่วมสมัยที่มอบประสบการณ์การรับประทานอาหารที่มีสไตล์ในจอมเทียน"
            },
            treeTime: {
                name: "ทรี ไทม์ คาเฟ่ แอนด์ ดิสเพนซารี",
                description: "คาเฟ่และดิสเพนซารีที่มีเอกลักษณ์ให้บรรยากาศผ่อนคลายในพัทยา"
            },
            kickinChicken: {
                name: "คิกกิ้น ชิคเก้น",
                description: "ร้านดังที่เป็นที่รู้จักในเมนูไก่อร่อยในพัทยา"
            },
            soulBistro: {
                name: "โซล บิสโทร เรสเตอรองท์ แอนด์ เลานจ์",
                description: "ร้านอาหารสไตล์หรูในพัทยาที่มอบประสบการณ์อาหารระดับพรีเมียม"
            },
            playersClub: {
                name: "เดอะ เพลเยอร์ส คลับ",
                description: "บาร์และสถานบันเทิงที่มีชีวิตชีวาในพัทยา"
            },
            majuBar: {
                name: "มาจู บาร์",
                description: "บาร์ยอดนิยมที่ตั้งอยู่ใจกลางซอยบัวขาว"
            }
        },
        categories: {
            restaurant: 'ร้านอาหาร',
            drinks: 'เครื่องดื่ม',
            snacks: 'ของว่าง',
            entertainment: 'ความบันเทิง',
            adventure: 'การผจญภัย'
        },
        subcategories: {
            breakfast: 'อาหารเช้า',
            lunch: 'อาหารกลางวัน',
            dinner: 'อาหารเย็น',
            bars: 'บาร์',
            cafes: 'คาเฟ่',
            clubs: 'คลับ',
            streetFood: 'อาหารริมทาง',
            desserts: 'ของหวาน',
            quickBites: 'อาหารว่าง',
            nightlife: 'ไนท์ไลฟ์',
            shopping: 'ช้อปปิ้ง',
            culture: 'วัฒนธรรม',
            outdoor: 'กลางแจ้ง',
            sports: 'กีฬา',
            waterActivities: 'กิจกรรมทางน้ำ'
        }
    },
    zh: {
        days: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        closed: '关闭',
        getDirections: '获取路线',
        contact: '联系',
        openingHours: '营业时间',
        phone: '电话',
        landmarks: {
            qulture: {
                name: "帕塔雅文化休闲咖啡厅",
                description: "位于宗滴恩的现代咖啡厅和休息室，提供时尚的用餐体验"
            },
            kickinChicken: {
                name: "奇趣炸鸡",
                description: "帕塔雅市知名的美味鸡肉料理餐厅"
            },
            treeTime: {
                name: "树屋咖啡馆和药房",
                description: "一家独特的咖啡馆和药房，在芭提雅市营造轻松的氛围"
            },
            soulBistro: {
                name: "灵魂酒馆餐厅和酒廊",
                description: "芭提雅市时尚的餐饮场所，提供精致的烹饪体验"
            },
            playersClub: {
                name: "玩家俱乐部",
                description: "芭提雅市充满活力的酒吧和娱乐场所"
            },
            majuBar: {
                name: "马驹酒吧",
                description: "位于布阿考巷中心的热门酒吧"
            }
        },
        categories: {
            restaurant: '餐厅',
            drinks: '饮品',
            snacks: '小吃',
            entertainment: '娱乐',
            adventure: '冒险'
        },
        subcategories: {
            breakfast: '早餐',
            lunch: '午餐',
            dinner: '晚餐',
            bars: '酒吧',
            cafes: '咖啡厅',
            clubs: '俱乐部',
            streetFood: '街边小吃',
            desserts: '甜点',
            quickBites: '快餐',
            nightlife: '夜生活',
            shopping: '购物',
            culture: '文化',
            outdoor: '户外',
            sports: '运动',
            waterActivities: '水上活动'
        }
    },
    hi: {
        days: ['सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार', 'रविवार'],
        closed: 'बंद',
        getDirections: 'दिशा-निर्देश',
        contact: 'संपर्क',
        openingHours: 'खुलने का समय',
        phone: 'फ़ोन',
        categories: {
            restaurant: 'रेस्टोरेंट',
            drinks: 'पेय पदार्थ',
            snacks: 'नाश्ता',
            entertainment: 'मनोरंजन',
            adventure: 'साहसिक'
        },
        subcategories: {
            breakfast: 'नाश्ता',
            lunch: 'दोपहर का खाना',
            dinner: 'रात का खाना',
            bars: 'बार',
            cafes: 'कैफे',
            clubs: 'क्लब',
            streetFood: 'स्ट्रीट फूड',
            desserts: 'मिठाई',
            quickBites: 'स्नैक्स',
            nightlife: 'नाइटलाइफ',
            shopping: 'खरीदारी',
            culture: 'संस्कृति',
            outdoor: 'आउटडोर',
            sports: 'खेल',
            waterActivities: 'जल गतिविधियां'
        }
    }
};

let currentLang = 'en';

const landmarks = [
    {
        id: "jomtienBusStation",
        name: "Jomtien-Suvarnabhumi Airport Bus Station",
        description: "Bus station for transport between Pattaya and Bangkok Suvarnabhumi Airport",
        image: "JomtienBusStation.jpg",
        location: "12.905587726217492, 100.86928731573826",
        category: "transportation",
        subcategory: "airport",
        hours: {
            mon: "06:00-21:00",
            tue: "06:00-21:00",
            wed: "06:00-21:00",
            thu: "06:00-21:00",
            fri: "06:00-21:00",
            sat: "06:00-21:00",
            sun: "06:00-21:00"
        },
        contact: {
            address: "316, 24 Thappraya Rd, Pattaya City, Bang Lamung District, Chon Buri, Thailand"
        }
    },
    {
        id: "treeTime",
        name: "Tree Time Cafe and Dispensary",
        description: "Unique cafe and dispensary offering a relaxed atmosphere in Pattaya City",
        image: "Tree Time.jpeg",
        location: "12.924258042950912, 100.88035482471379",
        category: "snacks",
        subcategory: "quickBites",
        hours: {
            mon: "10:30-24:00",
            tue: "10:30-24:00",
            wed: "10:30-24:00",
            thu: "10:30-24:00",
            fri: "10:30-24:00",
            sat: "10:30-24:00",
            sun: "Closed"
        },
        contact: {
            address: "111 8, Pattaya City, Bang Lamung District, Chon Buri 20150, Thailand"
        }
    },
    {
        name: "Qulture Lounge and Cafe Pattaya",
        image: "Tree Time.jpeg",
        location: "12.924101187386887, 100.8772112742994",
        category: "snacks",
        subcategory: "cafes",
        hours: {
            mon: "8:00-22:00",
            tue: "8:00-22:00",
            wed: "8:00-22:00",
            thu: "8:00-22:00",
            fri: "8:00-22:00",
            sat: "8:00-22:00",
            sun: "8:00-22:00"
        },
        contact: {
            address: "111 8, Pattaya City, Bang Lamung District, Chon Buri 20150, Thailand"
        }
    },
    {
        id: "qulture",
        name: "Qulture Lounge and Cafe Pattaya",
        description: "Contemporary cafe & lounge offering a stylish dining experience in Jomtien",
        image: "Qulture.jpg",
        location: "12.882788487424438, 100.88356037429853",
        category: "restaurant",
        subcategory: "breakfast",
        hours: {
            mon: "8:00-22:00",
            tue: "8:00-22:00",
            wed: "8:00-22:00",
            thu: "8:00-22:00",
            fri: "8:00-23:00",
            sat: "8:00-23:00",
            sun: "8:00-22:00"
        },
        contact: {
            phone: "+66 98 878 9393",
            lineId: "@qulturelounge"
        }
    },
    {
        id: "kickinChicken",
        name: "Kickin Chicken",
        description: "Popular spot known for delicious chicken dishes in Pattaya City",
        image: "Kickin.jpg",
        location: "12.913490722209641, 100.86528913635368",
        category: "restaurant",
        subcategory: "lunch",
        hours: {
            mon: "10:00-22:30",
            tue: "10:00-22:30",
            wed: "10:00-22:30",
            thu: "10:00-22:30",
            fri: "10:00-22:30",
            sat: "10:00-22:30",
            sun: "10:00-22:30"
        }
    },
    {
        id: "soulBistro",
        name: "Soul Bistro Restaurant & Lounge",
        description: "Stylish dining venue in Pattaya City offering a refined culinary experience",
        image: "Soul Bistro Restaurant & Lounge.jpeg",
        location: "12.931543105780303, 100.8901689363539",
        category: "restaurant",
        subcategory: "dinner",
        hours: {
            mon: "Closed",
            tue: "12:00-22:00",
            wed: "12:00-22:00",
            thu: "12:00-22:00",
            fri: "12:00-22:00",
            sat: "12:00-22:00",
            sun: "12:00-22:00"
        }
    },
    {
        id: "playersClub",
        name: "The Players Club",
        description: "Vibrant bar and entertainment venue in Pattaya City",
        image: "Players Club.png",
        location: "12.931230165576078, 100.88471998608975",
        category: "drinks",
        subcategory: "bars",
        hours: {
            mon: "14:00-02:00",
            tue: "14:00-02:00",
            wed: "14:00-02:00",
            thu: "14:00-02:00",
            fri: "14:00-02:00",
            sat: "14:00-02:00",
            sun: "14:00-02:00"
        },
        contact: {
            address: "Soi Pattayasaisong 11, Pattaya City, Bang Lamung District, Chon Buri 20150, Thailand"
        }
    },
    {
        id: "majuBar",
        name: "Maju Bar",
        description: "Popular bar located in the heart of Soi Buakhao",
        image: "Maju Bar.jpg",
        location: "12.925841425723188, 100.88084927868181",
        category: "drinks",
        subcategory: "bars",
        hours: {
            mon: "17:00-02:00",
            tue: "17:00-02:00",
            wed: "17:00-02:00",
            thu: "17:00-02:00",
            fri: "17:00-02:00",
            sat: "14:00-02:00",
            sun: "17:00-02:00"
        },
        contact: {
            address: "Soi Buakhao, Pattaya City, Bang Lamung District, Chon Buri 20150, Thailand"
        }
    }
];

window.setLanguage = function(lang) {
    currentLang = lang;
    renderLandmarks();
}

function formatHours(hours) {
    if (!hours) return translations[currentLang].closed;
    return hours;
}

function renderLandmarks() {
    const grid = document.querySelector('.landmarks-grid');
    const t = translations[currentLang];

    // Group landmarks by category
    const groupedLandmarks = {};
    landmarks.forEach(landmark => {
        if (!groupedLandmarks[landmark.category]) {
            groupedLandmarks[landmark.category] = {};
        }
        if (!groupedLandmarks[landmark.category][landmark.subcategory]) {
            groupedLandmarks[landmark.category][landmark.subcategory] = [];
        }
        groupedLandmarks[landmark.category][landmark.subcategory].push(landmark);
    });

    // Generate HTML for each category and its landmarks
    let html = '';
    Object.keys(categories).forEach(categoryKey => {
        const category = categories[categoryKey];
        if (groupedLandmarks[categoryKey]) {
            html += `<div class="category-section">
                <h2>${t.categories[categoryKey]}</h2>`;

            Object.keys(category.subcategories).forEach(subKey => {
                const landmarks = groupedLandmarks[categoryKey][subKey] || [];
                if (landmarks.length > 0) {
                    html += `<div class="subcategory-section">
                        <h3>${t.subcategories[subKey]}</h3>
                        <div class="landmarks-row">`;

                    landmarks.forEach(landmark => {
                        const landmarkName = t.landmarks?.[landmark.id]?.name || landmark.name;
                        const landmarkDesc = t.landmarks?.[landmark.id]?.description || landmark.description;

                        html += `<div class="landmark-card">
                            <img src="${landmark.image}" alt="${landmarkName}" 
                                onerror="this.onerror=null; this.src='https://placehold.co/400x300?text=Image+Not+Available';">
                            <h3>${landmarkName}</h3>
                            <p>${landmarkDesc}</p>

                            <div class="hours-section">
                                <h4>${t.openingHours}</h4>
                                <div class="hours-grid">
                                    ${t.days.map((day, i) => `
                                        <div class="day">${day}</div>
                                        <div class="time">${formatHours(landmark.hours?.[Object.keys(landmark.hours)[i]])}</div>
                                    `).join('')}
                                </div>
                            </div>

                            <button class="directions-btn" onclick="getDirections('${landmark.location}')">${t.getDirections}</button>
                        </div>`;
                    });

                    html += `</div></div>`;
                }
            });

            html += `</div>`;
        }
    });

    grid.innerHTML = html;
}

window.getDirections = function(location) {
    const coords = location.split(',').map(coord => parseFloat(coord.trim()));

    // Create a modal div for the map
    const modalDiv = document.createElement('div');
    modalDiv.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1000;background:white;padding:20px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.5);';

    // Add locate me button
    const locateBtn = document.createElement('button');
    locateBtn.textContent = '📍 Show My Location';
    locateBtn.style.cssText = 'margin-bottom:10px;padding:5px 10px;display:block;';

    // Create map container
    const mapDiv = document.createElement('div');
    mapDiv.style.cssText = 'width:300px;height:300px;';
    modalDiv.appendChild(mapDiv);

    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = 'display:flex;justify-content:center;gap:10px;margin-top:10px;';

    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.cssText = 'padding:5px 10px;';
    closeBtn.onclick = () => document.body.removeChild(modalDiv);

    // Style location button
    locateBtn.style.cssText = 'padding:5px 10px;';

    // Add buttons to container
    buttonContainer.appendChild(locateBtn);
    buttonContainer.appendChild(closeBtn);
    modalDiv.appendChild(buttonContainer);
    document.body.appendChild(modalDiv);

    // Initialize map
    const map = L.map(mapDiv).setView(coords, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        language: 'en'
    }).addTo(map);

    // Add destination marker
    const destMarker = L.marker(coords).addTo(map);
    destMarker.bindPopup('Destination').openPopup();

    // Handle locate me button click
    locateBtn.addEventListener('click', () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userLocation = [position.coords.latitude, position.coords.longitude];
                
                // Add or update user location marker
                const userMarker = L.marker(userLocation).addTo(map);
                userMarker.bindPopup('You are here').openPopup();
                
                // Show both markers in view
                const bounds = L.latLngBounds([userLocation, coords]);
                map.fitBounds(bounds, { padding: [50, 50] });
            }, (error) => {
                alert('Unable to get location: ' + error.message);
            });
        } else {
            alert('Geolocation is not supported by your browser');
        }
    });

    // Add destination marker
    L.marker(coords).addTo(map);
}

// Remove imports as they're causing issues

document.addEventListener('DOMContentLoaded', function() {
    renderLandmarks();
    if (typeof scheduleAlerts === 'function') {
        scheduleAlerts();
    }

    // Automatically show recommendations every hour
    function showRecommendation() {
        const next = showNextDestination();
        const recommendationDiv = document.createElement('div');
        recommendationDiv.className = 'recommendation-alert';
        const coords = next.location.split(',').map(coord => coord.trim());
        const t = translations[currentLang];
        const landmarkName = t.landmarks?.[next.id]?.name || next.name;
        
        recommendationDiv.innerHTML = `
            <h3>${t.currentRecommendation || 'Current Recommendation'}</h3>
            <p><strong>${landmarkName}</strong></p>
            <p>${t.type || 'Type'}: ${t.categories?.[next.category] || next.type}</p>
            <p>${t.openingHours || 'Hours'}: ${next.hours}</p>
            <p>${t.why || 'Why'}: ${t.recommendations?.[next.id] || next.reason}</p>
            <button onclick="getDirections('${coords[0]}, ${coords[1]}')">${t.getDirections || 'Get Directions'}</button>
        `;

        // Remove previous recommendation if exists
        const oldRecommendation = document.querySelector('.recommendation-alert');
        if (oldRecommendation) {
            oldRecommendation.remove();
        }

        document.querySelector('.landmarks-container').insertBefore(recommendationDiv, document.querySelector('.landmarks-grid'));
    }

    // Show initial recommendation
    showRecommendation();

    // Update recommendation every hour
    setInterval(showRecommendation, 60 * 60 * 1000);
});