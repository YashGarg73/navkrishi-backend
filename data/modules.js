const modules = [
  {
    moduleId: 'm01',
    title: 'The Power of Composting',
    icon: '♻️',
    content: "Composting is nature's way of recycling. It turns organic waste like food scraps and yard trimmings into a rich, dark soil conditioner called compost. This 'black gold' improves soil health, reduces the need for chemical fertilizers, and lowers your carbon footprint by keeping waste out of landfills.",
    xp: 50,
    badge: 'Compost Champion',
    quiz: [
      {
        q: 'What is the main benefit of composting?',
        o: ['Creates waste', 'Improves soil health', 'Uses more water'],
        a: 1,
      },
      {
        q: 'Which of these can be composted?',
        o: ['Plastic bottles', 'Vegetable peels', 'Glass jars'],
        a: 1,
      },
    ],
  },
  {
    moduleId: 'm02',
    title: 'Water Wise: Drip Irrigation',
    icon: '💧',
    content: 'Drip irrigation is a highly efficient method of watering plants. It delivers water slowly and directly to the roots, minimizing evaporation and runoff. This technique can save up to 70% more water than traditional flood irrigation and leads to healthier, more productive crops.',
    xp: 75,
    badge: 'Water Saver',
    quiz: [
      {
        q: 'Where does drip irrigation deliver water?',
        o: ['To the leaves', 'Directly to the roots', 'Into the air'],
        a: 1,
      },
      {
        q: 'What is the main advantage of drip irrigation?',
        o: ['It is fast', 'It saves a lot of water', 'It looks beautiful'],
        a: 1,
      },
    ],
  },
  {
    moduleId: 'm03',
    title: 'Crop Rotation Basics',
    icon: '🔄',
    content: "Crop rotation is the practice of planting different crops sequentially on the same plot of land to improve soil health, optimize nutrients in the soil, and combat pest and weed pressure. For example, planting legumes after a grain crop can naturally restore nitrogen to the soil.",
    xp: 60,
    badge: 'Soil Strategist',
    quiz: [
        {
            q: 'Why is crop rotation important?',
            o: ['It makes the farm look organized', 'It improves soil health and fights pests', 'It requires more fertilizer'],
            a: 1
        }
    ]
  },
  {
    moduleId: 'm04',
    title: 'Integrated Pest Management',
    icon: '🐞',
    content: 'Integrated Pest Management (IPM) is an eco-friendly approach to controlling pests. Instead of relying only on chemical pesticides, IPM uses a combination of methods like introducing natural predators (like ladybugs), using pest-resistant crop varieties, and practicing crop rotation.',
    xp: 80,
    badge: 'Pest Protector',
    quiz: [
        {
            q: 'What does IPM aim to reduce?',
            o: ['The use of natural predators', 'The reliance on chemical pesticides', 'The number of crops'],
            a: 1
        }
    ]
  }
];

module.exports = modules;