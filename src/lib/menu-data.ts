
export interface MenuItem {
    name: string;
    price: number;
    description?: string;
    isVegetarian?: boolean;
}

export interface MenuSection {
    title: string;
    description?: string;
    items: MenuItem[];
}

export interface MenuCategory {
    id: string;
    label: string;
    sections: MenuSection[];
}

export const MENU_DATA: MenuCategory[] = [
    {
        id: "cone-tiramisu",
        label: "Cone Tiramisu",
        sections: [
            {
                title: "Cone Tiramisu",
                items: [
                    { name: "Classic Cone Tiramisu", price: 89 },
                    { name: "Strawberry Cone Tiramisu", price: 99 },
                    { name: "Dragon Fruit Cone Tiramisu", price: 99 },
                    { name: "Litchi Cone Tiramisu", price: 99 },
                    { name: "Hazelnut Cone Tiramisu", price: 99 },
                ],
            },
        ],
    },
    {
        id: "tiramisu",
        label: "Tiramisu",
        sections: [
            {
                title: "Classic Tiramisu",
                items: [
                    { name: "Classic Tiramisu", price: 250 },
                    { name: "Mango Tiramisu", price: 350 },
                    { name: "Passionfruit Tiramisu", price: 320 },
                    { name: "Lychee Tiramisu", price: 350 },
                    { name: "Dragon Kiss Tiramisu", price: 300 },
                ],
            },
            {
                title: "Luxury Tiramisu",
                items: [
                    { name: "Marshmallow Tiramisu", price: 290 },
                    { name: "Hazelnut Tiramisu", price: 300 },
                    { name: "Ferrero Rocher Tiramisu", price: 400 },
                    { name: "Black Forest Tiramisu", price: 400 },
                ],
            },
            {
                title: "Desi Tiramisu",
                items: [
                    {
                        name: "Filter Kapi Tiramisu",
                        price: 400,
                        description: "A sophisticated fusion of South Indian Filter Coffee and classic tiramisu - creamy layers infused with rich, aromatic coffee, finished with a dusting of cocoa, and served traditionally on a banana leaf.",
                    },
                    {
                        name: "Palada Payasam Tiramisu",
                        price: 400,
                        description: "A Kerala classic reimagined — creamy tiramisu infused with the slow-cooked sweetness of traditional Palada Payasam. Heritage and indulgence in perfect harmony.",
                    },
                    {
                        name: "Rasmalai Tiramisu",
                        price: 400,
                        description: "An elegant fusion of East and West - delicate tiramisu layers in saffron-kissed milk, adorned with soft Rasmalai, pistachios, and our signature cream. A royal dessert reborn in Italian style.",
                    },
                ],
            },
            {
                title: "Add On",
                items: [
                    {
                        name: "Millionaire Tiramisu",
                        price: 120,
                        description: "Convert any flavor tiramisu into a Millionaire Tiramisu by adding just ₹120",
                    },
                    {
                        name: "Falooda",
                        price: 100,
                        description: "Convert any flavor tiramisu into Falooda by adding just ₹100",
                    },
                ],
            },
            {
                title: "Pup",
                items: [
                    {
                        name: "Pup Misu",
                        price: 200,
                        description: "A tail-wagging treat, crafted with love and 100% dog-safe ingredients. No caffeine, no chocolate - just pure happiness in every bite.",
                    },
                ],
            },
        ],
    },
    {
        id: "pizza",
        label: "Pizza",
        sections: [
            {
                title: "Pizza",
                items: [
                    {
                        name: "Citta De Gardenio",
                        price: 300,
                        description: "A celebration of fresh vegetables — colorful garden produce layered with creamy mozzarella on a traditional Italian crust.",
                    },
                    {
                        name: "Tandoori Chicken Pizza",
                        price: 300,
                        description: "Italian technique meets Indian spice — tandoori-marinated chicken on a crisp, thin Italian base with melted mozzarella.",
                    },
                    {
                        name: "Pollo Picante",
                        price: 300,
                        description: "Tender chicken with a hint of spice — layered with mozzarella and tomato on Italian-style pizza with a lively kick.",
                    },
                    {
                        name: "Mackerel & Rocket",
                        price: 550,
                        description: "Smoked mackerel with fresh arugula and a touch of citrus — a refined combination inspired by coastal Italian flavors.",
                    },
                    {
                        name: "Pepperoni",
                        price: 350,
                        description: "Authentic Italian pepperoni with melted mozzarella and rich tomato sauce — a classic with bold balanced flavor.",
                    },
                    {
                        name: "Margherita",
                        price: 280,
                        description: "The quintessential Italian pizza — fresh mozzarella, ripe tomatoes, and fragrant basil on a thin, crisp crust. Timeless and perfect.",
                    },
                ],
            },
        ],
    },
    {
        id: "pasta",
        label: "Pasta",
        sections: [
            {
                title: "Pasta",
                items: [
                    {
                        name: "Arrabbiata",
                        price: 220,
                        description: "A bold Italian favorite — spaghetti tossed in a spicy tomato sauce with garlic and chilli, simple yet vibrant.",
                    },
                    {
                        name: "Butter Chicken Pasta",
                        price: 220,
                        description: "A perfect East-meets-West creation — tender chicken in a buttery, flavorful sauce with al dente pasta.",
                    },
                    {
                        name: "Aglio E Olio Peperoncino",
                        price: 200,
                        description: "Simply perfected — spaghetti with garlic, chilli, and extra virgin olive oil, a true Italian staple.",
                    },
                    {
                        name: "Spaghetti In Chettinad Sauce",
                        price: 220,
                        description: "Fiery South Indian spices meet Italian pasta — a fusion of tradition and flavor in every bite.",
                    },
                    {
                        name: "Carbonara Mac ‘N’ Cheese",
                        price: 250,
                        description: "Italian classic meets creamy comfort — rich carbonara flavors layered with velvety macaroni.",
                    },
                    {
                        name: "Mac ‘N’ Cheese",
                        price: 220,
                        description: "Creamy, cheesy, and comforting — a timeless Italian-inspired indulgence.",
                    },
                    {
                        name: "Creamy Alfredo",
                        price: 220,
                        description: "Classic Italian elegance — fettuccine tossed in rich, creamy Alfredo sauce with a touch of parmesan.",
                    },
                ],
            },
        ],
    },
    {
        id: "tiramisu-milkshake",
        label: "Tiramisu Milkshake",
        sections: [
            {
                title: "Tiramisu Milkshake",
                items: [
                    { name: "Classic Tiramisu Milkshake", price: 300, description: "Sip the Italian classic — creamy tiramisu transformed into a luscious milkshake." },
                    { name: "Mango Tiramisu Milkshake", price: 400, description: "Sun-kissed mango meets velvety mascarpone — a tropical Italian indulgence." },
                    { name: "Ferrero Rocher Tiramisu Milkshake", price: 400, description: "Decadent layers of rich chocolate, hazelnut praline, and creamy mascarpone blended into a luxuriously smooth tiramisu milkshake — inspired by the iconic Ferrero Rocher." },
                ],
            },
        ],
    },
    {
        id: "coffee",
        label: "Coffee",
        sections: [
            {
                title: "Hot Coffee",
                items: [
                    { name: "Latte", price: 150, description: "Smooth, creamy, and perfectly balanced — a true Italian favorite." },
                    { name: "Cappuccino", price: 150, description: "Classic Italian espresso with frothy milk — rich and aromatic." },
                    { name: "Caffè Mocha", price: 150, description: "Chocolate and espresso in perfect harmony — indulgent yet elegant." },
                    { name: "Americano", price: 50, description: "Simple, smooth, and authentically Italian." },
                    { name: "Caramel Macchiato", price: 200, description: "Espresso layered with steamed milk and a touch of caramel." },
                    { name: "Spanish Latte", price: 160, description: "Rich, creamy, and sweet — a luxurious take on your everyday latte." },
                    { name: "Matcha Latte", price: 320, description: "Velvety Japanese matcha with steamed milk — an elegant fusion experience." },
                    { name: "V60 Pour Over", price: 250, description: "Expertly brewed, clean and aromatic — coffee at its finest." },
                ],
            },
            {
                title: "Cold Coffee",
                items: [
                    { name: "Cold Latte", price: 160, description: "Chilled, creamy, and refreshing — smooth Italian indulgence." },
                    { name: "Cold Cappuccino", price: 160, description: "Espresso and milk, perfectly chilled for a crisp, creamy sip." },
                    { name: "Cold Americano", price: 60, description: "Light, smooth, and invigorating." },
                    { name: "Cold Spanish Latte", price: 170, description: "Sweet, creamy, and generously chilled." },
                    { name: "Cold Matcha Latte", price: 260, description: "Refreshing and smooth — matcha perfection on ice." },
                    { name: "Iced V60 Pour Over", price: 260, description: "Clean, aromatic, and expertly brewed — iced Italian elegance." },
                    { name: "Luxe Midnight Brew", price: 320, description: "Bold, intense, and indulgent — coffee crafted for connoisseurs." },
                ],
            },
        ],
    },
    {
        id: "fresh-juices-and-smoothies",
        label: "Fresh Juices And Smoothies",
        sections: [
            {
                title: "Fresh Juices And Smoothies",
                items: [
                    { name: "Watermelon Juice", price: 69 },
                    { name: "Papaya Smoothie", price: 79 },
                    { name: "Mango Smoothie", price: 89 },
                    { name: "Strawberry Smoothie", price: 99 },
                    { name: "Orange Juice", price: 89 },
                    { name: "Lemonade", price: 55 },
                ],
            },
        ],
    },
    {
        id: "refreshers",
        label: "Refreshers",
        sections: [
            {
                title: "Refreshers",
                items: [
                    { name: "Strawberry Mojito", price: 59 },
                    { name: "Virgin Mojito", price: 49 },
                    { name: "Grape Mojito", price: 59 },
                    { name: "Watermelon Mojito", price: 59 },
                    { name: "Blue Lagoon", price: 59 },
                    { name: "Passion Fruit Cooler", price: 59 },
                ],
            },
        ],
    },
];
